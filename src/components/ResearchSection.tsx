'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Research } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, BookOpen, Users, Calendar } from 'lucide-react';

export default function ResearchSection() {
  const [publications, setPublications] = useState<Research[]>([]);
  const [researchAreas, setResearchAreas] = useState<Research[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResearch = async () => {
      try {
        const [pubData, areasData] = await Promise.all([
          facultyApi.getPublications(),
          facultyApi.getResearchAreas()
        ]);
        setPublications(pubData);
        setResearchAreas(areasData);
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for research section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResearch();
  }, []);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'journal':
        return <BookOpen className="h-4 w-4" />;
      case 'conference':
        return <Users className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeBadgeVariant = (type: string) => {
    switch (type) {
      case 'journal':
        return 'default';
      case 'conference':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  if (loading) {
    return (
      <section id="research" className="section-padding">
        <div className="container-custom">
          <Skeleton className="h-12 w-64 mx-auto mb-12" />
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="border border-slate-700 rounded-lg p-6">
                  <Skeleton className="h-6 w-3/4 mb-4" />
                  <Skeleton className="h-4 w-1/2 mb-4" />
                  <Skeleton className="h-20 w-full" />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="border border-slate-700 rounded-lg p-6">
                  <Skeleton className="h-16 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Placeholder data when no real data is available
  const placeholderPublications = [
    {
      _id: 'pub1',
      title: 'Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks',
      authors: 'Tanwar, K. & Kaushik, A.',
      venue: 'Peer‑To‑Peer Networking and Applications',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1007/s12083-025-02026-4',
      link: 'https://doi.org/10.1007/s12083-025-02026-4',
      description: 'A novel machine learning approach for improving localization accuracy in wireless sensor networks using centroid algorithms.'
    },
    {
      _id: 'pub2',
      title: 'Improved 3D DV-Hop Algorithm Using scatteredness Between Beacon nodes',
      authors: 'Warade, A. & Kaushik, A.',
      venue: 'Physica Scripta',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1088/1402-4896/Ade8b7',
      link: 'https://doi.org/10.1088/1402-4896/Ade8b7',
      description: 'Enhancement of 3D localization algorithms in stochastic wireless sensor networks through beacon node scatteredness analysis.'
    },
    {
      _id: 'pub3',
      title: 'Enhanced Three‑Dimensional DV‑Hop Algorithm',
      authors: 'Kaushik A., Lobiyal D.K.',
      venue: 'ICT Systems and Sustainability, Springer',
      year: 2021,
      type: 'conference',
      doi: 'http://doi.org/10.1007/978-981-15-8289-9_25',
      link: 'http://doi.org/10.1007/978-981-15-8289-9_25',
      description: 'Novel approach to improve three-dimensional localization in wireless sensor networks using enhanced DV-Hop methodology.'
    },
    {
      _id: 'pub4',
      title: 'Three Dimensional Localization Algorithm for Wireless Sensor Networks using GPR',
      authors: 'Kaushik A., Lobiyal D.K.',
      venue: 'Wireless Personal Communications, Springer',
      year: 2021,
      type: 'journal',
      doi: 'https://doi.org/10.1007/s11277-021-08502-3',
      link: 'https://doi.org/10.1007/s11277-021-08502-3',
      description: 'Three-dimensional localization approach using Gaussian Process Regression for improved accuracy in wireless sensor networks.'
    },
    {
      _id: 'pub5',
      title: 'A Novel Approach for 3D Localization using Four Beacon Nodes',
      authors: 'Kaushik A., Lobiyal D.K.',
      venue: 'Pertanika Journal of Science and Technology, Malaysia',
      year: 2021,
      type: 'journal',
      doi: 'http://doi.org/10.47836/pjst.29.2.29',
      link: 'http://doi.org/10.47836/pjst.29.2.29',
      description: 'Innovative methodology for three-dimensional positioning using minimal beacon node configuration in wireless sensor networks.'
    },
    {
      _id: 'pub6',
      title: 'Energy Efficient Localization Algorithm for 3D Wireless Sensor Networks',
      authors: 'Kaushik A., Lobiyal D.K.',
      venue: 'IEEE 7th International Conference on Reliability, Infocom Technologies and Optimization',
      year: 2018,
      type: 'conference',
      doi: 'https://doi.org/10.1109/ICRITO.2018.8748329',
      link: 'https://doi.org/10.1109/ICRITO.2018.8748329',
      description: 'Energy-efficient approach for localization in three-dimensional wireless sensor network environments.'
    }
  ];

  const placeholderResearchAreas = [
    {
      _id: 'area1',
      title: 'Wireless Sensor Networks',
      type: 'research_area',
      description: 'Localization algorithms, energy optimization, and network topology management in wireless sensor networks with focus on mobile and underground networks.',
      link: undefined
    },
    {
      _id: 'area2',
      title: 'Machine Learning & Artificial Intelligence',
      type: 'research_area',
      description: 'Application of ML algorithms in network optimization, pattern recognition, and intelligent systems for IoT and sensor networks.',
      link: undefined
    },
    {
      _id: 'area3',
      title: 'Internet of Things (IoT)',
      type: 'research_area',
      description: 'Smart systems, device connectivity, and data analytics for IoT applications in agriculture, environment monitoring, and smart cities.',
      link: undefined
    }
  ];

  // Use real data if available, otherwise use placeholder
  const displayPublications = publications.length > 0 ? publications : placeholderPublications;
  const displayResearchAreas = researchAreas.length > 0 ? researchAreas : placeholderResearchAreas;

  if (error) {
    console.warn('API Error:', error);
  }

  return (
    <section id="research" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-100 mb-4">
            Research & Publications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Scholarly contributions and innovative research areas
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Publications */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-slate-200 mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Publications
            </h3>
            
            {displayPublications.length > 0 ? (
              <div className="space-y-6">
                {displayPublications.map((pub, index) => (
                  <motion.div
                    key={pub._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h4 className="font-semibold text-slate-200 leading-tight flex-1">
                          {pub.link ? (
                            <a 
                              href={pub.link} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-start gap-2 hover:text-primary transition-colors"
                            >
                              <span className="flex-1">{pub.title}</span>
                              <ExternalLink className="h-4 w-4 flex-shrink-0 mt-0.5 text-primary" />
                            </a>
                          ) : (
                            pub.title
                          )}
                        </h4>
                        <Badge variant={getTypeBadgeVariant(pub.type)} className="text-xs">
                          {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                        </Badge>
                      </div>
                      
                      {pub.authors && (
                        <p className="text-sm text-slate-300 font-medium">
                          {pub.authors}
                        </p>
                      )}
                      
                      {pub.description && (
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {pub.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 border-t border-slate-700 pt-4">
                        {pub.venue && (
                          <div className="flex items-center gap-2">
                            <span className="text-primary font-medium">{pub.venue}</span>
                          </div>
                        )}
                        {pub.year && (
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{pub.year}</span>
                          </div>
                        )}
                      </div>
                      
                      {pub.doi && (
                        <div className="text-xs text-slate-500">
                          <span className="font-semibold">DOI:</span> 
                          <span className="font-mono ml-2">{pub.doi}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="border border-slate-700 rounded-lg p-12 max-w-md mx-auto">
                  <BookOpen className="h-16 w-16 text-slate-500 mx-auto mb-4" />
                  <p className="text-slate-400">Publications will be displayed here</p>
                </div>
              </div>
            )}
          </div>

          {/* Research Areas */}
          <div>
            <h3 className="text-xl font-semibold text-slate-200 mb-6">
              Research Areas
            </h3>
            
            {displayResearchAreas.length > 0 ? (
              <div className="space-y-4">
                {displayResearchAreas.map((area, index) => (
                  <motion.div
                    key={area._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="border border-slate-700 rounded-lg p-6 hover:border-slate-600 transition-colors flex flex-col h-full"
                  >
                    {/* Title - Fixed */}
                    <h4 className="font-semibold text-slate-200 mb-3 min-h-[1.5rem]">
                      {area.title}
                    </h4>
                    
                    {/* Description - Flexible */}
                    <div className="flex-1 mb-4">
                      {area.description ? (
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {area.description}
                        </p>
                      ) : (
                        <div className="h-12 flex items-center justify-center">
                          <span className="text-xs text-slate-500">No description available</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Link - Fixed at bottom */}
                    <div className="mt-auto">
                      {area.link ? (
                        <a 
                          href={area.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
                        >
                          Learn more <ExternalLink className="h-4 w-4" />
                        </a>
                      ) : (
                        <div className="h-6"></div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="border border-slate-700 rounded-lg p-8">
                  <p className="text-slate-400">Research areas will be displayed here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
