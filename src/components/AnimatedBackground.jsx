const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1.5,
  left: Math.random() * 90 + 5,
  top: Math.random() * 90 + 5,
  delay: Math.random() * -15,
  opacity: Math.random() * 0.2 + 0.1
}));

const AnimatedBackground = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(180deg, #0D1117 0%, #0D1117 35%, #0F1C18 100%)',
        zIndex: -1,
        overflow: 'hidden'
      }}
    >
      {particles.map(particle => (
        <div
          key={`static-${particle.id}`}
          style={{
            position: 'absolute',
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            borderRadius: '50%',
            backgroundColor: 'rgba(0, 255, 157, ' + particle.opacity + ')',
            boxShadow: '0 0 3px rgba(0, 255, 157, 0.2)',
            animation: `scatter 22.5s linear infinite`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}

      {/* Subtle vignette overlay */}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at center, transparent 0%, rgba(13, 17, 23, 0.3) 100%)',
          pointerEvents: 'none'
        }}
      />

      <style>
        {`
          @keyframes scatter {
            0% { transform: translate(0, 0); }
            20% { transform: translate(20px, -15px); }
            40% { transform: translate(-15px, 20px); }
            60% { transform: translate(-20px, -20px); }
            80% { transform: translate(15px, 15px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;