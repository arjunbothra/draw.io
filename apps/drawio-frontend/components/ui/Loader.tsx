import React from 'react';
import { Icons } from '@/components/icons';

interface LoaderProps {
  fullscreen?: boolean;
  text?: string;
}

export const Loader = ({ fullscreen = false, text = "Sketching..." }: LoaderProps) => {
  
  const content = (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Outer Sketchy Ring 1 (Faint background) */}
        <svg className="absolute inset-0 w-full h-full text-zinc-800 transform scale-110" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 6" />
        </svg>

        {/* Outer Sketchy Ring 2 (Spinning Active) */}
        <svg className="absolute inset-0 w-full h-full text-blue-500 animate-[spin_3s_linear_infinite]" viewBox="0 0 100 100">
          <circle 
            cx="50" 
            cy="50" 
            r="45" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2.5" 
            strokeLinecap="round" 
            strokeDasharray="40 120" 
          />
        </svg>

        {/* Floating Pencil Icon */}
        <div className="relative z-10 bg-zinc-950 p-2 rounded-full border border-zinc-800 shadow-xl animate-pulse">
          <Icons.Pencil className="w-6 h-6 text-white" />
        </div>
      </div>

      {/* Loading Text */}
      <p className="mt-6 text-xl font-hand text-zinc-400 tracking-wider animate-pulse">
        {text}
      </p>
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 backdrop-blur-sm selection:bg-blue-500/30 selection:text-blue-200">
        {/* Background Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
        {content}
      </div>
    );
  }

  return content;
};