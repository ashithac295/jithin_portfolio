import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioGrid } from './components/PortfolioGrid';
import { InquiryBuilder } from './components/InquiryBuilder';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './types';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Jithin Sunil */}
        <AboutSection />

        {/* Services & Expertise */}
        <ServicesSection />

        {/* Selected Portfolio Works */}
        <PortfolioGrid onSelectProject={(project) => setSelectedProject(project)} />

        {/* Interactive Scope & Inquiry Estimator */}
        <InquiryBuilder />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Contact Information & Form */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
