'use client';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <>
      <div 
        className="fixed w-3 h-3 bg-caramel rounded-full pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 transition-transform duration-150"
        style={{ left: pos.x, top: pos.y }}
      />
      <div 
        className="fixed w-10 h-10 border border-caramel rounded-full pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-60"
        style={{ left: pos.x, top: pos.y }}
      />
    </>
  );
}