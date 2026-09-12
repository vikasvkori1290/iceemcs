import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div id="contact" className="w-full bg-white">
      {/* 1. Top Section: Query Details & Contact Form */}
      <section className="relative w-full min-h-[600px] flex items-center bg-slate-950 overflow-hidden py-16 sm:py-20">
        {/* Background Circuit Image with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
            alt="Circuit Background"
            className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Query Info */}
            <div className="lg:col-span-6 space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-white tracking-wide leading-tight uppercase">
                HAVE ANY QUERY? FEEL FREE TO CONTACT US
              </h1>

              <div className="space-y-6 pt-2">
                {/* MAIL US */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-white flex items-center justify-center shrink-0 shadow-md text-gray-900">
                    <Mail className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wider uppercase">
                      MAIL US
                    </h3>
                    <a
                      href="mailto:editor@cmr.edu.in"
                      className="text-white/90 text-sm hover:text-white transition-colors block"
                    >
                      editor@cmr.edu.in
                    </a>
                  </div>
                </div>

                {/* CALL US */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-white flex items-center justify-center shrink-0 shadow-md text-gray-900">
                    <Phone className="w-6 h-6 stroke-[2]" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm sm:text-base font-extrabold text-white tracking-wider uppercase">
                      CALL US
                    </h3>
                    <div className="text-white/90 text-xs sm:text-sm space-y-1">
                      <p>
                        <strong className="font-semibold text-white">Dr. Om Prakash Chandermohan,</strong> (+91 98806 90684)
                      </p>
                      <p>
                        <strong className="font-semibold text-white">Dr. Brijesh Mishra,</strong> (+91 7703 004 534)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Us Form Card */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-xs p-6 sm:p-10 shadow-2xl">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 uppercase tracking-tight mb-6">
                  CONTACT US
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c68a2c] focus:bg-white transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c68a2c] focus:bg-white transition-colors"
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
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c68a2c] focus:bg-white transition-colors"
                    />
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c68a2c] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Row 3: Message */}
                  <textarea
                    rows={4}
                    placeholder="Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 text-gray-800 text-sm focus:outline-none focus:border-[#c68a2c] focus:bg-white transition-colors resize-none"
                  />

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#c68a2c] hover:bg-[#b07823] text-white font-extrabold uppercase py-3.5 tracking-wider text-sm transition-colors cursor-pointer shadow-md"
                  >
                    SUBMIT NOW
                  </button>

                  {submitted && (
                    <p className="text-center text-xs text-emerald-600 font-semibold pt-1">
                      Thank you! Your message has been sent successfully.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Full-Width Google Map Section */}
      <section className="relative w-full h-80 sm:h-96 md:h-[460px] bg-gray-100 overflow-hidden border-b border-gray-200">
        <iframe
          title="CMR University Location Map"
          src="https://maps.google.com/maps?q=HRBR+Layout+2nd+Block,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full filter contrast-105"
        />

        {/* Floating Google Map Card Badge matching screenshot 2 */}
        <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-xs p-3.5 rounded shadow-lg border border-gray-200 max-w-xs sm:max-w-sm hidden sm:block">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h4 className="font-bold text-gray-900 text-sm leading-snug">
                HRBR Layout 2nd Block
              </h4>
              <p className="text-xs text-gray-600 leading-normal mt-1">
                HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043, India
              </p>
              <p className="text-[11px] text-gray-400 mt-1">No reviews</p>
            </div>
            <a
              href="https://maps.google.com/?q=HRBR+Layout+2nd+Block,+Kalyan+Nagar,+Bengaluru,+Karnataka+560043"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 transition-colors"
              title="View larger map"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

