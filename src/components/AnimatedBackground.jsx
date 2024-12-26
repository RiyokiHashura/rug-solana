const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1,
  left: Math.random() * 90 + 5,
  top: Math.random() * 90 + 5,
  delay: Math.random() * -8,
  opacity: Math.random() * 0.15 + 0.1
}));

const AnimatedBackground = () => {
  return (
    <div 
      className="fixed inset-0 z-[-1] overflow-hidden transform-gpu"
      style={{
        background: 'linear-gradient(180deg, #0D1117 0%, #0D1117 35%, #0F1C18 100%)',
        willChange: 'transform'
      }}
    >
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute rounded-full transform-gpu"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'rgba(0, 255, 157, 0.4)',
            opacity: particle.opacity,
            animation: `float 20s infinite ease-in-out`,
            animationDelay: `${particle.delay}s`,
            willChange: 'transform'
          }}
        />
      ))}

      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translate3d(0, 0, 0); }
            25% { transform: translate3d(10px, -10px, 0); }
            50% { transform: translate3d(-5px, 15px, 0); }
            75% { transform: translate3d(-15px, -5px, 0); }
          }
        `}
      </style>
    </div>
  );
};

export default AnimatedBackground;