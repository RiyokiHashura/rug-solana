import { useState, useEffect } from 'react';

const Chart = ({ isRugPulled = false }) => {
  const [data, setData] = useState([]);
  const [height, setHeight] = useState(200);
  const width = 300;
  const points = 20;

  useEffect(() => {
    if (isRugPulled) {
      setData(generateRugPullData());
    } else {
      setData(generateUpwardData());
    }
  }, [isRugPulled]);

  const generateUpwardData = () => {
    return Array.from({ length: points }, (_, i) => ({
      x: (i * width) / (points - 1),
      y: height - (Math.random() * 20 + (height * 0.3) + (i * height * 0.02))
    }));
  };

  const generateRugPullData = () => {
    return Array.from({ length: points }, (_, i) => ({
      x: (i * width) / (points - 1),
      y: i < points - 5 ? 
        height - (Math.random() * 20 + (height * 0.3) + (i * height * 0.02)) : 
        height - 10
    }));
  };

  const createPath = () => {
    if (data.length === 0) return '';
    const line = data.map((point, i) => (
      i === 0 ? `M ${point.x},${point.y}` : `L ${point.x},${point.y}`
    )).join(' ');
    return line;
  };

  return (
    <div className="p-4 bg-gray-900 rounded-lg shadow-xl">
      <svg 
        width={width} 
        height={height} 
        className="transition-all duration-1000 ease-in-out"
      >
        <path
          d={createPath()}
          fill="none"
          stroke={isRugPulled ? '#ef4444' : '#22c55e'}
          strokeWidth="2"
          className="transition-all duration-1000 ease-in-out"
        />
      </svg>
    </div>
  );
};

export default Chart;