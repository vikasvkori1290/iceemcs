import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Send, GraduationCap } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef(null);

  const navItems = [
    { name: 'Home', action: 'HOME', href: '#home' },
    { name: 'About', action: 'ABOUT', href: '#about' },
    { name: 'Keynotes', action: 'KEYNOTES', href: '#keynotes' },
    { name: 'Committee', action: 'COMMITTEE', href: '#committee' },
    {
      name: 'Call for Papers',
      action: 'TOPICS',
      href: '#topics',
      hasDropdown: true,
      subItems: [
        { label: 'Conference Tracks & Topics', action: 'TOPICS', href: '#topics' },
        { label: 'Important Keydates', action: 'KEYDATES', href: '#keydates' },
        { label: 'Paper Submission Guidelines', action: 'SUBMISSION', href: '#submission' },
        { label: 'Registration & Fees', action: 'REGISTRATION', href: '#registration' },
      ],
    },
    { name: 'Contact', action: 'CONTACT', href: '#contact' },
  ];

  // Mouse enter and leave handlers with debounce to prevent premature closing
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 180);
  };

  const handleItemClick = (actionName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveSection?.(actionName);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const isCallForPapersActive =
    activeSection === 'TOPICS' ||
    activeSection === 'KEYDATES' ||
    activeSection === 'SUBMISSION' ||
    activeSection === 'REGISTRATION';

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Logo & Title */}
          <div
            onClick={() => handleItemClick('HOME')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-ocean-deep text-ocean-cyan flex items-center justify-center shadow-md border border-ocean-blue/30 group-hover:scale-105 transition-transform duration-200">
              <GraduationCap className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-ocean-deep">
                  ICEEMCS
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-bold uppercase bg-ocean-ice text-ocean-blue border border-ocean-sky/40">
                  2027
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-normal hidden sm:block">
                CMR University • Bengaluru
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 sm:space-x-2 text-sm font-semibold text-slate-700">
            {navItems.map((item) => {
              const isCFP = item.name === 'Call for Papers';
              const isActive =
                activeSection === item.action || (isCFP && isCallForPapersActive);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative group py-2"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      onClick={() => handleItemClick(item.action)}
                      className={`px-3 py-2 rounded-md inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                        isActive
                          ? 'text-ocean-blue bg-ocean-ice/60 font-bold'
                          : 'hover:text-ocean-blue hover:bg-slate-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180 text-ocean-blue' : 'group-hover:rotate-180'
                        }`}
                      />
                    </button>

                    {/* Dropdown Menu Container with Zero Gap & Invisible Hover Bridge */}
                    <div
                      className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 z-50 ${
                        dropdownOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto'
                      }`}
                    >
                      {/* Invisible Hover Bridge spanning above the menu */}
                      <div className="absolute -top-3 left-0 w-full h-5" aria-hidden="true" />

                      {/* Dropdown Card */}
                      <div className="bg-white shadow-xl rounded-xl border border-slate-100 p-2 ring-1 ring-slate-900/5">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleItemClick(subItem.action);
                              window.location.hash = subItem.href;
                            }}
                            className={`block px-3.5 py-2.5 rounded-lg text-xs font-medium transition-colors ${
                              activeSection === subItem.action
                                ? 'bg-ocean-ice text-ocean-deep font-bold border border-ocean-sky/60'
                                : 'text-slate-700 hover:bg-ocean-ice/40 hover:text-ocean-blue'
                            }`}
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item.action);
                    window.location.hash = item.href;
                  }}
                  className={`px-3 py-2 rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'text-ocean-blue bg-ocean-ice/60 font-bold'
                      : 'hover:text-ocean-blue hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* High-Contrast "Submit Paper" CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleItemClick('SUBMISSION')}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg bg-linear-to-r from-ocean-blue to-ocean-cyan hover:from-ocean-deep hover:to-ocean-blue text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md hover:shadow-ocean-blue/20 transition-all duration-200 cursor-pointer active:scale-95"
            >
              <Send className="w-4 h-4 stroke-[2.2]" />
              <span>Submit Paper</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleItemClick('SUBMISSION')}
              className="px-3 py-1.5 rounded-md bg-ocean-blue text-white font-bold text-xs sm:hidden"
            >
              Submit
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.name} className="py-1">
                  <div className="px-3 py-1 text-xs font-bold uppercase text-slate-400 tracking-wider">
                    {item.name}
                  </div>
                  <div className="pl-3 space-y-1">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleItemClick(subItem.action);
                        }}
                        className="block px-3 py-2 text-sm font-medium text-slate-700 hover:text-ocean-blue hover:bg-ocean-ice/40 rounded-md"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(item.action);
                }}
                className={`block px-3 py-2.5 text-sm font-semibold rounded-md ${
                  activeSection === item.action
                    ? 'bg-ocean-ice text-ocean-deep font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleItemClick('SUBMISSION')}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-linear-to-r from-ocean-blue to-ocean-cyan text-white font-bold text-sm shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Submit Paper Now</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
