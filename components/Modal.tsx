import React, { useEffect } from 'react';
import type { PortfolioItem } from '../types';

interface ModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Determine if the item is a portrait video
  const isPortraitVideo = item.isVideo && !item.isLandscape;

  // Define dynamic classes based on orientation
  const modalSizeClass = isPortraitVideo ? 'max-w-3xl' : 'max-w-5xl';
  const mediaContainerClass = isPortraitVideo ? 'md:w-2/5' : 'md:w-3/5';
  const textContainerClass = isPortraitVideo ? 'md:w-3/5' : 'md:w-2/5';

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
        <style>
        {`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in {
                animation: fade-in 0.3s ease-out forwards;
            }
            @keyframes zoom-in {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
            }
            .animate-zoom-in {
                animation: zoom-in 0.3s ease-out forwards;
            }
        `}
        </style>
      <div 
        className={`bg-gray-900 rounded-lg ${modalSizeClass} w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative animate-zoom-in`}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-400 hover:text-white z-20"
          aria-label="Close modal"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        
        {/* Media container */}
        <div className={`${mediaContainerClass} w-full bg-black flex items-center justify-center flex-shrink-0`}>
          {item.isVideo && item.videoUrl ? (
            <video 
              key={item.id} // Add key to force re-render on item change
              src={item.videoUrl} 
              controls 
              autoPlay 
              loop 
              className="w-full max-h-[90vh] object-contain" 
            />
          ) : (
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full max-h-[90vh] object-contain" 
            />
          )}
        </div>

        {/* Text container */}
        <div className={`${textContainerClass} w-full p-6 md:p-8 flex flex-col justify-center overflow-y-auto`}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h2>
            <span className="bg-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full self-start">{item.category}</span>
            <p className="text-gray-300 mt-6 text-base leading-relaxed">
                {item.description}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;