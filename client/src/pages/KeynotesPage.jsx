import React, { useState, useEffect } from 'react';
import {
  Mic,
  Linkedin,
  UserCheck,
  Sparkles,
  ExternalLink,
  BookOpen,
  X,
  Award,
  Calendar,
  Building,
  GraduationCap,
} from 'lucide-react';

export default function KeynotesPage({ onNavigate }) {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedSpeaker(null);
      }
    };
    if (selectedSpeaker) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedSpeaker]);

  const speakers = [
    {
      id: 1,
      name: 'Gnanapriya Chidambaranathan',
      title: 'Distinguished Keynote Speaker & Senior Member, IEEE',
      role: 'Chair of the IEEE Communications Society (ComSoc), Bangalore Section Chapter, Karnataka, India.',
      affiliation: 'IEEE Communications Society (ComSoc) Bangalore Section',
      image: '/gnanapriya.png',
      linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Gnanapriya%20Chidambaranathan',
      scholarUrl: 'https://scholar.google.com/scholar?q=Gnanapriya+Chidambaranathan',
      keynoteTitle: 'Next-Generation Intelligent Communications: Architectures, Protocols, and AI Synergy in 6G',
      keynoteDate: 'Day 1 • July 13, 2027 • 10:30 AM IST',
      bio: 'Gnanapriya Chidambaranathan is an eminent technology leader, researcher, and IEEE Senior Member with over two decades of experience in telecom engineering, distributed network architecture, and cloud communication systems. As Chair of the IEEE Communications Society (ComSoc) Bangalore Chapter, she spearheads cutting-edge technical programs and fosters collaboration between tier-one research institutes and global technology conglomerates.',
      researchInterests: [
        '6G Wireless Networks',
        'AI in Telecommunications',
        'Edge Computing & SDN',
        'Optical & Satellite Communication',
      ],
      isPlaceholder: false,
    },
    {
      id: 2,
      name: 'Dr. V B Murali Krishna',
      title: 'Senior Research Fellow (RA-III) & Power Systems Specialist',
      role: 'Department of Electrical Engineering, RA-III, Department of Scientific and Industrial Research (DSIR)- Common Research and Technology Development Hub (CRTDH), Electronics and Renewable Sector, National Institute of Technology.',
      affiliation: 'DSIR-CRTDH • National Institute of Technology',
      image: '/murali-krishna.png',
      linkedinUrl: 'https://www.linkedin.com/search/results/all/?keywords=Dr%20V%20B%20Murali%20Krishna',
      scholarUrl: 'https://scholar.google.com/scholar?q=Dr+V+B+Murali+Krishna+NIT',
      keynoteTitle: 'Power Electronics Innovations & Grid Resiliency for High-Capacity Electric Vehicle Fleets',
      keynoteDate: 'Day 2 • July 14, 2027 • 10:00 AM IST',
      bio: 'Dr. V B Murali Krishna is a distinguished scholar in Electrical Engineering actively contributing to the Common Research and Technology Development Hub (CRTDH), sponsored by the Department of Scientific and Industrial Research (DSIR), Government of India. His research focuses on next-generation power electronics converters, wide-bandgap semiconductors, EV fast-charging topologies, and grid resiliency against high renewable penetration.',
      researchInterests: [
        'High-Efficiency Power Converters',
        'Smart Grid & Energy Storage',
        'EV Fast Charging Infrastructure',
        'Computational Intelligence in Drives',
      ],
      isPlaceholder: false,
    },
    {
      id: 3,
      name: 'Distinguished International Speaker',
      title: 'Global Keynote Speaker (Confirmation in Progress)',
      role: 'Senior Professor & Lab Director from Premier International Research University (North America / Europe).',
      affiliation: 'International Research Consortium',
      keynoteTitle: 'Cognitive Computing & Foundation Models in Autonomous Enterprise Systems',
      keynoteDate: 'Day 1 • July 13, 2027 • 02:00 PM IST',
      status: 'Announcing Soon',
      isPlaceholder: true,
    },
    {
      id: 4,
      name: 'Industrial Research Pioneer',
      title: 'Chief Technology Officer & AI Executive',
      role: 'Prominent Industrial Research Leader & AI/Semiconductor Technology Executive.',
      affiliation: 'Silicon Valley / Bangalore Tech Corridor',
      keynoteTitle: 'Silicon Hardware Acceleration for Generative AI & Sustainable Computing',
      keynoteDate: 'Day 2 • July 14, 2027 • 02:30 PM IST',
      status: 'Confirmation in Progress',
      isPlaceholder: true,
    },
  ];

  return (
    <div id="keynotes-page" className="bg-slate-50 min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 font-bold text-xs uppercase tracking-wider">
            <Mic className="w-3.5 h-3.5 text-amber-600" />
            <span>Distinguished Thought Leaders</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B192C] tracking-tight uppercase">
            Keynote Speakers
          </h1>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            ICEEMCS 2027 brings together globally renowned scientists, industry visionaries, and IEEE leaders.
            Click on any speaker to view their full biographical profile, keynote topic, and research credentials.
          </p>
        </div>

        {/* 4-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-stretch">
          {speakers.map((speaker) => {
            if (speaker.isPlaceholder) {
              return (
                <div
                  key={speaker.id}
                  className="bg-white rounded-2xl p-6 border-2 border-dashed border-slate-300/80 flex flex-col items-center justify-between text-center hover:border-amber-400 transition-all duration-300 shadow-xs"
                >
                  <div className="space-y-4 pt-4 flex flex-col items-center">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-slate-100 border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400">
                      <Sparkles className="w-8 h-8 stroke-[1.8]" />
                    </div>

                    <div className="space-y-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100/80 text-amber-900 text-[11px] font-bold tracking-wide">
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

                  <div className="pt-6 w-full border-t border-slate-150 mt-4 text-[11px] text-slate-400 font-semibold">
                    {speaker.affiliation}
                  </div>
                </div>
              );
            }

            return (
              <div
                key={speaker.id}
                onClick={() => setSelectedSpeaker(speaker)}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 flex flex-col items-center text-center justify-between group hover:-translate-y-1.5 cursor-pointer relative"
              >
                {/* View Profile Badge on hover */}
                <div className="space-y-4 w-full flex flex-col items-center">
                  {/* Circular Headshot with Oxford Navy & Amber Accent Ring */}
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 ring-4 ring-amber-500/20 group-hover:ring-amber-500/70 transition-all duration-300 shadow-md">
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
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200/60">
                      {speaker.affiliation}
                    </span>
                    <h2 className="font-extrabold text-[#0B192C] text-base sm:text-lg leading-snug pt-1 group-hover:text-amber-600 transition-colors">
                      {speaker.name}
                    </h2>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-3">
                      {speaker.role}
                    </p>
                  </div>
                </div>

                {/* Card Action: View Keynote Profile */}
                <div className="pt-5 w-full border-t border-slate-100 mt-5 space-y-2">
                  <button
                    type="button"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-amber-50 group-hover:bg-amber-500 text-amber-900 group-hover:text-slate-950 text-xs font-bold transition-all duration-200"
                  >
                    <span>View Keynote Profile</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center justify-center gap-3 pt-1 text-slate-400 text-xs">
                    <span className="text-[11px] text-slate-500 font-medium">Click card for abstract & bio</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Speaker Profile Modal Popup */}
      {selectedSpeaker && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedSpeaker(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Oxford Navy Background */}
            <div className="bg-[#0B192C] text-white p-6 sm:p-7 relative">
              <button
                onClick={() => setSelectedSpeaker(null)}
                className="absolute top-5 right-5 text-slate-300 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
                title="Close dialog (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                {/* Speaker Portrait */}
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full ring-4 ring-amber-400/60 shrink-0 overflow-hidden shadow-xl bg-slate-800">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="text-center sm:text-left space-y-1.5 flex-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[11px] font-bold uppercase tracking-wider border border-amber-400/30">
                    <Award className="w-3 h-3" />
                    <span>Distinguished Keynote Speaker</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {selectedSpeaker.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                    {selectedSpeaker.title}
                  </p>
                  <p className="text-xs text-amber-400/90 font-medium">
                    {selectedSpeaker.affiliation}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6 text-slate-700 text-xs sm:text-sm">
              {/* Keynote Address Box */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold text-xs uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 text-amber-600" />
                  <span>Keynote Address Title</span>
                </div>
                <h4 className="text-sm sm:text-base font-extrabold text-[#0B192C]">
                  "{selectedSpeaker.keynoteTitle}"
                </h4>
                {selectedSpeaker.keynoteDate && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-600 pt-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-600" />
                    <span className="font-semibold">{selectedSpeaker.keynoteDate}</span>
                  </div>
                )}
              </div>

              {/* Speaker Biography */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-500" />
                  <span>Biographical Overview</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedSpeaker.bio}
                </p>
              </div>

              {/* Research Areas / Focus */}
              {selectedSpeaker.researchInterests && (
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-slate-500" />
                    <span>Key Research & Focus Domains</span>
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedSpeaker.researchInterests.map((interest, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200/70"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* External Profiles / Action Links */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {selectedSpeaker.linkedinUrl && (
                    <a
                      href={selectedSpeaker.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0077b5] text-white text-xs font-bold hover:bg-[#006097] transition-colors shadow-xs"
                    >
                      <Linkedin className="w-3.5 h-3.5 fill-current" />
                      <span>LinkedIn Profile</span>
                    </a>
                  )}

                  {selectedSpeaker.scholarUrl && (
                    <a
                      href={selectedSpeaker.scholarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors border border-slate-200"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                      <span>Google Scholar</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                >
                  Close Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
