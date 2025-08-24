
import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css'; 

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'input' ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).getPropertyValue('cursor') === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

   
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); 

  return (
    <>
      <div
        className={styles.cursor}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`${styles.follower} ${isHovering ? styles.hover : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
};

export default CustomCursor;