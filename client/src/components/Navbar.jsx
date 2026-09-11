import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

export default function Navbar({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'KEYNOTES', href: '#keynotes' },
    { name: 'COMMITTEE', href: '#committee' },
    {
      name: 'CALL FOR PAPERS',
      href: '#topics',
      hasDropdown: true,
      subItems: [
        { label: 'Topics', action: 'TOPICS', href: '#topics' },
        { label: 'Keydates', action: 'KEYDATES', href: '#keydates' },
        { label: 'Paper Submission', action: 'SUBMISSION', href: '#submission' },
        { label: 'Registration', action: 'REGISTRATION', href: '#registration' },
      ],
    },
    { name: 'CONTACT', href: '#contact' },
  ];

  const handleItemClick = (name) => {
    setActiveSection?.(name);
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between md:justify-start h-16 sm:h-20">
          {/* Mobile Brand indicator */}
          <div
            onClick={() => handleItemClick('HOME')}
            className="md:hidden font-black text-lg tracking-wider text-[#c68a2c] cursor-pointer"
          >
            ICEEMCS
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 lg:space-x-10 text-xs sm:text-[13px] font-bold tracking-wider">
            {navItems.map((item) => {
              const isCallForPapers = item.name === 'CALL FOR PAPERS';
              const isActive =
                activeSection === item.name ||
                (isCallForPapers &&
                  (activeSection === 'TOPICS' ||
                    activeSection === 'KEYDATES' ||
                    activeSection === 'SUBMISSION' ||
                    activeSection === 'REGISTRATION'));

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative group"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleItemClick('TOPICS')}
                      className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer py-2 ${
                        isActive
                          ? 'text-[#c68a2c]'
                          : 'text-gray-700 hover:text-[#c68a2c]'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-3.5 h-3.5 stroke-[2.5]" />
                    </button>

                    {/* Dropdown Menu matching screenshot media_1789145665826.png */}
                    <div
                      className={`absolute left-0 top-full w-48 bg-white shadow-xl rounded-b-sm border border-gray-100 py-1 transition-all duration-200 z-50 ${
                        dropdownOpen
                          ? 'opacity-100 visible translate-y-0'
                          : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      {item.subItems.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          onClick={(e) => {
                            e.preventDefault();
                            handleItemClick(subItem.action);
                            window.location.hash = subItem.href;
                          }}
                          className={`block px-5 py-2.5 text-sm font-medium transition-colors ${
                            activeSection === subItem.action
                              ? 'text-[#c68a2c] bg-gray-50'
                              : 'text-gray-700 hover:bg-[#c68a2c]/10 hover:text-[#c68a2c]'
                          }`}
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
                  onClick={() => handleItemClick(item.name)}
                  className={`transition-colors cursor-pointer py-2 ${
                    isActive
                      ? 'text-[#c68a2c]'
                      : 'text-gray-700 hover:text-[#c68a2c]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-[#c68a2c] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-1 shadow-lg">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <div key={item.name} className="py-1">
                  <button
                    onClick={() => handleItemClick('TOPICS')}
                    className="block w-full text-left px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#c68a2c]"
                  >
                    {item.name}
                  </button>
                  <div className="pl-4 space-y-1">
                    {item.subItems.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleItemClick(subItem.action);
                        }}
                        className="block px-3 py-1.5 text-xs text-gray-600 hover:text-[#c68a2c]"
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
                onClick={() => handleItemClick(item.name)}
                className="block px-3 py-2 text-sm font-semibold text-gray-700 hover:text-[#c68a2c] hover:bg-gray-50 rounded"
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
