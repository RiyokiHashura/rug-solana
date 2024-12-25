import { useState, useEffect } from 'react';

const GlitchEffect = ({ children }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    };

    // Random glitch every 15-25 seconds
    const interval = setInterval(() => {
      if (Math.random() > 0.5) { // 50% chance to trigger
        triggerGlitch();
      }
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {children}
      {isGlitching && (
        <>
          {/* Glitch layers */}
          <div className="
            absolute 
            inset-0 
            opacity-70
            mix-blend-screen
            animate-glitch-1
          ">
            {children}
          </div>
          <div className="
            absolute 
            inset-0 
            opacity-70
            mix-blend-multiply
            animate-glitch-2
          ">
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default GlitchEffect;