import React, { useState, useMemo } from 'react';
import {
  Users,
  Award,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Building2,
  Search,
  Sparkles,
  BookOpen,
  Layers,
  Globe,
  FileCheck,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';

export default function CommitteeSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const chiefPatrons = [
    {
      name: 'Dr. K. C. Ramamurthy, IPS (Retd.)',
      role: 'Chairman',
      institution: 'CMR Group of Institutions',
      highlight: true,
    },
    {
      name: 'Dr. Sabitha Ramamurthy',
      role: 'Chancellor',
      institution: 'CMR University, Bengaluru',
      highlight: true,
    },
    {
      name: 'Shri. Jayadeep K R Reddy',
      role: 'Pro-Chancellor',
      institution: 'CMR University, Bengaluru',
      highlight: false,
    },
    {
      name: 'Dr. Tristha Ramamurthy',
      role: 'Provost',
      institution: 'CMR University, Bengaluru',
      highlight: false,
    },
    {
      name: 'Smt. Shreya Reddy',
      role: 'Director, Finance & Admin',
      institution: 'CMR Group of Institutions',
      highlight: false,
    },
  ];

  const committees = [
    {
      title: 'Patrons',
      category: 'leadership',
      badge: 'Apex Leadership',
      members: [
        {
          name: 'Dr. H. B. Raghavendra',
          role: 'Vice Chancellor, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Praveen R',
          role: 'Pro Vice Chancellor, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. K. E. Prakash',
          role: 'Registrar, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'General Chair',
      category: 'leadership',
      badge: 'Executive',
      members: [
        {
          name: 'Dr. N. Kannan',
          role: 'Dean, Lakeside Campus Director, School of Engineering and Technology (SOET), CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Honorary Chairs',
      category: 'leadership',
      badge: 'Honorary',
      members: [
        {
          name: 'Dr. S P Manikandan',
          role: 'Deputy Director, School of Engineering and Technology, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Kiran Kumari Patil',
          role: "President of the Institution's Innovation Council (IIC), CMR University, Bengaluru.",
        },
      ],
    },
    {
      title: 'Program Chairs',
      category: 'leadership',
      badge: 'Academics',
      members: [
        {
          name: 'Dr. Mallikarjun Kodabagi',
          role: 'Professor & Director IQAC, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Balachandra Pattanaik',
          role: 'Vice-Chair, IEEE Ethiopia Subsection.',
        },
      ],
    },
    {
      title: 'Conference Chairs',
      category: 'leadership',
      badge: 'Conference',
      members: [
        {
          name: 'Dr. K V Prasad',
          role: 'Professor & Head, Dept. of ECE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Om Prakash Chandermohan',
          role: 'Associate Professor, School of Management, OMBR Campus, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Organizing Chairs',
      category: 'leadership',
      badge: 'Organization',
      members: [
        {
          name: 'Dr. Bhagavant Kalyanrao Deshpande',
          role: 'Professor and HOD, Dept. of CSE (AI&ML), CMR University, Bengaluru.',
        },
        {
          name: 'Dr. D. N. Punith Kumar',
          role: 'Associate Professor & Head, Dept. of BSC, and Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Conveners',
      category: 'leadership',
      badge: 'Convening',
      members: [
        {
          name: 'Dr. Rubini P',
          role: 'Professor & Head, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Brijesh Mishra',
          role: 'Associate Professor, Dept. of ECE, CMR University Bengaluru.',
        },
      ],
    },
    {
      title: 'Coordinators',
      category: 'leadership',
      badge: 'Coordination',
      members: [
        {
          name: 'Dr. Mohammed Abdul Mateen',
          role: 'Associate Professor & Head, Dept. of ME, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Sudharshan Babu Pandava',
          role: 'Associate Professor, Dept. of CS & Technology, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Presentation Chair',
      category: 'leadership',
      badge: 'Sessions',
      members: [
        {
          name: 'Dr. K. P. Agrawal',
          role: 'Professor, Dept. of AI & ML, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Technical Program Committee Co-Chair',
      category: 'technical',
      badge: 'TPC Co-Chair',
      members: [
        {
          name: 'Dr. Pushpa Mala S',
          role: 'Treasurer: IEEE WiE, EXECOM Member: IEEE Bangalore Section.',
        },
      ],
    },
    {
      title: 'Technical Program Committee Chairs',
      category: 'technical',
      badge: 'TPC Leadership',
      members: [
        {
          name: 'Dr. Ravi Kumar Saidala',
          role: 'Associate Professor, Dept. of CSE – DS, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Prachi Gupta',
          role: 'Assistant Professor, Dept. of ECE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Technical Program Committee',
      category: 'technical',
      badge: 'Peer Review',
      members: [
        {
          name: 'Dr. Abdul Azeez',
          role: 'Associate Professor, Secretary, IEEE ITS Society, Bangalore Section.',
        },
        {
          name: 'Dr. S K Hiremath',
          role: 'Associate Professor, School of Engineering & Technology, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. S Elango',
          role: 'Associate Professor, Dept. of AI&ML, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Steering Committee',
      category: 'technical',
      badge: 'Strategic',
      members: [
        {
          name: 'Dr. G Glan Devadhas',
          role: 'Director, Research and Innovation (DORI), CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Andrews Samraj',
          role: 'Professor, Dept. CSE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Advisory Committee (CMRU)',
      category: 'advisory',
      badge: 'Internal Advisory',
      members: [
        {
          name: 'Prof. Rajat Bhatnagar',
          role: 'Professor of practice, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Parameswaran T',
          role: 'Professor, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Vijaya Bharathi M',
          role: 'Associate Professor, Dept. of ECE, School of Engineering and Technology, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Advisory Committee (Outside CMRU)',
      category: 'advisory',
      badge: 'External Experts',
      members: [
        {
          name: 'Dr. Prasuna VNP',
          role: 'Atria Institute of Technology, Bengaluru.',
        },
        {
          name: 'Dr. Abdul Azeez',
          role: 'Secretary, IEEE ITS society, Bangalore Section.',
        },
        {
          name: 'Dr. Priya Nandihal',
          role: 'Dayananda Sagar Academy of Technology and Management, Bengaluru.',
        },
        {
          name: 'Dr. Ranjit K. N',
          role: 'Maharaja Institute of Technology Thandavapura, Mysuru.',
        },
        {
          name: 'Dr. Kiran A Gupta',
          role: 'Dayananda Sagar College of Engineering, Bengaluru.',
        },
        {
          name: 'Dr. Basanti Ghanti',
          role: 'Sharnbasva University, Kalaburagi.',
        },
      ],
    },
    {
      title: 'Publication and Editorial Committee',
      category: 'operations',
      badge: 'Editorial',
      members: [
        {
          name: 'Dr. Om Prakash Chandermohan',
          role: 'Associate Professor, School of Management, OMBR Campus, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Brijesh Mishra',
          role: 'Associate Professor, Dept. of ECE, CMR University Bengaluru.',
        },
        {
          name: 'Dr. Gyanappa A Walikar',
          role: 'Associate Professor, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Anup P Athresh',
          role: 'Associate Professor, Dept. of ME, SOET, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Finance and Audit Committee',
      category: 'operations',
      badge: 'Finance',
      members: [
        {
          name: 'Dr. Rubini P',
          role: 'Professor & Head, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Shweta Gupta',
          role: 'Associate Professor, Dept. of AI&ML, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Registration Committee',
      category: 'operations',
      badge: 'Registration',
      members: [
        {
          name: 'Dr. V N Sudheer',
          role: 'Associate Professor, English under School of Liberal Studies/DCCC, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Prajwala',
          role: "Active Member in Institution’s Innovation Council (IIC), CMR University, Bengaluru.",
        },
      ],
    },
    {
      title: 'Copyrights Committee',
      category: 'operations',
      badge: 'Legal & IPR',
      members: [
        {
          name: 'Dr. N Pankajam',
          role: 'Assistant Professor, Dept. of BS & Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Accommodation and Transport',
      category: 'operations',
      badge: 'Hospitality',
      members: [
        {
          name: 'Dr. Prabhakar K',
          role: 'Assistant Professor, Dept. of CSE (AI&ML), CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Kiran G',
          role: 'Assistant Professor, Dept. of ECE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'VISA / Foreign Affairs Committee',
      category: 'operations',
      badge: 'International',
      members: [
        {
          name: 'Dr. L. Arokia Jesu Prabhu',
          role: 'Associate Professor, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Jayarajan K',
          role: 'Associate Professor, Dept. of CSE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Certificate Committee',
      category: 'operations',
      badge: 'Certificates',
      members: [
        {
          name: 'Dr. Sreevidya Varma',
          role: 'Associate Professor, Dept. of BS&H, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Motahar Sk',
          role: 'Assistant Professor, Dept. of BS & Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Plagiarism & Conference Scope Committee',
      category: 'operations',
      badge: 'Ethics & Scope',
      members: [
        {
          name: 'Dr. Naveen Joshi',
          role: 'Assistant Professor, Dept. of BS & Humanities, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Vishwanath Savanur',
          role: 'Assistant Professor, Dept. of BS & and Humanities, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Publicity Committee',
      category: 'operations',
      badge: 'Outreach',
      members: [
        {
          name: 'Dr. Sharmila Ragaventhiran',
          role: 'Assistant Professor, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Dr. Amrita Singh',
          role: 'Assistant Professor, Dept. of ECE, CMR University, Bengaluru.',
        },
      ],
    },
    {
      title: 'Web Development Committee',
      category: 'operations',
      badge: 'Digital Portal',
      members: [
        {
          name: 'Mr. Rohit Kumar',
          role: 'Faculty Member, Dept. of CSE, CMR University, Bengaluru.',
        },
        {
          name: 'Mrs. Hanydas S H',
          role: 'Assistant Professor, Dept. of IT, CMR University, Bengaluru.',
        },
      ],
    },
  ];

  const categories = [
    { id: 'all', label: 'All Committees', count: committees.length },
    {
      id: 'leadership',
      label: 'Chairs & Leadership',
      count: committees.filter((c) => c.category === 'leadership').length,
    },
    {
      id: 'technical',
      label: 'Technical Program',
      count: committees.filter((c) => c.category === 'technical').length,
    },
    {
      id: 'advisory',
      label: 'Advisory Boards',
      count: committees.filter((c) => c.category === 'advisory').length,
    },
    {
      id: 'operations',
      label: 'Operations & Logistics',
      count: committees.filter((c) => c.category === 'operations').length,
    },
  ];

  const filteredCommittees = useMemo(() => {
    return committees.filter((committee) => {
      const matchesCategory =
        activeCategory === 'all' || committee.category === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = committee.title.toLowerCase().includes(q);
      const inMembers = committee.members.some(
        (m) =>
          m.name.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)
      );

      return inTitle || inMembers;
    });
  }, [committees, activeCategory, searchQuery]);

  return (
    <section id="committee" className="min-h-screen bg-slate-50">
      {/* 1. Academic Header Banner */}
      <div className="relative w-full h-44 sm:h-52 md:h-64 overflow-hidden bg-ocean-deep">
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80"
          alt="Auditorium Banner"
          className="w-full h-full object-cover filter brightness-35 contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-ocean-deep/75 to-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ocean-blue/40 text-ocean-sky font-bold text-xs uppercase tracking-widest border border-ocean-cyan/40 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-ocean-cyan" />
            Governance & Leadership
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Committees
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-xl mt-2 hidden sm:block">
            Distinguished academicians, industry visionaries, and researchers guiding ICEEMCS 2027.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-12">
        {/* 2. Chief Patrons - Premium Featured Card Grid (Eliminates Negative Space) */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ocean-blue mb-1">
                <Award className="w-4 h-4 text-ocean-cyan" />
                <span>Apex Governance</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-ocean-deep">
                Chief Patrons
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-ocean-ice/80 px-3 py-1 rounded-full border border-ocean-sky/40 self-start sm:self-auto">
              5 Dignitaries
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-6">
            {chiefPatrons.map((patron, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between p-5 rounded-xl bg-linear-to-b from-white to-slate-50/70 border border-slate-200/80 hover:border-ocean-blue hover:shadow-md transition-all duration-200"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-ocean-ice text-ocean-blue flex items-center justify-center font-bold text-sm shadow-2xs group-hover:bg-ocean-deep group-hover:text-ocean-cyan transition-colors">
                    <UserCheck className="w-5 h-5 stroke-2" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-ocean-deep group-hover:text-ocean-blue leading-snug">
                      {patron.name}
                    </h3>
                    <p className="text-xs font-bold text-ocean-blue mt-1.5">
                      {patron.role}
                    </p>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {patron.institution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Interactive Filter Tabs & Search Bar */}
        <div className="space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-ocean-deep text-white shadow-sm'
                        : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isActive
                          ? 'bg-ocean-blue text-white'
                          : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[280px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search committee or member..."
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-ocean-blue focus:ring-2 focus:ring-ocean-cyan/20 shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong>{filteredCommittees.length}</strong> committee panels
            </span>
            {searchQuery && (
              <span>
                Matching filter: "<strong>{searchQuery}</strong>"
              </span>
            )}
          </div>
        </div>

        {/* 4. Well-Aligned Committee Cards Grid (Tight, Structured, Zero Negative Space) */}
        {filteredCommittees.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 space-y-3">
            <Users className="w-10 h-10 text-slate-300 mx-auto" />
            <h4 className="text-base font-bold text-slate-800">
              No matching committees or members found
            </h4>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              We couldn't find anything matching your search term. Try another keyword or clear the search.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-2 px-4 py-2 bg-ocean-blue text-white text-xs font-bold rounded-lg cursor-pointer hover:bg-ocean-deep transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {filteredCommittees.map((committee, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-ocean-blue/50 transition-all duration-200 flex flex-col justify-between overflow-hidden group"
              >
                {/* Card Header with Top Accent Strip */}
                <div>
                  <div className="h-1.5 w-full bg-linear-to-r from-ocean-deep via-ocean-blue to-ocean-cyan" />
                  <div className="p-5 pb-3.5 border-b border-slate-100 flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-ocean-blue bg-ocean-ice px-2 py-0.5 rounded-md inline-block">
                        {committee.badge}
                      </span>
                      <h3 className="text-base sm:text-lg font-black text-ocean-deep leading-snug pt-0.5">
                        {committee.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full shrink-0">
                      {committee.members.length}{' '}
                      {committee.members.length === 1 ? 'Member' : 'Members'}
                    </span>
                  </div>

                  {/* Members List Inside Card */}
                  <div className="p-5 space-y-4 divide-y divide-slate-100">
                    {committee.members.map((member, mIdx) => (
                      <div
                        key={mIdx}
                        className={`${
                          mIdx > 0 ? 'pt-4' : ''
                        } flex items-start gap-3`}
                      >
                        <div className="w-7 h-7 rounded-lg bg-ocean-ice/80 text-ocean-blue flex items-center justify-center font-black text-xs shrink-0 mt-0.5">
                          {member.name.replace('Dr. ', '').replace('Prof. ', '').charAt(0)}
                        </div>
                        <div className="space-y-0.5 flex-1 min-w-0">
                          <p className="font-extrabold text-slate-900 text-sm leading-snug group-hover:text-ocean-deep">
                            {member.name}
                          </p>
                          <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                            {member.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer / Institutional Tag */}
                <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 text-[11px] text-slate-500 font-medium flex items-center justify-between">
                  <span>ICEEMCS 2027 Committee</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-ocean-cyan" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
