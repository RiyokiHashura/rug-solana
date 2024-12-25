const RugPullModal = ({ isVisible, onTryAgain, onJoinChat }) => {
  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ animation: 'fadeIn 0.5s ease-in-out' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      
      {/* Modal */}
      <div className="
        relative 
        w-full 
        max-w-lg 
        mx-4 
        p-8 
        rounded-2xl 
        bg-rug-dark-deeper/90 
        border 
        border-rug-primary/20
        shadow-[0_0_30px_-5px_rgba(0,255,157,0.3)]
        animate-scale-in
      ">
        {/* Header */}
        <h2 className="
          text-3xl 
          font-bold 
          text-center 
          mb-6 
          text-rug-text
          font-mono
        ">
          You Got Rugged! 🫡
        </h2>

        {/* Body */}
        <p className="
          text-center 
          text-rug-text/80 
          mb-8
          leading-relaxed
        ">
          Congratulations! You've experienced your first rug pull. 
          Welcome to the club of crypto casualties.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button
            onClick={onTryAgain}
            className="
              px-6 
              py-3 
              rounded-lg 
              bg-rug-primary/10 
              text-rug-primary 
              border 
              border-rug-primary/20
              hover:bg-rug-primary/20
              hover:border-rug-primary/30
              hover:shadow-[0_0_20px_-5px_rgba(0,255,157,0.5)]
              transition-all
              duration-300
              font-medium
            "
          >
            Try Again
          </button>
          
          <button
            onClick={onJoinChat}
            className="
              px-6 
              py-3 
              rounded-lg 
              bg-rug-secondary/10 
              text-rug-secondary 
              border 
              border-rug-secondary/20
              hover:bg-rug-secondary/20
              hover:border-rug-secondary/30
              hover:shadow-[0_0_20px_-5px_rgba(128,255,255,0.5)]
              transition-all
              duration-300
              font-medium
            "
          >
            Join the Chaos in Chat
          </button>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes scaleIn {
            from { 
              opacity: 0;
              transform: scale(0.95);
            }
            to { 
              opacity: 1;
              transform: scale(1);
            }
          }
          
          .animate-scale-in {
            animation: scaleIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
};

export default RugPullModal; 