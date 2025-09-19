'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, ExternalLink } from 'lucide-react';

const conferences = [
  {
    title: 'Enhanced Three-Dimensional DV-Hop Algorithm.',
    authors: 'Kaushik A., Lobiyal D.K.',
    conference: 'In: Tuba M., Akashe S., Joshi A. (eds) ICT Systems and Sustainability. Advances in Intelligent Systems and Computing, vol 1270. Springer, Singapore',
    year: 2021,
    doi: 'https://doi.org/10.1007/978-981-15-8289-9_25',
  },
  {
    title: 'Localization in Wireless Sensor Networks using a Mobile Anchor and Subordinate Node.',
    authors: 'Kaushik A., Lobiyal D.K.',
    conference: 'Lecture Notes in Computer Networks, Springer.',
    year: 2021,
    doi: 'https://doi.org/10.1007/978-981-33-6173-7_12',
  },
  {
    title: 'Multiple Hole Detection in Wireless Underground Sensor Networks.',
    authors: 'Kaushik A.',
    conference: 'In: Proceedings of ICCCS 2018 (Communication and Computing Systems), CRC Press, 2019.',
    year: 2019,
    doi: 'https://doi.org/10.1201/9780429444272',
  },
];

const ConferencesSection = () => {
  return (
    <section id="conferences" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Conference Publications</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My contributions to academic conferences.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {conferences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-800/20 backdrop-blur-md border border-slate-700/60 rounded-xl p-6 hover:border-primary/40 hover:bg-slate-800/90 transition-all duration-300 flex flex-col h-full shadow-xl"
            >
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-slate-100 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 mb-4">{item.authors}</p>
                <div className="flex items-center text-sm text-slate-300 mb-4">
                  <Users className="w-4 h-4 mr-2 text-green-400" />
                  <span className="italic">{item.conference}</span>
                </div>
              </div>

              <div className="mt-auto pt-4 border-t border-slate-600/50 flex justify-between items-center text-sm text-slate-400">
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

export default ConferencesSection;