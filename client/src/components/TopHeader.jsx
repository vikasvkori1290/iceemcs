import React from 'react';
import { Mail, Phone, Calendar, MapPin } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="w-full bg-[#08121f] text-slate-300 py-1.5 px-4 sm:px-8 border-b border-slate-800 text-xs select-none">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
        {/* Left Side: Event Date Badge & Location */}
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 font-semibold tracking-wide text-[11px]">
            <Calendar className="w-3 h-3 text-amber-400 shrink-0" />
            <span>July 13–14, 2027 • Bengaluru, India</span>
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-400 text-[11px]">
            <MapPin className="w-3 h-3 text-slate-500" />
            <span>CMR University Campus</span>
          </span>
        </div>

        {/* Right Side: Clickable Contact & Functioning Social Links */}
        <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-xs">
          {/* Clickable Email */}
          <a
            href="mailto:editor@cmr.edu.in"
            className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-300"
            title="Send email to conference secretariat"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />
            <span>editor@cmr.edu.in</span>
          </a>

          {/* Clickable Phone */}
          <a
            href="tel:+919880690684"
            className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-300"
            title="Call conference inquiry"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />
            <span>+91 98806 90684</span>
          </a>

          {/* Functioning Social Media Links opening in new tabs */}
          <div className="flex items-center gap-2 pl-2 border-l border-slate-800">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/school/cmr-university/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in new tab)"
              className="w-5 h-5 rounded bg-slate-800 hover:bg-[#0077b5] text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
              title="LinkedIn Profile"
            >
              <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.67 1.66 1.67.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.66-1.67-1.66z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com/CMRUniversity"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (formerly Twitter, opens in new tab)"
              className="w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-200"
              title="Follow on X"
            >
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
