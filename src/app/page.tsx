import React from 'react';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
import ResearchSection from '@/components/ResearchSection';
import ScrollToTop from '@/components/ScrollToTop';
import SupervisionSection from '@/components/SupervisionSection';
import TeachingSection from '@/components/TeachingSection';

const page = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <div className="space-y-0">
          <AboutSection />
          <ProjectsSection />
          <ResearchSection />
          <TeachingSection />
          <SupervisionSection />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default page;