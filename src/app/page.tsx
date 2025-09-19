import React from 'react';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import ConferencesSection from '@/components/ConferencesSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import JournalsSection from '@/components/JournalsSection';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectsSection';
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
          <ExperienceSection />
          <ProjectsSection />
          <JournalsSection />
          <ConferencesSection />
          <TeachingSection />
          <SupervisionSection />
          <AchievementsSection />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default page;