'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Achievement } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  ExternalLink,
  Building2,
  Star,
  Trophy,
  Medal,
  FileCheck,
  BookOpen
} from 'lucide-react';

const getCategoryIcon = (category: string) => {
  switch (category.toLowerCase()) {
    case 'awards':
      return Trophy;
    case 'honors':
      return Medal;
    case 'recognition':
      return Award;
    case 'certifications':
      return FileCheck;
    case 'grants':
      return BookOpen;
    case 'fellowships':
      return Star;
    case 'publications':
      return BookOpen;
    default:
      return Award;
  }
};

const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'awards':
      return 'text-yellow-400';
    case 'honors':
      return 'text-purple-400';
    case 'recognition':
      return 'text-blue-400';
    case 'certifications':
      return 'text-green-400';
    case 'grants':
      return 'text-orange-400';
    case 'fellowships':
      return 'text-pink-400';
    case 'publications':
      return 'text-cyan-400';
    default:
      return 'text-primary';
  }
};

const getBadgeVariant = (category: string) => {
  switch (category.toLowerCase()) {
    case 'awards':
      return 'default';
    case 'honors':
      return 'secondary';
    case 'recognition':
      return 'outline';
    default:
      return 'outline';
  }
};

export default function AchievementsCarouselSection() {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Number of cards to show at once
  const cardsPerView = 3;

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        setLoading(true);
        const data = await facultyApi.getAchievements();
        setAchievements(data);
      } catch (err) {
        setError('Failed to load achievements');
        console.error('Error fetching achievements:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  const totalSlides = Math.max(0, achievements.length - cardsPerView + 1);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const canGoNext = currentIndex < totalSlides - 1;
  const canGoPrev = currentIndex > 0;

  if (loading) {
    return (
      <section id="achievements" className="section-padding bg-secondary/20">
        <div className="container-custom">
          <Skeleton className="h-12 w-64 mx-auto mb-16" />
          <div className="flex gap-6 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <Card key={i} className="flex-shrink-0 w-80 h-64">
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 w-full" />
                  <Skeleton className="h-4 w-1/3 mt-4" />
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="achievements" className="section-padding bg-secondary/20">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-slate-100">Achievements</h2>
            <p className="text-slate-400">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A showcase of awards, honors, and recognitions earned throughout my academic and professional journey
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentIndex * (320 + 24)}px` // 320px card width + 24px gap
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              {achievements.map((achievement, index) => {
                const IconComponent = getCategoryIcon(achievement.category);
                const iconColor = getCategoryColor(achievement.category);
                
                return (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex-shrink-0 w-80"
                  >
                    <Card className="bg-slate-800/20 backdrop-blur-md border border-slate-700/60 hover:border-primary/40 hover:bg-slate-800/90 transition-all duration-300 h-full flex flex-col group shadow-xl">
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3 flex-1 min-w-0">
                            <div className={`p-2 rounded-lg bg-slate-800/50 group-hover:scale-110 transition-transform`}>
                              <IconComponent className={`h-5 w-5 ${iconColor}`} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <Badge 
                                variant={getBadgeVariant(achievement.category)}
                                className="text-xs mb-2"
                              >
                                {achievement.category}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        <CardTitle className="text-lg font-semibold text-slate-200 leading-tight group-hover:text-primary transition-colors">
                          {achievement.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-grow flex flex-col">
                        {/* Description */}
                        <div className="flex-1 mb-4">
                          {achievement.description ? (
                            <p className="text-sm text-slate-400 leading-relaxed line-clamp-4">
                              {achievement.description}
                            </p>
                          ) : (
                            <div className="h-16 flex items-center justify-center">
                              <span className="text-xs text-slate-500">No description available</span>
                            </div>
                          )}
                        </div>

                        {/* Organization */}
                        {achievement.organization && (
                          <div className="flex items-center gap-2 mb-3">
                            <Building2 className="h-4 w-4 text-slate-500 flex-shrink-0" />
                            <span className="text-xs text-slate-400 truncate">
                              {achievement.organization}
                            </span>
                          </div>
                        )}

                        {/* Footer */}
                        <div className="mt-auto">
                          <div className="flex items-center justify-between text-sm text-slate-500 pt-3 border-t border-slate-700">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="text-xs">
                                {achievement.date}
                              </span>
                            </div>
                            {achievement.url && (
                              <motion.a
                                href={achievement.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="text-primary hover:text-primary/80 transition-colors"
                              >
                                <ExternalLink className="h-4 w-4" />
                              </motion.a>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          {achievements.length > cardsPerView && (
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                disabled={!canGoPrev}
                className="h-12 w-12 rounded-full border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <ChevronLeft className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                disabled={!canGoNext}
                className="h-12 w-12 rounded-full border-slate-700 bg-slate-800/50 hover:bg-slate-800 hover:border-primary/50 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
              >
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
              </Button>
            </div>
          )}

          {/* Progress Dots */}
          {achievements.length > cardsPerView && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        
      </div>
    </section>
  );
}
