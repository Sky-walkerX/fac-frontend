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
      title: 'TAGA-FLEACH: Energy-efficient and secure clustering in WSNs using trust-aware GA-FLEACH with dead-hole monitoring',
      authors: 'Shakya A., Kaushik A.',
      venue: 'Ad Hoc Networks',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1016/j.adhoc.2025.103990',
      link: 'https://doi.org/10.1016/j.adhoc.2025.103990',
      description: 'Energy-efficient and secure clustering protocol for wireless sensor networks with trust-aware genetic algorithm and dead-hole monitoring.'
    },
    {
      _id: 'pub2',
      title: 'Machine Learning Driven Centroid Localization Algorithm for Wireless Sensor Networks',
      authors: 'Tanwar K., Kaushik A.',
      venue: 'Peer-To-Peer Networking and Applications',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1007/s12083-025-02026-4',
      link: 'https://doi.org/10.1007/s12083-025-02026-4',
      description: 'A novel machine learning approach for improving localization accuracy in wireless sensor networks using centroid algorithms.'
    },
    {
      _id: 'pub3',
      title: 'Improved 3D DV-Hop Algorithm Using scatteredness Between Beacon nodes for Calculation of the hopsize for Stochastic WSNs',
      authors: 'Warade A., Kaushik A.',
      venue: 'Physica Scripta',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1088/1402%2d4896/Ade8b7',
      link: 'https://doi.org/10.1088/1402%2d4896/Ade8b7',
      description: 'Enhancement of 3D localization algorithms in stochastic wireless sensor networks through beacon node scatteredness analysis.'
    },
    {
      _id: 'pub4',
      title: 'A Comparative Study and Survey of Chain-Based Routing Protocols in WSNs',
      authors: 'Verma R.K., Jain S., Kaushik A.',
      venue: 'Journal of Supercomputing',
      year: 2025,
      type: 'journal',
      doi: 'https://doi.org/10.1007/S11227-025-07412-6',
      link: 'https://doi.org/10.1007/S11227-025-07412-6',
      description: 'Comprehensive survey and comparative analysis of chain-based routing protocols in wireless sensor networks.'
    },
    {
      _id: 'pub5',
      title: 'Three-Dimensional DV-Hop Based on Improved Adaptive Differential Evolution Algorithm',
      authors: 'Mani V., Kaushik A.',
      venue: 'Journal of Supercomputing',
      year: 2024,
      type: 'journal',
      doi: 'https://doi.org/10.1007/S11227-024-06432-Y',
      link: 'https://doi.org/10.1007/S11227-024-06432-Y',
      description: 'Enhanced three-dimensional localization using improved adaptive differential evolution algorithm for wireless sensor networks.'
    },
    {
      _id: 'pub6',
      title: 'Improved 3-Dimensional DV-Hop Localization Algorithm based on Information of Nearby Nodes',
      authors: 'Kaushik A., Lobiyal D.K., Kumar S.',
      venue: 'Wireless Networks',
      year: 2021,
      type: 'journal',
      doi: 'https://doi.org/10.1007/s11276-020-02533-7',
      link: 'https://doi.org/10.1007/s11276-020-02533-7',
      description: 'Novel approach for improving 3D localization accuracy using information from nearby nodes in wireless sensor networks.'
    },
    {
      _id: 'pub7',
      title: 'Localization in Mobile WSNs using Drones',
      authors: 'Kaushik A., Lobiyal D.K.',
      venue: 'Transactions on Emerging Telecommunication Technologies',
      year: 2021,
      type: 'journal',
      doi: 'https://doi.org/10.1002/ett.4213',
      link: 'https://doi.org/10.1002/ett.4213',
      description: 'Innovative approach for localization in mobile wireless sensor networks using drone-assisted technology.'
    },
    {
      _id: 'pub8',
      title: 'Enhanced Three-Dimensional DV-Hop Algorithm',
      authors: 'Kaushik A., Lobiyal D.K.',
      venue: 'ICT Systems and Sustainability, Springer',
      year: 2021,
      type: 'conference',
      doi: 'https://doi.org/10.1007/978-981-15-8289-9_25',
      link: 'https://doi.org/10.1007/978-981-15-8289-9_25',
      description: 'Novel approach to improve three-dimensional localization in wireless sensor networks using enhanced DV-Hop methodology.'
    },
    {
      _id: 'pub9',
      title: 'Localization in Wireless Sensor Networks using a Mobile Anchor and Subordinate Node',
      authors: 'Kaushik A., Lobiyal D.K.',
      venue: 'Lecture Notes in Computer Networks, Springer',
      year: 2021,
      type: 'conference',
      doi: 'https://doi.org/10.1007/978-981-33-6173-7_12',
      link: 'https://doi.org/10.1007/978-981-33-6173-7_12',
      description: 'Innovative localization technique using mobile anchor nodes and subordinate nodes for wireless sensor networks.'
    },
    {
      _id: 'pub10',
      title: 'Multiple Hole Detection in Wireless Underground Sensor Networks',
      authors: 'Kaushik A.',
      venue: 'Proceedings of ICCCS 2018, CRC Press',
      year: 2019,
      type: 'conference',
      doi: 'https://doi.org/10.1201/9780429444272',
      link: 'https://doi.org/10.1201/9780429444272',
      description: 'Detection and analysis of multiple holes in wireless underground sensor networks for improved network reliability.'
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
