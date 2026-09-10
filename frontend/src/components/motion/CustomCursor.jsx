import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [label, setLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Disable on touch / coarse devices or reduced motion
    const isTouchDevice = window.matchMedia('(hover: none) or (pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isTouchDevice || prefersReducedMotion) {
      return;
    }

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Inspect hover target for data-cursor or interactive elements
      const target = e.target.closest('[data-cursor], a, button, input, select, textarea');
      if (target) {
        const customLabel = target.getAttribute('data-cursor');
        if (customLabel) {
          setLabel(customLabel);
        } else if (target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
          setLabel('Book');
        } else if (target.tagName === 'A') {
          setLabel('View');
        } else {
          setLabel('');
        }
        setIsHovered(true);
      } else {
        setIsHovered(false);
        setLabel('');
      }
    };

    const render = () => {
      // Lerp smoothing (~0.18 easing factor)
      const ease = 0.18;
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * ease;
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animFrameId.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 rounded-full flex items-center justify-center transition-all duration-200 ease-out ${
        isHovered
          ? 'w-16 h-16 bg-[#9C7A50]/90 text-white shadow-lg backdrop-blur-xs scale-100'
          : 'w-4 h-4 bg-[#9C7A50] opacity-80 scale-100'
      }`}
      style={{ willChange: 'transform' }}
    >
      {isHovered && label && (
        <span className="text-[10px] uppercase font-mono tracking-widest font-semibold text-white animate-fade-in">
          {label}
        </span>
      )}
    </div>
  );
}
