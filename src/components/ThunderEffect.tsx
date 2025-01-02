import React, { useEffect, useState } from 'react';
import { Zap } from 'lucide-react';

interface Thunder {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
}

export default function ThunderEffect() {
  const [thunders, setThunders] = useState<Thunder[]>([]);

  useEffect(() => {
    const createThunder = () => {
      const newThunder = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0.5 + Math.random() * 2,
        rotation: Math.random() * 360
      };

      setThunders(prev => [...prev, newThunder]);
      setTimeout(() => {
        setThunders(prev => prev.filter(t => t.id !== newThunder.id));
      }, 1000);
    };

    const interval = setInterval(createThunder, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {thunders.map(thunder => (
        <div
          key={thunder.id}
          className="absolute pointer-events-none animate-thunder"
          style={{
            left: `${thunder.x}%`,
            top: `${thunder.y}%`,
            transform: `scale(${thunder.scale}) rotate(${thunder.rotation}deg)`
          }}
        >
          <Zap className="w-12 h-12 text-yellow-300" />
        </div>
      ))}
    </>
  );
}