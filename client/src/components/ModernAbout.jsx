import React from 'react';
import { Eye, Target, CheckCircle, ArrowUpRight, Award, BookOpen } from 'lucide-react';

export default function ModernAbout({ onNavigate }) {
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
    <section id="about" className="py-20 sm:py-28 bg-slate-50 text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold text-xs uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            <span>Academic Excellence & Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight">
            About CMR University & ICEEMCS
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Advancing cutting-edge education, human development, and scientific inquiry through global academic forums.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: CMR University Profile & Photo */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
              <img
                src="/cmr-university.png"
                alt="CMR University Campus Building"
                className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B192C]/90 via-[#0B192C]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  Main Lakeside Campus
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  CMR University, Bengaluru
                </h3>
                <p className="text-xs text-slate-200">
                  Karnataka Act No. 45 of 2013 • Multidisciplinary Academic Center
                </p>
              </div>
            </div>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="font-semibold text-slate-900">CMR University (CMRU)</strong>, Bengaluru, is a premier private university dedicated to fostering creativity, holistic education, and groundbreaking research. Across disciplines spanning Engineering, Management, and Computer Sciences, the University equips scholars to tackle complex technological hurdles.
              </p>
              <p>
                <strong className="font-semibold text-slate-900">ICEEMCS 2027</strong> represents the flagship technical symposium convened by the School of Engineering and Technology, creating an international springboard for forward-looking engineering paradigms.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-500 font-semibold border-t border-slate-200">
              <span>• UGC Recognized</span>
              <span>• IEEE Student Branch Chapter</span>
              <span>• State-of-the-Art Research Centers</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Vision & Mission Feature Cards */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Vision Feature Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/90 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/5 rounded-bl-full pointer-events-none group-hover:bg-amber-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-amber-400 flex items-center justify-center shadow-md shrink-0">
                  <Eye className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B192C] tracking-tight">
                    Our Vision
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider">
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
                    <CheckCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission Feature Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/90 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/5 rounded-bl-full pointer-events-none group-hover:bg-blue-500/10 transition-colors" />
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B192C] text-blue-400 flex items-center justify-center shadow-md shrink-0">
                  <Target className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B192C] tracking-tight">
                    Our Mission
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 uppercase tracking-wider">
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
                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
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

