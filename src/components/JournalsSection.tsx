'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, ExternalLink } from 'lucide-react';

const journals = [
  {
    title: 'TAGA-FLEACH: Energy-efficient and secure clustering in WSNs using trust-aware GA-FLEACH with dead-hole monitoring.',
    authors: 'Shakya A., Kaushik A.',
    journal: 'Ad Hoc Networks, Vol. 178, 103990',
    year: 2025,
    doi: 'https://doi.org/10.1016/j.adhoc.2025.103990',
  },
  {
    title: 'Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks.',
    authors: 'Tanwar K., Kaushik A.',
    journal: 'Peer-To-Peer Networking and Applications, 18, 246',
    year: 2025,
    doi: 'https://doi.org/10.1007/s12083-025-02026-4',
  },
  {
    title: 'Improved 3D DV-Hop Algorithm Using scatteredness Between Beacon nodes for Calculation of the hopsize for Stochastic WSNs.',
    authors: 'Warade A., Kaushik A.',
    journal: 'Physica Scripta',
    year: 2025,
    doi: 'https://doi.org/10.1088/1402%2d4896/Ade8b7',
  },
  {
    title: 'A Comparative Study and Survey of Chain-Based Routing Protocols in WSNs.',
    authors: 'Verma R.K., Jain S., Kaushik A.',
    journal: 'Journal of Supercomputing, 81, 1076',
    year: 2025,
    doi: 'https://doi.org/10.1007/S11227-025-07412-6',
  },
  {
    title: 'Three-Dimensional DV-Hop Based on Improved Adaptive Differential Evolution Algorithm.',
    authors: 'Mani V., Kaushik A.',
    journal: 'Journal of Supercomputing',
    year: 2024,
    doi: 'https://doi.org/10.1007/S11227-024-06432-Y',
  },
  {
    title: 'Improved 3-Dimensional DV-Hop Localization Algorithm based on Information of Nearby Nodes.',
    authors: 'Kaushik A., Lobiyal D.K., Kumar S.',
    journal: 'Wireless Networks',
    year: 2021,
    doi: 'https://doi.org/10.1007/s11276-020-02533-7',
  },
  {
    title: 'Localization in Mobile WSNs using Drones.',
    authors: 'Kaushik A., Lobiyal D.K.',
    journal: 'Transactions on Emerging Telecommunication Technologies, e4213',
    year: 2021,
    doi: 'https://doi.org/10.1002/ett.4213',
  },
];

const JournalsSection = () => {
  return (
    <section id="journals" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Journal Publications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A selection of my published research in academic journals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {journals.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors flex flex-col h-full"
            >
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 mb-4">{item.authors}</p>
                <div className="flex items-center text-sm text-slate-400 mb-4">
                  <BookOpen className="w-4 h-4 mr-2 text-slate-500" />
                  <span className="italic">{item.journal}</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-700 flex justify-between items-center text-sm text-slate-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.year}</span>
                </div>
                <a
                  href={item.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:underline"
                >
                  DOI <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalsSection;
