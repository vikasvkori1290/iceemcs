import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Send,
  Download,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  CalendarPlus,
  Share2,
  Flame,
} from 'lucide-react';

export default function ModernHero({ onNavigate }) {
  // 1. Live Countdown Timer to Paper Submission Deadline (February 5, 2027)
  const targetDate = new Date('2027-02-05T23:59:59+05:30').getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [calendarMenuOpen, setCalendarMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
      label: 'Camera Ready & Registration',
      date: 'May 30, 2027',
      status: 'Final Submission',
      highlight: false,
    },
    {
      label: 'Conference Sessions',
      date: 'July 13–14, 2027',
      status: 'CMRU Campus Event',
      highlight: true,
    },
  ];

  // Calendar Links & Download ICS
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=ICEEMCS+2027:+International+Conference+on+Electrical,+Electronics,+Management+and+Computer+Sciences&dates=20270713T033000Z/20270714T123000Z&details=1st+International+Conference+at+CMR+University,+Bengaluru.+Official+Website:+https://iceemcs.co.in/+Email:+editor@cmr.edu.in&location=CMR+University,+OMBR+Campus,+Banaswadi,+Bengaluru+560043,+Karnataka,+India`;

  const handleDownloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//ICEEMCS//Conference 2027//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:ICEEMCS 2027 Conference (CMR University)
