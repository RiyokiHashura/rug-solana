const Footer = () => {
  return (
    <footer className="border-t border-rug-dark-deeper/50 mt-auto backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="
          flex 
          flex-col 
          sm:flex-row 
          justify-between 
          items-center 
          gap-4
        ">
          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="
                text-sm 
                text-rug-text/50 
                hover:text-rug-text 
                transition-colors 
                duration-300
              "
            >
              Terms & Conditions
            </a>
            <div className="w-1 h-1 rounded-full bg-rug-text/20" />
            <a 
              href="#" 
              className="
                text-sm 
                text-rug-text/50 
                hover:text-rug-text 
                transition-colors 
                duration-300
              "
            >
              Privacy Policy
            </a>
            <div className="w-1 h-1 rounded-full bg-rug-text/20" />
            <a 
              href="#" 
              className="
                text-sm 
                text-rug-text/50 
                hover:text-rug-text 
                transition-colors 
                duration-300
              "
            >
              Contact Us
            </a>
          </div>

          {/* Tagline */}
          <div className="
            text-xs 
            text-rug-text/40
            font-mono
            flex 
            items-center 
            gap-1.5
            px-3
            py-1
            rounded-full
            bg-rug-dark-deeper/30
            border
            border-rug-dark-deeper
            transition-colors
            duration-300
            hover:text-rug-text/60
          ">
            <span>🫠</span>
            <span>Not financial advice, but vibes are immaculate</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
