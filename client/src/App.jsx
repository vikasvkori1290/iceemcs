import React, { useState, useEffect } from 'react';
import TopHeader from './components/TopHeader';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import CommitteeSection from './components/CommitteeSection';
import TopicsSection from './components/TopicsSection';
import KeydatesSection from './components/KeydatesSection';
import SubmissionSection from './components/SubmissionSection';
import RegistrationSection from './components/RegistrationSection';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
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
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Top Header Bar (Contact info, social links, brand name) */}
      <TopHeader />

      {/* 2. Main Navigation Menu */}
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
          /* Home Page Layout */
          <>
            <HeroCarousel />
            {/* Quick Home Overview / Welcome Highlights */}
            <section className="py-14 bg-gray-50 border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Card 1: About Conference */}
                  <div className="bg-white p-8 rounded border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#c68a2c] tracking-widest uppercase mb-2 block">
                        About The Event
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        ICEEMCS 2027
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        The 1st International Conference on Electrical, Electronics, Management and Computer Sciences at CMR University, Bangalore.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavClick('ABOUT')}
                      className="inline-flex items-center text-xs font-bold text-[#c68a2c] hover:underline uppercase tracking-wider"
                    >
                      Read Full Details &rarr;
                    </button>
                  </div>

                  {/* Card 2: Keynote Speakers */}
                  <div className="bg-white p-8 rounded border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#c68a2c] tracking-widest uppercase mb-2 block">
                        Distinguished Guests
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Keynote Speakers
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Hear from world-class researchers, professors, and technical leaders from IEEE ComSoc and premier institutions.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavClick('KEYNOTES')}
                      className="inline-flex items-center text-xs font-bold text-[#c68a2c] hover:underline uppercase tracking-wider"
                    >
                      View All Keynotes &rarr;
                    </button>
                  </div>

                  {/* Card 3: Call for Papers */}
                  <div className="bg-white p-8 rounded border border-gray-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold text-[#c68a2c] tracking-widest uppercase mb-2 block">
                        Research Submissions
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Call for Papers
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Explore Electrical, Electronics, Management, and Computer Science conference tracks and submission criteria.
                      </p>
                    </div>
                    <button
                      onClick={() => handleNavClick('TOPICS')}
                      className="inline-flex items-center text-xs font-bold text-[#c68a2c] hover:underline uppercase tracking-wider"
                    >
                      Explore Topics &rarr;
                    </button>
                  </div>
                </div>
              </div>
            </section>
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
