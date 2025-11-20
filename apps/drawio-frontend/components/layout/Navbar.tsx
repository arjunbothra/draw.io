import { useEffect, useState } from "react";
import { Icons } from "../icons";
import { Button } from "../ui/Button";
import Link from "next/link";


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled ? 'bg-zinc-950/80 backdrop-blur-xl border-zinc-800' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 group cursor-pointer z-50 relative">
            <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-violet-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-300">
              <Icons.Logo className="w-6 h-6" />
            </div>
            <span className="font-bold text-3xl text-white tracking-wide font-hand">draw.io</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {['Features', 'Pricing', 'Testimonials', 'About'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-medium text-zinc-400 hover:text-white transition-colors">
                {item}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            {/* Reverted Login Button to Text Style */}
            <Link href={"/signin"}>
              <button className="text-xl font-medium text-zinc-400 hover:text-white transition-colors font-hand">
                Log in
              </button>
            </Link>
            <Link href={"/signup"}>
              <Button variant="primary" className="!py-2 !px-6 !text-lg font-hand">Start Free</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-[60] relative">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="text-zinc-400 hover:text-white p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <Icons.X className="w-8 h-8" /> : <Icons.Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-[55] transition-transform duration-300 px-8 pt-32 pb-10 overflow-y-auto h-[100dvh] ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col gap-8 text-xl font-display">
          {['Features', 'Pricing', 'Testimonials', 'About'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-zinc-300 hover:text-blue-400 block py-3 border-b border-zinc-900">
              {item}
            </a>
          ))}
          <div className="pt-8 flex flex-col gap-5 pb-10">
             <Button variant="glow" className="w-full justify-center font-hand text-xl">Start Free</Button>
             <button className="w-full py-3 text-xl font-medium text-zinc-400 hover:text-white transition-colors font-hand border border-zinc-800 rounded-full">
                Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};