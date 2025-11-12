
import React, { useState, useEffect, useCallback } from 'react';
import { PERSONAL_INFO } from '../constants';

const TYPING_TEXTS = [
  'Transforming brands through design and AI-powered creativity.',
  'Bringing ideas to life with innovation and storytelling.',
  'Crafting visuals that inspire, engage, and connect.',
];

const useTypewriter = (texts: string[], speed = 100, delay = 2000) => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[textIndex];
      if (isDeleting) {
        setText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }

      if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return text;
};


const Home: React.FC = () => {
    const animatedText = useTypewriter(TYPING_TEXTS);

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center text-center relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10" data-aos="fade-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-4">
                    {PERSONAL_INFO.name.split('').map((char, index) => (
                        <span 
                            key={index} 
                            className="fade-in-char" 
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </span>
                    ))}
                </h1>
                <p className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 min-h-[3.5rem] md:min-h-[4rem]">
                    {animatedText}
                    <span className="animate-ping">|</span>
                </p>
                <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                    I’m a passionate graphic designer and creative professional with a focus on visual storytelling, branding, and AI-enhanced media production. I help brands grow through purposeful design and engaging visuals.
                </p>
                 <div className="mt-12" data-aos="fade-up" data-aos-delay="500">
                     <a 
                        href="#portfolio" 
                        onClick={(e) => handleScrollTo(e, 'portfolio')}
                        className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:scale-105 transform transition-transform duration-300 glow cursor-pointer">
                         View My Work
                     </a>
                </div>
            </div>
        </section>
    );
};

export default Home;