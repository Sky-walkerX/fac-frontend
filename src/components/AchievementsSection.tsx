'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Mic, Users, Star, Book, Briefcase, Link as LinkIcon } from 'lucide-react';

const achievements = [
  {
    icon: <Book className="w-5 h-5 text-blue-400" />,
    text: 'Published a newspaper article with Economic Times titled: “When algorithms misfire: Lessons from AI-intensive business failures“ on 3rd July, 2025.',
    link: 'https://government.economictimes.indiatimes.com/blog/navigating-ai-failures-keylessons-for-tech-firms/122220958?utm_source=latest_news&utm_medium=homepage'
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Invited for an Expert Lecture in One-day Seminar on "Artificial intelligence: Opportunities and Challenges for the Future" on 28 March 2025 at BBAU, Lucknow, UP.',
  },
  {
    icon: <Users className="w-5 h-5 text-green-400" />,
    text: 'Technical Session Chair at 3rd IEEE International Conference on Device Intelligence, Computing and Communication Technologies (DICCT-2025)” from March 21-22, 2025, by Department of Electronics & Communication Engineering, Graphic Era (Deemed to be University).',
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Keynote Speaker at IEEE sponsored 2nd International Conference on Communication, Computer Sciences and Engineering (IC3SE-2025) from March 19th-21st, 2025 at Amity University, Greater Noida, India.',
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Invited for Expert Talk on Blockchain and its futures in the 05-days Faculty Updation Program on "Cryptography for Information Security" to be held during 07-11 March, 2025, sponsored by the ISEA-III Project, MeitY, Govt. of India.',
  },
  {
    icon: <Users className="w-5 h-5 text-green-400" />,
    text: 'Technical Session Chair at the 1st International Conference on Advances in Computer Science, Electrical, Electronics, and Communication Technologies (CE2CT-2025), scheduled for February 21-22, 2025, at GEHU Bhimtal Campus, Nainital, Uttarakhand, India (IEEE Conference Record #64011) CE2CT-2025.',
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Keynote Speaker at IEEE-sponsored 7th International Conference on Contemporary Computing and Informatics(IC3I) at Amity University, Greater Noida, September, 2024.',
  },
  {
    icon: <Users className="w-5 h-5 text-green-400" />,
    text: 'Technical Session Chair at IEEE-sponsored International Conference on Signal Processing and Advanced Research in Computing (SPARC-2024) at Amity University, Lucknow, September, 2024.',
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Delivered a guest lecture on the topic " Opportunities Challenges, & the Support system for starting AI related start-ups in India” at Ministry of MSME-sponsored five-day Advanced Entrepreneurial Skill Development Program (ESDP), 2023-2024, on Artificial Intelligence January 15th-19th, 2024.',
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Delivered a guest lecture on Indian Support System for ICT, AI/ML, IOT related Agri-Tech Start-Ups, forecasting future challenges and opportunities, sponsored by Ministry of MSME-sponsored five-day Advanced Entrepreneurial Skill Development Program (ESDP), 2023-2024, on the Agri Technology is scheduled to be held on the March 2024 4th-8th, 2024.',
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Delivered a guest lecture at UPCST on “Artificial Intelligence and Mobile Communications” on National Technology Day, 8th May, 2024.',
  },
  {
    icon: <Mic className="w-5 h-5 text-blue-400" />,
    text: 'Delivered a guest lecture on “Recent and Evergreen Research Trends in Databases and Wireless Sensor Networks”, Organized by Siksha \'O\' Anusandhan Deemed to be University, Bhubaneswar, Odisha (Online), on 5th November, 2022.',
  },
  {
    icon: <Users className="w-5 h-5 text-green-400" />,
    text: 'Member organizing Committee of International Conference on Signal, Networks, Computing and Systems (ICSNCS-2016) at JNU, New Delhi.',
  },
  {
    icon: <Users className="w-5 h-5 text-green-400" />,
    text: 'Participated in International Research Workshop on Cloud Computing RWCC-2014 at JNU, New Delhi.',
  },
  {
    icon: <Briefcase className="w-5 h-5 text-yellow-400" />,
    text: 'Appeared for BARC Scientist Interview after qualifying the written Examination (2014).',
  },
  {
    icon: <Award className="w-5 h-5 text-yellow-400" />,
    text: 'Won first prize with a cash prize of Ten thousand rupees at intra university Project competition for creating an application (|GURU|) for android platform (2013).',
  },
  {
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    text: 'Participated in a two weekends ISTE Workshop on Aakash Android Application Programming conducted by IIT, Bombay (under National Mission on Education through ICT, MHRD).',
  },
  {
    icon: <Users className="w-5 h-5 text-green-400" />,
    text: 'Worked for college fest in various committees (Techsurge & Mridang 2010).',
  },
  {
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    text: 'Represented school in Mathematics Crusade (2008).',
  },
  {
    icon: <Award className="w-5 h-5 text-yellow-400" />,
    text: 'Won several awards in the field of Acting and Drama (2005-2009).',
  },
  {
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    text: 'Secured second school rank in class XI in international science Olympiad (2008).',
  },
  {
    icon: <Award className="w-5 h-5 text-yellow-400" />,
    text: 'Merit certificate and cash reward from Hindi Academy (2007) for scoring 85% marks in Hindi in class Tenth.',
  },
  {
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    text: 'Represented school for young scientist challenge (2007).',
  },
  {
    icon: <Star className="w-5 h-5 text-yellow-400" />,
    text: 'Performed a street play at British Council (Beyond the Borders, 2005).',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-100">Achievements</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A summary of my key accomplishments and recognitions.
          </p>
        </motion.div>
        <div className="max-w-3xl mx-auto">
          <ul className="space-y-6">
            {achievements.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-slate-300 leading-relaxed">
                  {item.text}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:underline ml-2">
                      <LinkIcon className="w-3 h-3 mr-1" />
                      Read more
                    </a>
                  )}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;