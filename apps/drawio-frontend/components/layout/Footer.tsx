import { Icons } from "../icons";


export const Footer = () => (
  <footer className="bg-zinc-950 pt-24 pb-12 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
         <div className="col-span-2 md:col-span-1">
           <div className="flex items-center gap-3 mb-8 text-white">
             <Icons.Logo className="w-8 h-8 text-blue-500" />
             <span className="font-bold text-2xl font-hand">draw.io</span>
           </div>
           <p className="text-zinc-500 text-lg leading-relaxed mb-8">
             The new standard for technical diagramming. Built for speed, designed for clarity.
           </p>
           {/* Social Proof / Indie Badge */}
           <div className="inline-flex items-center gap-3 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 hover:border-zinc-600 transition-colors cursor-help">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              Built by an Indie Hacker
           </div>
         </div>
         
         {['Product', 'Resources', 'Company'].map(col => (
           <div key={col}>
             <h4 className="font-bold text-white mb-8 text-base font-display tracking-wide">{col}</h4>
             <ul className="space-y-5 text-base text-zinc-500">
               {['Features', 'Pricing', 'Changelog', 'Docs'].map(item => (
                 <li key={item}><a href="#" className="hover:text-blue-400 transition-colors">{item}</a></li>
               ))}
             </ul>
           </div>
         ))}
       </div>
       <div className="pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-zinc-600">
         <p>© 2024 draw.io Inc. All rights reserved.</p>
         <div className="flex gap-10">
           <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
           <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
           <a href="#" className="hover:text-zinc-400 transition-colors">Twitter</a>
         </div>
       </div>
    </div>
  </footer>
);