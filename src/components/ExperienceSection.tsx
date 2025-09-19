'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

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

  return (
    <section id="experience" className="py-20 bg-background">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors flex flex-col h-full"
            >
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{exp.title}</h3>
                <p className="text-sm text-slate-400 mb-2">{exp.company}</p>
                {exp.description && (
                  <p className="text-sm text-slate-500">{exp.description}</p>
                )}
              </div>
              <div className="mt-auto pt-4 border-t border-slate-700 flex items-center text-sm text-slate-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{exp.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;