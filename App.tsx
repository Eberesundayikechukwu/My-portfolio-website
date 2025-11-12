
import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

// Declare AOS to satisfy TypeScript since it's loaded from a CDN
declare var AOS: any;

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Increased duration for a smoother feel
      once: true, // Whether animation should happen only once - while scrolling down
      easing: 'ease-out-cubic', // A smoother easing function
    });
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-gray-200">
      <AnimatedBackground />
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;