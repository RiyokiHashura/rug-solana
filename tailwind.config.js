/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rug': {
          primary: '#00FF99',
          secondary: '#1FA2FF',
          text: '#E0E6F1',
          dark: {
            DEFAULT: '#0A0F1F',
            deeper: '#050A13',
          },
        },
        'rug': {
          primary: 'rgb(0, 255, 153)',
          secondary: 'rgb(0, 200, 153)',
          dark: 'rgb(13, 17, 23)',
          'dark-deeper': 'rgb(8, 10, 14)',
          text: 'rgb(230, 237, 243)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        'value-increase': {
          '0%': { transform: 'scale(1)', color: 'rgb(var(--color-rug-text))' },
          '50%': { transform: 'scale(1.1)', color: 'rgb(0, 255, 153)' },
          '100%': { transform: 'scale(1)', color: 'rgb(var(--color-rug-text))' }
        },
        'value-decrease': {
          '0%': { transform: 'scale(1)', color: 'rgb(var(--color-rug-text))' },
          '50%': { transform: 'scale(1.1)', color: 'rgb(248, 113, 113)' },
          '100%': { transform: 'scale(1)', color: 'rgb(var(--color-rug-text))' }
        },
        'flash-once': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.2',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.4',
            transform: 'scale(1.1)',
          },
        },
        'pulse-glow-fast': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.7',
            transform: 'scale(1.02)',
          },
        },
        'pulse-subtle': {
          '0%, 100%': {
            opacity: '0.3',
          },
          '50%': {
            opacity: '0.5',
          },
        },
        'sparkle': {
          '0%, 100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.5',
            transform: 'scale(1.2)',
          },
        },
        'ripple': {
          '0%': {
            transform: 'scale(0)',
            opacity: '0.5',
          },
          '100%': {
            transform: 'scale(4)',
            opacity: '0',
          },
        },
        'bounce-subtle': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-2px)',
          },
        },
        'bounce-subtle-reverse': {
          '0%, 100%': {
            transform: 'translateY(5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        'glow-line': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scaleX(0.95)',
          },
          '50%': {
            opacity: '1',
            transform: 'scaleX(1.05)',
          },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        'marquee2': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        },
        'flicker-loading': {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0.8',
          },
          '25%, 75%': {
            opacity: '0.9',
          },
          '33%, 66%': {
            opacity: '0.95',
          },
        },
        'fade-in-out': {
          '0%, 100%': {
            opacity: '0.5',
          },
          '50%': {
            opacity: '1',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'tremble': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-1px)' },
          '75%': { transform: 'translateX(1px)' },
        },
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(3px)',
          },
        },
        'pulse-slow': {
          '0%, 100%': {
            transform: 'scale(1)',
            opacity: '0.5',
          },
          '50%': {
            transform: 'scale(1.05)',
            opacity: '0.7',
          },
        },
        'shine': {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '100%': {
            backgroundPosition: '200% 50%',
          },
        },
        'beam': {
          '0%, 100%': {
            opacity: '0',
            transform: 'translateX(-100%) translateY(-100%)',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%) translateY(100%)',
          },
        },
        'glitch-1': {
          '0%, 100%': {
            transform: 'translate(0)',
          },
          '20%': {
            transform: 'translate(-2px, 2px)',
          },
          '40%': {
            transform: 'translate(-2px, -2px)',
          },
          '60%': {
            transform: 'translate(2px, 2px)',
          },
          '80%': {
            transform: 'translate(2px, -2px)',
          },
        },
        'glitch-2': {
          '0%, 100%': {
            transform: 'translate(0)',
          },
          '20%': {
            transform: 'translate(2px, -2px)',
          },
          '40%': {
            transform: 'translate(2px, 2px)',
          },
          '60%': {
            transform: 'translate(-2px, -2px)',
          },
          '80%': {
            transform: 'translate(-2px, 2px)',
          },
        },
        sparkle: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: '0',
          },
          '50%': {
            transform: 'scale(1) rotate(180deg)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(0) rotate(360deg)',
            opacity: '0',
          },
        },
        'glow-border': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'translateX(-100%)',
          },
          '50%': {
            opacity: '1',
            transform: 'translateX(100%)',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            transform: 'translateX(-50%)',
          },
          '50%': {
            transform: 'translateX(50%)',
          },
        },
        'grid-flicker': {
          '0%, 95%, 100%': {
            opacity: '0.02',
          },
          '96%, 99%': {
            opacity: '0.04',
          },
        },
        flicker: {
          '0%, 90%, 100%': {
            opacity: '0',
          },
          '95%': {
            opacity: '0.3',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '25%': { transform: 'translate(10px, 10px)' },
          '50%': { transform: 'translate(-5px, 20px)' },
          '75%': { transform: 'translate(-15px, 5px)' },
        },
        'button-pulse': {
          '0%, 100%': {
            opacity: '0.5',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translate(-50%, -150%)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate(-50%, -100%)',
          },
        },
        'scale-in': {
          '0%': {
            transform: 'scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'rug-pull': {
          '0%': {
            transform: 'translateY(0)',
          },
          '20%': {
            transform: 'translateY(-10px)',
          },
          '100%': {
            transform: 'translateY(300px)',
          },
        },
        'grid-pulse': {
          '0%, 100%': {
            opacity: '0.3',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.4',
            transform: 'scale(1.02)',
          },
        },
        'glitch': {
          '0%, 90%, 100%': {
            opacity: '0',
            transform: 'translate(0)',
          },
          '95%': {
            opacity: '0.3',
            transform: 'translate(2px, -3px)',
          },
          '98%': {
            opacity: '0.2',
            transform: 'translate(-2px, 2px)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'corner-glitch': {
          '0%, 90%, 100%': {
            opacity: '0',
            transform: 'scale(1)',
          },
          '95%': {
            opacity: '0.3',
            transform: 'scale(1.1)',
          },
        },
        'subtle-grain': {
          '0%, 100%': {
            transform: 'translate(0, 0)',
          },
          '10%': {
            transform: 'translate(-1%, -1%)',
          },
          '20%': {
            transform: 'translate(1%, 1%)',
          },
          '30%': {
            transform: 'translate(-1%, 1%)',
          },
          '40%': {
            transform: 'translate(1%, -1%)',
          },
          '50%': {
            transform: 'translate(-1%, -1%)',
          },
          '60%': {
            transform: 'translate(1%, 1%)',
          },
          '70%': {
            transform: 'translate(-1%, 1%)',
          },
          '80%': {
            transform: 'translate(1%, -1%)',
          },
          '90%': {
            transform: 'translate(-1%, -1%)',
          },
        },
        loading: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      animation: {
        'value-increase': 'value-increase 1s cubic-bezier(0.4, 0, 0.6, 1)',
        'value-decrease': 'value-decrease 1s cubic-bezier(0.4, 0, 0.6, 1)',
        'flash-once': 'flash-once 1s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-glow-fast': 'pulse-glow-fast 2s ease-in-out infinite',
        'pulse-subtle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'ripple': 'ripple 1s cubic-bezier(0, 0, 0.2, 1)',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'bounce-subtle-reverse': 'bounce-subtle-reverse 2s infinite',
        'glow-line': 'glow-line 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
        'marquee2': 'marquee2 40s linear infinite',
        'flicker-loading': 'flicker-loading 2s ease-in-out infinite',
        'fade-in-out': 'fade-in-out 2s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
        'tremble': 'tremble 0.1s ease-in-out infinite',
        'bounce-x': 'bounce-x 1s infinite',
        'pulse-slow': 'pulse-slow 3s infinite',
        'shine': 'shine 8s linear infinite',
        'beam': 'beam 7s linear infinite',
        'glitch-1': 'glitch-1 200ms linear',
        'glitch-2': 'glitch-2 200ms linear',
        'sparkle': 'sparkle 700ms ease-in-out forwards',
        'glow-border': 'glow-border 8s ease-in-out infinite',
        'gradient-x': 'gradient-x 15s ease-in-out infinite',
        'grid-flicker': 'grid-flicker 8s ease-in-out infinite',
        'flicker': 'flicker 10s ease-in-out infinite',
        'float': 'float 15s ease-in-out infinite',
        'button-pulse': 'button-pulse 1s ease-in-out',
        'fade-in': 'fade-in 300ms ease-out',
        'scale-in': 'scale-in 300ms ease-out',
        'rug-pull': 'rug-pull 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'grid-pulse': 'grid-pulse 4s ease-in-out infinite',
        'glitch': 'glitch 20s ease-in-out infinite',
        'float': 'float 15s ease-in-out infinite',
        'corner-glitch': 'corner-glitch 20s ease-in-out infinite',
        'subtle-grain': 'subtle-grain 8s steps(8) infinite',
        'loading-bar': 'loading 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      animationDelay: {
        '150': '150ms',
        '300': '300ms',
      },
      dropShadow: {
        'glow': '0 0 8px rgba(0, 255, 157, 0.5)',
        'glow-red': '0 0 8px rgba(239, 68, 68, 0.5)',
      },
    },
  },
  plugins: [],
}