import { Icons } from "../icons";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";

export const Pricing = () => (
    <section id="pricing" className="py-40 bg-zinc-950 border-t border-zinc-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-24">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-display">Fair pricing for everyone.</h2>
                <p className="text-2xl md:text-3xl text-zinc-400 font-hand mt-4">Open source forever. Upgrade for team features.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Free */}
                <Reveal delay={100} className="h-full">
                    <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all h-full flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-3">Hobby</h3>
                            <div className="text-5xl font-bold text-white mb-2">$0</div>
                            <p className="text-base text-zinc-500">Forever free</p>
                        </div>
                        <ul className="space-y-5 mb-10 flex-1">
                            {['Unlimited local files', 'Export to PNG/SVG', 'Community Access', '3 Public Boards'].map(f => (
                                <li key={f} className="flex items-center gap-4 text-zinc-300 text-lg"><Icons.Check className="w-6 h-6 text-zinc-600" /> {f}</li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 text-white">Get Started</Button>
                    </div>
                </Reveal>

                {/* Pro */}
                <Reveal delay={200} className="h-full">
                    <div className="relative p-10 rounded-3xl border border-blue-500/30 bg-blue-500/5 hover:border-blue-500/50 transition-all h-full flex flex-col shadow-[0_0_40px_-10px_rgba(37,99,235,0.1)]">
                        <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-3">Pro</h3>
                            <div className="text-5xl font-bold text-white mb-2">$12<span className="text-xl font-normal text-zinc-500">/mo</span></div>
                            <p className="text-base text-zinc-500">For serious creators</p>
                        </div>
                        <ul className="space-y-5 mb-10 flex-1">
                            {['Everything in Free', 'Unlimited Cloud Storage', 'Private Boards', 'High-res Export', 'Version History'].map(f => (
                                <li key={f} className="flex items-center gap-4 text-white text-lg"><Icons.Check className="w-6 h-6 text-blue-400" /> {f}</li>
                            ))}
                        </ul>
                        <Button variant="glow" className="w-full">Start Free Trial</Button>
                    </div>
                </Reveal>

                {/* Team */}
                <Reveal delay={300} className="h-full">
                    <div className="p-10 rounded-3xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-all h-full flex flex-col">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-white mb-3">Team</h3>
                            <div className="text-5xl font-bold text-white mb-2">$49<span className="text-xl font-normal text-zinc-500">/mo</span></div>
                            <p className="text-base text-zinc-500">For engineering teams</p>
                        </div>
                        <ul className="space-y-5 mb-10 flex-1">
                            {['Everything in Pro', 'SSO & SAML', 'Admin Dashboard', 'Priority Support', 'Audit Logs'].map(f => (
                                <li key={f} className="flex items-center gap-4 text-zinc-300 text-lg"><Icons.Check className="w-6 h-6 text-zinc-600" /> {f}</li>
                            ))}
                        </ul>
                        <Button variant="outline" className="w-full border-zinc-700 hover:bg-zinc-800 text-white">Contact Sales</Button>
                    </div>
                </Reveal>
            </div>
        </div>
    </section>
);