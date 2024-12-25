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
      transition-all
      duration-500
      ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}
    `}>
      <div className="relative flex flex-col items-center gap-6">
        {/* Spinner */}
        <div className="relative">
          {/* Outer glow */}
          <div className="
            absolute 
            inset-0 
            rounded-full 
            animate-spin-slow
            bg-gradient-to-r 
            from-rug-primary 
            to-rug-secondary
            blur-md
            opacity-50
          " />
          
          {/* Inner spinner */}
          <div className="
            w-16 
            h-16 
            rounded-full 
            border-2 
            border-t-rug-primary
            border-r-rug-secondary
            border-b-rug-primary
            border-l-transparent
            animate-spin
            relative
          " />
          
          {/* Center dot */}
          <div className="
            absolute 
            inset-[6px]
            rounded-full 
            bg-rug-dark
            border-4
            border-rug-dark-deeper
          " />
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-3">
          <div className="
            flex 
            items-center 
            gap-3
            px-4
            py-2
            rounded-full
            bg-rug-dark-deeper/50
            border
            border-rug-dark-deeper
            backdrop-blur-sm
          ">
            <span className="animate-bounce">🫠</span>
            <span className="
              font-mono 
              text-sm 
              text-rug-text/70
              animate-pulse
            ">
              Loading $RUG...
            </span>
          </div>
          
          <div className="
            text-sm
            text-rug-text/50
            font-medium
          ">
            Sit tight, the gains are cooking!
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;