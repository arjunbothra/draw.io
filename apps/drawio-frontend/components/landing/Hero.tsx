import { Icons } from "../icons";
import { Button } from "../ui/Button";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex flex-col justify-center">
    {/* Noise Texture (CSS only) */}
    <div className="absolute inset-0 -z-10 bg-zinc-950">
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] mask-radial-fade"></div>
      
      {/* Animated Spotlights */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[140px] animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[120px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      
      <Reveal delay={100}>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white mb-10 leading-[1.05] font-display">
          Sketch ideas at <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-fuchsia-400 animate-gradient-x">
            the speed of thought.
          </span>
        </h1>
      </Reveal>

      <Reveal delay={200}>
        <p className="max-w-3xl mx-auto text-2xl md:text-3xl text-zinc-400 mb-16 leading-relaxed font-hand">
          The developer-first whiteboard. Visualize architecture, brainstorm flows, and document systems with a hand-drawn aesthetic that feels alive.
        </p>
      </Reveal>

      <Reveal delay={300}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-28">
          <MagneticButton variant="glow" className="w-full sm:w-auto h-16 px-10 text-xl" icon={<Icons.ChevronRight className="w-6 h-6" />}>
            Start Drawing Now
          </MagneticButton>
          <Button variant="secondary" className="w-full sm:w-auto h-16 px-10 text-xl bg-zinc-900 border-zinc-800" icon={<Icons.Github className="w-6 h-6" />}>
            Star on GitHub
          </Button>
        </div>
      </Reveal>

      {/* Interactive Visual Mockup */}
      <Reveal delay={400} className="perspective-1000 group">
        <div className="relative mx-auto max-w-7xl bg-zinc-900 rounded-2xl border border-zinc-800 shadow-2xl transform transition-all duration-700 hover:rotate-x-1 hover:scale-[1.005] overflow-hidden ring-1 ring-white/10">
          <div className="bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800 px-6 py-4 flex items-center gap-4">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-zinc-700/50"></div>
              <div className="w-4 h-4 rounded-full bg-zinc-700/50"></div>
              <div className="w-4 h-4 rounded-full bg-zinc-700/50"></div>
            </div>
            <div className="flex-1 text-center">
               <span className="text-sm font-mono text-zinc-500">untitled-architecture.draw</span>
            </div>
          </div>

          <div className="aspect-[16/9] bg-zinc-950 relative overflow-hidden cursor-crosshair">
            <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-20"></div>

            {/* SVG Content */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4">
                <svg className="w-full h-full overflow-visible">
                    <defs>
                        <filter id="neon"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                    </defs>
                    <g transform="translate(50,50)" className="group/node cursor-pointer">
                        <rect width="220" height="120" rx="6" fill="#18181b" stroke="#60a5fa" strokeWidth="3" filter="url(#neon)" className="transition-all group-hover/node:stroke-white"/>
                        <text x="110" y="65" textAnchor="middle" fill="#60a5fa" className="font-hand text-2xl transition-all group-hover/node:fill-white">Frontend (Next.js)</text>
                    </g>
                    <path d="M 270 110 C 350 110, 350 200, 450 200" stroke="#71717a" strokeWidth="3" fill="none" strokeDasharray="10,5" className="animate-dash" />
                     <g transform="translate(450,150)" className="group/node cursor-pointer">
                        <rect width="220" height="120" rx="6" fill="#18181b" stroke="#a78bfa" strokeWidth="3" filter="url(#neon)" className="transition-all group-hover/node:stroke-white"/>
                        <text x="110" y="65" textAnchor="middle" fill="#a78bfa" className="font-hand text-2xl transition-all group-hover/node:fill-white">API Gateway</text>
                    </g>
                    <g className="animate-cursor-move transition-transform duration-1000">
                        <path d="M0 0L16 16L22 10L32 36" fill="#ec4899" stroke="white" transform="translate(380, 180)"/>
                        <rect x="26" y="26" width="90" height="30" rx="15" fill="#ec4899" transform="translate(380, 180)"/>
                        <text x="70" y="47" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" transform="translate(380, 180)">@sarah</text>
                    </g>
                </svg>
            </div>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-zinc-900/90 backdrop-blur border border-zinc-700/50 rounded-2xl p-3 flex gap-3 shadow-2xl">
               {[1,2,3,4,5,6].map(i => (
                 <div key={i} className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer hover:bg-zinc-800 hover:-translate-y-1 transition-all duration-200 border border-transparent hover:border-zinc-700 ${i===1 ? 'text-blue-400 bg-zinc-800' : 'text-zinc-400'}`}>
                    <div className="w-6 h-6 border-2 border-current rounded-md opacity-80" />
                 </div>
               ))}
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);