import { useState, useEffect } from 'react';

const Sparkle = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 700);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="absolute -top-1 -right-4 z-50">
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-rug-primary animate-sparkle"
        fill="currentColor"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    </div>
  );
};

export default Sparkle;