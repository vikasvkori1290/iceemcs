import React from 'react';
import { MapPin, Phone, Mail, ChevronRight, GraduationCap, Globe, Clock } from 'lucide-react';

export default function Footer({ setActiveSection }) {
  const quickLinks = [
    { name: 'Home', action: 'HOME', href: '#home' },
    { name: 'About Conference & CMRU', action: 'ABOUT', href: '#about' },
    { name: 'Keynote Speakers', action: 'KEYNOTES', href: '#keynotes' },
    { name: 'Organizing Committee', action: 'COMMITTEE', href: '#committee' },
    { name: 'Call for Papers & Topics', action: 'TOPICS', href: '#topics' },
    { name: 'Paper Submission', action: 'SUBMISSION', href: '#submission' },
    { name: 'Registration & Fees', action: 'REGISTRATION', href: '#registration' },
    { name: 'Contact Us', action: 'CONTACT', href: '#contact' },
  ];

  return (
    <footer className="bg-[#08121f] text-slate-300 border-t border-slate-800 select-none">
      {/* Main 4-Column Academic Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* COLUMN 1: Conference Overview & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block">
                  ICEEMCS 2027
                </span>
                <span className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                  International Conference
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              1st International Conference on Electrical, Electronics, Management and Computer Sciences. Hosted by CMR University, Bengaluru. Dedicated to advancing scientific inquiry, high-impact innovations, and international academic collaborations.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold">
                IEEE Format
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold">
                CMT Submission
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 text-xs font-semibold">
                Double-Blind Review
              </span>
            </div>
          </div>

          {/* COLUMN 2: Quick Navigation Links (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection?.(link.action);
                      window.location.hash = link.href;
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 transition-colors group py-0.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500/80 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Venue Location & Address (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Venue Location
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="font-semibold text-slate-200 block">
                    CMR University
                  </strong>
                  <p className="leading-relaxed">
                    OMBR Campus, No. 5, Bhuvanagiri, Lakshmamma Layout, Banaswadi, Bengaluru, Karnataka 560043, India.
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href="https://maps.google.com/?q=HRBR+Layout+2nd+Block,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber-400 hover:text-amber-300 font-semibold"
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>View on Google Maps &rarr;</span>
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 4: Contact Secretariat (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-bold text-sm sm:text-base uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact Secretariat
            </h4>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-500 uppercase block font-semibold">
                    Editorial Inquiries
                  </span>
                  <a
                    href="mailto:editor@cmr.edu.in"
                    className="text-slate-200 hover:text-amber-400 transition-colors font-medium"
                  >
                    editor@cmr.edu.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[11px] text-slate-500 uppercase block font-semibold">
                    Conference Chairs Phone
                  </span>
                  <a
                    href="tel:+919880690684"
                    className="text-slate-200 hover:text-amber-400 transition-colors font-medium block"
                  >
                    +91 98806 90684 (Dr. Om Prakash)
                  </a>
                  <a
                    href="tel:+917703004534"
                    className="text-slate-200 hover:text-amber-400 transition-colors font-medium block"
                  >
                    +91 7703 004 534 (Dr. Brijesh Mishra)
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Mon–Fri, 9:00 AM – 5:00 PM IST</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Sub-Footer Copyright Bar */}
      <div className="border-t border-slate-800/80 bg-[#060e18] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} <strong className="text-slate-200 font-bold">ICEEMCS</strong>. All Rights Reserved. Hosted by <span className="text-slate-200">CMR University, Bengaluru</span>.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span>•</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              Publication Ethics
            </span>
            <span>•</span>
            <span className="hover:text-slate-200 transition-colors cursor-pointer">
              Terms & Conditions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
