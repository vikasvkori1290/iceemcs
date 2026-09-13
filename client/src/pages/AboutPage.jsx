import React from 'react';
import { Gauge, CheckSquare } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const keydates = [
    { label: 'Start Submission:', date: '25th July 2026.' },
    { label: 'Last date of Submission:', date: '5th Feb 2027.' },
    { label: 'Acceptance Date:', date: '10th April 2027.' },
  ];

  return (
    <div id="about-page" className="bg-white min-h-screen">
      {/* 1. Header Banner with Soldering Tech Background & Breadcrumbs */}
      <div className="relative w-full h-44 sm:h-52 md:h-64 overflow-hidden bg-slate-900">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
          alt="About Banner"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-black/40" />

        {/* Overlapping White Breadcrumb Box matching screenshot */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-11/12 max-w-md bg-white shadow-md border-t border-gray-100 py-4 px-6 text-center rounded-t-sm z-10">
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-1">
            ABOUT
          </h1>
          <div className="text-xs sm:text-sm font-medium tracking-wide text-gray-500 flex items-center justify-center gap-2">
            <button
              onClick={() => onNavigate?.('HOME')}
              className="hover:text-[#c68a2c] transition-colors cursor-pointer text-[#c68a2c]"
            >
              Home
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-[#c68a2c]">Pages</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700">About</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <section className="pt-16 pb-20 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Campus Image with Decorative Offset Gold Frame */}
          <div className="lg:col-span-5 relative mt-2">
            {/* Offset Gold Border Frame */}
            <div className="absolute -top-4 -left-4 w-48 sm:w-64 h-72 sm:h-96 border-[3px] border-[#c68a2c] -z-0 pointer-events-none" />

            {/* University Campus Image */}
            <div className="relative z-10 overflow-hidden shadow-lg bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80"
                alt="CMR University Campus Archway and Buildings"
                className="w-full h-[320px] sm:h-[420px] object-cover"
              />
            </div>
          </div>

          {/* Right: ABOUT CMR UNIVERSITY Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#c68a2c] tracking-tight uppercase leading-snug">
              ABOUT CMR UNIVERSITY
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
              <strong className="font-semibold text-gray-900">CMR University (CMRU), Bengaluru</strong>, established under the CMR University Act, 2013 (Karnataka Act No. 45 of 2013), is a multidisciplinary private university committed to academic excellence, innovation, research, and holistic education. The University offers undergraduate, postgraduate, and doctoral programmes across Engineering, Management, Computer Science, Law, Design, Architecture, Commerce, Economics, Social Sciences, Humanities, and other emerging disciplines.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
              With a strong emphasis on research, industry collaboration, entrepreneurship, and experiential learning, <strong className="font-semibold text-gray-900">CMR University</strong> provides a dynamic academic environment that nurtures creativity, critical thinking, and leadership. The University is dedicated to preparing globally competent professionals capable of addressing contemporary technological and societal challenges.
            </p>

            {/* Conference Overview & Keydates Section */}
            <div className="pt-6 border-t border-gray-100 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 uppercase">
                ABOUT CONFERENCE (ICEEMCS 2027)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-normal">
                The 1<sup>st</sup> International Conference on Electrical, Electronics, Management and Computer Sciences (ICEEMCS) is scheduled to take place on the 13th and 14th of July, 2027, at CMRU, Bangalore, Karnataka, India. This event aims to unite researchers, academicians, and industry professionals from around the world who are tackling current challenges in science and engineering.
              </p>

              {/* Keydates List */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#fceddb] flex items-center justify-center text-[#c68a2c]">
                    <Gauge className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold tracking-wide text-gray-900 uppercase">
                    KEYDATES
                  </h4>
                </div>

                <ul className="space-y-2.5 pt-1 text-sm sm:text-base text-gray-700">
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
    </div>
  );
}

