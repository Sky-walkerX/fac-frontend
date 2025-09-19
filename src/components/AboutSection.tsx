'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { About } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function AboutSection() {
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await facultyApi.getAbout();
        if (data.length > 0) {
          setAbout(data[0]);
        }
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for about section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  if (loading) {
    return (
      <section id="about" className="section-padding bg-secondary/20">
        <div className="container-custom">
          <Skeleton className="h-12 w-64 mx-auto mb-16" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="h-48 bg-card/50 rounded-xl">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const placeholderData = {
    qualifications: [
      {
        qualification: 'Ph.D (Computer Science)',
        university: 'Jawaharlal Nehru University, New Delhi',
        year: '2021',
        percentage: 'Qualified June 2021',
      },
      {
        qualification: 'M.Tech (Computer Science and Engineering)',
        university: 'Jawaharlal Nehru University, New Delhi',
        year: '2016',
        percentage: '85%',
      },
      {
        qualification: 'B.Tech (Computer Science and Engineering)',
        university: 'GGSIPU, Delhi',
        year: '2013',
        percentage: '73%',
      },
      {
        qualification: 'National Eligibility Test (NET)',
        university: 'UGC-NTA',
        year: '2019',
        percentage: 'Qualified',
      },
      {
        qualification: 'A.I.S.S.C.E (CBSE)',
        university: 'CBSE Board',
        year: '2009',
        percentage: '88%',
      },
      {
        qualification: 'A.I.S.S.E (CBSE)',
        university: 'CBSE Board',
        year: '2007',
        percentage: '87%',
      },
    ],
  };

  const displayData = about || placeholderData;

  if (error) {
    console.warn('API Error:', error);
  }

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Educational Qualifications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Academic journey and professional development
          </p>
        </motion.div>

        {displayData.qualifications && displayData.qualifications.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayData.qualifications.map((qual, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors flex flex-col h-full"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0 flex flex-col">
                    {/* Title - Fixed */}
                    <h3 className="font-semibold text-slate-200 leading-tight min-h-[2.5rem]">
                      {qual.qualification}
                    </h3>
                    
                    {/* University - Flexible */}
                    <div className="flex-1">
                      <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                        {qual.university}
                      </p>
                    </div>
                    
                    {/* Footer - Fixed at bottom */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-700">
                      <span className="text-sm text-slate-500">{qual.year}</span>
                      <div className="min-w-[3rem] text-right">
                        {qual.percentage ? (
                          <span className="text-sm font-medium text-primary">
                            {qual.percentage}
                          </span>
                        ) : (
                          <div className="opacity-0 text-sm">-</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-400">Academic information will be displayed here</p>
          </div>
        )}
      </div>
    </section>
  );
}
