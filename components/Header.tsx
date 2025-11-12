import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="transition-transform duration-300 hover:scale-110 focus:outline-none focus:scale-110" aria-label="Homepage">
            <svg className="h-10 w-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="logoTitle">
                <title id="logoTitle">Ebere Sunday Ikechukwu Logo</title>
                <defs>
                    <linearGradient id="logoGradientHeader" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#C33764"/>
                        <stop offset="1" stopColor="#1D2671"/>
                    </linearGradient>
                </defs>
                
                {/* Gradient circle outline */}
                <circle cx="50" cy="50" r="48" stroke="url(#logoGradientHeader)" strokeWidth="4" fill="none" />

                {/* Stylized 'E' */}
                <g transform="translate(-20, 0) translate(50, 50) scale(0.6) translate(-50, -50)">
                    <path d="M80 20H40C28.9543 20 20 28.9543 20 40V60C20 71.0457 28.9543 80 40 80H80" stroke="url(#logoGradientHeader)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="20" y1="50" x2="60" y2="50" stroke="url(#logoGradientHeader)" strokeWidth="12" strokeLinecap="round"/>
                </g>

                {/* 'SI' Initials */}
                <text x="70" y="50"
                      fontFamily="Poppins, sans-serif" 
                      fontSize="36" 
                      fontWeight="700"
                      fill="url(#logoGradientHeader)"
                      textAnchor="middle" 
                      dominantBaseline="central">
                    SI
                </text>
            </svg>
          </a>
          <nav className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-base font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-pink-400'
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-black/50 backdrop-blur-lg">
          <nav className="flex flex-col items-center py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-medium transition-colors duration-300 ${
                  activeSection === link.href.substring(1)
                    ? 'text-pink-400'
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;