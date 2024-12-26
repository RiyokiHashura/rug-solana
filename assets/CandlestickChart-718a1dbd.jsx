import { useState, useEffect, useRef, useCallback } from 'react';

const CandlestickChart = ({ isRugPulled, triggerCrash, onPriceChange }) => {
  const [candles, setCandles] = useState([]);
  const [hoverData, setHoverData] = useState(null);
  const [cursorX, setCursorX] = useState(null);
  const chartRef = useRef(null);
  const width = 750;
  const height = 400;
  const candleWidth = 16;
  const spacing = 2;
  const maxCandles = 28;
  const [initialPrice, setInitialPrice] = useState(null);
  const [priceChange, setPriceChange] = useState(0);
  const [basePrice, setBasePrice] = useState(null);
  const [prevPrice, setPrevPrice] = useState(null);
  const [currentDirection, setCurrentDirection] = useState(true);
  const [consecutiveGreens, setConsecutiveGreens] = useState(0);

  // Format numbers for tooltip
  const formatNumber = (num) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`;
    return `$${num.toFixed(2)}`;
  };

  const handleMouseMove = (e) => {
    if (!chartRef.current) return;
    
    const rect = chartRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setCursorX(x);
    
    const candleIndex = Math.floor((width - x) / (candleWidth + spacing));
    
    if (candleIndex >= 0 && candleIndex < candles.length) {
      const candle = candles[candles.length - 1 - candleIndex];
      const fakeVolume = Math.random() * 2000000 + 500000;
      const fakeTrades = Math.floor(Math.random() * 500 + 100);
      
      setHoverData({
        x: e.clientX,
        y: e.clientY,
        price: candle.close,
        volume: fakeVolume,
        trades: fakeTrades,
        timestamp: new Date(candle.timestamp).toLocaleTimeString(),
        isGreen: candle.close > candle.open
      });
    } else {
      setHoverData(null);
    }
  };

  const handleMouseLeave = () => {
    setHoverData(null);
    setCursorX(null);
  };

  const generateBullishData = () => {
    const data = [];
    const periods = 50;
    let price = 1;
    
    for (let i = 0; i < periods; i++) {
      const time = new Date(Date.now() - (periods - i) * 3600000);
      
      // Keep similar movement pattern but with longer candles
      const moveUp = Math.random() > 0.1;
      const volatility = Math.random() * 0.15 + 0.05; // 5-20% moves
      const movement = volatility * (moveUp ? 1 : -0.3);
      
      price *= (1 + movement);
      
      // Much longer bodies but controlled wicks
      const wickSize = Math.random() * 0.08; // 8% max wick
      const bodySize = Math.random() * 0.35 + 0.15; // 15-50% body size
      
      const open = price * (1 - bodySize/2);
      const close = price * (1 + bodySize/2);
      const high = Math.max(open, close) * (1 + wickSize);
      const low = Math.min(open, close) * (1 - wickSize);

      data.push({
        time: time.getTime() / 1000,
        open,
        high,
        close,
        low
      });
    }
    return data;
  };

  // Add price update throttling
  const updatePrice = useCallback((price, isGreen) => {
    // Use RAF for smooth animation
    requestAnimationFrame(() => {
      onPriceChange?.(price, isGreen);
    });
  }, [onPriceChange]);

  useEffect(() => {
    const basePrice = 0.00060780;
    let animationFrameId;
    
    const interval = setInterval(() => {
      setCandles(prev => {
        const lastCandle = prev[prev.length - 1] || { close: basePrice };
        
        // If crashing, handle that separately
        if (triggerCrash) {
          const crashCandle = {
            open: lastCandle.close,
            close: 0.00000001,
            high: lastCandle.close,
            low: 0.00000001,
            timestamp: Date.now(),
            isGreen: false
          };
          
          updatePrice(crashCandle.close.toFixed(8), false);
          clearInterval(interval);

          // Add delay before showing modal
          setTimeout(() => {
            setIsRugPulled(true);
          }, 1000);

          return [...prev, crashCandle];
        }

        const open = lastCandle.close;
        const redProbability = consecutiveGreens >= 5 ? 0.4 : 0.15;
        const moveUp = prev.length < 3 ? true : Math.random() > redProbability;
        
        if (moveUp) {
          setConsecutiveGreens(prev => prev + 1);
        } else {
          setConsecutiveGreens(0);
        }

        // Smoother price movements
        const volatility = Math.random() * (moveUp ? 0.12 : 0.06) + 0.03; // Reduced volatility
        const close = moveUp 
          ? open * (1 + volatility)
          : open * (1 - volatility * 0.5);
        
        const high = moveUp ? close * 1.01 : open * 1.01; // Reduced wick size
        const low = moveUp ? open * 0.99 : close * 0.99;
        
        const newCandle = {
          open,
          close,
          high,
          low,
          timestamp: Date.now(),
          isGreen: moveUp
        };

        setCurrentDirection(moveUp);
        
        // Smooth price updates
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(() => {
          updatePrice(close.toFixed(8), moveUp);
        });
        
        const updatedCandles = [...prev, newCandle].slice(-maxCandles);
        return updatedCandles;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationFrameId);
    };
  }, [consecutiveGreens, triggerCrash, updatePrice]);

  const scaleToChart = (price) => {
    if (candles.length === 0) return 0;
    
    const prices = candles.flatMap(c => [c.open, c.high, c.low, c.close]);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;
    
    // Use exact price points without padding
    const scaledY = ((price - minPrice) / priceRange) * (height * 0.9);
    return height - scaledY - (height * 0.05); // Small padding top/bottom
  };

  useEffect(() => {
    if (candles.length > 0) {
      const lastCandle = candles[candles.length - 1];
      onPriceChange?.(lastCandle.close.toFixed(8), currentDirection);
    }
  }, [candles, currentDirection]);

  return (
    <div className="relative group flex justify-center mb-8">
      {/* Chart container with enhanced glow effect */}
      <div className="
        relative 
        p-6 
        rounded-xl 
        overflow-hidden
        bg-rug-dark-deeper/30
        backdrop-blur-sm
        border
        border-rug-dark
        transition-gpu
        duration-300
        hover:border-rug-secondary/20
        shadow-[0_0_15px_-3px_rgba(0,255,157,0.15)]
        animate-gpu
      ">
        {/* Container glow effect */}
        <div className="
          absolute
          inset-0
          -z-10
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          bg-gradient-to-r
          from-rug-primary/5
          via-rug-secondary/5
          to-rug-primary/5
          blur-xl
        " />

        {/* Animated border */}
        <div className="
          absolute 
          inset-0 
          rounded-xl 
          overflow-hidden
        ">
          <div className="
            absolute 
            top-0 
            left-0 
            w-[200%] 
            h-full
            bg-gradient-to-r 
            from-transparent 
            via-rug-secondary/20 
            to-transparent
            -translate-x-[100%]
            group-hover:translate-x-[100%]
            transition-transform
            duration-1000
            ease-in-out
          " />
        </div>

        {/* Chart content */}
        <div 
          ref={chartRef}
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <svg 
            width={width} 
            height={height} 
            className="relative z-10"
          >
            {/* Enhanced grid lines */}
            <g className="text-rug-text/[0.08]">
              {Array.from({ length: 6 }).map((_, i) => (
                <line
                  key={`h-${i}`}
                  x1="0"
                  y1={height * (i / 5)}
                  x2={width}
                  y2={height * (i / 5)}
                  stroke="currentColor"
                  strokeDasharray="4 4"
                  className="transition-opacity duration-300 group-hover:text-rug-text/[0.12]"
                />
              ))}
              {Array.from({ length: 8 }).map((_, i) => (
                <line
                  key={`v-${i}`}
                  x1={width * (i / 7)}
                  y1="0"
                  x2={width * (i / 7)}
                  y2={height}
                  stroke="currentColor"
                  strokeDasharray="4 4"
                  className="transition-opacity duration-300 group-hover:text-rug-text/[0.12]"
                />
              ))}
            </g>

            {/* Enhanced cursor line */}
            {cursorX !== null && (
              <line
                x1={cursorX}
                y1="0"
                x2={cursorX}
                y2={height}
                stroke="currentColor"
                className="text-rug-secondary/20"
                strokeWidth="1"
              />
            )}

            {/* Enhanced candles */}
            {candles.map((candle, i) => {
              const x = width - ((candles.length - i) * (candleWidth + spacing)) - 50;
              const isLatest = i === candles.length - 1;
              
              return (
                <g key={i}>
                  {/* Wick */}
                  <line
                    x1={x + candleWidth / 2}
                    y1={scaleToChart(candle.high)}
                    x2={x + candleWidth / 2}
                    y2={scaleToChart(candle.low)}
                    className={`
                      stroke-current 
                      ${candle.isGreen ? 'text-rug-primary' : 'text-red-500'}
                      ${isLatest && (candle.isGreen ? 'filter drop-shadow-glow' : 'filter drop-shadow-glow-red')}
                    `}
                    strokeWidth="1"
                  />
                  
                  {/* Body */}
                  <rect
                    x={x}
                    y={scaleToChart(Math.max(candle.open, candle.close))}
                    width={candleWidth}
                    height={Math.abs(scaleToChart(candle.open) - scaleToChart(candle.close))}
                    className={`
                      ${candle.isGreen ? 'fill-rug-primary' : 'fill-red-500'}
                      ${isLatest && (candle.isGreen ? 'filter drop-shadow-glow' : 'filter drop-shadow-glow-red')}
                    `}
                  />

                  {/* Latest candle glow effect */}
                  {isLatest && (
                    <rect
                      x={x}
                      y={scaleToChart(Math.max(candle.open, candle.close))}
                      width={candleWidth}
                      height={Math.abs(scaleToChart(candle.open) - scaleToChart(candle.close))}
                      className={`
                        ${candle.isGreen ? 'fill-rug-primary' : 'fill-red-500'}
                        opacity-50
                        blur-sm
                        animate-pulse-subtle
                      `}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Enhanced tooltip */}
          {hoverData && (
            <div 
              className="
                absolute 
                z-20 
                bg-rug-dark/95 
                backdrop-blur-sm 
                border 
                border-rug-dark-deeper 
                rounded-lg 
                p-3 
                shadow-xl
                pointer-events-none
                transform
                -translate-x-1/2
                -translate-y-full
                transition-all
                duration-200
                animate-fade-in
              "
              style={{
                left: `${hoverData.x}px`,
                top: `${hoverData.y - 16}px`,
              }}
            >
              <div className="space-y-1.5 text-sm">
                <div className="text-rug-text/70 font-mono">
                  {hoverData.timestamp}
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  <div className="text-rug-text/70">Price</div>
                  <div className={`font-mono ${
                    hoverData.isGreen ? 'text-rug-primary' : 'text-red-400'
                  }`}>
                    {formatNumber(hoverData.price)}
                  </div>
                  <div className="text-rug-text/70">Volume</div>
                  <div className="text-rug-text font-mono">
                    {formatNumber(hoverData.volume)}
                  </div>
                  <div className="text-rug-text/70">Trades</div>
                  <div className="text-rug-text font-mono">
                    {hoverData.trades}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CandlestickChart;