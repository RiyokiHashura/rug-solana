import { useState, useEffect } from 'react';

const StatsPanel = ({ isRugPulled, currentPrice, isGreen }) => {
  const [showUSD, setShowUSD] = useState(true);
  const [stats, setStats] = useState({
    price: parseFloat(currentPrice),
    marketCap: 62000,
    volume: 15000,
    liquidity: 30000,
    buys: 156,
    sells: 89
  });
  const [changes, setChanges] = useState({
    price: 0,
    marketCap: 0,
    volume: 0,
    liquidity: 0
  });
  const [animatingStats, setAnimatingStats] = useState(new Set());
  const [priceAnimating, setPriceAnimating] = useState(false);
  const [lastPrice, setLastPrice] = useState(null);
  const [isPriceDown, setIsPriceDown] = useState(false);

  // Only update when currentPrice changes
  useEffect(() => {
    const newPrice = parseFloat(currentPrice);
    const priceDown = lastPrice !== null && newPrice < lastPrice;
    
    setIsPriceDown(priceDown);
    setPriceAnimating(true);
    setTimeout(() => setPriceAnimating(false), 600);
    
    setLastPrice(newPrice);
    setStats(prevStats => {
      // If rugpulled, force market cap to 6k and other stats near zero
      if (isRugPulled) {
        return {
          ...prevStats,
          price: newPrice,
          marketCap: 6000,
          volume: prevStats.volume * 0.1,  // 90% drop
          liquidity: prevStats.liquidity * 0.05,  // 95% drop
          sells: prevStats.sells + 50  // Spike in sells
        };
      }

      // Normal stat updates...
      const newMarketCap = Math.min(10000000, prevStats.marketCap * (1 + (newPrice - prevStats.price) * 1.5 / prevStats.price));
      
      const buyIncrease = newPrice > prevStats.price 
        ? Math.floor(Math.random() * 12) + 3
        : Math.floor(Math.random() * 3);

      const sellIncrease = newPrice < prevStats.price
        ? Math.floor(Math.random() * 12) + 3
        : Math.floor(Math.random() * 3);
      
      return {
        ...prevStats,
        price: newPrice,
        marketCap: newMarketCap,
        volume: Math.min(newMarketCap * 0.25, prevStats.volume * (1 + (newPrice - prevStats.price) * 1.8 / prevStats.price)),
        liquidity: Math.min(newMarketCap * 0.4, prevStats.liquidity * (1 + (newPrice - prevStats.price) * 1.2 / prevStats.price)),
        buys: Math.min(99999, prevStats.buys + buyIncrease),
        sells: Math.min(99999, prevStats.sells + sellIncrease)
      };
    });

    setChanges({
      price: (newPrice - stats.price) / stats.price * 100,
      marketCap: (newPrice - stats.price) / stats.price * 1.5,
      volume: (newPrice - stats.price) / stats.price * 1.8,
      liquidity: (newPrice - stats.price) / stats.price * 1.2
    });
  }, [currentPrice, isRugPulled]);

  // Format currency values properly
  const formatUSD = (value) => {
    const absValue = Math.abs(value);
    if (absValue >= 1000000000) return `$${(absValue / 1000000000).toFixed(1)}B`;
    if (absValue >= 1000000) return `$${(absValue / 1000000).toFixed(1)}M`;
    if (absValue >= 1000) return `$${(absValue / 1000).toFixed(1)}K`;
    return `$${absValue.toFixed(2)}`;
  };

  const formatSOL = (value) => {
    return `◎${(value / 69.42).toFixed(value < 69.42 ? 8 : 2)}`;
  };

  const StatCard = ({ 
    label, 
    value, 
    secondaryValue, 
    icon, 
    change, 
    isNegative,
    statKey,
    isLarge = false,
    isAnimating = false,
    showChange = true,
    isPriceCard = false,
    isRugPulled = false
  }) => (
    <div className={`
      relative
      ${isLarge ? 'p-6' : 'p-4'}
      rounded-xl
      ${isLarge 
        ? 'bg-gradient-to-br from-rug-dark-deeper/90 to-rug-dark-deeper/50' 
        : 'bg-gradient-to-br from-rug-dark-deeper/80 via-rug-dark-deeper/60 to-rug-dark-deeper/40'
      }
      backdrop-blur-sm 
      border 
      border-rug-dark/30
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:-translate-y-0.5
      hover:border-rug-secondary/20
      hover:shadow-lg
      hover:shadow-rug-secondary/5
      group
      cursor-default
      overflow-hidden
    `}>
      {/* Gradient overlay on hover */}
      <div className="
        absolute
        inset-0
        bg-gradient-to-br
        from-rug-primary/5
        via-transparent
        to-transparent
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-500
      " />

      {/* Content with relative positioning to stay above gradient */}
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2 text-sm font-medium text-rug-text/70">
            <span className={`
              transform 
              transition-transform 
              duration-300
              group-hover:scale-110
              ${isLarge ? 'text-2xl' : 'text-xl'}
            `}>
              {icon}
            </span>
            {label}
          </div>
          {showChange && change && (
            <div className={`
              text-xs 
              flex 
              items-center 
              gap-1 
              px-2
              py-1
              rounded-full 
              transition-colors
              duration-300
              ${isNegative 
                ? 'text-red-400 bg-red-500/10' 
                : 'text-rug-primary bg-rug-primary/10'
              }
            `}>
              {isNegative ? '↓' : '↑'}
              {change}
            </div>
          )}
        </div>

        <div className={`
          ${isLarge ? 'text-4xl font-bold' : 'text-xl font-medium'}
          font-mono
          transition-all
          duration-300
          ${isPriceCard 
            ? (isNegative || isRugPulled)
              ? 'text-red-400' 
              : 'text-rug-primary'
            : 'text-rug-text'
          }
          ${isAnimating ? 'scale-105' : ''}
        `}>
          {value}
        </div>

        {secondaryValue && (
          <div className="
            text-sm 
            text-rug-text/50 
            font-mono
            transition-opacity
            duration-300
            group-hover:text-rug-text/60
          ">
            {secondaryValue}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Currency Toggle */}
      <div className="flex justify-end">
        <button
          onClick={() => setShowUSD(!showUSD)}
          className="
            flex items-center gap-2 
            px-3 py-1.5 
            rounded-lg 
            bg-rug-dark-deeper/50 
            text-sm text-rug-text/70
            hover:bg-rug-dark-deeper/70
            border border-rug-dark
            transition-all
            duration-300
            hover:border-rug-secondary/20
            hover:-translate-y-0.5
            hover:shadow-lg
            hover:shadow-rug-secondary/5
            active:translate-y-0
          "
        >
          <span className="w-4 h-4 transform transition-transform duration-300 hover:rotate-180">⇄</span>
          {showUSD ? 'Show SOL' : 'Show USD'}
        </button>
      </div>

      {/* Price Section - Larger and more prominent */}
      <div className="bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]">
        <StatCard
          label="PRICE"
          value={`$${stats.price.toFixed(7)}`}
          secondaryValue={`◎${(stats.price / 69.42).toFixed(8)}`}
          icon="💰"
          change={`${changes.price > 0 ? '+' : ''}${changes.price.toFixed(2)}%`}
          isNegative={!isGreen || isRugPulled}
          statKey="price"
          isLarge={true}
          isAnimating={priceAnimating}
          showChange={true}
          isPriceCard={true}
          isRugPulled={isRugPulled}
        />
      </div>

      {/* Other Stats Grid - Smaller and neatly arranged */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]">
          <StatCard
            label="MARKET CAP"
            value={formatUSD(stats.marketCap)}
            icon="📊"
            statKey="marketcap"
            showChange={false}
          />
        </div>
        <div className="bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]">
          <StatCard
            label="24H VOLUME"
            value={formatUSD(stats.volume)}
            icon="📈"
            statKey="volume"
            showChange={false}
          />
        </div>
        <div className="bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]">
          <StatCard
            label="LIQUIDITY"
            value={formatUSD(stats.liquidity)}
            icon="💧"
            statKey="liquidity"
            showChange={false}
          />
        </div>
      </div>

      {/* Trading Activity Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-rug-primary">{stats.buys.toLocaleString()} Buys</span>
          <span className="text-red-400">{stats.sells.toLocaleString()} Sells</span>
        </div>
        <div className="
          h-2
          rounded-full
          bg-red-500/20
          overflow-hidden
        ">
          <div 
            className="
              h-full
              bg-rug-primary
              transition-all
              duration-300
              rounded-full
            "
            style={{
              width: `${(stats.buys / (stats.buys + stats.sells)) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;