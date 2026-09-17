import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Send,
  Download,
  Flame,
  CalendarPlus,
} from 'lucide-react';

export default function ModernHero({ onNavigate }) {
  // Live Countdown Timer to Paper Submission Deadline (February 5, 2027)
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
    <section className="relative w-full min-h-[calc(100vh-105px)] flex items-center justify-center bg-linear-to-br from-ocean-deep via-[#021f45] to-ocean-blue text-white py-4 sm:py-6 overflow-hidden">
      {/* Subtle geometric background grid accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none" />

      {/* Ambient glowing radial blur */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-ocean-cyan/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-ocean-sky/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-3 sm:space-y-3.5 lg:space-y-4">
          
          {/* Conference Eyebrow Badge & Mode */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-ocean-ice/15 border border-ocean-cyan/40 text-ocean-sky text-[11px] font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-ocean-cyan animate-pulse shadow-[0_0_8px_rgba(0,180,216,0.8)]" />
              <span>1st International Conference • Physical Mode</span>
            </div>
            <span className="text-[11px] text-ocean-sky/80 font-medium hidden sm:inline-block">
              IEEE Standard Formatting
            </span>
          </div>

          {/* Conference Full Title */}
          <div className="space-y-1">
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white tracking-tight leading-snug max-w-3xl mx-auto">
              International Conference on{' '}
              <span className="bg-linear-to-r from-white via-ocean-ice to-ocean-cyan bg-clip-text text-transparent">
                Electrical, Electronics, Management
              </span>{' '}
              and Computer Sciences
            </h1>
            <p className="text-sm sm:text-lg font-extrabold text-ocean-sky tracking-wide">
              (ICEEMCS 2027)
            </p>
          </div>

          {/* Venue, Date Badge & Add to Calendar Button */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <Calendar className="w-3.5 h-3.5 text-ocean-cyan shrink-0" />
              <span className="font-semibold text-white">July 13–14, 2027</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg backdrop-blur-xs">
              <MapPin className="w-3.5 h-3.5 text-ocean-cyan shrink-0" />
              <span className="text-slate-200">CMR University, Bengaluru</span>
            </div>

            {/* Add to Calendar Dropdown Button */}
            <div className="relative">
              <button
                onClick={() => setCalendarMenuOpen(!calendarMenuOpen)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-ocean-ice/15 hover:bg-ocean-ice/25 border border-ocean-cyan/40 text-ocean-sky text-xs font-bold transition-all cursor-pointer shadow-xs"
                title="Add ICEEMCS 2027 to your calendar"
              >
                <CalendarPlus className="w-3.5 h-3.5 text-ocean-cyan" />
                <span>Add to Calendar</span>
              </button>

              {/* Calendar Dropdown Options */}
              {calendarMenuOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-52 bg-ocean-deep border border-ocean-blue/40 rounded-xl shadow-2xl p-2 z-50 text-xs space-y-1 backdrop-blur-md text-left">
                  <a
                    href={googleCalendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setCalendarMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-200 hover:bg-ocean-blue/40 hover:text-white transition-colors font-semibold"
                  >
                    <span className="w-2 h-2 rounded-full bg-ocean-cyan" />
                    <span>Google Calendar</span>
                  </a>
                  <button
                    onClick={handleDownloadICS}
                    className="w-full flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-200 hover:bg-ocean-blue/40 hover:text-white transition-colors text-left font-semibold cursor-pointer"
                  >
                    <span className="w-2 h-2 rounded-full bg-ocean-sky" />
                    <span>Apple / Outlook (.ics)</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Brief Conference Summary */}
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed max-w-2xl font-normal mx-auto">
            ICEEMCS 2027 provides a premier multidisciplinary global forum for scholars, engineers, and researchers to present innovative research and foster international collaborations.
          </p>

          {/* LIVE COUNTDOWN TIMER (Days, Hours, Minutes, Seconds to Feb 05, 2027) */}
          <div className="w-full max-w-lg mx-auto bg-ocean-deep/90 border border-ocean-cyan/40 rounded-xl p-3 sm:p-3.5 backdrop-blur-md shadow-xl">
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-ocean-cyan animate-bounce" />
                <span className="text-[11px] font-bold text-ocean-cyan uppercase tracking-wider">
                  Paper Submission Countdown
                </span>
              </div>
              <span className="text-[10px] font-semibold text-ocean-sky">
                Target: Feb 05, 2027
              </span>
            </div>

            {/* 4 Counter Boxes */}
            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-[#020336]/80 border border-ocean-blue/30 rounded-lg py-1.5 px-1 shadow-inner">
                <span className="block text-lg sm:text-2xl font-black text-white tracking-tight">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold text-ocean-sky/80 uppercase tracking-wider">
                  Days
                </span>
              </div>

              <div className="bg-[#020336]/80 border border-ocean-blue/30 rounded-lg py-1.5 px-1 shadow-inner">
                <span className="block text-lg sm:text-2xl font-black text-white tracking-tight">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold text-ocean-sky/80 uppercase tracking-wider">
                  Hours
                </span>
              </div>

              <div className="bg-[#020336]/80 border border-ocean-blue/30 rounded-lg py-1.5 px-1 shadow-inner">
                <span className="block text-lg sm:text-2xl font-black text-white tracking-tight">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold text-ocean-sky/80 uppercase tracking-wider">
                  Minutes
                </span>
              </div>

              <div className="bg-[#020336]/80 border border-ocean-blue/30 rounded-lg py-1.5 px-1 shadow-inner">
                <span className="block text-lg sm:text-2xl font-black text-ocean-cyan tracking-tight">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[9px] font-bold text-ocean-cyan/90 uppercase tracking-wider">
                  Seconds
                </span>
              </div>
            </div>
          </div>

          {/* Dual CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={() => onNavigate?.('SUBMISSION')}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-linear-to-r from-ocean-cyan to-ocean-sky hover:from-ocean-blue hover:to-ocean-cyan text-ocean-deep hover:text-white font-extrabold text-xs sm:text-sm tracking-wide shadow-lg shadow-ocean-cyan/25 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <Send className="w-3.5 h-3.5 stroke-2" />
              <span>Submit Paper</span>
            </button>

            <button
              onClick={handleDownloadCFP}
              className="inline-flex items-center gap-2 px-6 sm:px-7 py-2.5 sm:py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm tracking-wide border border-white/20 transition-all duration-200 cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              <Download className="w-3.5 h-3.5 stroke-2" />
              <span>Brochure</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
