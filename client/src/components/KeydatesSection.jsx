import React from 'react';
import {
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  Send,
  Download,
  AlertCircle,
  FileCheck,
} from 'lucide-react';

export default function KeydatesSection({ onNavigate }) {
  const deadlines = [
    {
      label: 'Start Submission',
      date: 'July 25, 2026',
      status: 'Open',
      highlight: false,
    },
    {
      label: 'Paper Submission Deadline',
      date: 'Feb 05, 2027',
      status: 'Target Deadline',
      highlight: true,
    },
    {
      label: 'Acceptance Notification',
      date: 'April 10, 2027',
      status: 'Review Milestone',
      highlight: false,
    },
    {
      label: 'Camera Ready Submission',
      date: 'June 10, 2027',
      status: 'Final Manuscript Submission',
      highlight: false,
    },
    {
      label: 'Registration Last Date',
      date: 'May 30, 2027',
      status: 'Author Registration Deadline',
      highlight: true,
    },
    {
      label: 'Conference Sessions',
      date: 'July 13–14, 2027',
      status: 'CMRU Campus Event',
      highlight: true,
    },
  ];

  const handleDownloadCFP = () => {
    const cfpText = `===============================================================
ICEEMCS 2027 - CALL FOR PAPERS & KEYDATES BROCHURE
1st International Conference on Electrical, Electronics, Management and Computer Sciences
July 13-14, 2027 | CMR University, Bengaluru, Karnataka, India
Website: https://iceemcs.co.in/ | Email: editor@cmr.edu.in
===============================================================

CONFERENCE MILESTONES & IMPORTANT DATES:
1. Start Submission: July 25, 2026
2. Paper Submission Deadline: Feb 05, 2027
3. Acceptance Notification: April 10, 2027
4. Registration Last Date: May 30, 2027
5. Camera Ready Paper Submission: June 10, 2027
6. Conference Dates: July 13-14, 2027

VENUE:
CMR University, OMBR Campus, Banaswadi, Bengaluru 560043, India.

SUBMISSION SYSTEM:
Submit through Microsoft CMT system. Strictly IEEE conference templates required.
===============================================================`;
    const blob = new Blob([cfpText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ICEEMCS-2027-Keydates-Brochure.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div id="keydates-page" className="bg-slate-50 min-h-screen">
      {/* 1. Top Header Banner with Circuit Overlay */}
      <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden bg-ocean-deep">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          alt="Circuit Background"
          className="w-full h-full object-cover filter brightness-40 contrast-125"
        />
        <div className="absolute inset-0 bg-linear-to-t from-ocean-deep via-[#021f45]/70 to-black/50" />

        {/* Hero Title & Subtitle inside banner */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10 pb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ocean-blue/30 text-ocean-sky font-bold text-xs uppercase tracking-widest border border-ocean-cyan/40 mb-2">
            <Calendar className="w-3.5 h-3.5 text-ocean-cyan" /> Conference Timeline
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Important Keydates
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm max-w-2xl mt-2 hidden sm:block">
            Milestone schedule for paper submissions, peer reviews, author registration, and physical conference sessions.
          </p>
        </div>

        {/* Overlapping White Breadcrumb Box */}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-11/12 max-w-lg bg-white shadow-lg border border-slate-200/80 py-2.5 sm:py-3 px-6 text-center rounded-t-lg z-20">
          <div className="text-xs sm:text-sm font-medium tracking-wide text-slate-500 flex items-center justify-center gap-2">
            <button
              onClick={() => onNavigate?.('HOME')}
              className="hover:text-ocean-blue transition-colors cursor-pointer text-slate-600 font-semibold"
            >
              Home
            </button>
            <span className="text-slate-300">/</span>
            <span className="text-ocean-blue font-bold">Call for Papers</span>
            <span className="text-slate-300">/</span>
            <span className="text-slate-800 font-medium">Important Keydates</span>
          </div>
        </div>
      </div>

      {/* 2. Main Timeline Card Container */}
      <section className="pt-12 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Interactive 'Important Dates' Timeline Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-ocean-ice text-slate-900 transition-all">
          {/* Card Header */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-ocean-ice text-ocean-blue flex items-center justify-center font-bold shadow-xs">
                <Clock className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h2 className="font-extrabold text-xl sm:text-2xl text-ocean-deep tracking-tight">
                  Important Dates
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Key Conference Milestones
                </p>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full bg-ocean-ice text-ocean-deep border border-ocean-sky/60 text-xs font-bold shadow-2xs">
              CFP Open
            </span>
          </div>

          {/* Vertical Timeline List */}
          <div className="relative pl-6 sm:pl-8 space-y-7 pt-7 before:absolute before:left-3 sm:before:left-4 before:top-9 before:bottom-7 before:w-0.5 before:bg-slate-200">
            {deadlines.map((item, idx) => (
              <div key={idx} className="relative flex items-start justify-between gap-4 group">
                {/* Bullet marker on timeline */}
                <span
                  className={`absolute -left-6 sm:-left-8 top-1 w-3.5 h-3.5 rounded-full border-2 border-white ring-2 transition-all ${
                    item.highlight
                      ? 'bg-ocean-cyan ring-ocean-sky scale-110 shadow-[0_0_8px_rgba(0,180,216,0.6)]'
                      : 'bg-slate-400 ring-slate-300'
                  }`}
                />

                <div className="space-y-0.5">
                  <h3
                    className={`text-sm sm:text-base font-bold transition-colors ${
                      item.highlight ? 'text-ocean-blue font-extrabold' : 'text-slate-800'
                    }`}
                  >
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.status}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span
                    className={`inline-block text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg ${
                      item.highlight
                        ? 'bg-ocean-ice text-ocean-deep border border-ocean-sky/80 font-black shadow-2xs'
                        : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Card Footer Actions */}
          <div className="mt-10 pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-slate-500 font-medium">
              Strict deadlines apply via Microsoft CMT system.
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadCFP}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-ocean-ice text-slate-700 hover:text-ocean-blue font-bold transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Dates</span>
              </button>

              <button
                onClick={() => onNavigate?.('SUBMISSION')}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-linear-to-r from-ocean-blue to-ocean-cyan hover:from-ocean-deep hover:to-ocean-blue text-white font-bold transition-all shadow-sm cursor-pointer"
              >
                <span>Submit Paper Guidelines</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Helpful Author Notice Card */}
        <div className="mt-8 bg-ocean-ice/40 border border-ocean-sky/60 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-ocean-blue text-white flex items-center justify-center shrink-0 shadow-xs">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-ocean-deep">
                Ready to Prepare Your Manuscript?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Ensure your paper follows standard IEEE double-column format with maximum 6 pages.
              </p>
            </div>
          </div>

          <button
            onClick={() => onNavigate?.('SUBMISSION')}
            className="px-4 py-2 rounded-xl bg-ocean-deep hover:bg-ocean-blue text-white text-xs font-bold transition-colors shrink-0 cursor-pointer shadow-xs"
          >
            Submission Portal
          </button>
        </div>

      </section>
    </div>
  );
}
