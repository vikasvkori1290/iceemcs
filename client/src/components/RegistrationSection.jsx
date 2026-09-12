import React from 'react';
import { MapPin, Clock } from 'lucide-react';

export default function RegistrationSection() {
  const fees = [
    {
      sno: '1',
      category: 'IEEE Student/Faculty Members',
      inr: '4,000',
      usd: '100',
    },
    {
      sno: '2',
      category: 'Non IEEE Members',
      inr: '4,800',
      usd: '120',
    },
    {
      sno: '3',
      category: 'Industry/Company',
      inr: '5,000',
      usd: '125',
    },
    {
      sno: '4',
      category: 'Extra Page',
      inr: '200',
      usd: '5',
    },
  ];

  return (
    <section
      id="registration-page"
      className="relative w-full min-h-[650px] lg:min-h-[720px] flex items-center bg-slate-950 overflow-hidden py-16 sm:py-24"
    >
      {/* Circuit Board Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80"
          alt="Circuit Background"
          className="w-full h-full object-cover object-center filter brightness-[0.32] contrast-125"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Title, Venue & Deadline */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wide uppercase mb-3">
                REGISTRATION FEE
              </h1>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                The registration fee details for the conference are given below.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Conference Venue */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-sm bg-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="w-6 h-6 text-[#c68a2c] stroke-[2.2]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Conference Venue
                  </h3>
                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed max-w-sm">
                    CMR University, OMBR Campus, No. 5, Bhuvanagiri, Lakshmamma Layout, Banaswadi, Bengaluru, Karnataka 560043.
                  </p>
                </div>
              </div>

              {/* Divider Line */}
              <div className="border-b border-white/15 w-full max-w-md" />

              {/* Registration Deadline */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-white flex items-center justify-center shrink-0 shadow-md">
                  <Clock className="w-6 h-6 text-[#c68a2c] stroke-[2.2]" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Registration Deadline
                  </h3>
                  <p className="text-white/85 text-xs sm:text-sm font-medium">
                    30th May 2027.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Fee Structure Table Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  {/* Table Header (Bright Blue Header matching screenshot) */}
                  <thead>
                    <tr className="bg-[#0070f3] text-white text-xs sm:text-sm font-bold tracking-wide">
                      <th className="py-4 px-4 sm:px-6 text-center w-16">S. No</th>
                      <th className="py-4 px-4 sm:px-6">Category</th>
                      <th className="py-4 px-4 sm:px-6 text-center">India (INR)</th>
                      <th className="py-4 px-4 sm:px-6 text-center">Other than India (USD)</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody className="divide-y divide-gray-100 text-xs sm:text-sm text-gray-700 font-medium">
                    {fees.map((row) => (
                      <tr
                        key={row.sno}
                        className="hover:bg-gray-50/80 transition-colors"
                      >
                        <td className="py-4 px-4 sm:px-6 text-center text-gray-500 font-semibold">
                          {row.sno}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-gray-900 font-semibold">
                          {row.category}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-center text-gray-700">
                          {row.inr}
                        </td>
                        <td className="py-4 px-4 sm:px-6 text-center text-gray-700">
                          {row.usd}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

