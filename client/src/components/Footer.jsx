import React from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  const quickLinks = [
    { name: 'About Us', href: '#about', action: 'ABOUT' },
    { name: 'Topics', href: '#topics', action: 'TOPICS' },
    { name: 'Keynotes', href: '#keynotes', action: 'KEYNOTES' },
    { name: 'Keydates', href: '#keydates', action: 'KEYDATES' },
    { name: 'Contact', href: '#contact', action: 'CONTACT' },
  ];

  return (
    <footer className="bg-[#22252a] text-gray-300 pt-16 pb-8 border-t border-gray-800 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Main 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 pb-12 border-b border-gray-700/60">
          {/* Column 1: ADDRESS */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-wider uppercase">
              ADDRESS
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c68a2c] shrink-0 mt-0.5" />
                <span>CMR University, Kalyana Nagar, Bengaluru 560043, India.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c68a2c] shrink-0" />
                <a href="tel:+919880690684" className="hover:text-white transition-colors">
                  +91 98806 90684
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c68a2c] shrink-0" />
                <a href="mailto:editor@cmr.edu.in" className="hover:text-white transition-colors">
                  editor@cmr.edu.in
                </a>
              </div>
            </div>

            {/* Social Icons row (Twitter, Facebook, YouTube, LinkedIn) */}
            <div className="flex items-center gap-2 pt-2">
              {/* Twitter */}
              <a
                href="#twitter"
                aria-label="Twitter"
                className="w-7 h-7 bg-white text-[#22252a] flex items-center justify-center rounded-xs hover:bg-[#c68a2c] hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="#facebook"
                aria-label="Facebook"
                className="w-7 h-7 bg-white text-[#22252a] flex items-center justify-center rounded-xs hover:bg-[#c68a2c] hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#youtube"
                aria-label="YouTube"
                className="w-7 h-7 bg-white text-[#22252a] flex items-center justify-center rounded-xs hover:bg-[#c68a2c] hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-7 h-7 bg-white text-[#22252a] flex items-center justify-center rounded-xs hover:bg-[#c68a2c] hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.67 1.66 1.67.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.66-1.67-1.66z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: QUICK LINKS */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-wider uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setActiveSection?.(link.action || link.name.toUpperCase())}
                    className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#c68a2c] group-hover:translate-x-0.5 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: OUR VENUE */}
          <div className="space-y-4">
            <h4 className="text-white font-extrabold text-base sm:text-lg tracking-wider uppercase">
              OUR VENUE
            </h4>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              CMR University, OMBR Campus, No. 5, Bhuvanagiri, Lakshmamma Layout, Banaswadi, Bengaluru, Karnataka 560043.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; <strong className="text-gray-300 font-bold">ICEEMCS</strong>, All Right Reserved.
          </p>
          <p>
            &copy; Designed by <span className="text-gray-300 font-medium">CMR University, Bengaluru</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}

