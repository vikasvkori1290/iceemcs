import React, { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    title: 'INTERNATIONAL CONFERENCE ON ELECTRICAL, ELECTRONICS, MANAGEMENT AND COMPUTER SCIENCES (ICEEMCS)',
    date: '13TH & 14TH JULY 2027',
    venue: 'CMR UNIVERSITY, BANGALORE, KARNATAKA, INDIA',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1920&q=80',
    thumbAlt: 'Soldering circuit board',
  },
  {
    id: 2,
    title: 'INTERNATIONAL CONFERENCE ON ELECTRICAL, ELECTRONICS, MANAGEMENT AND COMPUTER SCIENCES (ICEEMCS)',
    date: '13TH & 14TH JULY 2027',
    venue: 'CMR UNIVERSITY, BANGALORE, KARNATAKA, INDIA',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
    thumbAlt: 'Microchip and computing',
  },
  {
    id: 3,
    title: 'INTERNATIONAL CONFERENCE ON ELECTRICAL, ELECTRONICS, MANAGEMENT AND COMPUTER SCIENCES (ICEEMCS)',
    date: '13TH & 14TH JULY 2027',
    venue: 'CMR UNIVERSITY, BANGALORE, KARNATAKA, INDIA',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80',
    thumbAlt: 'Cybernetics and high technology',
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] overflow-hidden bg-slate-950 select-none">
      {/* Background Slides */}
      {slides.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={s.image}
            alt={s.thumbAlt}
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60" />
        </div>
      ))}

      {/* Main Content Overlay */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col justify-center items-center px-6 sm:px-12 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[38px] font-black text-white tracking-wide leading-tight drop-shadow-md uppercase">
            {slide.title}
          </h1>

          {/* Date with Superscript Style */}
          <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-wider drop-shadow-lg">
            <span>13</span>
            <span className="text-lg sm:text-xl align-super font-bold">TH</span>
            <span> & 14</span>
            <span className="text-lg sm:text-xl align-super font-bold">TH</span>
            <span> JULY 2027</span>
          </div>

          {/* Location */}
          <p className="text-base sm:text-xl md:text-2xl font-black text-white tracking-wider uppercase drop-shadow-md">
            {slide.venue}
          </p>
        </div>
      </div>

      {/* Vertical Thumbnail Carousel Indicators (Left Edge as seen in screenshot) */}
      <div className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-2.5">
        {slides.map((s, index) => {
          const isActive = index === currentSlide;
          return (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-12 h-10 sm:w-14 sm:h-12 rounded overflow-hidden cursor-pointer transition-all duration-300 block shadow-md ${
                isActive
                  ? 'border-2 border-[#c68a2c] ring-1 ring-white/50 scale-105'
                  : 'border border-white/30 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={s.image}
                alt={s.thumbAlt}
                className="w-full h-full object-cover"
              />
            </button>
          );
        })}
      </div>
    </section>
  );
}

