'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Supervision } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Users, 
  Calendar, 
  GraduationCap, 
  User,
  FileText,
  Clock
} from 'lucide-react';

export default function SupervisionSection() {
  const [supervisions, setSupervisions] = useState<Supervision[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSupervision = async () => {
      try {
        const data = await facultyApi.getSupervision();
        // Sort by status (ongoing first) and then by start year (most recent first)
        const sorted = data.sort((a, b) => {
          if (a.status !== b.status) {
            if (a.status === 'ongoing') return -1;
            if (b.status === 'ongoing') return 1;
            if (a.status === 'continuing') return -1;
            if (b.status === 'continuing') return 1;
          }
          return (b.startYear || 0) - (a.startYear || 0);
        });
        setSupervisions(sorted);
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for supervision section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSupervision();
  }, []);

  const getLevelBadgeVariant = (level: string) => {
    switch (level) {
      case 'phd':
        return 'default';
      case 'mtech':
      case 'msc':
        return 'secondary';
      case 'btech':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'default';
      case 'continuing':
        return 'secondary';
      case 'completed':
        return 'outline';
      default:
        return 'outline';
    }
  };

  const formatLevel = (level: string) => {
    switch (level) {
      case 'phd':
        return 'Ph.D';
      case 'mtech':
        return 'M.Tech';
      case 'msc':
        return 'M.Sc';
      case 'btech':
        return 'B.Tech';
      default:
        return level.toUpperCase();
    }
  };

  // Placeholder data when no real data is available
  const placeholderSupervisions: Supervision[] = [
    {
      _id: 'sup1',
      studentName: 'Kiran Tanwar',
      level: 'phd',
      title: 'Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks',
      status: 'ongoing',
      startYear: 2022,
      endYear: undefined
    },
    {
      _id: 'sup2',
      studentName: 'Akash Warade',
      level: 'phd',
      title: 'Improved 3D DV-Hop Algorithm Using Scatteredness Between Beacon Nodes',
      status: 'ongoing',
      startYear: 2023,
      endYear: undefined
    },
    {
      _id: 'sup3',
      studentName: 'Research Scholar 1',
      level: 'mtech',
      title: 'IoT-based Environmental Monitoring and Data Analytics',
      status: 'ongoing',
      startYear: 2024,
      endYear: undefined
    },
    {
      _id: 'sup4',
      studentName: 'Research Scholar 2',
      level: 'mtech',
      title: 'Machine Learning Applications in Wireless Sensor Networks',
      status: 'ongoing',
      startYear: 2024,
      endYear: undefined
    },
    {
      _id: 'sup5',
      studentName: 'Graduate Student 1',
      level: 'btech',
      title: 'Smart Agriculture Monitoring System using WSN',
      status: 'completed',
      startYear: 2023,
      endYear: 2024
    },
    {
      _id: 'sup6',
      studentName: 'Graduate Student 2',
      level: 'btech',
      title: 'Real-time Air Quality Monitoring using IoT',
      status: 'completed',
      startYear: 2023,
      endYear: 2024
    }
  ];

  // Use real data if available, otherwise use placeholder
  const displaySupervisions = supervisions.length > 0 ? supervisions : placeholderSupervisions;

  if (error) {
    console.warn('API Error:', error);
  }

  // Group supervisions by status
  const supervisionsByStatus = displaySupervisions.reduce((acc, supervision) => {
    const status = supervision.status || 'unknown';
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(supervision);
    return acc;
  }, {} as Record<string, Supervision[]>);

  if (loading) {
    return (
      <section id="supervision" className="section-padding">
        <div className="container-custom">
          <Skeleton className="h-12 w-64 mx-auto mb-16" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border border-slate-700 rounded-lg p-6">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="supervision" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Student Supervision</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Thesis and project supervision across academic levels
          </p>
        </motion.div>

        {displaySupervisions.length > 0 ? (
          <div className="space-y-10">
            {Object.entries(supervisionsByStatus)
              .sort(([a], [b]) => {
                const order = { ongoing: 0, continuing: 1, completed: 2 };
                return (order[a as keyof typeof order] || 3) - (order[b as keyof typeof order] || 3);
              })
              .map(([status, statusSupervisions]) => (
                <motion.div
                  key={status}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-xl font-semibold text-slate-200 capitalize">
                      {status} Supervision ({statusSupervisions.length})
                    </h3>
                    <div className="flex-1 h-px bg-slate-700"></div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {statusSupervisions.map((supervision) => (
                      <motion.div
                        key={supervision._id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors flex flex-col h-full"
                      >
                        {/* Header Section - Fixed */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                              <User className="h-4 w-4 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-slate-200 leading-tight">
                                {supervision.studentName}
                              </h4>
                              <div className="flex flex-wrap gap-2 mt-2">
                                <Badge variant={getLevelBadgeVariant(supervision.level)} className="text-xs">
                                  {formatLevel(supervision.level)}
                                </Badge>
                                <Badge variant={getStatusBadgeVariant(supervision.status)} className="text-xs">
                                  {supervision.status.charAt(0).toUpperCase() + supervision.status.slice(1)}
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Thesis Title - Flexible */}
                        <div className="flex-1 mb-4">
                          {supervision.title ? (
                            <div className="bg-slate-800/30 rounded-lg p-4 h-full">
                              <div className="flex items-start gap-2">
                                <FileText className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs font-medium text-slate-400 mb-1">Thesis Title</p>
                                  <p className="text-sm text-slate-300 leading-relaxed">
                                    {supervision.title}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="h-20 bg-slate-800/10 rounded-lg flex items-center justify-center">
                              <span className="text-xs text-slate-500">No thesis title available</span>
                            </div>
                          )}
                        </div>

                        {/* Footer - Fixed at bottom */}
                        <div className="mt-auto">
                          <div className="flex items-center justify-between text-sm text-slate-500 pt-3 border-t border-slate-700">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                              <span className="text-xs">
                                {supervision.startYear}
                                {supervision.endYear && supervision.endYear !== supervision.startYear
                                  ? ` - ${supervision.endYear}`
                                  : supervision.status === 'ongoing'
                                  ? ' - Present'
                                  : ''
                                }
                              </span>
                            </div>
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
            <p className="text-slate-400">Supervision information will be displayed here</p>
          </div>
        )}
      </div>
    </section>
  );
}
