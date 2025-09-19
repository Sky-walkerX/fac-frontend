'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Building2,
  Clock,
  DollarSign,
  User,
} from 'lucide-react';

const placeholderProjects: Project[] = [
  {
    _id: 'proj1',
    title: 'AI Based Real Time Detection of Air Pollution and Prediction of Clean Air amidst Crop Residue Burning in Uttar Pradesh',
    description: 'An AI-based system for real-time air pollution detection and clean air prediction during crop residue burning in Western Uttar Pradesh.',
    fundingAgency: 'CSTUP, Uttar Pradesh',
    duration: '3 Years (2024)',
    budget: '₹17.58 Lakh',
    role: 'PI',
    status: 'ongoing',
    startYear: 2024,
    endYear: 2027,
  },
  {
    _id: 'proj2',
    title: 'Phytoinspired Advanced Nanomaterials from Agro-industrial Residues and Wastewater Treatment',
    description: 'Developing advanced nanomaterials from agro-industrial residues for wastewater treatment.',
    fundingAgency: 'CSTUP, Uttar Pradesh',
    duration: '3 Years (2024)',
    budget: '₹15.36 Lakh',
    role: 'Co-PI',
    status: 'ongoing',
    startYear: 2024,
    endYear: 2027,
  },
  {
    _id: 'proj3',
    title: 'Automated Supporting Document Generation for GST Notices for Department of Commercial Taxes',
    description: 'Automating the generation of supporting documents for GST notices for the Department of Commercial Taxes.',
    fundingAgency: 'CSTUP, Uttar Pradesh',
    duration: '1 Year (2023-24)',
    budget: '₹19 Lakh',
    role: 'Coordinator',
    status: 'completed',
    startYear: 2023,
    endYear: 2024,
  },
  {
    _id: 'proj4',
    title: 'Guru (Mod Guru) *MOD=Modern Guru',
    description: 'A classroom quiz Android application to modernize teaching with technology. It works on a peer-to-peer network and requires minimal Wi-Fi support. Awarded 1st prize at the university project competition with a cash reward of ₹10,000.',
    fundingAgency: 'Maharaja Agrasen Institute of Technology, Delhi',
    duration: '2 Months (2013)',
    budget: 'N/A',
    role: 'Developer',
    status: 'completed',
    startYear: 2013,
    endYear: 2013,
  },
  {
    _id: 'proj5',
    title: 'Attendance Management System (on Java)',
    description: 'Software to replace manual attendance marking at the CIPA branch at NIC. It computes monthly attendance and generates reports using Jasper Reports.',
    fundingAgency: 'National Informatics Centre, Delhi',
    duration: '6 Weeks (2012)',
    budget: 'N/A',
    role: 'Developer',
    status: 'completed',
    startYear: 2012,
    endYear: 2012,
  },
  {
    _id: 'proj6',
    title: 'Linux Remastering',
    description: 'A fully customized Linux distribution created based on specific needs.',
    fundingAgency: 'National Informatics Centre, Delhi',
    duration: '6 Weeks (2011)',
    budget: 'N/A',
    role: 'Developer',
    status: 'completed',
    startYear: 2011,
    endYear: 2011,
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await facultyApi.getProjects();
        setProjects(data);
      } catch (err) {
        console.warn('API fetch failed, using placeholder data for projects section:', err);
        setProjects(placeholderProjects);
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

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12 text-white"
        >
          Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {loading
            ? [...Array(3)].map((_, i) => (
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
              ))
            : projects.map((project, i) => (
                <motion.div
                  key={project._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-transparent border-slate-800 hover:border-primary/50 transition-colors duration-300 h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-white">{project.title}</CardTitle>
                      <Badge
                        variant={getStatusBadgeVariant(project.status)}
                        className="w-fit"
                      >
                        {project.status}
                      </Badge>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-300">
                          <Building2 className="h-4 w-4 mr-2 text-primary" />
                          <strong>Funding:</strong>&nbsp;{project.fundingAgency}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <DollarSign className="h-4 w-4 mr-2 text-primary" />
                          <strong>Budget:</strong>&nbsp;{project.budget}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <Clock className="h-4 w-4 mr-2 text-primary" />
                          <strong>Duration:</strong>&nbsp;{project.duration}
                        </div>
                        <div className="flex items-center text-gray-300">
                          <User className="h-4 w-4 mr-2 text-primary" />
                          <strong>Role:</strong>&nbsp;{project.role}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
        </div>
      </div>
    </section>
  );
}
