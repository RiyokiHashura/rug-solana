const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-rug-dark/50 backdrop-blur-md border-b border-rug-dark">
      <div className="max-w-[1920px] mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Left side - Logo and Title */}
          <div className="flex items-center gap-2">
            <img 
              src="/rug-logo.png" 
              alt="RUG" 
              className="w-8 h-8"
            />
            <div className="flex items-center gap-1">
              <span className="text-rug-primary font-bold">$RUG</span>
              <span className="text-rug-text/70">on</span>
              <span className="text-rug-text">Solana</span>
            </div>
          </div>

          {/* Right side - Show SOL button */}
          <button className="
            flex 
            items-center 
            gap-2 
            px-4 
            py-2 
            rounded-lg 
            bg-rug-dark-deeper/50 
            border 
            border-rug-dark/30
            hover:border-rug-secondary/20
            transition-colors
            duration-200
          ">
            <span className="text-rug-text/70">Show SOL</span>
            <span className="text-rug-text/70">↗</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header; 