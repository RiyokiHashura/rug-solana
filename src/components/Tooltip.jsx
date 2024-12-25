const Tooltip = ({ text, children }) => {
  return (
    <div className="group relative inline-block">
      {children}
      <div className="
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        absolute -top-10 left-1/2 -translate-x-1/2
        px-3 py-2
        bg-gray-900 text-white
        text-sm font-medium
        rounded-lg shadow-lg
        whitespace-nowrap
        z-50
        before:content-['']
        before:absolute
        before:-bottom-1
        before:left-1/2
        before:-translate-x-1/2
        before:border-4
        before:border-transparent
        before:border-t-gray-900
      ">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
