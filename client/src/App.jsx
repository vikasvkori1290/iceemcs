import React, { useState, useEffect } from 'react';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AboutSection from './components/AboutSection';
import KeynotesSection from './components/KeynotesSection';
import CommitteeSection from './components/CommitteeSection';
import TopicsSection from './components/TopicsSection';
import KeydatesSection from './components/KeydatesSection';
import SubmissionSection from './components/SubmissionSection';
import RegistrationSection from './components/RegistrationSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [activeSection, setActiveSection] = useState('HOME');

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('contact')) {
        setActiveSection('CONTACT');
      } else if (hash.includes('registration')) {
        setActiveSection('REGISTRATION');
      } else if (hash.includes('submission')) {
        setActiveSection('SUBMISSION');
      } else if (hash.includes('keydates')) {
        setActiveSection('KEYDATES');
      } else if (hash.includes('topics') || hash.includes('call-for-papers')) {
        setActiveSection('TOPICS');
      } else if (hash.includes('committee')) {
        setActiveSection('COMMITTEE');
      } else if (hash.includes('about')) {
        setActiveSection('ABOUT');
      } else if (hash.includes('keynotes')) {
        setActiveSection('KEYNOTES');
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Top Header Bar (Contact info, social links, brand name) */}
      <TopHeader />

      {/* 2. Main Navigation Menu */}
      <Navbar activeSection={activeSection} setActiveSection={handleNavClick} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeSection === 'CONTACT' ? (
          /* Contact Page View */
          <>
            <ContactSection />
            <NewsletterSection />
          </>
        ) : activeSection === 'REGISTRATION' ? (
          /* Registration Fee & Deadline View */
          <RegistrationSection />
        ) : activeSection === 'SUBMISSION' ? (
          /* Paper Submission Guidelines View */
          <SubmissionSection />
        ) : activeSection === 'KEYDATES' ? (
          /* Dedicated Keydates View */
          <KeydatesSection />
        ) : activeSection === 'TOPICS' ? (
          /* Conference Topics / Call for Papers View */
          <TopicsSection onNavigate={handleNavClick} />
        ) : activeSection === 'COMMITTEE' ? (
          /* Committee Page View */
          <CommitteeSection />
        ) : (
          /* Homepage Layout */
          <>
            <HeroCarousel />
            <AboutSection />
            <KeynotesSection />
            <NewsletterSection />
          </>
        )}
      </main>

      {/* 3. Complete Footer Layout */}
      <Footer setActiveSection={handleNavClick} />

      {/* Floating Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}
