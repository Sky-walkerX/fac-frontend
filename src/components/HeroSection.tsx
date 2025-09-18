'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { About } from '@/types';
import { facultyApi } from '@/lib/api';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { FiMapPin } from 'react-icons/fi';

export default function HeroSection() {
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await facultyApi.getAbout();
        if (data.length > 0) {
          setAbout(data[0]);
        }
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for hero section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  const placeholderData = {
    name: 'DR. ABHINESH KAUSHIK',
    designation: 'Assistant Professor & Deputy Registrar',
    bio: 'Researcher in Wireless Sensor Networks, Machine Learning, and Artificial Intelligence with expertise in localization algorithms, IoT applications, and network optimization. Currently serving as Assistant Professor at Indian Institute of Information Technology, Lucknow, with extensive experience in funded research projects and academic excellence.',
    address: 'Indian Institute of Information Technology, Lucknow, Uttar Pradesh, India',
    profileImage: null,
  };

  const displayData = about || placeholderData;

  if (loading) {
    return (
      <section id="hero" className="relative overflow-hidden py-20 md:py-32">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-5 w-1/3" />
            </div>
            <div className="relative flex justify-center">
              <Skeleton className="h-64 w-64 md:h-80 md:w-80 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.warn('API Error:', error);
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-100">
                {displayData.name}
              </h1>
              <p className="text-lg sm:text-xl text-primary font-medium">
                {displayData.designation}
              </p>
            </div>
            
            {displayData.bio && (
              <p className="text-base text-slate-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {displayData.bio}
              </p>
            )}
            
            {displayData.address && (
              <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-500 text-sm">
                <FiMapPin className="text-primary" />
                <span>{displayData.address}</span>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <Avatar className="w-64 h-64 sm:w-80 sm:h-80 border border-slate-700">
                <AvatarImage
                  src={displayData.profileImage?.asset?.url}
                  alt={displayData.name}
                  className="object-cover"
                />
                <AvatarFallback className="text-4xl sm:text-5xl font-bold bg-slate-800 text-slate-200">
                  {displayData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
