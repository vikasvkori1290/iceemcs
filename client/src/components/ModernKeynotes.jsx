import React from 'react';
import { Mic, Linkedin, Clock, UserCheck, Sparkles } from 'lucide-react';

export default function ModernKeynotes({ onNavigate }) {
  const speakers = [
    {
      id: 1,
      name: 'Gnanapriya Chidambaranathan',
      role: 'Chair of the IEEE Communications Society (ComSoc), Bangalore Section Chapter, Karnataka, India.',
      affiliation: 'IEEE Communications Society',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Gnanapriya%20Chidambaranathan',
      isPlaceholder: false,
    },
    {
      id: 2,
      name: 'Dr. V B Murali Krishna',
      role: 'Department of Electrical Engineering, RA-III, Department of Scientific and Industrial Research (DSIR)- Common Research and Technology Facilitation Centre.',
      affiliation: 'DSIR • Electrical Engineering',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Dr%20V%20B%20Murali%20Krishna',
      isPlaceholder: false,
    },
    {
      id: 3,
      name: 'Keynote Speaker TBA',
      role: 'Distinguished International Keynote Speaker from premier global research universities.',
      affiliation: 'Global Academia',
      status: 'Announcing Soon',
      isPlaceholder: true,
    },
    {
      id: 4,
      name: 'Keynote Speaker TBA',
      role: 'Prominent Industrial Research Leader & AI/Semiconductor Technology Executive.',
      affiliation: 'Industry Pioneer',
      status: 'Confirmation in Progress',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="keynotes" className="py-20 sm:py-28 bg-white text-slate-800 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-700 font-bold text-xs uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5 text-amber-600" />
            <span>Distinguished Thought Leaders</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight">
            Keynote Speakers
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
            Eminent scientists and pioneering industry leaders delivering keynote addresses at ICEEMCS 2027.
          </p>
        </div>

        {/* 4-Card Responsive Grid with Circular Headshots */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {speakers.map((speaker) => {
            if (speaker.isPlaceholder) {
              return (
                <div
                  key={speaker.id}
                  className="bg-slate-50/80 rounded-2xl p-6 border-2 border-dashed border-slate-200 flex flex-col items-center justify-between text-center hover:border-amber-400 hover:bg-slate-50 transition-all duration-300 group"
                >
                  <div className="space-y-4 pt-4 flex flex-col items-center">
                    {/* Placeholder circular avatar */}
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-200/80 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 group-hover:scale-105 group-hover:text-amber-600 group-hover:border-amber-300 transition-all">
                      <Sparkles className="w-8 h-8 stroke-[1.8]" />
                    </div>

                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100/70 text-amber-800 text-[11px] font-bold tracking-wide">
                        {speaker.status}
                      </span>
                      <h3 className="font-extrabold text-[#0B192C] text-base sm:text-lg">
                        Speaker To Be Announced
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                        {speaker.role}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 w-full border-t border-slate-200/60 mt-4 text-[11px] text-slate-400 font-medium">
                    {speaker.affiliation}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={speaker.id}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 flex flex-col items-center text-center justify-between group hover:-translate-y-1"
              >
                <div className="space-y-4 w-full flex flex-col items-center">
                  {/* Circular Headshot with Oxford Navy & Amber Accent Ring */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 ring-4 ring-amber-500/20 group-hover:ring-amber-500/50 transition-all duration-300 shadow-md">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full rounded-full object-cover object-top"
                    />
                    <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#0B192C] text-amber-400 flex items-center justify-center shadow-md border-2 border-white">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Speaker Details */}
                  <div className="space-y-1.5 w-full">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                      {speaker.affiliation}
                    </span>
                    <h3 className="font-extrabold text-[#0B192C] text-base sm:text-lg leading-snug pt-1">
                      {speaker.name}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {speaker.role}
                    </p>
                  </div>
                </div>

                {/* LinkedIn Profile Button */}
                <div className="pt-6 w-full border-t border-slate-100 mt-5">
                  <a
                    href={speaker.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-slate-50 hover:bg-[#0077b5] text-slate-700 hover:text-white text-xs font-bold transition-all duration-200"
                    title={`View ${speaker.name}'s LinkedIn Profile`}
                  >
                    <Linkedin className="w-3.5 h-3.5 fill-current" />
                    <span>View LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

