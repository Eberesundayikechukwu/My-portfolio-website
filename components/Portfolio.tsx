import React, { useState, useMemo } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { PortfolioCategory } from '../types';
import type { PortfolioItem } from '../types';
import Modal from './Modal';

const categories = Object.values(PortfolioCategory);

const PortfolioCard: React.FC<{ item: PortfolioItem, onOpen: (item: PortfolioItem) => void }> = ({ item, onOpen }) => {
  const commonClass = "w-full object-cover transition-transform duration-300 group-hover:scale-110";
  const aspectClass = item.isLandscape ? 'aspect-video' : item.isVideo ? 'aspect-[9/16]' : 'aspect-square';
  
  // Dynamic column spanning for a masonry-like effect
  const cardSpanClass = item.isLandscape ? 'col-span-2' : 'col-span-1';


  return (
    <div 
      className={`group relative overflow-hidden rounded-lg cursor-pointer bg-gray-800 ${cardSpanClass}`} 
      onClick={() => onOpen(item)}
      data-aos="zoom-in"
    >
      {item.isVideo && item.videoUrl ? (
        <video
          src={item.videoUrl}
          poster={item.imageUrl}
          muted
          loop
          playsInline
          preload="metadata"
          onMouseEnter={e => e.currentTarget.play()}
          onMouseLeave={e => e.currentTarget.pause()}
          className={`${commonClass} ${aspectClass}`}
        />
      ) : (
        <img 
          src={item.imageUrl} 
          alt={item.title} 
          className={`${commonClass} ${aspectClass}`} 
          loading="lazy" 
        />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
        <div className="text-center text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 p-4">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p className="text-sm">{item.category}</p>
          {item.isVideo && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"></path>
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>(PortfolioCategory.ALL);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  const filteredPortfolio = useMemo(() => {
    if (activeCategory === PortfolioCategory.ALL) {
      return PORTFOLIO_DATA;
    }
    return PORTFOLIO_DATA.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-20 bg-black/20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-white">My Works</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-2"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12" data-aos="fade-up" data-aos-delay="200">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm md:text-base font-semibold rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 items-start">
          {filteredPortfolio.map((item) => (
            <PortfolioCard key={item.id} item={item} onOpen={setSelectedItem} />
          ))}
        </div>
      </div>
      {selectedItem && (
        <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
};

export default Portfolio;