DESCRIPTION:1st International Conference on Electrical, Electronics, Management and Computer Sciences at CMR University, Bengaluru. Website: https://iceemcs.co.in/
LOCATION:CMR University, OMBR Campus, Banaswadi, Bengaluru 560043, India
DTSTART:20270713T033000Z
DTEND:20270714T123000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ICEEMCS-2027-Conference.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setCalendarMenuOpen(false);
  };

  const handleDownloadCFP = () => {
    const cfpText = `===============================================================
ICEEMCS 2027 - CALL FOR PAPERS BROCHURE
1st International Conference on Electrical, Electronics, Management and Computer Sciences
July 13-14, 2027 | CMR University, Bengaluru, Karnataka, India
Website: https://iceemcs.co.in/ | Email: editor@cmr.edu.in
===============================================================

CONFERENCE TRACKS:
1. Electrical Engineering: Smart Power Systems, Renewable Energy, Electric Vehicles, Intelligent Control.
2. Electronics & Communication: Advanced VLSI, Embedded Systems, IoT, RF & Satellite Communication.
3. Management Studies: Digital Transformation, FinTech, Business Analytics, Strategic Innovation.
4. Computer Science: AI & Machine Learning, Cloud & Distributed Systems, Cyber Security, Blockchain.

IMPORTANT DEADLINES:
- Start Submission: July 25, 2026
- Paper Submission Deadline: Feb 05, 2027
- Acceptance Notification: April 10, 2027
- Registration Deadline: May 30, 2027
- Conference Dates: July 13-14, 2027

VENUE:
CMR University, OMBR Campus, Banaswadi, Bengaluru, Karnataka 560043, India.

SUBMISSION SYSTEM:
Submit through Microsoft CMT. All manuscripts must follow IEEE conference formatting templates.
===============================================================`;
    const blob = new Blob([cfpText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ICEEMCS-2027-Call-For-Papers.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="relative w-full bg-gradient-to-br from-[#07111f] via-[#0B192C] to-[#0F2042] text-white py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* Subtle geometric background grid accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      {/* Ambient glowing radial blur */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Conference Details, Live Countdown & Dual CTA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Conference Eyebrow Badge & Mode */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>1st International Conference • Physical Mode</span>
              </div>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline-block">
                IEEE Standard Formatting
              </span>
            </div>

            {/* Conference Full Title */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                International Conference on{' '}
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                  Electrical, Electronics, Management
                </span>{' '}
                and Computer Sciences
              </h1>
              <p className="text-lg sm:text-xl font-bold text-slate-300 tracking-wide">
                (ICEEMCS 2027)
              </p>
            </div>

            {/* Venue, Date Badge & Add to Calendar Button */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-300">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg backdrop-blur-xs">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="font-semibold text-white">July 13–14, 2027</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-2 rounded-lg backdrop-blur-xs">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-slate-200">CMR University, Bengaluru</span>
              </div>

              {/* Add to Calendar Dropdown Button */}
              <div className="relative">
                <button
                  onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300 text-xs font-bold transition-all cursor-pointer shadow-xs"
                  title="Add ICEEMCS 2027 to your calendar"
                >
                  <CalendarPlus className="w-4 h-4 text-amber-400" />
                  <span>Add to Calendar</span>
                </button>

                {/* Calendar Dropdown Options */}
                {calendarMenuOpen && (
                  <div className="absolute left-0 mt-2 w-56 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-2 z-50 text-xs space-y-1 backdrop-blur-md">
                    <a
                      href={googleCalendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setCalendarMenuOpen(false)}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/20 hover:text-amber-300 transition-colors font-semibold"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-400" />
                      <span>Google Calendar</span>
                    </a>
                    <button
                      onClick={handleDownloadICS}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-slate-200 hover:bg-amber-500/20 hover:text-amber-300 transition-colors text-left font-semibold cursor-pointer"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <span>Apple / Outlook (.ics)</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Brief Conference Summary */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
              ICEEMCS 2027 provides a premier, multidisciplinary global forum for scholars, engineers, and industry visionaries to present innovative research, discuss emerging breakthroughs, and foster international collaborations across the engineering and managerial spectrum.
            </p>

            {/* LIVE COUNTDOWN TIMER (Days, Hours, Minutes, Seconds to Feb 05, 2027) */}
            <div className="bg-slate-900/80 border border-amber-500/30 rounded-2xl p-4 sm:p-5 backdrop-blur-md shadow-xl max-w-xl">
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-400 animate-bounce" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                    Paper Submission Countdown
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-slate-400">
                  Target: Feb 05, 2027
                </span>
              </div>

              {/* 4 Counter Boxes */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
                <div className="bg-slate-950/80 border border-slate-800 rounded-xl py-2.5 px-1 shadow-inner">
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Days
                  </span>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 rounded-xl py-2.5 px-1 shadow-inner">
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Hours
                  </span>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 rounded-xl py-2.5 px-1 shadow-inner">
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Minutes
                  </span>
                </div>

                <div className="bg-slate-950/80 border border-slate-800 rounded-xl py-2.5 px-1 shadow-inner">
                  <span className="block text-xl sm:text-2xl lg:text-3xl font-black text-amber-400 tracking-tight">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-wider">
                    Seconds
                  </span>
                </div>
              </div>
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate?.('SUBMISSION')}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-sm sm:text-base tracking-wide shadow-lg shadow-amber-500/20 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Send className="w-4 h-4 stroke-[2.5]" />
                <span>Submit Paper</span>
              </button>

              <button
                onClick={handleDownloadCFP}
                className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm sm:text-base tracking-wide border border-white/20 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95"
              >
                <Download className="w-4 h-4 stroke-[2.2]" />
                <span>Download CFP Brochure</span>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive 'Important Dates' Timeline Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-100 text-slate-900 transition-all">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#0B192C] tracking-tight">
                      Important Dates
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Key Milestone Milestones
                    </p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold">
                  CFP Open
                </span>
              </div>

              {/* Vertical Timeline List */}
              <div className="relative pl-6 sm:pl-8 space-y-6 pt-6 before:absolute before:left-3 sm:before:left-4 before:top-8 before:bottom-6 before:w-0.5 before:bg-slate-200">
                {deadlines.map((item, idx) => (
                  <div key={idx} className="relative flex items-start justify-between gap-3 group">
                    {/* Bullet marker on timeline */}
                    <span
                      className={`absolute -left-6 sm:-left-8 top-1 w-3 sm:w-3.5 h-3 sm:h-3.5 rounded-full border-2 border-white ring-2 transition-all ${
                        item.highlight
                          ? 'bg-amber-500 ring-amber-400'
                          : 'bg-slate-400 ring-slate-300'
                      }`}
                    />

                    <div>
                      <h4
                        className={`text-sm sm:text-base font-bold transition-colors ${
                          item.highlight ? 'text-amber-600 font-extrabold' : 'text-slate-800'
                        }`}
                      >
                        {item.label}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium mt-0.5">
                        {item.status}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`inline-block text-xs sm:text-sm font-bold px-2.5 py-1 rounded-md ${
                          item.highlight
                            ? 'bg-amber-50 text-amber-800 border border-amber-200/80'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Footer Link */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Strict deadlines apply via Microsoft CMT.
                </span>
                <button
                  onClick={() => onNavigate?.('KEYDATES')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 cursor-pointer"
                >
                  <span>Full Keydates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
