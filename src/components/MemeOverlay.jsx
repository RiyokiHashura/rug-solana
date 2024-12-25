import { useEffect, useState } from 'react';

const memes = [
  {
    image: '/memes/wojak-crying.png',
    text: 'NOOOO MY LIFE SAVINGS!'
  },
  {
    image: '/memes/he-sold.png',
    text: 'He Sold? Dump it.'
  },
  {
    image: '/memes/dump-it.png',
    text: 'Funds are SAFU'
  }
];

const sounds = [
  '/sounds/bruh.mp3',
  '/sounds/oof.mp3',
  '/sounds/sad-trombone.mp3'
];

const MemeOverlay = ({ isVisible, onAnimationEnd }) => {
  const [selectedMeme, setSelectedMeme] = useState(null);

  useEffect(() => {
    if (isVisible) {
      // Select random meme and sound
      setSelectedMeme(memes[Math.floor(Math.random() * memes.length)]);
      const audio = new Audio(sounds[Math.floor(Math.random() * sounds.length)]);
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
  }, [isVisible]);

  if (!isVisible || !selectedMeme) return null;

  return (
    <div 
      className={`
        fixed inset-0 
        flex flex-col items-center justify-center 
        bg-black/85
        z-50
        animate-fadeIn
        p-4
      `}
      onAnimationEnd={onAnimationEnd}
    >
      <img 
        src={selectedMeme.image} 
        alt="Meme" 
        className="max-w-[80%] max-h-[70vh] animate-scaleIn rounded-lg shadow-2xl"
      />
      <div className="
        mt-6
        text-white
        text-2xl md:text-4xl
        font-bold
        text-center
        animate-bounceIn
      ">
        {selectedMeme.text}
      </div>
    </div>
  );
};

export default MemeOverlay;