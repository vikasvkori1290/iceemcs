import React from 'react';
import { Gauge, CheckSquare } from 'lucide-react';

export default function AboutSection() {
  const keydates = [
    { label: 'Start Submission:', date: '25th July 2026.' },
    { label: 'Last date of Submission:', date: '5th Feb 2027.' },
    { label: 'Acceptance Date:', date: '10th April 2027.' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Campus Image with Decorative Offset Gold Frame */}
          <div className="lg:col-span-5 relative">
            {/* Offset Gold Border Frame */}
            <div className="absolute -top-4 -left-4 w-48 sm:w-64 h-72 sm:h-96 border-[3px] border-[#c68a2c] -z-0 pointer-events-none" />

            {/* University Campus Image */}
            <div className="relative z-10 overflow-hidden shadow-lg bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="CMR University Campus Archway and Buildings"
                className="w-full h-[320px] sm:h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Right: Text & Keydates Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 tracking-tight uppercase">
              ABOUT CONFERENCE
            </h2>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-normal">
              The 1<sup>st</sup> International Conference on Electrical, Electronics, Management and Computer Sciences (ICEEMCS) is scheduled to take place on the 13th and 14th of July, 2027, at CMRU, Bangalore, Karnataka, India. This event aims to unite researchers, academicians, and industry professionals from around the world who are tackling current challenges in science and engineering. The conference offers a vibrant platform for attendees to showcase their innovative research, share knowledge, and engage in discussions about emerging ideas, technologies, and trends in this fast-evolving and demanding field.
            </p>

            {/* Keydates Subsection */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fceddb] flex items-center justify-center text-[#c68a2c]">
                  <Gauge className="w-5 h-5 stroke-[2.2]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wide text-gray-900 uppercase">
                  KEYDATES
                </h3>
              </div>

              {/* Keydates List */}
              <ul className="space-y-3.5 pt-1 text-sm sm:text-base text-gray-700">
                {keydates.map((item, i) => (
                  <li key={i} className="flex items-center gap-2.5">
                    <CheckSquare className="w-4 h-4 text-[#c68a2c] fill-[#c68a2c]/20 shrink-0" />
                    <span>
                      <strong className="font-semibold text-gray-800">{item.label}</strong> {item.date}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

