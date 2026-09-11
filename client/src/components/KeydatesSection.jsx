import React from 'react';
import { Clock } from 'lucide-react';

export default function KeydatesSection() {
  const dates = [
    { label: 'Start Submission:', value: '25th July 2026.' },
    { label: 'Last Date of Submission:', value: '5th Feb 2027.' },
    { label: 'Acceptance Date:', value: '10th April 2027.' },
    { label: 'Registration Last Date:', value: '30th May 2027.' },
    { label: 'Camera Ready Submission:', value: '10th June 2027.' },
    { label: 'Conference Dates:', value: '13th and 14th July 2027.' },
  ];

  return (
    <section
      id="keydates-page"
      className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center bg-slate-950 overflow-hidden py-16 sm:py-24"
    >
      {/* Circuit Board / Motherboard Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          alt="Motherboard Circuit Background"
          className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-125"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="max-w-3xl">
          {/* Section Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide uppercase mb-10 sm:mb-14">
            KEYDATES
          </h1>

          {/* Keydates List */}
          <div className="space-y-6 sm:space-y-7">
            {dates.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 sm:gap-4 text-white text-base sm:text-lg lg:text-xl font-bold tracking-wide"
              >
                {/* Clock Icon matching screenshot */}
                <div className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-white stroke-[2.2]" />
                </div>

                {/* Date Label & Value */}
                <p className="flex flex-wrap items-baseline gap-x-2">
                  <span className="font-extrabold text-white">{item.label}</span>
                  <span className="font-medium text-white/95">{item.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
