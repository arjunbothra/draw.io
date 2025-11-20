'use client';

import React from 'react';
import { Button, ButtonProps } from './Button';
import { useMagnetic } from '@/hooks/useMagnetic';


export const MagneticButton = ({ children, className = '', ...props }: ButtonProps) => {
  const { ref, position, handleMouseMove, handleMouseLeave } = useMagnetic();
  
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      // inline-block ensures the div behaves like a button in the flex container
      className={`transition-transform duration-100 ease-out inline-block ${className}`}
    >
      {/* w-full h-full ensures the button fills the magnetic target area */}
      <Button {...props} className="w-full h-full">{children}</Button>
    </div>
  );
};