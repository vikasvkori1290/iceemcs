import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function TopHeader() {
  return (
    <div className="w-full bg-[#c68a2c] text-white py-2.5 px-4 sm:px-8 border-b border-[#b77e26]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Brand Name */}
        <div className="flex items-center">
          <span className="font-extrabold text-xl sm:text-2xl tracking-wider text-white select-none">
            ICEEMCS
          </span>
        </div>

        {/* Contact Info & Socials */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-y-2 gap-x-4 sm:gap-x-6 text-slate-100">
          {/* Location */}
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-white/90 shrink-0" />
            <span>Kalyana Nagar, Bengaluru 560043, India.</span>
          </div>

          {/* Email */}
          <a
            href="mailto:editor@cmr.edu.in"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-white/90 shrink-0" />
            <span>editor@cmr.edu.in</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919880690684"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-white/90 shrink-0" />
            <span>+91 98806 90684</span>
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 ml-1 sm:ml-2">
            {/* Facebook */}
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white text-[#c68a2c] flex items-center justify-center rounded-xs hover:bg-slate-100 transition-colors font-bold text-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="#twitter"
              aria-label="Twitter"
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white text-[#c68a2c] flex items-center justify-center rounded-xs hover:bg-slate-100 transition-colors font-bold text-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#linkedin"
              aria-label="LinkedIn"
              className="w-6 h-6 sm:w-7 sm:h-7 bg-white text-[#c68a2c] flex items-center justify-center rounded-xs hover:bg-slate-100 transition-colors font-bold text-xs"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.67 1.66 1.67.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.66-1.67-1.66z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

