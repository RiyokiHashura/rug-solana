const MemeMarquee = () => {
  const memeTexts = [
    "Up Only… until it isn't 💀",
    "Financial advice? No, but vibes? Yes 🫠",
    "Trust me bro, I'm a chart 📈",
    "Wen lambo? Wen homeless? 🚗",
    "Not a rug if you don't sell 🧠",
    "Devs are based (gone) 👻",
    "Perfectly safu investment 🔒",
    "1 $RUG = 1 $RUG 🤝",
    "Dips are transitory 🌈",
    "Few understand 🧙‍♂️"
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#1C2230] via-[#1C2230]/95 to-[#1C2230] py-3 backdrop-blur-sm">
      <div className="relative flex overflow-x-hidden">
        {/* First marquee */}
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {memeTexts.map((text, i) => (
            <span
              key={i}
              className="
                text-gray-300
                font-medium
                px-4
                transition-colors
                duration-300
                hover:text-green-400
                hover:shadow-green-500/20
                cursor-default
                group
              "
            >
              <span className="
                relative
                inline-block
                group-hover:animate-bounce-subtle
              ">
                {text}
              </span>
            </span>
          ))}
        </div>

        {/* Duplicate marquee for seamless loop */}
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center gap-8">
          {memeTexts.map((text, i) => (
            <span
              key={i}
              className="
                text-gray-300
                font-medium
                px-4
                transition-colors
                duration-300
                hover:text-green-400
                hover:shadow-green-500/20
                cursor-default
                group
              "
            >
              <span className="
                relative
                inline-block
                group-hover:animate-bounce-subtle
              ">
                {text}
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemeMarquee;