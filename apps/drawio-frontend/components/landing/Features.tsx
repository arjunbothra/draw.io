import { Icons } from "../icons";
import { Reveal } from "../ui/Reveal";

export const Features = () => {
  const features = [
    {
      title: "Infinite Canvas",
      desc: "No borders, no pages. Just one endless surface for your mind map.",
      icon: <Icons.Grid className="w-8 h-8 text-blue-400" />
    },
    {
      title: "Real-time Collaboration",
      desc: "Share a link and start drawing together. Low latency, high fun.",
      icon: <Icons.Users className="w-8 h-8 text-violet-400" />
    },
    {
      title: "End-to-End Encryption",
      desc: "Your diagrams are encrypted locally. Even we can't see them.",
      icon: <Icons.Lock className="w-8 h-8 text-emerald-400" />
    },
    {
      title: "Hand-Drawn Style",
      desc: "Sloppy by design. Focus on the logic, not the pixel alignment.",
      icon: <Icons.Pencil className="w-8 h-8 text-pink-400" />
    },
    {
      title: "Export Anywhere",
      desc: "Export to PNG, SVG, or copy to clipboard as code.",
      icon: <Icons.Download className="w-8 h-8 text-amber-400" />
    },
    {
      title: "Open Source",
      desc: "Built by the community, for the community. MIT Licensed.",
      icon: <Icons.Github className="w-8 h-8 text-zinc-400" />
    }
  ];

  return (
    <section id="features" className="py-40 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center max-w-4xl mx-auto mb-24">
                <Reveal>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-display">
                        Everything you need to <span className="text-blue-500">visualize</span>.
                    </h2>
                    <p className="text-2xl md:text-3xl text-zinc-400 font-hand mt-4">
                        Powerful enough for system architecture, simple enough for quick sketches.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {features.map((f, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <div className="p-10 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors h-full group">
                            <div className="w-14 h-14 bg-zinc-800/50 rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                {f.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-display">{f.title}</h3>
                            <p className="text-xl text-zinc-400 font-hand leading-relaxed">{f.desc}</p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </div>
    </section>
  );
};