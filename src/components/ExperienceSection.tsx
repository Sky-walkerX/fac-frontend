'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const experiences = [
  {
    title: 'Deputy Registrar',
    company: 'IIIT Lucknow',
    date: 'Sep 2023 – Present',
  },
  {
    title: 'Faculty In-Charge (Training & Placements)',
    company: 'IIIT Lucknow',
    date: 'Sep 2023 – Present',
  },
  {
    title: 'Faculty In-Charge (Student Activity)',
    company: 'IIIT Lucknow',
    date: 'Mar 2022 – Present',
  },
  {
    title: 'Chairman, Disciplinary Committee',
    company: 'IIIT Lucknow',
    date: 'Sep 2022 – Present',
  },
  {
    title: 'Assistant Professor',
    company: 'IIIT Lucknow',
    date: 'Dec 2021 – Present',
    description: 'Department of Information Technology.',
  },
  {
    title: 'Guest Faculty',
    company: 'Ramanujan College, DU',
    date: 'Jan 2021 – Dec 2022',
    description: 'Department of B.Voc (Software Development).',
  },
  {
    title: 'Convener, Ramanujan Consultancy Club',
    company: 'Ramanujan College',
    date: 'Sep 2021 – Dec 2021',
  },
  {
    title: 'Convener, CELECT, Placement Cell, B.Voc Dept.',
    company: 'Ramanujan College',
    date: 'Jun 2021 – Dec 2021',
  },
  {
    title: 'Member, Departmental NAAC Committee, B.Voc Dept.',
    company: 'Ramanujan College',
    date: 'Jun 2021 – Dec 2021',
  },
  {
    title: 'Guest Faculty',
    company: 'Jesus and Mary College, DU',
    date: 'Dec 2020 – Dec 2022',
    description: 'Department of Computer Science.',
  },
  {
    title: 'Guest Faculty',
    company: 'PGDAV College, DU',
    date: 'Feb 2020 – May 2020',
    description: 'Department of Computer Science.',
  },
  {
    title: 'Probationary Engineer',
    company: 'Bharat Electronics Limited (BEL), Bengaluru',
    date: 'Apr 2015 – Jun 2015',
    description: 'Worked in Naval Dept. on indigenous tracker processor for submarines.',
  },
  {
    title: 'Software Engineer',
    company: 'HCL Technologies, Noida',
    date: 'May 2014 – May 2014',
    description: 'Worked in OEM Division.',
  },
];

const ExperienceSection = () => {
  // Helper to convert date strings to Date objects for sorting
  const parseDate = (dateStr: string) => {
    const [start, end] = dateStr.split(' – ');
    if (end === 'Present') {
      return new Date();
    }
    return new Date(end);
  };

  const sortedExperiences = [...experiences].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

  // Transform experiences data for Timeline component
  const timelineData = sortedExperiences.map((exp) => ({
    title: exp.date,
    content: (
      <div className="pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-slate-600/50 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-2 bg-slate-700/50 rounded-lg">
              <Briefcase className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-slate-100 mb-2">
                {exp.title}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span className="text-slate-300 font-medium">{exp.company}</span>
              </div>
              {exp.description && (
                <p className="text-slate-400 leading-relaxed mb-3">
                  {exp.description}
                </p>
              )}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Calendar className="w-4 h-4" />
                <span>{exp.date}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  }));

  return (
    <section id="experience" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Experience & Roles</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A timeline of my professional career and key responsibilities.
          </p>
        </motion.div>
        
        <Timeline data={timelineData} />
      </div>
    </section>
  );
};

export default ExperienceSection;