import{j as r}from"./animations-cdec8365.js";import{r as e}from"./vendor-4edceef6.js";const o=["BRO, YOU'RE STUPID 🤣👉","LOL, WE GOT HIM! 😂","YOU REALLY FELL FOR THAT?? 💀","BRO, NOT LIKE THIS 😭","CONGRATS, YOU PLAYED YOURSELF 🤡","A MOMENT OF SILENCE FOR YOUR BAG 🫡","ANOTHER ONE BITES THE DUST 💸","BRO GOT OUTPLAYED BY A GREEN BUTTON 💀","IMAGINE BUYING A COIN CALLED RUG 💀","BRO GOT SENT STRAIGHT TO VALHALLA 🪦","LMAO, YOU THOUGHT YOU WERE EARLY?? 😂","BRO REALLY THOUGHT HE WAS HIM 💀","THIS IS NOT FINANCIAL ADVICE. CLEARLY. 😂","ANOTHER ONE FOR THE HALL OF SHAME 🫠","BRO FELL FOR THE OLDEST TRICK IN THE BOOK 💀"],a=["You really bought a coin called RUG, bro? 😂","Maybe crypto isn't for you, champ 🫠","Bro clicked 'BUY' and lost his house 🏠💀","Your wallet is crying right now 💸😭","Did you think you were special? 😂","Bro, your ancestors are watching in disappointment 💀","Should've stuck to Monopoly money, my guy 🫠","That's not diamond hands, bro. That's cardboard hands 📦","You're officially a meme now 😂","I hope that buy button was worth it 🫡","Bro, your portfolio just filed for bankruptcy 📉","Did your horoscope say 'Buy $RUG' today? 😂","Your wallet's last words: 'It's been an honor, sir.' 🫡","You didn't even get rugged. You got carpet bombed 💥","Your bag just disappeared faster than my dad buying milk 🥴"],n=({isVisible:n,onTryAgain:t,onJoinChat:s})=>{const[i]=e.useState((()=>o[Math.floor(Math.random()*o.length)])),[d]=e.useState((()=>a[Math.floor(Math.random()*a.length)]));return n?r.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",style:{animation:"fadeIn 0.5s ease-in-out"},children:[r.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-sm"}),r.jsxs("div",{className:"relative w-full max-w-lg mx-4 p-8 rounded-2xl bg-rug-dark-deeper/90 border border-rug-primary/20 shadow-[0_0_30px_-5px_rgba(0,255,157,0.3)] animate-gpu transition-gpu",children:[r.jsx("h2",{className:"text-3xl font-bold text-center mb-6 text-rug-text font-mono",children:i}),r.jsx("p",{className:"text-center text-rug-text/80 mb-8 leading-relaxed",children:d}),r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx("button",{onClick:t,className:"px-6 py-3 rounded-lg bg-rug-primary/10 text-rug-primary border border-rug-primary/20 hover:bg-rug-primary/20 hover:border-rug-primary/30 hover:shadow-[0_0_20px_-5px_rgba(0,255,157,0.5)] transition-all duration-300 font-medium",children:"Try Again"}),r.jsx("button",{onClick:s,className:"px-6 py-3 rounded-lg bg-rug-secondary/10 text-rug-secondary border border-rug-secondary/20 hover:bg-rug-secondary/20 hover:border-rug-secondary/30 hover:shadow-[0_0_20px_-5px_rgba(128,255,255,0.5)] transition-all duration-300 font-medium",children:"Join the Chaos in Chat"})]})]}),r.jsx("style",{children:"\n          @keyframes fadeIn {\n            from { opacity: 0; }\n            to { opacity: 1; }\n          }\n          \n          @keyframes scaleIn {\n            from { \n              opacity: 0;\n              transform: scale(0.95);\n            }\n            to { \n              opacity: 1;\n              transform: scale(1);\n            }\n          }\n          \n          .animate-scale-in {\n            animation: scaleIn 0.3s ease-out forwards;\n          }\n        "})]}):null};export{n as default};