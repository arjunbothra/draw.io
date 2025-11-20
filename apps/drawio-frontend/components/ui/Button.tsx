import React from 'react';

// React.ButtonHTMLAttributes already includes onClick, onMouseEnter, etc.
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  icon?: React.ReactNode;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  icon,
  ...props 
}: ButtonProps) => {
  
  const variants = {
    primary: "bg-white text-zinc-950 hover:bg-zinc-200 shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] border border-transparent",
    glow: "bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.6)] border border-blue-500/50",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700",
    outline: "bg-transparent hover:bg-zinc-800 text-zinc-300 border border-zinc-700",
    ghost: "bg-transparent hover:bg-zinc-800/50 text-zinc-400 hover:text-white"
  };

  return (
    <button 
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium transition-all duration-200 active:scale-[0.98] text-lg ${variants[variant]} ${className}`} 
      {...props} // This automatically passes onClick down to the DOM element
    >
      {children}
      {icon}
    </button>
  );
};