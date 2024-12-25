import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import CandlestickChart from './components/CandlestickChart';
import BuyButton from './components/BuyButton';
import StatsPanel from './components/StatsPanel';
import GlitchEffect from './components/GlitchEffect';
import Sparkle from './components/Sparkle';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

// Lazy load non-critical components
const LiveChat = lazy(() => import('./components/LiveChat'));
const RugPullModal = lazy(() => import('./components/RugPullModal'));
const AnimatedBackground = lazy(() => import('./components/AnimatedBackground'));

function App() {
  const [isRugPulled, setIsRugPulled] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const logoClickTimer = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [priceData, setPriceData] = useState({
    price: '69.42',
    isGreen: true
  });
  const [triggerCrash, setTriggerCrash] = useState(false);
  const [showRugPullModal, setShowRugPullModal] = useState(false);

  useEffect(() => {
    // Reduced from 2000ms to 800ms
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleLogoClick = () => {
    setLogoClicks(prev => {
      const newCount = prev + 1;
      
      if (logoClickTimer.current) {
        clearTimeout(logoClickTimer.current);
      }
      
      logoClickTimer.current = setTimeout(() => {
        setLogoClicks(0);
      }, 2000);

      if (newCount === 5) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 3000);
        return 0;
      }
      
      return newCount;
    });
  };

  const handleTryAgain = () => {
    // Simple page reload to reset everything
    window.location.reload();
  };

  const handleJoinChat = () => {
    // Trigger chat open
    setShowRugPullModal(false);
  };

  return (
    <>
      <Suspense fallback={<div className="fixed inset-0 bg-rug-dark" />}>
        <AnimatedBackground />
      </Suspense>
      <div className="relative">
        <LoadingScreen isLoading={isLoading} />
        <div 
          className={`
            transition-opacity 
            duration-1000 
            ${isLoading ? 'opacity-0' : 'opacity-100'}
          `}
        >
          <div className="relative min-h-screen flex flex-col bg-transparent">
            {/* Easter Egg Overlay */}
            {showEasterEgg && (
              <div className="
                fixed 
                inset-0 
                z-50 
                flex 
                items-center 
                justify-center 
                bg-black/80 
                backdrop-blur-sm
                animate-fade-in
              ">
                <div className="
                  text-center 
                  p-6 
                  rounded-xl 
                  bg-rug-dark-deeper/90 
                  border 
                  border-rug-primary/20
                  animate-scale-in
                ">
                  <div className="text-4xl mb-3">🫠</div>
                  <div className="text-rug-text font-mono">
                    You found the hidden stash...
                    <br />
                    now rug responsibly.
                  </div>
                </div>
              </div>
            )}

            <div className="relative z-10 flex-grow">
              {/* Header */}
              <header className="relative border-b border-rug-dark-deeper/50">
                {/* Header Background */}
                <div className="absolute inset-0 backdrop-blur-sm bg-rug-dark/80" />
                
                {/* Header Content */}
                <div className="relative max-w-7xl mx-auto px-4 py-4">
                  <div className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-6">
                      <div 
                        className="relative cursor-pointer group" 
                        onClick={handleLogoClick}
                      >
                        <GlitchEffect>
                          <h1 className="text-2xl font-extrabold font-mono text-rug-text">
                            <span className="relative">
                              $RUG
                              <div className="
                                absolute 
                                -bottom-1 
                                left-0 
                                right-0 
                                h-px 
                                bg-gradient-to-r 
                                from-transparent 
                                via-rug-primary 
                                to-transparent 
                                animate-glow-line
                              " />
                            </span>
                            <Sparkle />
                          </h1>
                        </GlitchEffect>
                      </div>

                      {/* Solana Label */}
                      <div className="
                        flex 
                        items-center 
                        space-x-2 
                        px-3 
                        py-1.5 
                        rounded-lg 
                        bg-rug-dark-deeper/50 
                        border 
                        border-rug-dark-deeper
                      ">
                        <div className="w-2 h-2 rounded-full bg-[#14F195]" />
                        <span className="text-sm font-medium text-rug-text/70">
                          Solana
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </header>

              {/* Main Content */}
              <main className="max-w-[1920px] mx-auto px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  {/* Chart Section */}
                  <div className="lg:col-span-2 min-h-[600px]">
                    <CandlestickChart 
                      isRugPulled={isRugPulled}
                      triggerCrash={triggerCrash}
                      onPriceChange={(price, isGreen) => setPriceData({ price, isGreen })}
                    />
                    <div className="mt-8">
                      <BuyButton 
                        onRug={() => {
                          setIsRugPulled(true);
                          setTriggerCrash(true);
                          setTimeout(() => setShowRugPullModal(true), 1000);
                        }}
                        disabled={isRugPulled}
                      />
                    </div>
                  </div>

                  {/* Stats Panel */}
                  <div className="lg:col-span-1">
                    <div className="lg:sticky lg:top-8">
                      <StatsPanel 
                        isRugPulled={isRugPulled}
                        currentPrice={priceData.price}
                        isGreen={priceData.isGreen}
                      />
                    </div>
                  </div>
                </div>
              </main>
            </div>

            {/* Footer */}
            <div className="relative z-10">
              <Footer />
            </div>

            <Suspense fallback={null}>
              <LiveChat />
            </Suspense>
          </div>
        </div>
      </div>

      <Suspense fallback={null}>
        {showRugPullModal && (
          <RugPullModal 
            isVisible={showRugPullModal}
            onTryAgain={handleTryAgain}
            onJoinChat={handleJoinChat}
          />
        )}
      </Suspense>
    </>
  );
}

export default App;