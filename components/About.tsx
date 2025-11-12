import React from 'react';

const About: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          <div data-aos="zoom-in">
            <img 
              src="/Gemini_Generated_Image_g73vc4g73vc4g73v.png" 
              alt="Ebere Sunday Ikechukwu"
              className="w-64 md:w-80 aspect-[8/9] rounded-2xl object-cover border-4 border-purple-500 p-2 glow"
            />
          </div>
          <div className="max-w-2xl text-center lg:text-left" data-aos="fade-left" data-aos-delay="200">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              As a seasoned creative professional, I specialize in bridging the gap between traditional graphic design and cutting-edge, AI-driven media. My expertise lies in crafting compelling visual narratives that not only captivate audiences but also drive brand engagement. My work is a meticulous blend of artistic imagination, technical precision, and innovative technology, resulting in visuals that connect on an emotional level and communicate with impactful clarity.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a 
                href="/Ebere_Sunday_Ikechukwu_Graphic-Design_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold py-3 px-6 rounded-full hover:scale-105 transform transition-transform duration-300"
                aria-label="Download my Resume"
              >
                Download Resume
              </a>
              <a 
                href="#contact" 
                onClick={handleScrollToContact}
                className="border-2 border-purple-500 text-white font-semibold py-3 px-6 rounded-full hover:bg-purple-500/20 hover:scale-105 transform transition-all duration-300">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;