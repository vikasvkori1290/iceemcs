import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Plane,
  Train,
  Navigation,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Building,
  CheckCircle2,
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Accordion active item state ('airport', 'train', 'campus')
  const [activeAccordion, setActiveAccordion] = useState('airport');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      subject: '',
      message: '',
    });
  };

  const toggleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  return (
    <div id="contact" className="w-full bg-slate-50">
      {/* 1. Top Section: Query Details & Contact Form */}
      <section className="relative w-full min-h-145 flex items-center bg-ocean-deep overflow-hidden py-16 sm:py-20">
        {/* Background Circuit Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
            alt="Circuit Background"
            className="w-full h-full object-cover object-center filter brightness-[0.3] contrast-125"
          />
          <div className="absolute inset-0 bg-linear-to-r from-ocean-deep/95 via-[#021f45]/90 to-ocean-deep/95" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Query Info */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-ocean-ice/20 text-ocean-sky font-bold text-xs uppercase tracking-wider border border-ocean-cyan/40 mb-3">
                  Conference Secretariat
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-wide leading-tight uppercase">
                  HAVE ANY QUERY? FEEL FREE TO CONTACT US
                </h1>
                <p className="text-slate-200 text-xs sm:text-sm leading-relaxed mt-2 max-w-lg">
                  Reach out to the organizing chairs and track conveners for inquiries regarding paper submission, registration, travel assistance, or presentation slots.
                </p>
              </div>

              <div className="space-y-6 pt-2">
                {/* MAIL US */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-md text-ocean-cyan">
                    <Mail className="w-6 h-6 stroke-2" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase">
                      OFFICIAL EMAIL DESK
                    </h3>
                    <a
                      href="mailto:editor@cmr.edu.in"
                      className="text-ocean-sky hover:text-white text-sm font-semibold transition-colors block"
                    >
                      editor@cmr.edu.in
                    </a>
                    <span className="text-[11px] text-slate-300 block">
                      General inquiries & manuscript queries
                    </span>
                  </div>
                </div>

                {/* CALL US */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center shrink-0 shadow-md text-ocean-cyan">
                    <Phone className="w-6 h-6 stroke-2" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase">
                      ORGANIZING HELPDESK
                    </h3>
                    <div className="text-slate-200 text-xs sm:text-sm space-y-1.5 pt-1">
                      <p className="flex items-center gap-2">
                        <strong className="font-semibold text-white">Dr. Om Prakash Chandermohan:</strong>{' '}
                        <a href="tel:+919880690684" className="hover:text-ocean-sky transition-colors">
                          +91 98806 90684
                        </a>
                      </p>
                      <p className="flex items-center gap-2">
                        <strong className="font-semibold text-white">Dr. Brijesh Mishra:</strong>{' '}
                        <a href="tel:+917703004534" className="hover:text-ocean-sky transition-colors">
                          +91 7703 004 534
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Us Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-2xl border border-white/20">
                <h2 className="text-xl sm:text-2xl font-black text-ocean-deep uppercase tracking-tight mb-2">
                  Send a Message to Secretariat
                </h2>
                <p className="text-xs text-slate-500 mb-6">
                  Fill out the form below and our organizing team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-ocean-blue focus:bg-white transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-ocean-blue focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Row 2: Mobile & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      placeholder="Your Mobile"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-ocean-blue focus:bg-white transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Subject / Paper ID"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-ocean-blue focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Row 3: Message */}
                  <textarea
                    rows={4}
                    placeholder="Describe your query in detail..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 text-xs sm:text-sm rounded-xl focus:outline-none focus:border-ocean-blue focus:bg-white transition-colors resize-none"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-linear-to-r from-ocean-blue to-ocean-cyan hover:from-ocean-deep hover:to-ocean-blue text-white font-extrabold uppercase py-3.5 tracking-wider text-xs sm:text-sm rounded-xl transition-all cursor-pointer shadow-md active:scale-95"
                  >
                    SUBMIT INQUIRY
                  </button>

                  {submitted && (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Thank you! Your message has been sent successfully to the secretariat.</span>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Venue & 'How to Reach' Accordion Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ocean-ice text-ocean-blue border border-ocean-sky/60 font-bold text-xs uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5 text-ocean-cyan" />
            <span>Transit & Navigation Guide</span>
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-ocean-deep tracking-tight uppercase">
            Venue & How To Reach Us
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            CMR University OMBR Campus is situated in Banaswadi, East Bengaluru, well-connected to international transit hubs, metro corridors, and arterial highways.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Transit Accordion (Left) + Interactive Google Map (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Transit Accordion */}
          <div className="lg:col-span-6 space-y-4 flex flex-col justify-between">
            {/* Accordion Item 1: Airport */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion('airport')}
                className="w-full px-5 py-4 flex items-center justify-between text-left bg-slate-50/50 hover:bg-slate-100/60 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-ocean-ice text-ocean-blue flex items-center justify-center shrink-0 border border-ocean-sky/60">
                    <Plane className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ocean-deep">
                      From Kempegowda International Airport (BLR)
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Approx. 35 km • 45 to 60 mins commute
                    </p>
                  </div>
                </div>
                {activeAccordion === 'airport' ? (
                  <ChevronUp className="w-5 h-5 text-ocean-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {activeAccordion === 'airport' && (
                <div className="p-5 border-t border-slate-100 space-y-3 text-xs text-slate-600 animate-fadeIn">
                  <p>
                    Delegates arriving at <strong>Kempegowda International Airport (BLR)</strong> have multiple convenient transit options:
                  </p>
                  <div className="space-y-2 pl-2">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-cyan mt-1.5 shrink-0" />
                      <span>
                        <strong>Airport App-Based Cabs:</strong> Official pickup zones for Uber, Ola, and Karnataka Tourism Airport Taxis operate 24/7 directly outside Terminals 1 & 2. Ask for <em>CMR University OMBR Campus, Banaswadi</em>.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-cyan mt-1.5 shrink-0" />
                      <span>
                        <strong>BMTC Vayu Vajra AC Bus:</strong> Board bus route <strong>KIA-8</strong> or <strong>KIA-6</strong> towards Kalyan Nagar / Banaswadi Ring Road. Get down at Kalyan Nagar bus stop (3 km from campus).
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 2: Railway Stations */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion('train')}
                className="w-full px-5 py-4 flex items-center justify-between text-left bg-slate-50/50 hover:bg-slate-100/60 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-ocean-blue/15 text-ocean-blue flex items-center justify-center shrink-0 border border-ocean-blue/30">
                    <Train className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ocean-deep">
                      From KSR Bengaluru & Yesvantpur Railway Stations
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Approx. 12 - 15 km • 35 to 45 mins commute
                    </p>
                  </div>
                </div>
                {activeAccordion === 'train' ? (
                  <ChevronUp className="w-5 h-5 text-ocean-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {activeAccordion === 'train' && (
                <div className="p-5 border-t border-slate-100 space-y-3 text-xs text-slate-600 animate-fadeIn">
                  <p>
                    Bengaluru is connected via two major rail junctions:
                  </p>
                  <div className="space-y-2 pl-2">
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-cyan mt-1.5 shrink-0" />
                      <span>
                        <strong>From KSR Bengaluru City (Majestic):</strong> Take the Namma Metro Purple Line from Majestic to <em>Swami Vivekananda Road</em> or <em>Baiyappanahalli</em> station, then take an auto-rickshaw or taxi (10 mins) to OMBR Layout.
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-ocean-cyan mt-1.5 shrink-0" />
                      <span>
                        <strong>From Yesvantpur Junction (YPR):</strong> Book an Ola/Uber cab or take BMTC bus direct to Kalyan Nagar / Banaswadi via Outer Ring Road (ORR).
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Accordion Item 3: Campus Desk & Landmarks */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all">
              <button
                onClick={() => toggleAccordion('campus')}
                className="w-full px-5 py-4 flex items-center justify-between text-left bg-slate-50/50 hover:bg-slate-100/60 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-ocean-ice text-ocean-blue flex items-center justify-center shrink-0 border border-ocean-sky/40">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-ocean-deep">
                      Campus Address & Help Desk Assistance
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      OMBR Layout, Banaswadi, Bengaluru 560043
                    </p>
                  </div>
                </div>
                {activeAccordion === 'campus' ? (
                  <ChevronUp className="w-5 h-5 text-ocean-blue" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400" />
                )}
              </button>

              {activeAccordion === 'campus' && (
                <div className="p-5 border-t border-slate-100 space-y-3 text-xs text-slate-600 animate-fadeIn">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 space-y-1">
                    <p className="font-bold text-ocean-deep">CMR University - OMBR Campus</p>
                    <p>No. 5, Bhuvanagiri, Lakshmamma Layout, Banaswadi, Bengaluru, Karnataka 560043</p>
                    <p className="text-slate-500 text-[11px]">Landmark: Near Banaswadi Fire Station / HRBR Layout 2nd Block</p>
                  </div>
                  <p className="text-[11px] text-slate-500">
                    A dedicated Hospitality & Volunteer Desk will be active in the campus main reception lobby on conference days (July 13–14, 2027) starting at 08:00 AM IST.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Action Navigation Bar */}
            <div className="bg-ocean-deep text-white p-4 rounded-2xl flex items-center justify-between gap-4 border border-ocean-blue/30">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-ocean-cyan shrink-0" />
                <span className="text-xs font-semibold">
                  Need on-spot driving directions?
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=CMR+University+OMBR+Campus+Banaswadi+Bengaluru"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-linear-to-r from-ocean-blue to-ocean-cyan text-white text-xs font-bold transition-all shrink-0 hover:from-ocean-deep hover:to-ocean-blue"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Iframe */}
          <div className="lg:col-span-6 min-h-95 lg:min-h-full rounded-2xl overflow-hidden border border-slate-200 shadow-md relative bg-slate-100">
            <iframe
              title="CMR University Location Map"
              src="https://maps.google.com/maps?q=CMR+University,+OMBR+Campus,+Banaswadi,+Bengaluru&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: '380px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-105"
            />

            {/* Floating Location Card Overlay */}
            <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-xs p-4 rounded-xl shadow-lg border border-slate-200 max-w-xs sm:max-w-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold text-ocean-blue uppercase tracking-wide">
                    Conference Venue
                  </span>
                  <h4 className="font-extrabold text-ocean-deep text-sm leading-snug">
                    CMR University, OMBR Campus
                  </h4>
                  <p className="text-xs text-slate-600 leading-normal mt-1">
                    No. 5, Bhuvanagiri, Banaswadi, Bengaluru, Karnataka 560043
                  </p>
                </div>
                <a
                  href="https://maps.google.com/?q=CMR+University,+OMBR+Campus,+Banaswadi,+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-ocean-ice hover:bg-ocean-sky/40 text-ocean-blue flex items-center justify-center shrink-0 transition-colors"
                  title="Open in Google Maps"
                >
                  <Navigation className="w-4 h-4 fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
