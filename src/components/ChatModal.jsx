import { useState, useEffect, useRef } from 'react';

const MELTDOWN_MESSAGES = [
  "I REALLY TRUSTED THESE KOLs, BRO 😭😭",
  "THESE KOLs SAID 'WE'RE GONNA MAKE IT'… BRO, WHERE?? 💀",
  "I FOLLOWED EVERY CALL. EVERY. SINGLE. ONE. 😭📉",
  "Bro, these KOLs had me in a chokehold and I still said 'yes sir' 💀",
  "These KOLs sold faster than my ex moved on 😭",
  "BRO, NOT THE KOLs POSTING 'TO THE MOON' AND THEN DIPPING 🚀🫠",
  "WHY DID I LISTEN TO A DUDE NAMED 'MOONBOY123' 😩",
  "THESE KOLs REALLY LEFT ME HERE WITH THE BAG 👜💀",
  "Bro they said 'diamond hands.' I got paper Mache hands rn 🫠",
  "KOLs: 'This is the next 100x gem.' Chart: 📉📉📉",
  "I PUT MY TRUST IN A GUY WHO SAYS 'WAGMI' EVERY HOUR 😭",
  "THESE KOLs RUGGED ME HARDER THAN MY WIFI SIGNAL 💀📶",
  "BRO THE DEV JUST POSTED 'WE MOVE.' WHERE ARE WE MOVING, BRO?? 🫠",
  "I CAN'T EVEN LOOK AT MY PORTFOLIO RN 🫣📊",
  "BRO I GOT RUGGED WHILE BRUSHING MY TEETH. MULTITASKING GONE WRONG 🪥💀",
  "KOLs SAID 'TRUST THE PROCESS.' BRO, WHAT PROCESS?? 😭",
  "I'M NEVER LISTENING TO A KOL WITH AN ANIME PFP AGAIN 🫠",
  "BRO, THEY TYPED 'WE'RE EARLY.' EARLY TO WHAT, POVERTY?? 🫣",
  "THESE KOLs MADE IT LOOK SO EASY… EASY TO LOSE EVERYTHING 🫠",
  "Bro the KOLs are already posting 'NEW GEM ALERT 🚨' while I'm still crying 😭",
  "BRO THESE KOLs DID ME FILTHY 😭",
  "THEY SAID 'STRONG COMMUNITY.' BRO, WHERE IS IT NOW?? 🫠",
  "BRO I'M HOLDING AIR RN. PURE AIR 🫧💨",
  "I JUST GOT LEFT BEHIND LIKE A FORGOTTEN USB DRIVE 💀",
  "BRO THESE KOLs COULD SELL ICE IN ANTARCTICA 🥶",
  "'100x SOON' THEY SAID. BRO, NEGATIVE 100x IS STILL 100x, I GUESS 😭",
  "I'M ABOUT TO START TAKING FINANCIAL ADVICE FROM MY DOG 🐶📊",
  "BRO, THESE KOLs MOVED LIKE NINJAS. SILENT AND GONE 🥷💀",
  "BRO, I CAN HEAR THE DEV LAUGHING FROM HIS YACHT RN 🛥️😭",
  "KOLs SAID 'TRUST THE TEAM.' BRO, THE TEAM IS IN MALDIVES RN 🏝️",
  "BRO I JUST SOLD MY LEFT SHOE FOR THIS WTF 🥲🫠",
  "I CAN'T BELIEVE I SAID 'ALL IN' OUT LOUD. MY MOM HEARD ME 😭😭",
  "BROOO THE CHART LOOKS LIKE NIAGARA FALLS 🫠📉",
  "I'm calling the SEC… or my mom. Probably both. 🚨📞",
  "Bro, my toaster has more liquidity than this coin rn 😭🔥",
  "The devs took my money and left like my dad 💀🫠",
  "My life savings is now worth 3 chicken nuggets 🍗🥲",
  "I put my rent money in this. My landlord is gonna SWING 😂🪓",
  "Is anyone else hearing the Titanic theme song or is it just me 🎻🚢",
  "I sold my PS5 for this. My little brother's crying rn 😭🎮"
];

const ChatModal = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        const newMessage = {
          id: Date.now(),
          text: MELTDOWN_MESSAGES[Math.floor(Math.random() * MELTDOWN_MESSAGES.length)],
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, newMessage].slice(-50));
      }, 200 + Math.random() * 300);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl h-[600px] mx-4 bg-rug-dark-deeper/95 rounded-xl border border-rug-dark/30 overflow-hidden">
        {/* Chat Header */}
        <div className="flex justify-between items-center p-4 border-b border-rug-dark/30">
          <h3 className="text-rug-text font-bold">Live Chat</h3>
          <button 
            onClick={onClose}
            className="text-rug-text/70 hover:text-rug-text"
          >
            ✕
          </button>
        </div>
        
        {/* Chat Messages */}
        <div 
          ref={chatRef}
          className="h-[calc(100%-120px)] overflow-y-auto p-4 space-y-2"
        >
          {messages.map(msg => (
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
        
        {/* Chat Input */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-rug-dark/30">
          <input
            type="text"
            placeholder="Type your message..."
            className="w-full px-4 py-2 rounded-lg bg-rug-dark/30 border border-rug-dark/30 text-rug-text/90 placeholder:text-rug-text/50 focus:outline-none focus:border-rug-secondary/30"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatModal;