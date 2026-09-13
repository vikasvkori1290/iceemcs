import React, { useState, useEffect } from 'react';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import ModernHero from './components/ModernHero';
import ModernAbout from './components/ModernAbout';
import ModernKeynotes from './components/ModernKeynotes';
import CommitteeSection from './components/CommitteeSection';
import TopicsSection from './components/TopicsSection';
import KeydatesSection from './components/KeydatesSection';
import SubmissionSection from './components/SubmissionSection';
import RegistrationSection from './components/RegistrationSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Standalone Pages
import AboutPage from './pages/AboutPage';
import KeynotesPage from './pages/KeynotesPage';

export default function App() {
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('about')) {
        setActiveSection('ABOUT');
      } else if (hash.includes('keynotes')) {
        setActiveSection('KEYNOTES');
      } else if (hash.includes('committee')) {
        setActiveSection('COMMITTEE');
      } else if (hash.includes('registration')) {
        setActiveSection('REGISTRATION');
      } else if (hash.includes('submission')) {
        setActiveSection('SUBMISSION');
      } else if (hash.includes('keydates')) {
        setActiveSection('KEYDATES');
      } else if (hash.includes('topics') || hash.includes('call-for-papers')) {
        setActiveSection('TOPICS');
      } else if (hash.includes('contact')) {
        setActiveSection('CONTACT');
      } else {
        setActiveSection('HOME');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavClick = (sectionName) => {
    setActiveSection(sectionName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-amber-500/20 selection:text-amber-900">
      {/* 1. Top Micro-Bar (Thin dark strip with contact, dates badge, social icons) */}
      <TopHeader />

      {/* 2. Navigation Bar (Sticky header, Oxford Navy branding, Submit Paper CTA) */}
      <Navbar activeSection={activeSection} setActiveSection={handleNavClick} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeSection === 'ABOUT' ? (
          /* Dedicated About Page */
          <AboutPage onNavigate={handleNavClick} />
        ) : activeSection === 'KEYNOTES' ? (
          /* Dedicated Keynotes Page */
          <KeynotesPage />
        ) : activeSection === 'COMMITTEE' ? (
          /* Dedicated Committee Page */
          <CommitteeSection />
        ) : activeSection === 'TOPICS' ? (
          /* Conference Topics / Call for Papers Page */
          <TopicsSection onNavigate={handleNavClick} />
        ) : activeSection === 'KEYDATES' ? (
          /* Dedicated Keydates Page */
          <KeydatesSection />
        ) : activeSection === 'SUBMISSION' ? (
          /* Paper Submission Guidelines Page */
          <SubmissionSection />
        ) : activeSection === 'REGISTRATION' ? (
          /* Registration Fee & Deadline Page */
          <RegistrationSection />
        ) : activeSection === 'CONTACT' ? (
          /* Dedicated Contact Page */
          <>
            <ContactSection />
            <NewsletterSection />
          </>
        ) : (
          /* Redesigned Modern Academic Homepage */
          <>
            {/* Split Layout Hero Section with Interactive Timeline Card */}
            <ModernHero onNavigate={handleNavClick} />

            {/* About Section: CMR University Profile + Vision & Mission Feature Cards */}
            <ModernAbout onNavigate={handleNavClick} />

            {/* Keynote Speakers: Modern Grid with Circular Headshots & Styled TBA Card */}
            <ModernKeynotes onNavigate={handleNavClick} />

            {/* Conference Newsletter Bulletin */}
            <NewsletterSection />
          </>
        )}
      </main>

      {/* 4-Column Academic Footer */}
      <Footer setActiveSection={handleNavClick} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
