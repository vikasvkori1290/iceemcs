import React, { useState, useMemo } from 'react';
import {
  Search,
  FileText,
  Download,
  CheckCircle2,
  Cpu,
  Zap,
  Briefcase,
  Layers,
  ArrowRight,
  Sparkles,
  X,
} from 'lucide-react';

export default function TopicsSection({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');
  const [downloadNotice, setDownloadNotice] = useState(null);

  const tracksData = [
    {
      id: 'cs',
      trackNum: 'Track 1',
      title: 'Computer Science & Artificial Intelligence',
      shortTitle: 'CS & AI',
      icon: Cpu,
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      accentBorder: 'border-blue-500',
      description:
        'Advancements in intelligent systems, machine learning algorithms, cybersecurity, and distributed cloud computing infrastructure.',
      topics: [
        'Artificial Intelligence, Machine Learning and Deep Learning Architectures',
        'Natural Language Processing (NLP) & Large Language Models (LLMs)',
        'Computer Vision, Image Processing and Pattern Recognition',
        'Cyber Security, Cryptography, Blockchain and Digital Forensics',
        'Cloud Computing, Edge AI and Distributed High-Performance Systems',
        'Internet of Things (IoT), Sensor Networks and Smart Applications',
        'Software Engineering, DevOps, Agile Methodologies and Reliability',
        'Big Data Analytics, Business Intelligence and Data Mining',
        'Human-Computer Interaction (HCI), Multimedia, AR/VR and Metaverse',
        'Quantum Computing, Algorithms and Emerging Computational Paradigms',
      ],
    },
    {
      id: 'ee',
      trackNum: 'Track 2',
      title: 'Electrical & Electronics Engineering',
      shortTitle: 'Electrical & Electronics',
      icon: Zap,
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      accentBorder: 'border-amber-500',
      description:
        'Innovations in VLSI, power electronics, next-generation wireless communications, renewable grids, and smart hardware systems.',
      topics: [
        'VLSI Design, Embedded Systems and Semiconductor Technologies',
        'Smart Power Systems, Microgrids and Renewable Energy Integration',
        'Power Electronics, Intelligent Drives and Energy Management',
        'Electric Vehicles (EV), Battery Management and Fast Charging Infrastructure',
        'Next-Generation Wireless Communications, 5G/6G and Satellite Networks',
        'RF, Microwave, Antenna Engineering and Millimeter Wave Technologies',
        'Robotics, Mechatronics, Intelligent Control and Industrial Automation',
        'Signal Processing, Audio/Video Coding and Biomedical Signal Analysis',
        'Nanoelectronics, Photonics, MEMS and Optoelectronic Devices',
        'Sensor Integration, Hardware Security and Low-Power Embedded Devices',
      ],
    },
    {
      id: 'mgmt',
      trackNum: 'Track 3',
      title: 'Management & Information Systems',
      shortTitle: 'Management & Info Systems',
      icon: Briefcase,
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      accentBorder: 'border-emerald-500',
      description:
        'Strategies for digital business transformation, supply chain optimization, FinTech advancements, and technology governance.',
      topics: [
        'Digital Transformation, Enterprise Architecture and Smart Management',
        'Business Analytics, Big Data Strategies and Predictive Decision Modeling',
        'Financial Technologies (FinTech), Decentralized Finance (DeFi) & Risk Management',
        'Supply Chain Management, Industry 4.0 and Smart Logistics Operations',
        'Entrepreneurship, Startup Ecosystems and Technology Incubation',
        'Digital Marketing, Consumer Behaviour Analytics and E-Commerce',
        'Strategic Human Capital Management and Organizational Agility',
        'Sustainable Business Practices, ESG Compliance and Corporate Governance',
        'Knowledge Management, ERP Systems and Enterprise Information Systems',
        'Public Policy, Intellectual Property Rights and E-Governance in Technology',
      ],
    },
  ];

  // Filter topics based on active tab and search query
  const filteredTracks = useMemo(() => {
    return tracksData
      .filter((track) => activeTab === 'all' || track.id === activeTab)
      .map((track) => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return track;

        const matchingTopics = track.topics.filter(
          (topic) =>
            topic.toLowerCase().includes(query) ||
            track.title.toLowerCase().includes(query)
        );

        return {
          ...track,
          topics: matchingTopics,
        };
      })
      .filter((track) => track.topics.length > 0);
  }, [tracksData, activeTab, searchQuery]);

  const totalMatchingTopics = useMemo(() => {
    return filteredTracks.reduce((sum, track) => sum + track.topics.length, 0);
  }, [filteredTracks]);

  // Handle simulated downloads with client-side blob
  const handleDownload = (type) => {
    let filename = '';
    let content = '';

    if (type === 'brochure') {
      filename = 'ICEEMCS-2027-Call-For-Papers-Brochure.pdf';
      content =
        'ICEEMCS 2027 - International Conference on Electrical, Electronics, Management and Computer Sciences\nDates: July 13-14, 2027 | Bengaluru, India\nOrganized by: CMR University\nSubmission Deadline: February 05, 2027\n\nCall for Papers Brochure (Official Preview Document)';
    } else {
      filename = 'ICEEMCS-2027-Paper-Template-LaTeX-DOCX.zip';
      content =
        'ICEEMCS 2027 Official Paper Formatting Template (.DOCX & LaTeX format package)\nMargins: Standard double-column IEEE/Conference format\nPage Limit: 6 pages including figures and references.';
    }

    const blob = new Blob([content], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setDownloadNotice(
      `Downloaded: ${filename}`
    );
    setTimeout(() => setDownloadNotice(null), 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Top Header Banner with Circuit / Soldering Tech Overlay */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-[#08121f]">
        <img
          src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80"
          alt="Conference Banner"
          className="w-full h-full object-cover filter brightness-40 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08121f] via-slate-900/60 to-black/50" />

        {/* Hero Title & Subtitle inside banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs uppercase tracking-widest border border-amber-400/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Call for Papers & Tracks
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Conference Topics & Tracks
          </h1>
          <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mt-2 hidden sm:block">
            Explore multidisciplinary research areas across Electrical, Electronics, Management, and Computer Sciences.
          </p>
        </div>

        {/* Overlapping White Breadcrumb Box */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-11/12 max-w-lg bg-white shadow-lg border border-slate-200/80 py-2.5 sm:py-3 px-6 text-center rounded-t-lg z-20">
          <div className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 flex items-center justify-center gap-2">
            <button
              onClick={() => onNavigate?.('HOME')}
              className="hover:text-amber-600 transition-colors cursor-pointer text-slate-600 font-semibold"
            >
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-amber-600 font-bold">Call for Papers</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-medium">Topics</span>
          </div>
        </div>
      </div>

      {/* 2. Main Content Area */}
      <section className="pt-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Action Badges for Downloads */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#0B192C]">
                Official Conference Resources & Guidelines
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Download the complete Call for Papers flyer or the manuscript submission template.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              {/* CFP Brochure Button */}
              <button
                onClick={() => handleDownload('brochure')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0B192C] text-white text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                title="Download Call for Papers Brochure"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>CFP Brochure</span>
                <span className="text-[11px] font-medium text-slate-300 bg-white/10 px-2 py-0.5 rounded-md">
                  PDF • 1.4 MB
                </span>
                <Download className="w-3.5 h-3.5 text-slate-300" />
              </button>

              {/* Paper Template Button */}
              <button
                onClick={() => handleDownload('template')}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs sm:text-sm font-bold shadow-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                title="Download Official Paper Template"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>Paper Template</span>
                <span className="text-[11px] font-semibold text-amber-950 bg-white/30 px-2 py-0.5 rounded-md">
                  .DOCX / LaTeX • 2.8 MB
                </span>
              </button>
            </div>
          </div>

          {/* Download Notification Toast */}
          {downloadNotice && (
            <div className="mt-3 py-2 px-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-semibold">{downloadNotice}</span>
            </div>
          )}
        </div>

        {/* 3. Search Bar and Categorized Tab Filters */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-4 mb-10">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Real-Time Search Bar */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tracks or topics (e.g. Deep Learning, VLSI, FinTech, IoT)..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                  title="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Results Count Badge */}
            <div className="flex items-center gap-2 self-end lg:self-center text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg shrink-0">
              <Layers className="w-3.5 h-3.5 text-amber-600" />
              <span>
                {totalMatchingTopics} topic{totalMatchingTopics !== 1 ? 's' : ''} available
              </span>
            </div>
          </div>

          {/* Categorized Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0B192C] text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Tracks
            </button>

            <button
              onClick={() => setActiveTab('cs')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'cs'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>Track 1: Computer Science & AI</span>
            </button>

            <button
              onClick={() => setActiveTab('ee')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'ee'
                  ? 'bg-amber-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Track 2: Electrical & Electronics</span>
            </button>

            <button
              onClick={() => setActiveTab('mgmt')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'mgmt'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Track 3: Management & Info Systems</span>
            </button>
          </div>
        </div>

        {/* 4. Filtered Track Cards */}
        {filteredTracks.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-xs max-w-md mx-auto">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-600 mb-3">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-800">No matching topics found</h3>
            <p className="text-xs text-slate-500 mt-1 mb-4">
              We couldn't find any topics matching "{searchQuery}". Try using broader keywords.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="px-4 py-2 bg-[#0B192C] text-white text-xs font-bold rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredTracks.map((track) => {
              const TrackIcon = track.icon;
              return (
                <div
                  key={track.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Track Header */}
                  <div className="bg-slate-50/80 border-b border-slate-100 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start sm:items-center gap-3.5">
                      <div className="w-11 h-11 rounded-xl bg-[#0B192C] text-amber-400 flex items-center justify-center shrink-0 shadow-xs">
                        <TrackIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-[11px] font-extrabold uppercase px-2 py-0.5 rounded border ${track.badgeColor}`}
                          >
                            {track.trackNum}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {track.topics.length} listed areas
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-extrabold text-[#0B192C] mt-0.5">
                          {track.title}
                        </h3>
                      </div>
                    </div>

                    <button
                      onClick={() => onNavigate?.('SUBMISSION')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B192C] hover:text-amber-600 bg-white hover:bg-amber-50 px-3.5 py-2 rounded-lg border border-slate-200 hover:border-amber-300 transition-all cursor-pointer self-start sm:self-center shadow-xs"
                    >
                      <span>Submit to this Track</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Track Description */}
                  <div className="px-5 sm:px-6 pt-4 text-xs text-slate-500">
                    {track.description}
                  </div>

                  {/* Topics Grid */}
                  <div className="p-5 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {track.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="group flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 hover:bg-amber-50/40 border border-slate-100 hover:border-amber-200/80 transition-all duration-200"
                      >
                        <span className="w-6 h-6 rounded-md bg-white text-slate-600 group-hover:bg-[#0B192C] group-hover:text-amber-400 text-[11px] font-bold flex items-center justify-center shrink-0 border border-slate-200 shadow-xs transition-colors">
                          {idx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 group-hover:text-slate-950 font-medium leading-snug">
                          {topic}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 5. Bottom Call to Action for Authors */}
        <div className="mt-14 bg-gradient-to-r from-[#08121f] via-[#0B192C] to-[#122543] rounded-2xl p-6 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-700/50">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Ready to Submit Your Research Paper?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              All accepted and presented papers will be submitted for inclusion into high-impact conference proceedings.
              Deadline: <strong className="text-amber-400 font-bold">February 05, 2027</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate?.('SUBMISSION')}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl transition-transform hover:scale-105 shadow-md cursor-pointer"
            >
              Paper Submission Portal
            </button>
            <button
              onClick={() => onNavigate?.('KEYDATES')}
              className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm rounded-xl border border-white/20 transition-colors cursor-pointer"
            >
              Important Dates
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
