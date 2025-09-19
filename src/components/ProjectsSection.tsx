'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import {
  Briefcase,
  DollarSign,
  Calendar,
  User,
  Building2,
  Clock,
  ArrowRight,
} from 'lucide-react';

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await facultyApi.getProjects();
        setProjects(data);
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for projects section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getStatusBadgeVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'ongoing':
        return 'default';
      case 'completed':
        return 'secondary';
      case 'proposed':
        return 'outline';
      default:
        return 'outline';
    }
  };

  if (loading) {
    return (
      <section id="projects" className="section-padding bg-background">
        <div className="container-custom">
          <Skeleton className="h-12 w-64 mx-auto mb-16" />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="bg-card/50 rounded-xl shadow-lg">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                  <div className="mt-4 space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-32" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const placeholderProjects = [
    {
      _id: 'proj1',
      title: 'AI Based Real-Time Detection of Air Pollution and Prediction of Clean Air amidst Crop Residue Burning',
      description: 'Development of an AI-powered system for real-time air pollution monitoring and prediction, specifically focusing on crop residue burning in Uttar Pradesh.',
      fundingAgency: 'CSTUP, Uttar Pradesh',
      duration: '3 Years',
      budget: '₹17.58 Lakh',
      role: 'PI',
      status: 'ongoing',
      startYear: 2024,
      endYear: 2027,
      image: null,
    },
    {
      _id: 'proj2',
      title: 'Phytoinspired Advanced Nanomaterials from Agro-industrial Residues for Wastewater Treatment',
      description: 'Research on developing advanced nanomaterials from agricultural waste for environmental applications and wastewater treatment solutions.',
      fundingAgency: 'CSTUP, Uttar Pradesh',
      duration: '3 Years',
      budget: '₹15.36 Lakh',
      role: 'Co-PI',
      status: 'ongoing',
      startYear: 2024,
      endYear: 2027,
      image: null,
    },
    {
      _id: 'proj3',
      title: 'Automated Supporting Document Generation for GST Notices',
      description: 'Development of automated systems for generating supporting documents related to GST notices, streamlining tax compliance processes.',
      fundingAgency: 'CSTUP, Uttar Pradesh',
      duration: '1 Year',
      budget: '₹19 Lakh',
      role: 'Coordinator',
      status: 'completed',
      startYear: 2023,
      endYear: 2024,
      image: null,
    },
    {
      _id: 'proj4',
      title: '|GURU| (MOD GURU: Modern Guru)',
      description: 'Android classroom quiz application developed for peer-to-peer learning with Wi-Fi enabled devices. Awarded 1st Prize at University Project Competition with ₹10,000 cash reward.',
      fundingAgency: 'Maharaja Agrasen Institute of Technology, Delhi',
      duration: '1 Year',
      budget: '₹10,000 Prize',
      role: 'Developer',
      status: 'completed',
      startYear: 2013,
      endYear: 2013,
      image: null,
    },
  ];

  const displayProjects = projects.length > 0 ? projects : placeholderProjects;

  if (error) {
    console.warn('API Error:', error);
  }

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">Research Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Funded research initiatives and collaborative endeavors
          </p>
        </motion.div>

        {displayProjects.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors flex flex-col h-full"
              >
                {/* Header Section - Fixed */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h3 className="font-semibold text-slate-200 leading-tight flex-1 min-h-[3rem]">
                    {project.title}
                  </h3>
                  <Badge variant={getStatusBadgeVariant(project.status)} className="text-xs flex-shrink-0">
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </Badge>
                </div>
                
                {/* Role Badge - Fixed */}
                <div className="mb-4">
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.role}
                  </Badge>
                </div>
                
                {/* Description - Flexible */}
                <div className="flex-1 mb-4">
                  {project.description ? (
                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  ) : (
                    <div className="h-16"></div>
                  )}
                </div>
                
                {/* Footer Section - Fixed at bottom */}
                <div className="mt-auto">
                  <div className="space-y-3 text-sm text-slate-400 border-t border-slate-700 pt-4">
                    {/* Funding Agency */}
                    <div className="min-h-[1.25rem]">
                      {project.fundingAgency && (
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="truncate">{project.fundingAgency}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Budget and Duration - Always aligned */}
                    <div className="grid grid-cols-2 gap-2 min-h-[1.25rem]">
                      <div className="flex items-center gap-2">
                        {project.budget ? (
                          <>
                            <DollarSign className="h-4 w-4 text-green-400 flex-shrink-0" />
                            <span className="text-green-400 font-medium text-xs truncate">{project.budget}</span>
                          </>
                        ) : (
                          <div className="opacity-0">-</div>
                        )}
                      </div>
                      <div className="flex items-center gap-2 justify-end">
                        {project.duration ? (
                          <>
                            <Clock className="h-4 w-4 text-purple-400 flex-shrink-0" />
                            <span className="text-xs truncate">{project.duration}</span>
                          </>
                        ) : (
                          <div className="opacity-0">-</div>
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
            <p className="text-slate-400">Research projects will be displayed here</p>
          </div>
        )}
      </div>
    </section>
  );
}
