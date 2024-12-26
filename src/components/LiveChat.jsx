import { useState, useEffect, useRef } from 'react';

const HYPE_MESSAGES = [
  "WAGMI BOYS 🚀💎🙌",
  "This chart lookin' like my homework grades... straight A's 🟢📊",
  "Mama, we made it! 🤑📈",
  "Lambo season incoming 🏎️💨",
  "Green candles look better than Christmas trees 🎄🚀",
  "Real ones bought the dip. Fake ones crying in DMs 🫡📉📈",
  "Market cap still low, moon potential is crazy 🌕",
  "Volume is going crazy, whales are swimming in 🐋🟢",
  "LET'S GOOOOOOO 🚀🔥",
  "FOMO is real, bro 😂💸",
  "This is the way 🛡️🚀",
  "Next stop? Moon. Final destination? Pluto 🌕🪐",
  "Bro, my grandma just invested. This is the bottom, trust 📊😂",
  "I'm sweating harder than my math exam rn 🫠📈",
  "Mom said it's bedtime. I said it's moon time 🌕🚀",
  "If this hits $1, I'm buying the McDonald's I used to work at 🍟😂",
  "Bro, I'm literally breathing in profit right now 🫁💸",
  "This coin printing more green than my printer 🖨️🟢",
  "Someone check on my heart rate monitor 📊💓",
  "If this keeps pumping, I might tell my crush I like her 😳💚",
  "Just told my dog we're rich. He barked twice. It's happening 🐕🚀",
  "My wallet looks sexier than me rn, no cap 😂💸",
  "Sell? Bro, I don't even know what that word means 🤓🟢",
  "This chart is straighter than my posture after gaming for 8 hours 💺😂",
  "Bro, I just invested my lunch money. No regrets 🥪📊",
  "Holding tighter than my WiFi connection at 2AM 📶💎",
  "Bro, I can't lie… my wallet just smiled at me 🤑📈",
  "If this hits $10, I'm retiring… at 16 😂💼",
  "My financial advisor is a meme page and honestly, it's working out 🤝📊",
  "Bro, my money is making money while I sit here eating chips 😂🟢",
  "This coin got more XP than my main account 😂🎮",
  "Bro, this is better loot than a legendary chest 🪙✨",
  "This chart got better aim than me in Valorant 🎯📊",
  "If this was Minecraft, we'd be in creative mode rn 🟩🚀",
  "LFG boys, final boss incoming 🐉📈",
  "Holding this coin feels like clutching a 1v5 in CS:GO 😂🛡️",
  "If this coin was in Fortnite, it'd have max mats and a golden SCAR 😂📊",
  "I'm about to alt+F4 my wallet. Too much profit 😂🖥️",
  "This graph is more satisfying than a headshot sound in COD 🎯📈",
  "Someone call 911, my wallet is on fire 🔥😂",
  "At this point, I'm emotionally attached to this coin 🫂🟢",
  "If this goes down, I'm blaming my cat 🐈📉",
  "Bro, I showed this chart to my crush. She left me on read 😂💔",
  "This coin rising faster than my GPA after extra credit 📈📚",
  "Every green candle adds +1 to my self-esteem 🟢✨",
  "Bro, I just ordered sushi. Feeling rich 🍣💸",
  "If this hits ATH, I'm naming my firstborn after this coin 😂👶",
  "I sold my gaming chair for this. Worth it 🪑📊",
  "At this rate, I'll be retiring before my dad 😂👴📈"
];

const LiveChat = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeUsers] = useState(1420 + Math.floor(Math.random() * 100));
  const [chatMessages, setChatMessages] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    if (!isExpanded) return;

    const interval = setInterval(() => {
      const newMessage = {
        id: Date.now(),
        text: HYPE_MESSAGES[Math.floor(Math.random() * HYPE_MESSAGES.length)],
        timestamp: new Date().toLocaleTimeString()
      };
      setChatMessages(prev => [...prev, newMessage].slice(-50));
    }, 500);

    return () => clearInterval(interval);
  }, [isExpanded]);

  return (
    <div className="
      fixed 
      top-4 
      right-4 
      z-50
      flex
      items-center
      gap-4
    ">
      {/* Social Icons */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2
          rounded-lg
          bg-rug-dark-deeper/80
          backdrop-blur-sm
          border
          border-rug-dark/30
          transition-all
          duration-300
          hover:scale-[1.05]
          hover:border-rug-secondary/20
          hover:shadow-lg
          hover:shadow-rug-secondary/5
        "
      >
        <svg className="w-4 h-4 text-rug-text/70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>

      <a
        href="https://telegram.org"
        target="_blank"
        rel="noopener noreferrer"
        className="
          p-2
          rounded-lg
          bg-rug-dark-deeper/80
          backdrop-blur-sm
          border
          border-rug-dark/30
          transition-all
          duration-300
          hover:scale-[1.05]
          hover:border-rug-secondary/20
          hover:shadow-lg
          hover:shadow-rug-secondary/5
        "
      >
        <svg className="w-4 h-4 text-rug-text/70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      </a>

      {/* Live Chat Button */}
      <button
        onClick={() => setIsExpanded(true)}
        className="
          text-left
          transition-transform
          duration-300
          hover:scale-[1.02]
          hover:-translate-y-0.5
        "
      >
        <div className="
          flex 
          items-center 
          gap-3
          px-4 
          py-2
          bg-rug-dark-deeper/80
          backdrop-blur-sm
          rounded-lg
          border
          border-rug-dark/30
        ">
          <div className="flex items-center gap-2 text-sm text-rug-text/70">
            <span>💬</span>
            Live Chat
          </div>
          <div className="text-xs text-rug-text/50">
            {activeUsers} users active 🟢
          </div>
        </div>
      </button>

      {/* Updated Chat Overlay */}
      {isExpanded && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="w-full max-w-lg bg-rug-dark-deeper/95 rounded-xl border border-rug-dark/30 p-4 m-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-rug-text font-bold">Live Chat</h3>
              <button 
                onClick={() => setIsExpanded(false)}
                className="text-rug-text/70 hover:text-rug-text"
              >
                ✕
              </button>
            </div>
            
            <div 
              ref={chatRef}
              className="h-[400px] overflow-y-auto space-y-2 mb-4"
            >
              {chatMessages.map(msg => (
                <div 
                  key={msg.id}
                  className="bg-rug-dark/30 rounded p-2 text-rug-text/90"
                >
                  <span className="text-xs text-rug-text/50 mr-2">
                    {msg.timestamp}
                  </span>
                  {msg.text}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveChat;