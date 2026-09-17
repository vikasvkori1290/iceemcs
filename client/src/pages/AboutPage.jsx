import React from 'react';
import { Gauge, CheckSquare, Eye, Target, CheckCircle, BookOpen } from 'lucide-react';

export default function AboutPage({ onNavigate }) {
  const keydates = [
    { label: 'Start Submission:', date: '25th July 2026.' },
    { label: 'Last date of Submission:', date: '5th Feb 2027.' },
    { label: 'Acceptance Date:', date: '10th April 2027.' },
  ];

  const visionPoints = [
    'Cultivate world-class scientific rigor through cross-border collaboration and peer review.',
    'Champion transformative research bridging electrical technologies, AI computing, and modern management.',
    'Build sustainable interdisciplinary pathways connecting academic breakthroughs directly with global industries.',
  ];

  const missionPoints = [
    'Deliver an equitable, prestigious presentation platform for emerging researchers and distinguished scholars.',
    'Maintain rigorous publication integrity adhering strictly to IEEE and global indexing standards.',
    'Foster experiential learning, ethical technological advancements, and high-impact patentable discoveries.',
  ];

  return (
    <div id="about-page" className="bg-white min-h-screen">
      {/* 1. Header Banner with Soldering Tech Background & Breadcrumbs */}
      <div className="relative w-full h-44 sm:h-52 md:h-64 overflow-hidden bg-ocean-deep">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
          alt="About Banner"
          className="w-full h-full object-cover filter brightness-50"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-ocean-deep/70 to-black/40" />

        {/* Overlapping White Breadcrumb Box */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-11/12 max-w-md bg-white shadow-md border-t border-gray-100 py-4 px-6 text-center rounded-t-sm z-10">
          <h1 className="text-2xl sm:text-3xl font-black text-ocean-deep uppercase tracking-tight mb-1">
            ABOUT
          </h1>
          <div className="text-xs sm:text-sm font-medium tracking-wide text-gray-500 flex items-center justify-center gap-2">
            <button
              onClick={() => onNavigate?.('HOME')}
              className="hover:text-ocean-blue transition-colors cursor-pointer text-ocean-blue font-semibold"
            >
              Home
            </button>
            <span className="text-gray-300">/</span>
            <span className="text-ocean-blue font-semibold">Pages</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700">About</span>
          </div>
        </div>
      </div>

      {/* 2. Main University Profile Section */}
      <section className="pt-16 pb-16 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Campus Image */}
          <div className="lg:col-span-5 relative mt-2">
            {/* University Campus Image */}
            <div className="relative z-10 overflow-hidden shadow-lg bg-gray-100 rounded-lg">
              <img
                src="/cmr-university.png"
                alt="CMR University Campus Building"
                className="w-full h-80 sm:h-105 object-cover"
              />
            </div>
          </div>

          {/* Right: ABOUT CMR UNIVERSITY Content */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-ocean-blue tracking-tight uppercase leading-snug">
              ABOUT CMR UNIVERSITY
            </h2>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
              <strong className="font-semibold text-ocean-deep">CMR University (CMRU), Bengaluru</strong>, established under the CMR University Act, 2013 (Karnataka Act No. 45 of 2013), is a multidisciplinary private university committed to academic excellence, innovation, research, and holistic education. The University offers undergraduate, postgraduate, and doctoral programmes across Engineering, Management, Computer Science, Law, Design, Architecture, Commerce, Economics, Social Sciences, Humanities, and other emerging disciplines.
            </p>

            <p className="text-gray-700 leading-relaxed text-sm sm:text-base font-normal">
              With a strong emphasis on research, industry collaboration, entrepreneurship, and experiential learning, <strong className="font-semibold text-ocean-deep">CMR University</strong> provides a dynamic academic environment that nurtures creativity, critical thinking, and leadership. The University is dedicated to preparing globally competent professionals capable of addressing contemporary technological and societal challenges.
            </p>

            {/* Conference Overview & Keydates Section */}
            <div className="pt-6 border-t border-gray-100 space-y-5">
              <h3 className="text-xl sm:text-2xl font-bold text-ocean-deep uppercase">
                ABOUT CONFERENCE (ICEEMCS 2027)
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base font-normal">
                The 1<sup>st</sup> International Conference on Electrical, Electronics, Management and Computer Sciences (ICEEMCS) is scheduled to take place on the 13th and 14th of July, 2027, at CMRU, Bangalore, Karnataka, India. This event aims to unite researchers, academicians, and industry professionals from around the world who are tackling current challenges in science and engineering.
              </p>

              {/* Keydates List */}
              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-ocean-ice flex items-center justify-center text-ocean-blue">
                    <Gauge className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold tracking-wide text-ocean-deep uppercase">
                    KEYDATES
                  </h4>
                </div>

                <ul className="space-y-2.5 pt-1 text-sm sm:text-base text-gray-700">
                  {keydates.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <CheckSquare className="w-4 h-4 text-ocean-blue fill-ocean-cyan/20 shrink-0" />
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

      {/* 3. Vision & Mission Cards Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-ocean-blue uppercase tracking-wider block">
              Institutional Core Values
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ocean-deep">
              Vision & Mission Framework
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Feature Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200/90 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-deep text-ocean-cyan flex items-center justify-center shadow-md shrink-0">
                  <Eye className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ocean-deep tracking-tight">
                    Our Vision
                  </h4>
                  <p className="text-xs font-semibold text-ocean-blue uppercase tracking-wider">
                    Global Scientific Impact
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                To be recognized internationally as a catalyst for cross-disciplinary research that empowers next-generation scholars to innovate ethical, transformative technologies.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {visionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-ocean-cyan shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission Feature Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-slate-200/90 relative overflow-hidden">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-ocean-deep text-ocean-sky flex items-center justify-center shadow-md shrink-0">
                  <Target className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-ocean-deep tracking-tight">
                    Our Mission
                  </h4>
                  <p className="text-xs font-semibold text-ocean-blue uppercase tracking-wider">
                    Fostering Innovation Ecosystem
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 mb-5 leading-relaxed">
                To cultivate an inclusive and rigorous academic ecosystem that values scholarly integrity, accelerates deep-tech industry partnerships, and rewards ingenuity.
              </p>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-700">
                {missionPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-ocean-sky shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
