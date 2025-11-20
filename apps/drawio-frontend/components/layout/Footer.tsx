import React from 'react';
import { Icons } from '@/components/icons';

export const Footer = () => {
  
  // Define distinct links for each column
  const linkGroups = {
    Product: ['Features', 'Pricing', 'Changelog', 'Docs'],
    Company: ['About', 'Blog', 'Careers', 'Contact']
  };

  return (
    <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         
         {/* Top Section: Grid Layout */}
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
           
           {/* Brand Column: Spans 5 cols on large screens */}
           <div className="col-span-1 md:col-span-6 lg:col-span-5">
             <div className="flex items-center gap-3 mb-6 text-white">
               <Icons.Logo className="w-8 h-8 text-blue-500" />
               <span className="font-bold text-2xl font-hand">draw.io</span>
             </div>
             <p className="text-zinc-500 text-lg leading-relaxed mb-8 max-w-sm">
               The new standard for technical diagramming. Built for speed, designed for clarity.
             </p>
             
             {/* Indie Badge */}
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 hover:border-zinc-700 transition-colors cursor-help">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>
                Built by an Indie Hacker
             </div>
           </div>
           
           {/* Links Columns: Spans 7 cols, pushes content to the right */}
           <div className="col-span-1 md:col-span-6 lg:col-span-7 flex flex-col sm:flex-row gap-12 sm:gap-24 lg:justify-end">
             
             {/* Render Product Column */}
             <div>
               <h4 className="font-bold text-white mb-6 text-base font-display tracking-wide">Product</h4>
               <ul className="space-y-4 text-base text-zinc-500">
                 {linkGroups.Product.map(item => (
                   <li key={item}>
                     <a href={`#${item.toLowerCase()}`} className="hover:text-blue-400 transition-colors">{item}</a>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Render Company Column */}
             <div>
               <h4 className="font-bold text-white mb-6 text-base font-display tracking-wide">Company</h4>
               <ul className="space-y-4 text-base text-zinc-500">
                 {linkGroups.Company.map(item => (
                   <li key={item}>
                     <a href="#" className="hover:text-blue-400 transition-colors">{item}</a>
                   </li>
                 ))}
               </ul>
             </div>

           </div>
         </div>

         {/* Bottom Bar */}
         <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-600">
           <p>© 2025 draw.io Inc. All rights reserved.</p>
           <div className="flex gap-8">
             <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
           </div>
         </div>
      </div>
    </footer>
  );
};