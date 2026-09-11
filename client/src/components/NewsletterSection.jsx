import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setEmail('');
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-12 sm:py-16">
      {/* Background Tech Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          alt="Technology Circuit Background"
          className="w-full h-full object-cover filter brightness-[0.25]"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Floating White Card Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8">
        <div className="bg-white rounded-xs shadow-2xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b-4 border-[#c68a2c]">
          {/* Left Title & Icon */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight uppercase">
              NEWSLETTER
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-[#c68a2c]">
              <Mail className="w-7 h-7 stroke-[2]" />
              <span className="italic font-bold text-gray-700 text-lg tracking-wide">
                CMRU
              </span>
            </div>
          </div>

          {/* Right Input Form */}
          <form onSubmit={handleSubmit} className="w-full md:w-auto flex-1 max-w-lg">
            <div className="flex flex-col sm:flex-row items-stretch gap-2 sm:gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                className="flex-1 px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c68a2c] focus:bg-white transition-colors"
              />
              <button
                type="submit"
                className="bg-[#c68a2c] hover:bg-[#b07823] text-white text-xs sm:text-sm font-extrabold uppercase px-6 sm:px-8 py-3.5 tracking-wider transition-colors cursor-pointer shrink-0"
              >
                SUBMIT NOW
              </button>
            </div>
            {submitted && (
              <p className="text-xs text-emerald-600 font-semibold mt-2 text-center md:text-left">
                Thank you for subscribing to ICEEMCS updates!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

