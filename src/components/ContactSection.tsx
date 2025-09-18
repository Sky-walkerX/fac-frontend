'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Contact } from '@/types';
import { facultyApi } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Linkedin, 
  ExternalLink,
  GraduationCap,
  Search,
  BookOpen
} from 'lucide-react';

export default function ContactSection() {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await facultyApi.getContact();
        if (data.length > 0) {
          setContact(data[0]);
        }
      } catch (err) {
        // Silently handle errors and use placeholder data
        console.warn('Using placeholder data for contact section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  const placeholderContact = {
    _id: 'contact1',
    email: 'abhinesh.kaushik@gmail.com',
    alternateEmail: 'abhinesh@iiitl.ac.in',
    phone: '8587012012',
    office: 'Indian Institute of Information Technology, Lucknow',
    website: undefined,
    linkedIn: 'https://www.linkedin.com/in/abhinesh-kaushik-67a83647',
    googleScholar: 'https://scholar.google.com/citations?user=KqxVnuwAAAAJ&hl=en&oi=ao',
    orcid: '0000-0002-7864-6202',
    researchGate: undefined
  };

  const displayContact = contact || placeholderContact;

  if (error) {
    console.warn('API Error:', error);
  }

  const contactItems = [
    {
      icon: Mail,
      label: 'Primary Email',
      value: displayContact?.email,
      href: displayContact?.email ? `mailto:${displayContact.email}` : undefined,
      primary: true,
      color: 'text-red-400',
      external: false
    },
    {
      icon: Mail,
      label: 'Institutional Email',
      value: displayContact?.alternateEmail,
      href: displayContact?.alternateEmail ? `mailto:${displayContact.alternateEmail}` : undefined,
      color: 'text-blue-400',
      external: false
    },
    {
      icon: Phone,
      label: 'Phone',
      value: displayContact?.phone,
      href: displayContact?.phone ? `tel:${displayContact.phone}` : undefined,
      color: 'text-green-400',
      external: false
    },
    {
      icon: MapPin,
      label: 'Office',
      value: displayContact?.office,
      color: 'text-purple-400',
      external: false
    }
  ];

  const academicProfiles = [
    {
      icon: GraduationCap,
      label: 'Google Scholar',
      value: displayContact?.googleScholar,
      href: displayContact?.googleScholar,
      external: true,
      color: 'text-orange-400'
    },
    {
      icon: Search,
      label: 'ORCID',
      value: displayContact?.orcid,
      href: displayContact?.orcid ? `https://orcid.org/${displayContact.orcid}` : undefined,
      external: true,
      displayValue: displayContact?.orcid,
      color: 'text-cyan-400'
    },
    {
      icon: BookOpen,
      label: 'ResearchGate',
      value: displayContact?.researchGate,
      href: displayContact?.researchGate,
      external: true,
      color: 'text-teal-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: displayContact?.linkedIn,
      href: displayContact?.linkedIn,
      external: true,
      color: 'text-blue-500'
    }
  ];

  if (loading) {
    return (
      <section id="contact" className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        <div className="container-custom relative z-10">
          <Skeleton className="h-12 w-64 mx-auto mb-16" />
          <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
            <Card className="glass-card rounded-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-xl" />
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card rounded-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full rounded-xl" />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Connect with me for research collaborations and academic discussions
          </p>
        </motion.div>

        <div className="grid gap-8 md:gap-12 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-slate-700/50 rounded-2xl h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
                  <Mail className="h-6 w-6 text-primary" />
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactItems.map((item, index) => {
                    if (!item.value) return null;
                    
                    const IconComponent = item.icon;
                    const content = (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <div className={`p-3 rounded-lg bg-slate-800/50 ${item.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-slate-400">{item.label}</p>
                          <p className="text-slate-200 font-semibold break-all">{item.value}</p>
                        </div>
                        {item.href && (
                          <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-primary transition-colors" />
                        )}
                      </motion.div>
                    );

                    return item.href ? (
                      <a
                        key={index}
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="block"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={index}>{content}</div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Academic Profiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-slate-700/50 rounded-2xl h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-200 mb-8 flex items-center gap-3">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  Academic Profiles
                </h3>
                
                <div className="space-y-6">
                  {academicProfiles.map((profile, index) => {
                    if (!profile.value) return null;
                    
                    const IconComponent = profile.icon;
                    const displayValue = profile.displayValue || profile.label;
                    
                    return (
                      <motion.a
                        key={index}
                        href={profile.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/30 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <div className={`p-3 rounded-lg bg-slate-800/50 ${profile.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-slate-200 font-semibold">{profile.label}</p>
                          <p className="text-sm text-slate-400 break-all">{displayValue}</p>
                        </div>
                        <ExternalLink className="h-4 w-4 text-slate-500 group-hover:text-primary transition-colors" />
                      </motion.a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
