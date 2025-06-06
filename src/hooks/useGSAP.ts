// hooks/useGSAP.ts
import { useEffect, useRef } from 'react';

// Define types for GSAP
interface GSAPStatic {
  timeline: () => any;
  to: (target: any, vars: any) => any;
  from: (target: any, vars: any) => any;
  fromTo: (target: any, fromVars: any, toVars: any) => any;
  set: (target: any, vars: any) => any;
  registerPlugin: (...plugins: any[]) => void;
  [key: string]: any;
}

interface ScrollTriggerStatic {
  create: (vars: any) => any;
  refresh: () => void;
  [key: string]: any;
}

// Custom hook for GSAP animations
export function useGSAP(
  callback: (gsap: GSAPStatic, ScrollTrigger: ScrollTriggerStatic) => void | (() => void),
  dependencies: any[] = []
) {
  const containerRef = useRef<HTMLElement>(null);
  const contextRef = useRef<any>(null);

  useEffect(() => {
    let cleanup: (() => void) | void;

    // Dynamic import of GSAP
    const loadGSAP = async () => {
      try {
        // Import GSAP dynamically
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');

        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Create GSAP context for cleanup
        contextRef.current = gsap.context(() => {
          // Call the animation callback with gsap and ScrollTrigger
          cleanup = callback(gsap, ScrollTrigger);
        }, containerRef.current || undefined);

        // Refresh ScrollTrigger after animations are set up
        ScrollTrigger.refresh();

      } catch (error) {
        console.error('Failed to load GSAP:', error);
        
        // Fallback: Try global GSAP if dynamic import fails
        if (typeof window !== 'undefined' && (window as any).gsap) {
          const gsap = (window as any).gsap;
          const ScrollTrigger = (window as any).ScrollTrigger;
          
          if (ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
          }

          contextRef.current = gsap.context(() => {
            cleanup = callback(gsap, ScrollTrigger || {});
          }, containerRef.current || undefined);

          if (ScrollTrigger) {
            ScrollTrigger.refresh();
          }
        } else {
          console.warn('GSAP not available. Please ensure GSAP is properly installed.');
        }
      }
    };

    loadGSAP();

    // Cleanup function
    return () => {
      if (cleanup && typeof cleanup === 'function') {
        cleanup();
      }
      if (contextRef.current) {
        contextRef.current.revert();
      }
    };
  }, dependencies);

  return containerRef;
}
