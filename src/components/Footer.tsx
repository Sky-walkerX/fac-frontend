"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Contact } from '@/types';
import { facultyApi } from '@/lib/api';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ExternalLink
} from 'lucide-react';

export default function Footer() {
  const [contact, setContact] = useState<Contact | null>(null);
  const [loading, setLoading] = useState(true);
  
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const data = await facultyApi.getContact();
        if (data.length > 0) {
          setContact(data[0]);
        }
      } catch (err) {
        console.warn('Using placeholder data for contact section:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  // Fallback contact data
  const placeholderContact = {
    _id: 'contact1',
    email: 'abhinesh.kaushik@gmail.com',
    alternateEmail: 'abhinesh@iiitl.ac.in',
    phone: '8587012012',
    office: 'Indian Institute of Information Technology, Lucknow',
    linkedIn: 'https://www.linkedin.com/in/abhinesh-kaushik-67a83647',
    googleScholar: 'https://scholar.google.com/citations?user=KqxVnuwAAAAJ',
    orcid: 'https://orcid.org/0000-0002-7864-6202',
    researchGate: undefined,
    website: undefined,
  };

  const displayContact = contact || placeholderContact;

  return (
    <footer className="relative border-t border-slate-700/50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-3"
        >
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Contact Information</h3>
            <div className="space-y-3 text-sm text-slate-400">
              {displayContact.email && (
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href={`mailto:${displayContact.email}`} className="hover:text-primary transition-colors">
                    {displayContact.email}
                  </a>
                </div>
              )}
              {displayContact.alternateEmail && (
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                  <a href={`mailto:${displayContact.alternateEmail}`} className="hover:text-primary transition-colors">
                    {displayContact.alternateEmail}
                  </a>
                </div>
              )}
              {displayContact.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <a href={`tel:${displayContact.phone}`} className="hover:text-primary transition-colors">
                    {displayContact.phone}
                  </a>
                </div>
              )}
              {displayContact.office && (
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span>{displayContact.office}</span>
                </div>
              )}
            </div>
          </div>

          {/* Academic Profiles */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Academic Profiles</h3>
            <div className="space-y-3 text-sm text-slate-400">
              {displayContact.googleScholar && (
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-orange-400 flex-shrink-0" />
                  <a 
                    href={displayContact.googleScholar} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Google Scholar
                  </a>
                </div>
              )}
              {displayContact.orcid && (
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                  <a 
                    href={displayContact.orcid} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    ORCID Profile
                  </a>
                </div>
              )}
              {displayContact.linkedIn && (
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <a 
                    href={displayContact.linkedIn} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              )}
              {displayContact.researchGate && (
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-green-400 flex-shrink-0" />
                  <a 
                    href={displayContact.researchGate} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    ResearchGate
                  </a>
                </div>
              )}
              {displayContact.website && (
                <div className="flex items-center gap-3">
                  <ExternalLink className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <a 
                    href={displayContact.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Personal Website
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Institution & Position */}
          <div>
            <h3 className="text-lg font-semibold text-slate-200 mb-4">Professional</h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div>
                <p className="text-slate-300 font-medium">Assistant Professor</p>
                <p>Department of Computer Science & Engineering</p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">Deputy Registrar</p>
                <p>IIIT Lucknow Administration</p>
              </div>
              <div>
                <p className="text-slate-300 font-medium">Research Areas</p>
                <p>Wireless Sensor Networks, Machine Learning, IoT</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center pt-8 mt-8 border-t border-slate-700/50"
        >
          <p className="text-slate-500 text-sm">
            © {currentYear} Dr. Abhinesh Kaushik. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
