'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Teaching } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  Clock
} from 'lucide-react';

export default function TeachingSection() {
  const [courses, setCourses] = useState<Teaching[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeaching = async () => {
      try {
        const data = await facultyApi.getTeaching();
        // Sort by year (most recent first) and then by semester
        const sorted = data.sort((a, b) => {
          if (a.year !== b.year) {
            return (b.year || 0) - (a.year || 0);
          }
          return (a.semester || '').localeCompare(b.semester || '');
        });
        setCourses(sorted);
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for teaching section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeaching();
  }, []);

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case 'undergraduate':
        return 'default';
      case 'graduate':
        return 'secondary';
      case 'postgraduate':
        return 'outline';
      default:
        return 'outline';
    }
  };



  if (loading) {
    return (
      <section id="teaching" className="section-padding bg-secondary/20">
        <div className="container-custom">
          <Skeleton className="h-12 w-64 mx-auto mb-16" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="h-48">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Placeholder data when no real data is available
  const placeholderCourses: Teaching[] = [
    {
      _id: 'course1',
      courseName: 'Compiler Design',
      courseCode: 'CS301',
      level: 'undergraduate' as const,
      semester: 'fall' as const,
      year: 2024,
      description: 'Introduction to compiler construction, lexical analysis, syntax analysis, semantic analysis, and code generation.'
    },
    {
      _id: 'course2',
      courseName: 'Computer Networks',
      courseCode: 'CS302',
      level: 'undergraduate' as const,
      semester: 'spring' as const,
      year: 2024,
      description: 'Fundamentals of computer networks, protocols, network architecture, and communication systems.'
    },
    {
      _id: 'course3',
      courseName: 'Advanced Computer Algorithms',
      courseCode: 'CS501',
      level: 'graduate' as const,
      semester: 'fall' as const,
      year: 2023,
      description: 'Advanced algorithmic techniques, complexity analysis, and optimization methods for complex computational problems.'
    },
    {
      _id: 'course4',
      courseName: 'Database Management Systems',
      courseCode: 'CS303',
      level: 'undergraduate' as const,
      semester: 'spring' as const,
      year: 2023,
      description: 'Database design, SQL, transaction management, concurrency control, and database administration.'
    },
    {
      _id: 'course5',
      courseName: 'Software Engineering',
      courseCode: 'CS304',
      level: 'undergraduate' as const,
      semester: 'fall' as const,
      year: 2023,
      description: 'Software development lifecycle, design patterns, testing methodologies, and project management.'
    },
    {
      _id: 'course6',
      courseName: 'Operating Systems',
      courseCode: 'CS305',
      level: 'undergraduate' as const,
      semester: 'spring' as const,
      year: 2022,
      description: 'Operating system principles, process management, memory management, file systems, and system calls.'
    }
  ];

  // Use real data if available, otherwise use placeholder
  const displayCourses = courses.length > 0 ? courses : placeholderCourses;

  if (error) {
    console.warn('API Error:', error);
  }

  // Group courses by year
  const coursesByYear = displayCourses.reduce((acc, course) => {
    const year = course.year || 'Unknown';
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(course);
    return acc;
  }, {} as Record<string | number, Teaching[]>);

  return (
    <section id="teaching" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Teaching</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Courses and academic instruction across various levels
          </p>
        </motion.div>

        {displayCourses.length > 0 ? (
          <div className="space-y-10">
            {Object.entries(coursesByYear)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([year, yearCourses]) => (
                <motion.div 
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-xl font-semibold text-slate-200">
                      Academic Year {year}
                    </h3>
                    <div className="flex-1 h-px bg-slate-700"></div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {yearCourses.map((course) => (
                      <motion.div
                        key={course._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
                      >
                        <div className="space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-200 leading-tight">
                                {course.courseName}
                              </h4>
                              {course.courseCode && (
                                <p className="text-sm text-primary font-mono mt-1">
                                  {course.courseCode}
                                </p>
                              )}
                            </div>
                            <Badge variant={getLevelBadgeVariant(course.level)} className="text-xs">
                              {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
                            </Badge>
                          </div>

                          {course.description && (
                            <p className="text-sm text-slate-400 leading-relaxed">
                              {course.description}
                            </p>
                          )}

                          <div className="flex items-center justify-between text-sm text-slate-500 pt-3 border-t border-slate-700">
                            {course.semester && (
                              <span className="capitalize">
                                {course.semester} Semester
                              </span>
                            )}
                            <span>{course.year}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">Teaching information will be displayed here</p>
          </div>
        )}
      </div>
    </section>
  );
}
