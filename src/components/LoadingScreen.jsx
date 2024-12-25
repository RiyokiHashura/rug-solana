import { useEffect, useState } from 'react';

const LoadingScreen = ({ isLoading }) => {
  return (
    <div className={`
      fixed 
      inset-0 
      z-50 
      bg-rug-dark 
      flex 
      items-center 
      justify-center
      transition-opacity 
      duration-500
      ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}>
      <div className="text-center">
        <div className="text-rug-primary text-4xl font-bold mb-4 animate-pulse">
          $RUG
        </div>
        <div className="w-48 h-1 bg-rug-dark-deeper rounded-full overflow-hidden">
          <div 
            className="h-full bg-rug-primary rounded-full transition-all duration-700"
            style={{
              width: '100%',
              animation: 'loading 0.8s ease-in-out'
            }}
          />
        </div>
      </div>

      <style>
        {`
          @keyframes loading {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingScreen;