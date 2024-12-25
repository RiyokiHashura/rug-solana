import { useState, useRef, useEffect } from 'react';

const BuyButton = ({ onRug, disabled }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const buttonRef = useRef(null);
  
  // Ripple effect state
  const [ripples, setRipples] = useState([]);
  
  // Pulse animation every 5 seconds
  useEffect(() => {
    if (disabled) return;
    
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [disabled]);

  const createRipple = (event) => {
    if (disabled) return;
    
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const ripple = {
      x,
      y,
      id: Date.now(),
    };
    
    setRipples(prev => [...prev, ripple]);
    
    // Clean up ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== ripple.id));
    }, 1000);
  };

  const handleClick = (e) => {
    if (disabled) return;
    createRipple(e);
    onRug?.();
  };

  return (
    <div className="relative h-[60px]">
      {/* Enhanced glow effect with dual layers */}
      <div className={`
        absolute 
        inset-0 
        rounded-xl
        transition-all 
        duration-500
        ${isHovered ? 'opacity-100 scale-110 blur-xl' : 'opacity-0 scale-100 blur-lg'}
        ${isPulsing ? 'animate-pulse-glow' : ''}
        bg-gradient-to-r from-rug-primary/30 via-rug-primary/20 to-rug-primary/30
      `} />

      {/* Additional ambient glow */}
      <div className={`
        absolute 
        inset-0 
        rounded-xl
        transition-all 
        duration-700
        ${isHovered ? 'opacity-70 scale-125' : 'opacity-0 scale-100'}
        bg-rug-primary/10
        blur-2xl
      `} />

      {/* Pulse animation with gradient */}
      <div className={`
        absolute 
        inset-0 
        rounded-xl
        transition-all 
        duration-300
        ${isPulsing ? 'opacity-100 scale-105' : 'opacity-0 scale-100'}
        bg-gradient-to-r from-rug-primary/20 via-rug-primary/10 to-rug-primary/20
        blur-lg
      `} />

      {/* Main button with enhanced effects */}
      <button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        disabled={disabled}
        className={`
          relative
          w-full
          h-full
          px-8 
          py-4 
          bg-gradient-to-r
          from-rug-primary
          via-rug-primary
          to-rug-primary
          rounded-xl
          text-rug-dark
          font-bold
          tracking-wide
          text-xl
          uppercase
          transform
          transition-all
          duration-300
          shadow-lg
          shadow-rug-primary/20
          hover:shadow-rug-primary/30
          hover:scale-[1.05]
          hover:-translate-y-0.5
          active:scale-[0.98]
          active:translate-y-0
          active:shadow-rug-primary/40
          disabled:opacity-50
          disabled:cursor-not-allowed
          disabled:hover:scale-100
          disabled:hover:translate-y-0
          disabled:hover:shadow-none
          overflow-hidden
          ${isPressed ? 'scale-[0.98] translate-y-0.5' : ''}
          ${disabled ? 'grayscale' : ''}
          group
        `}
      >
        {/* Enhanced shine effect overlay */}
        <div className="
          absolute
          inset-0
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
          translate-x-[-200%]
          group-hover:translate-x-[200%]
          transition-transform
          duration-1000
          ease-out
        "/>

        {/* Existing ripple effects */}
        {ripples.map(ripple => (
          <span
            key={ripple.id}
            className="
              absolute
              bg-gradient-to-r from-white/40 to-white/20
              rounded-full
              animate-ripple
              pointer-events-none
            "
            style={{
              left: ripple.x,
              top: ripple.y,
              width: '200px',
              height: '200px',
              marginLeft: '-100px',
              marginTop: '-100px',
            }}
          />
        ))}

        {/* Button text with enhanced shine */}
        <span className={`
          relative
          inline-block
          transition-transform
          duration-300
          ${isPressed ? 'scale-[0.98]' : ''}
          ${isHovered ? 'animate-shine' : ''}
          pointer-events-none
          z-10
        `}>
          BUY $RUG
        </span>
      </button>
    </div>
  );
};

export default BuyButton;
