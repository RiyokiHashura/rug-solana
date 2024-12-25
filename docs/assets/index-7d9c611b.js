import{j as e}from"./animations-cdec8365.js";import{a as t,r,R as n}from"./vendor-4edceef6.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var s={},a=t;s.createRoot=a.createRoot,s.hydrateRoot=a.hydrateRoot;const i={},l=function(e,t,r){if(!t||0===t.length)return e();const n=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/"+e}(e))in i)return;i[e]=!0;const t=e.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!r)for(let r=n.length-1;r>=0;r--){const s=n[r];if(s.href===e&&(!t||"stylesheet"===s.rel))return}else if(document.querySelector(`link[href="${e}"]${s}`))return;const a=document.createElement("link");return a.rel=t?"stylesheet":"modulepreload",t||(a.as="script",a.crossOrigin=""),a.href=e,document.head.appendChild(a),t?new Promise(((t,r)=>{a.addEventListener("load",t),a.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())).catch((e=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}))},o=({isRugPulled:t,triggerCrash:n,onPriceChange:s})=>{const[a,i]=r.useState([]),[l,o]=r.useState(null),[d,c]=r.useState(null),u=r.useRef(null),m=800,x=400,h=18;r.useState(null),r.useState(0),r.useState(null),r.useState(null);const[p,g]=r.useState(!0),[f,v]=r.useState(0),y=e=>e>=1e6?`$${(e/1e6).toFixed(1)}M`:e>=1e3?`$${(e/1e3).toFixed(1)}K`:`$${e.toFixed(2)}`,b=r.useCallback(((e,t)=>{requestAnimationFrame((()=>{null==s||s(e,t)}))}),[s]);r.useEffect((()=>{let e;const t=setInterval((()=>{i((r=>{const s=r[r.length-1]||{close:6078e-7};if(n){const e={open:s.close,close:1e-8,high:s.close,low:1e-8,timestamp:Date.now(),isGreen:!1};return b(e.close.toFixed(8),!1),clearInterval(t),[...r.slice(0,-1),e]}const a=s.close,i=f>=5?.4:.15,l=r.length<3||Math.random()>i;v(l?e=>e+1:0);const o=Math.random()*(l?.12:.06)+.03,d=l?a*(1+o):a*(1-.5*o),c={open:a,close:d,high:l?1.01*d:1.01*a,low:l?.99*a:.99*d,timestamp:Date.now(),isGreen:l};g(l),cancelAnimationFrame(e),e=requestAnimationFrame((()=>{b(d.toFixed(8),l)}));return[...r,c].slice(-40)}))}),1e3);return()=>{clearInterval(t),cancelAnimationFrame(e)}}),[f,n,b]);const j=e=>{if(0===a.length)return 0;const t=a.flatMap((e=>[e.open,e.high,e.low,e.close])),r=Math.min(...t),n=Math.max(...t);return x-(e-r)/(n-r)*360-20};return r.useEffect((()=>{if(a.length>0){const e=a[a.length-1];null==s||s(e.close.toFixed(8),p)}}),[a,p]),e.jsx("div",{className:"relative group",children:e.jsxs("div",{className:"relative p-6 bg-black/80 rounded-lg border border-gray-800 shadow-lg",children:[e.jsx("div",{className:"absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-rug-primary/5 via-rug-secondary/5 to-rug-primary/5 blur-xl"}),e.jsx("div",{className:"absolute inset-0 rounded-xl overflow-hidden",children:e.jsx("div",{className:"absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-rug-secondary/20 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"})}),e.jsxs("div",{ref:u,className:"relative",onMouseMove:e=>{if(!u.current)return;const t=u.current.getBoundingClientRect(),r=e.clientX-t.left;c(r);const n=Math.floor((m-r)/20);if(n>=0&&n<a.length){const t=a[a.length-1-n],r=2e6*Math.random()+5e5,s=Math.floor(500*Math.random()+100);o({x:e.clientX,y:e.clientY,price:t.close,volume:r,trades:s,timestamp:new Date(t.timestamp).toLocaleTimeString(),isGreen:t.close>t.open})}else o(null)},onMouseLeave:()=>{o(null),c(null)},children:[e.jsxs("svg",{width:m,height:x,className:"relative z-10",children:[e.jsxs("g",{className:"text-rug-text/[0.08]",children:[Array.from({length:6}).map(((t,r)=>e.jsx("line",{x1:"0",y1:x*(r/5),x2:m,y2:x*(r/5),stroke:"currentColor",strokeDasharray:"4 4",className:"transition-opacity duration-300 group-hover:text-rug-text/[0.12]"},`h-${r}`))),Array.from({length:8}).map(((t,r)=>e.jsx("line",{x1:m*(r/7),y1:"0",x2:m*(r/7),y2:x,stroke:"currentColor",strokeDasharray:"4 4",className:"transition-opacity duration-300 group-hover:text-rug-text/[0.12]"},`v-${r}`)))]}),null!==d&&e.jsx("line",{x1:d,y1:"0",x2:d,y2:x,stroke:"currentColor",className:"text-rug-secondary/20",strokeWidth:"1"}),a.map(((t,r)=>{const n=m-20*(a.length-r),s=r===a.length-1;return e.jsxs("g",{children:[e.jsx("line",{x1:n+9,y1:j(t.high),x2:n+9,y2:j(t.low),className:`stroke-current ${t.isGreen?"text-rug-primary":"text-red-500"} ${s&&(t.isGreen?"filter drop-shadow-glow":"filter drop-shadow-glow-red")}`,strokeWidth:"1"}),e.jsx("rect",{x:n,y:j(Math.max(t.open,t.close)),width:h,height:Math.abs(j(t.open)-j(t.close)),className:`${t.isGreen?"fill-rug-primary":"fill-red-500"} ${s&&(t.isGreen?"filter drop-shadow-glow":"filter drop-shadow-glow-red")}`}),s&&e.jsx("rect",{x:n,y:j(Math.max(t.open,t.close)),width:h,height:Math.abs(j(t.open)-j(t.close)),className:(t.isGreen?"fill-rug-primary":"fill-red-500")+" opacity-50 blur-sm animate-pulse-subtle"})]},r)}))]}),l&&e.jsx("div",{className:"absolute z-20 bg-rug-dark/95 backdrop-blur-sm border border-rug-dark-deeper rounded-lg p-3 shadow-xl pointer-events-none transform -translate-x-1/2 -translate-y-full transition-all duration-200 animate-fade-in",style:{left:`${l.x}px`,top:l.y-16+"px"},children:e.jsxs("div",{className:"space-y-1.5 text-sm",children:[e.jsx("div",{className:"text-rug-text/70 font-mono",children:l.timestamp}),e.jsxs("div",{className:"grid grid-cols-2 gap-x-4 gap-y-1.5",children:[e.jsx("div",{className:"text-rug-text/70",children:"Price"}),e.jsx("div",{className:"font-mono "+(l.isGreen?"text-rug-primary":"text-red-400"),children:y(l.price)}),e.jsx("div",{className:"text-rug-text/70",children:"Volume"}),e.jsx("div",{className:"text-rug-text font-mono",children:y(l.volume)}),e.jsx("div",{className:"text-rug-text/70",children:"Trades"}),e.jsx("div",{className:"text-rug-text font-mono",children:l.trades})]})]})})]})]})})},d=({onRug:t,disabled:r})=>e.jsx("button",{onClick:t,disabled:r,"aria-label":"Buy RUG Token",className:`\n      w-full\n      px-8\n      py-4\n      rounded-xl\n      font-bold\n      text-xl\n      transform-gpu\n      transition-all\n      duration-300\n      ease-out\n      ${r?"bg-gray-600 cursor-not-allowed opacity-50":"bg-rug-primary text-rug-dark hover:bg-rug-primary/90 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95"}\n      before:absolute\n      before:inset-0\n      before:rounded-xl\n      before:bg-rug-primary/20\n      before:transform-gpu\n      before:transition-opacity\n      before:duration-300\n      hover:before:opacity-100\n      before:opacity-0\n    `,children:"BUY $RUG"}),c=({isRugPulled:t,currentPrice:n,isGreen:s})=>{const[a,i]=r.useState(!0),[l,o]=r.useState({price:parseFloat(n),marketCap:62e3,volume:15e3,liquidity:3e4,buys:156,sells:89}),[d,c]=r.useState({price:0,marketCap:0,volume:0,liquidity:0});r.useState(new Set);const[u,m]=r.useState(!1),[x,h]=r.useState(null),[p,g]=r.useState(!1);r.useEffect((()=>{const e=parseFloat(n);g(null!==x&&e<x),m(!0),setTimeout((()=>m(!1)),600),h(e),o((r=>{if(t)return{...r,price:e,marketCap:6e3,volume:.1*r.volume,liquidity:.05*r.liquidity,sells:r.sells+50};const n=Math.min(1e7,r.marketCap*(1+1.5*(e-r.price)/r.price)),s=e>r.price?Math.floor(12*Math.random())+3:Math.floor(3*Math.random()),a=e<r.price?Math.floor(12*Math.random())+3:Math.floor(3*Math.random());return{...r,price:e,marketCap:n,volume:Math.min(.25*n,r.volume*(1+1.8*(e-r.price)/r.price)),liquidity:Math.min(.4*n,r.liquidity*(1+1.2*(e-r.price)/r.price)),buys:Math.min(99999,r.buys+s),sells:Math.min(99999,r.sells+a)}})),c({price:(e-l.price)/l.price*100,marketCap:(e-l.price)/l.price*1.5,volume:(e-l.price)/l.price*1.8,liquidity:(e-l.price)/l.price*1.2})}),[n,t]);const f=e=>{const t=Math.abs(e);return t>=1e9?`$${(t/1e9).toFixed(1)}B`:t>=1e6?`$${(t/1e6).toFixed(1)}M`:t>=1e3?`$${(t/1e3).toFixed(1)}K`:`$${t.toFixed(2)}`},v=({label:t,value:n,secondaryValue:s,icon:a,change:i,isNegative:l,statKey:o,isLarge:d=!1,isAnimating:c=!1,showChange:u=!0,isPriceCard:m=!1})=>{const x=r.useRef(null);return r.useEffect((()=>{x.current&&(x.current.style.willChange="transform, opacity")}),[]),e.jsxs("div",{ref:x,className:`\n          relative\n          ${d?"p-6":"p-4"}\n          rounded-xl\n          transform-gpu\n          will-change-[transform,opacity]\n          bg-gradient-to-br \n          ${d?"from-rug-dark-deeper/90 to-rug-dark-deeper/50":"from-rug-dark-deeper/80 via-rug-dark-deeper/60 to-rug-dark-deeper/40"}\n          backdrop-blur-sm \n          border \n          border-rug-dark/30\n          transition-transform \n          duration-200 \n          ease-in-out\n          hover:scale-[1.01]\n          hover:translate-z-0\n          hover:border-rug-secondary/20\n          cursor-default\n          overflow-hidden\n          group\n        `,children:[e.jsx("div",{className:"\n            absolute \n            inset-0 \n            bg-gradient-to-b \n            from-rug-secondary/5 \n            to-transparent\n            opacity-0\n            transition-opacity\n            duration-200\n            ease-in-out\n            group-hover:opacity-100\n            pointer-events-none\n            rounded-xl\n          ","aria-hidden":"true"}),e.jsxs("div",{className:"relative z-10 pointer-events-none",children:[e.jsx("div",{className:"flex justify-between items-start pointer-events-none",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-rug-text/70 transition-colors duration-200 group-hover:text-rug-text/90 pointer-events-none",children:a}),e.jsx("span",{className:"text-rug-text/70 uppercase text-sm tracking-wider font-medium transition-colors duration-200 group-hover:text-rug-text/90 pointer-events-none",children:t})]})}),e.jsx("div",{className:`\n              ${d?"text-4xl font-bold":"text-xl font-medium"}\n              font-mono\n              transition-transform\n              duration-150\n              ease-in-out\n              ${c?"scale-[1.01]":"scale-100"}\n              ${m?l?"text-red-400":"text-rug-primary":"text-rug-text"}\n              pointer-events-none\n            `,children:n}),s&&e.jsx("div",{className:"text-rug-text/50 text-sm font-mono mt-1 transition-colors duration-200 group-hover:text-rug-text/70 pointer-events-none",children:s}),u&&e.jsx("div",{className:`\n              mt-2 \n              text-sm \n              font-medium\n              transition-colors\n              duration-200\n              ${l?"text-red-400":"text-rug-primary"}\n              pointer-events-none\n            `,children:i})]})]})};return e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"flex justify-end",children:e.jsxs("button",{onClick:()=>i(!a),className:"\n            flex items-center gap-2 \n            px-3 py-1.5 \n            rounded-lg \n            bg-rug-dark-deeper/50 \n            text-sm text-rug-text/70\n            hover:bg-rug-dark-deeper/70\n            border border-rug-dark\n            transition-all\n            duration-300\n            hover:border-rug-secondary/20\n            hover:-translate-y-0.5\n            hover:shadow-lg\n            hover:shadow-rug-secondary/5\n            active:translate-y-0\n          ",children:[e.jsx("span",{className:"w-4 h-4 transform transition-transform duration-300 hover:rotate-180",children:"⇄"}),a?"Show SOL":"Show USD"]})}),e.jsx("div",{className:"bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]",children:e.jsx(v,{label:"PRICE",value:`$${l.price.toFixed(7)}`,secondaryValue:`◎${(l.price/69.42).toFixed(8)}`,icon:"💰",change:`${d.price>0?"+":""}${d.price.toFixed(2)}%`,isNegative:!s||t,statKey:"price",isLarge:!0,isAnimating:u,showChange:!0,isPriceCard:!0,isRugPulled:t})}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]",children:e.jsx(v,{label:"MARKET CAP",value:f(l.marketCap),icon:"📊",statKey:"marketcap",showChange:!1})}),e.jsx("div",{className:"bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]",children:e.jsx(v,{label:"24H VOLUME",value:f(l.volume),icon:"📈",statKey:"volume",showChange:!1})}),e.jsx("div",{className:"bg-[#0E0E0E] rounded-xl shadow-[0_0_15px_-3px_rgba(0,255,157,0.1)]",children:e.jsx(v,{label:"LIQUIDITY",value:f(l.liquidity),icon:"💧",statKey:"liquidity",showChange:!1})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsxs("span",{className:"text-rug-primary",children:[l.buys.toLocaleString()," Buys"]}),e.jsxs("span",{className:"text-red-400",children:[l.sells.toLocaleString()," Sells"]})]}),e.jsx("div",{className:"\n          h-2\n          rounded-full\n          bg-red-500/20\n          overflow-hidden\n        ",children:e.jsx("div",{className:"\n              h-full\n              bg-rug-primary\n              transition-all\n              duration-300\n              rounded-full\n            ",style:{width:l.buys/(l.buys+l.sells)*100+"%"}})})]})]})},u=({children:t})=>{const[n,s]=r.useState(!1);return r.useEffect((()=>{const e=setInterval((()=>{Math.random()>.5&&(s(!0),setTimeout((()=>s(!1)),200))}),2e4);return()=>clearInterval(e)}),[]),e.jsxs("div",{className:"relative",children:[t,n&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"\n            absolute \n            inset-0 \n            opacity-70\n            mix-blend-screen\n            animate-glitch-1\n          ",children:t}),e.jsx("div",{className:"\n            absolute \n            inset-0 \n            opacity-70\n            mix-blend-multiply\n            animate-glitch-2\n          ",children:t})]})]})},m=()=>{const[t,n]=r.useState(!1);return r.useEffect((()=>{n(!0);const e=setInterval((()=>{n(!0),setTimeout((()=>n(!1)),700)}),1e4);return()=>clearInterval(e)}),[]),t?e.jsx("div",{className:"absolute -top-1 -right-4 z-50",children:e.jsx("svg",{viewBox:"0 0 24 24",className:"w-5 h-5 text-rug-primary animate-sparkle",fill:"currentColor",children:e.jsx("path",{d:"M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"})})}):null},x=()=>e.jsx("footer",{className:"border-t border-rug-dark-deeper/50 mt-auto backdrop-blur-sm",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 py-4",children:e.jsxs("div",{className:"\n          flex \n          flex-col \n          sm:flex-row \n          justify-between \n          items-center \n          gap-4\n        ",children:[e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsx("a",{href:"#",className:"\n                text-sm \n                text-rug-text/50 \n                hover:text-rug-text \n                transition-colors \n                duration-300\n              ",children:"Terms & Conditions"}),e.jsx("div",{className:"w-1 h-1 rounded-full bg-rug-text/20"}),e.jsx("a",{href:"#",className:"\n                text-sm \n                text-rug-text/50 \n                hover:text-rug-text \n                transition-colors \n                duration-300\n              ",children:"Privacy Policy"}),e.jsx("div",{className:"w-1 h-1 rounded-full bg-rug-text/20"}),e.jsx("a",{href:"#",className:"\n                text-sm \n                text-rug-text/50 \n                hover:text-rug-text \n                transition-colors \n                duration-300\n              ",children:"Contact Us"})]}),e.jsxs("div",{className:"\n            text-xs \n            text-rug-text/40\n            font-mono\n            flex \n            items-center \n            gap-1.5\n            px-3\n            py-1\n            rounded-full\n            bg-rug-dark-deeper/30\n            border\n            border-rug-dark-deeper\n            transition-colors\n            duration-300\n            hover:text-rug-text/60\n          ",children:[e.jsx("span",{children:"🫠"}),e.jsx("span",{children:"Not financial advice, but vibes are immaculate"})]})]})})}),h=({isLoading:t})=>e.jsxs("div",{className:`\n      fixed \n      inset-0 \n      z-50 \n      bg-rug-dark \n      flex \n      items-center \n      justify-center\n      transition-opacity \n      duration-500\n      ${t?"opacity-100":"opacity-0 pointer-events-none"}\n    `,children:[e.jsxs("div",{className:"text-center",children:[e.jsx("div",{className:"text-rug-primary text-4xl font-bold mb-4 animate-pulse",children:"$RUG"}),e.jsx("div",{className:"w-48 h-1 bg-rug-dark-deeper rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-rug-primary rounded-full transition-all duration-700",style:{width:"100%",animation:"loading 0.8s ease-in-out"}})})]}),e.jsx("style",{children:"\n          @keyframes loading {\n            from { transform: translateX(-100%); }\n            to { transform: translateX(0); }\n          }\n        "})]}),p=r.lazy((()=>l((()=>import("./LiveChat-9858e748.js")),["assets/LiveChat-9858e748.js","assets/animations-cdec8365.js","assets/vendor-4edceef6.js"]))),g=r.lazy((()=>l((()=>import("./RugPullModal-1692835e.js")),["assets/RugPullModal-1692835e.js","assets/animations-cdec8365.js","assets/vendor-4edceef6.js"]))),f=r.lazy((()=>l((()=>import("./animations-cdec8365.js").then((e=>e.A))),["assets/animations-cdec8365.js","assets/vendor-4edceef6.js"])));function v(){const[t,n]=r.useState(!1),[s,a]=r.useState(0),[i,l]=r.useState(!1),v=r.useRef(null),[y,b]=r.useState(!0),[j,N]=r.useState({price:"69.42",isGreen:!0}),[w,k]=r.useState(!1),[S,$]=r.useState(!1);r.useEffect((()=>{const e=setTimeout((()=>{b(!1)}),800);return()=>clearTimeout(e)}),[]);return e.jsxs("div",{className:"relative min-h-screen",children:[e.jsx(r.Suspense,{fallback:e.jsx("div",{className:"fixed inset-0 bg-rug-dark"}),children:e.jsx(f,{})}),e.jsxs("div",{className:"relative",children:[e.jsx(h,{isLoading:y}),e.jsx("div",{className:`\n            transition-opacity \n            duration-1000 \n            ${y?"opacity-0":"opacity-100"}\n          `,children:e.jsxs("div",{className:"relative min-h-screen flex flex-col bg-transparent",children:[i&&e.jsx("div",{className:"\n                fixed \n                inset-0 \n                z-50 \n                flex \n                items-center \n                justify-center \n                bg-black/80 \n                backdrop-blur-sm\n                animate-fade-in\n              ",children:e.jsxs("div",{className:"\n                  text-center \n                  p-6 \n                  rounded-xl \n                  bg-rug-dark-deeper/90 \n                  border \n                  border-rug-primary/20\n                  animate-scale-in\n                ",children:[e.jsx("div",{className:"text-4xl mb-3",children:"🫠"}),e.jsxs("div",{className:"text-rug-text font-mono",children:["You found the hidden stash...",e.jsx("br",{}),"now rug responsibly."]})]})}),e.jsxs("div",{className:"relative z-10 flex-grow",children:[e.jsxs("header",{className:"relative border-b border-rug-dark-deeper/50",children:[e.jsx("div",{className:"absolute inset-0 backdrop-blur-sm bg-rug-dark/80"}),e.jsx("div",{className:"relative max-w-7xl mx-auto px-4 py-4",children:e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{className:"flex items-center space-x-6",children:[e.jsx("div",{className:"relative cursor-pointer group",onClick:()=>{a((e=>{const t=e+1;return v.current&&clearTimeout(v.current),v.current=setTimeout((()=>{a(0)}),2e3),5===t?(l(!0),setTimeout((()=>l(!1)),3e3),0):t}))},children:e.jsx(u,{children:e.jsxs("h1",{className:"text-2xl font-extrabold font-mono text-rug-text",children:[e.jsxs("span",{className:"relative",children:["$RUG",e.jsx("div",{className:"\n                                absolute \n                                -bottom-1 \n                                left-0 \n                                right-0 \n                                h-px \n                                bg-gradient-to-r \n                                from-transparent \n                                via-rug-primary \n                                to-transparent \n                                animate-glow-line\n                              "})]}),e.jsx(m,{})]})})}),e.jsxs("div",{className:"\n                        flex \n                        items-center \n                        space-x-2 \n                        px-3 \n                        py-1.5 \n                        rounded-lg \n                        bg-rug-dark-deeper/50 \n                        border \n                        border-rug-dark-deeper\n                      ",children:[e.jsx("div",{className:"w-2 h-2 rounded-full bg-[#14F195]"}),e.jsx("span",{className:"text-sm font-medium text-rug-text/70",children:"Solana"})]})]})})})]}),e.jsx("main",{className:"max-w-[1920px] mx-auto px-8 py-8",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-12",children:[e.jsxs("div",{className:"lg:col-span-2 min-h-[600px]",children:[e.jsx(o,{isRugPulled:t,triggerCrash:w,onPriceChange:(e,t)=>N({price:e,isGreen:t})}),e.jsx("div",{className:"mt-6",children:e.jsx(d,{onRug:()=>{n(!0),k(!0),setTimeout((()=>$(!0)),1e3)},disabled:t})})]}),e.jsx("div",{className:"lg:col-span-1",children:e.jsx("div",{className:"lg:sticky lg:top-8",children:e.jsx(c,{isRugPulled:t,currentPrice:j.price,isGreen:j.isGreen})})})]})})]}),e.jsx("div",{className:"relative z-10",children:e.jsx(x,{})}),e.jsx(r.Suspense,{fallback:null,children:e.jsx(p,{})})]})})]}),e.jsx(r.Suspense,{fallback:null,children:S&&e.jsx(g,{isVisible:S,onTryAgain:()=>{window.location.reload()},onJoinChat:()=>{$(!1)}})})]})}s.createRoot(document.getElementById("root")).render(e.jsx(n.StrictMode,{children:e.jsx(v,{})}));
