import React, { useState } from 'react';

export default function KeynotesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const speakers = [
    {
      id: 1,
      name: 'Gnanapriya Chidambaranathan',
      role: 'Chair of the IEEE Communications Society (ComSoc), Bangalore Section Chapter, Karnataka, India.',
      image: '/gnanapriya.png',
      isPlaceholder: false,
    },
    {
      id: 2,
      name: 'Dr. V B Murali Krishna',
      role: 'Department of Electrical Engineering, RA-III, Department of Scientific and Industrial Research (DSIR)- Common Research and Technology Development Hub (CRTDH), Electronics and Renewable Sector, National Institute of Technology...',
      image: '/murali-krishna.png',
      showSocialOverlayDefault: false,
      isPlaceholder: false,
    },
    {
      id: 3,
      name: 'Will be update soon.',
      role: 'Will be update soon.',
      isPlaceholder: true,
    },
    {
      id: 4,
      name: 'Will be update soon.',
      role: 'Will be update soon.',
      isPlaceholder: true,
    },
  ];

  return (
    <section id="keynotes" className="py-16 sm:py-20 bg-gray-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-black text-center text-gray-900 tracking-tight uppercase mb-12 sm:mb-16">
          KEYNOTES
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {speakers.map((speaker, idx) => {
            if (speaker.isPlaceholder) {
              return (
                <div
                  key={speaker.id}
                  className="bg-white border border-gray-200 rounded shadow-xs p-6 flex flex-col items-center justify-center text-center min-h-[360px] hover:shadow-md transition-shadow"
                >
                  <div className="w-full flex-1 flex flex-col items-center justify-center border border-dashed border-gray-200 rounded p-6 bg-gray-50/50">
                    <p className="font-bold text-gray-800 text-base mb-1">
                      {speaker.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {speaker.role}
                    </p>
                  </div>
                </div>
              );
            }

            const isHovered = hoveredCard === speaker.id || speaker.showSocialOverlayDefault;

            return (
              <div
                key={speaker.id}
                onMouseEnter={() => setHoveredCard(speaker.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="bg-white rounded overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col border border-gray-100"
              >
                {/* Speaker Photo / Overlay */}
                <div className="relative h-64 sm:h-72 w-full bg-gray-200 overflow-hidden">
                  {speaker.showSocialOverlayDefault ? (
                    <div className="w-full h-full bg-[#c68a2c] flex items-center justify-center gap-3">
                      <a
                        href="#facebook"
                        aria-label="Facebook Profile"
                        className="w-9 h-9 bg-[#22252a] text-white rounded-xs flex items-center justify-center hover:bg-black transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                      </a>
                      <a
                        href="#linkedin"
                        aria-label="LinkedIn Profile"
                        className="w-9 h-9 bg-[#22252a] text-white rounded-xs flex items-center justify-center hover:bg-black transition-colors"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.67 1.66 1.67.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.66-1.67-1.66z" />
                        </svg>
                      </a>
                    </div>
                  ) : (
                    <>
                      <img
                        src={speaker.image}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-top"
                      />
                      {/* Optional hover overlay */}
                      <div className="absolute inset-0 bg-[#c68a2c]/90 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <a
                          href="#facebook"
                          className="w-9 h-9 bg-[#22252a] text-white rounded-xs flex items-center justify-center hover:bg-black transition-colors"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                          </svg>
                        </a>
                        <a
                          href="#linkedin"
                          className="w-9 h-9 bg-[#22252a] text-white rounded-xs flex items-center justify-center hover:bg-black transition-colors"
                        >
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.6a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.67 1.66 1.67.92 0 1.67-.75 1.67-1.67 0-.92-.75-1.66-1.67-1.66z" />
                          </svg>
                        </a>
                      </div>
                    </>
                  )}
                </div>

                {/* Speaker Info */}
                <div className="p-5 text-center flex-1 flex flex-col justify-start">
                  <h3 className="font-extrabold text-gray-900 text-base sm:text-lg mb-2">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {speaker.role}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

