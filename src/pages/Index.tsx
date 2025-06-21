
import React from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { WhySection } from '@/components/WhySection';
import { ProcessSection } from '@/components/ProcessSection';
import { ShowroomSection } from '@/components/ShowroomSection';
import { PlanningSection } from '@/components/PlanningSection';
import { BrandsSection } from '@/components/BrandsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhySection />
      <ProcessSection />
      <ShowroomSection />
      <PlanningSection />
      <BrandsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
