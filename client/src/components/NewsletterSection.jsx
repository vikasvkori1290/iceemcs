import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-20 border-t border-slate-100">
      {/* Background Subtle Ambient Accents */}
      <div className="absolute inset-0 bg-[radial-gradient(#03045e0a_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
      <div className="absolute -top-24 right-1/4 w-96 h-96 bg-ocean-sky/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Card Container - Light Blue Component */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-ocean-ice/80 border border-ocean-sky/60 rounded-2xl shadow-xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-t-4 border-ocean-blue backdrop-blur-xs">
          {/* Left Title & Info */}
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold text-ocean-blue uppercase tracking-widest block">
              Stay Informed
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-ocean-deep tracking-tight">
              Conference Bulletin
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 max-w-md">
              Subscribe for important CFP deadlines, keynote announcements, and registration alerts.
            </p>
          </div>

          {/* Right Input Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-lg">
            <div className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your academic email"
                required
                className="flex-1 px-4 py-3.5 bg-white border border-ocean-sky/80 text-slate-900 text-sm rounded-lg sm:rounded-r-none sm:rounded-l-xl focus:outline-none focus:border-ocean-blue focus:ring-2 focus:ring-ocean-cyan/20 transition-all placeholder:text-slate-400 shadow-2xs"
              />
              <button
                type="submit"
                className="bg-linear-to-r from-ocean-blue to-ocean-cyan hover:from-ocean-deep hover:to-ocean-blue text-white text-xs sm:text-sm font-extrabold uppercase px-6 sm:px-8 py-3.5 tracking-wider rounded-lg sm:rounded-l-none sm:rounded-r-xl transition-all cursor-pointer shrink-0 shadow-md active:scale-95"
              >
                Subscribe Now
              </button>
            </div>
            {submitted && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mt-3 justify-center md:justify-start">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Thank you! You have been subscribed to ICEEMCS 2027 circulars.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
