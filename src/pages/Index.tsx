
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
import { TrustSection } from '@/components/TrustSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <ProcessSection />
        <ShowroomSection />
        <PlanningSection />
        <BrandsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TrustSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
