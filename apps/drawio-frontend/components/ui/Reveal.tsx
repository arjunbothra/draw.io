import { useElementOnScreen } from "@/hooks/useElementOnScreen";
import { ReactNode } from "react";

export const Reveal = ({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) => {
  const [ref, isVisible] = useElementOnScreen({ threshold: 0.1 });
  
  return (
    <div ref={ref as any} className={`${className} transition-all duration-1000 cubic-bezier(0.17, 0.55, 0.55, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};