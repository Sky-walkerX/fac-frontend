'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Wrench, BookOpen, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Skeleton } from '@/components/ui/skeleton';
import { getTechnicalSkills } from '@/lib/api';
import { TechnicalSkills } from '@/types';

const categoryIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  'Programming Languages': Code,
  'Frameworks': Wrench,
  'Databases': Database,
  'Cloud Platforms': Cloud,
  'Machine Learning': Cpu,
  'Development Tools': Wrench,
  'Operating Systems': Cpu,
  'Research Tools': BookOpen,
  'Other': Star
};

export default function TechnicalSkillsSection() {
  const [skills, setSkills] = useState<TechnicalSkills | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getTechnicalSkills();
      setSkills(data);
    } catch (err) {
      setError('Failed to fetch technical skills data');
      console.error('Error fetching skills:', err);
    } finally {
      setLoading(false);
    }
  };

  const getProficiencyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 'text-green-400';
      case 'advanced':
        return 'text-blue-400';
      case 'intermediate':
        return 'text-yellow-400';
      case 'beginner':
        return 'text-orange-400';
      default:
        return 'text-slate-400';
    }
  };

  const getProficiencyValue = (level: string) => {
    switch (level.toLowerCase()) {
      case 'expert':
        return 95;
      case 'advanced':
        return 80;
      case 'intermediate':
        return 60;
      case 'beginner':
        return 30;
      default:
        return 0;
    }
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Programming Languages': 'bg-blue-600/20 text-blue-400 border-blue-500/50',
      'Frameworks': 'bg-green-600/20 text-green-400 border-green-500/50',
      'Databases': 'bg-purple-600/20 text-purple-400 border-purple-500/50',
      'Cloud Platforms': 'bg-orange-600/20 text-orange-400 border-orange-500/50',
      'Machine Learning': 'bg-red-600/20 text-red-400 border-red-500/50',
      'Development Tools': 'bg-yellow-600/20 text-yellow-400 border-yellow-500/50',
      'Operating Systems': 'bg-indigo-600/20 text-indigo-400 border-indigo-500/50',
      'Research Tools': 'bg-pink-600/20 text-pink-400 border-pink-500/50',
      'Other': 'bg-slate-600/20 text-slate-400 border-slate-500/50'
    };
    return colors[category] || colors['Other'];
  };

  if (error) {
    return (
      <section id="skills" className="py-20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <p className="text-slate-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  if (loading || !skills) {
    return (
      <section id="skills" className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comprehensive overview of technical competencies and expertise areas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-slate-800/30 rounded-lg p-6">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-3">
                  {[...Array(4)].map((_, j) => (
                    <div key={j}>
                      <Skeleton className="h-4 w-20 mb-2" />
                      <Skeleton className="h-2 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const categories = Object.keys(skills.categories);
  const totalSkills = categories.reduce(
    (sum, category) => sum + skills.categories[category].length, 
    0
  );

  return (
    <section id="skills" className="py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive overview of technical competencies, programming languages, frameworks, and tools used in research and development.
          </p>
        </motion.div>

        {/* Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-slate-800/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{totalSkills}</div>
            <div className="text-sm text-slate-400">Total Skills</div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-green-400">
              {Object.values(skills.categories).flat().filter(skill => skill.proficiency === 'Expert').length}
            </div>
            <div className="text-sm text-slate-400">Expert Level</div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {Object.values(skills.categories).flat().filter(skill => skill.proficiency === 'Advanced').length}
            </div>
            <div className="text-sm text-slate-400">Advanced Level</div>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-purple-400">{categories.length}</div>
            <div className="text-sm text-slate-400">Categories</div>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, categoryIndex) => {
            const IconComponent = categoryIcons[category] || Star;
            const categorySkills = skills.categories[category];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-all duration-300 cursor-pointer ${
                  activeCategory === category ? 'ring-2 ring-primary/50 bg-slate-800/60' : ''
                }`}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{category}</h3>
                    <Badge className={`${getCategoryColor(category)} text-xs`}>
                      {categorySkills.length} skills
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {categorySkills
                    .slice(0, activeCategory === category ? categorySkills.length : 4)
                    .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: skillIndex * 0.05 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={`text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                          {skill.proficiency}
                        </span>
                      </div>
                      <Progress 
                        value={getProficiencyValue(skill.proficiency)} 
                        className="h-2"
                      />
                      {skill.yearsOfExperience && (
                        <div className="flex justify-between text-xs text-slate-400">
                          <span>{skill.yearsOfExperience} years experience</span>
                          {skill.lastUsed && (
                            <span>Last used: {skill.lastUsed}</span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                  
                  {!activeCategory && categorySkills.length > 4 && (
                    <div className="text-center">
                      <Badge variant="secondary" className="text-xs">
                        +{categorySkills.length - 4} more
                      </Badge>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Core Competencies */}
        {skills.coreCompetencies && skills.coreCompetencies.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {skills.coreCompetencies.map((competency, index) => (
                <motion.div
                  key={competency}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Badge 
                    variant="outline" 
                    className="text-sm py-1 px-3 bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                  >
                    {competency}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Certifications */}
        {skills.certifications && skills.certifications.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-slate-800/30 rounded-lg p-4"
                >
                  <h4 className="font-semibold mb-1">{cert.name}</h4>
                  <p className="text-sm text-slate-400 mb-2">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-slate-500">Issued: {cert.date}</p>
                  )}
                  {cert.expiryDate && (
                    <p className="text-xs text-slate-500">Expires: {cert.expiryDate}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
