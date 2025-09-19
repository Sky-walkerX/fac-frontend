'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { About, Contact } from '@/types';
import { facultyApi } from '@/lib/api';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  FiMapPin, 
  FiMail, 
  FiPhone, 
  FiLinkedin, 
  FiExternalLink,
  FiDownload,
  FiEye
} from 'react-icons/fi';

export default function HeroSection() {
  const [about, setAbout] = useState<About | null>(null);
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [aboutData, contactData] = await Promise.all([
          facultyApi.getAbout(),
          facultyApi.getContact()
        ]);
        if (aboutData.length > 0) {
          setAbout(aboutData[0]);
        }
        if (contactData.length > 0) {
          setContact(contactData[0]);
        }
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for hero section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const placeholderData = {
    name: 'DR. ABHINESH KAUSHIK',
    designation: 'Assistant Professor & Deputy Registrar',
    bio: 'Researcher in Wireless Sensor Networks, Machine Learning, and Artificial Intelligence. Currently serving as Assistant Professor at Indian Institute of Information Technology, Lucknow, with extensive experience in localization algorithms and IoT applications. Also serving as Deputy Registrar and Faculty In-Charge for Training & Placements.',
    address: 'Indian Institute of Information Technology, Lucknow',
    profileImage: null,
  };

  const placeholderContact = {
    email: 'abhinesh.kaushik@gmail.com',
    alternateEmail: 'abhinesh@iiitl.ac.in',
    phone: '8587012012',
    office: 'Indian Institute of Information Technology, Lucknow',
    linkedIn: 'https://www.linkedin.com/in/abhinesh-kaushik-67a83647',
    googleScholar: 'https://scholar.google.com/citations?user=KqxVnuwAAAAJ',
    orcid: 'https://orcid.org/0000-0002-7864-6202',
  };

  const displayData = about || placeholderData;
  const displayContact = contact || placeholderContact;

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

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {displayContact.email && (
                  <motion.a
                    href={`mailto:${displayContact.email}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors group"
                  >
                    <FiMail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{displayContact.email}</span>
                  </motion.a>
                )}
                
                {displayContact.phone && (
                  <motion.a
                    href={`tel:${displayContact.phone}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex items-center gap-2 text-slate-400 hover:text-green-400 transition-colors group"
                  >
                    <FiPhone className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{displayContact.phone}</span>
                  </motion.a>
                )}
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                {displayContact.linkedIn && (
                  <motion.a
                    href={displayContact.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-all group"
                  >
                    <FiLinkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">LinkedIn</span>
                  </motion.a>
                )}
                
                {displayContact.googleScholar && (
                  <motion.a
                    href={displayContact.googleScholar}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:text-orange-400 hover:border-orange-400/50 transition-all group"
                  >
                    <FiExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">Scholar</span>
                  </motion.a>
                )}
                
                {displayContact.orcid && (
                  <motion.a
                    href={displayContact.orcid}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all group"
                  >
                    <FiExternalLink className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium">ORCID</span>
                  </motion.a>
                )}
              </div>
            </div>

            {/* Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              <Button
                onClick={() => window.open('/Resume IIITL-2.pdf', '_blank')}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg transition-all group"
              >
                <FiEye className="h-4 w-4 group-hover:scale-110 transition-transform" />
                View Resume
              </Button>
              
              <Button
                variant="outline"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Resume IIITL-2.pdf';
                  link.download = 'Dr_Abhinesh_Kaushik_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="flex items-center gap-2 border-slate-700 text-slate-300 hover:border-primary/50 hover:text-primary px-6 py-2 rounded-lg transition-all group"
              >
                <FiDownload className="h-4 w-4 group-hover:scale-110 transition-transform" />
                Download
              </Button>
            </motion.div>

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
