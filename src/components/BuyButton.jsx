import { useState, useRef, useEffect } from 'react';

const BuyButton = ({ onRug, disabled }) => (
  <button 
    onClick={onRug}
    disabled={disabled}
    aria-label="Buy RUG Token"
    className={`
      w-full
      px-8
      py-4
      rounded-xl
      font-bold
      text-xl
      transform-gpu
      transition-all
      duration-300
      ease-out
      ${disabled 
        ? 'bg-gray-600 cursor-not-allowed opacity-50' 
        : 'bg-rug-primary text-rug-dark hover:bg-rug-primary/90 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-95'
      }
      before:absolute
      before:inset-0
      before:rounded-xl
      before:bg-rug-primary/20
      before:transform-gpu
      before:transition-opacity
      before:duration-300
      hover:before:opacity-100
      before:opacity-0
    `}
  >
    BUY $RUG
  </button>
);

export default BuyButton;
