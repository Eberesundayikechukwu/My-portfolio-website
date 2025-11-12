
import React from 'react';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
       <style>
        {`
          @keyframes move-blob-1 {
            0% { transform: translate(-50vw, -50vh) scale(1); }
            25% { transform: translate(50vw, -30vh) scale(1.2); }
            50% { transform: translate(30vw, 50vh) scale(0.8); }
            75% { transform: translate(-40vw, 40vh) scale(1.1); }
            100% { transform: translate(-50vw, -50vh) scale(1); }
          }
          @keyframes move-blob-2 {
            0% { transform: translate(40vw, 50vh) scale(1); }
            25% { transform: translate(-30vw, 30vh) scale(1.2); }
            50% { transform: translate(-50vw, -50vh) scale(0.9); }
            75% { transform: translate(50vw, -20vh) scale(1.1); }
            100% { transform: translate(40vw, 50vh) scale(1); }
          }
           @keyframes move-blob-3 {
            0% { transform: translate(0vw, 0vh) scale(1); }
            25% { transform: translate(-40vw, 40vh) scale(0.8); }
            50% { transform: translate(30vw, -30vh) scale(1.2); }
            75% { transform: translate(0vw, 50vh) scale(0.9); }
            100% { transform: translate(0vw, 0vh) scale(1); }
          }
          .blob-1 { animation: move-blob-1 40s infinite alternate; }
          .blob-2 { animation: move-blob-2 35s infinite alternate; }
          .blob-3 { animation: move-blob-3 45s infinite alternate; }
        `}
      </style>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="absolute w-[800px] h-[800px] bg-gradient-to-tr from-purple-700 to-pink-500 rounded-full opacity-30 filter blur-3xl blob-1"></div>
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-tr from-blue-700 to-purple-500 rounded-full opacity-30 filter blur-3xl blob-2"></div>
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-tr from-pink-600 to-blue-400 rounded-full opacity-30 filter blur-3xl blob-3"></div>
    </div>
  );
};

export default AnimatedBackground;