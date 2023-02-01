'use client';

import { useState, useEffect } from 'react';

interface FloatingButtonProps {
  distance?: number;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ distance = 75 }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`floating-button ${scrollPosition <= distance && 'hidden'}`}
      onClick={handleClick}>
      ↑
    </button>
  );
};
