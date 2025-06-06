// hooks/useGSAP.ts
import { useEffect, useRef } from 'react';

// Define proper GSAP types without 'any'
interface GSAPTimeline {
  to: (target: string | Element | Element[], vars: Record<string, unknown>, position?: string | number) => GSAPTimeline;
  from: (target: string | Element | Element[], vars: Record<string, unknown>, position?: string | number) => GSAPTimeline;
  fromTo: (target: string | Element | Element[], fromVars: Record<string, unknown>, toVars: Record<string, unknown>, position?: string | number) => GSAPTimeline;
  set: (target: string | Element | Element[], vars: Record<string, unknown>, position?: string | number) => GSAPTimeline;
  play: () => GSAPTimeline;
  pause: () => GSAPTimeline;
  reverse: () => GSAPTimeline;
  restart: () => GSAPTimeline;
}

interface GSAPUtils {
  toArray: (target: string | Element | Element[] | NodeList) => Element[];
}

interface GSAPStatic {
  timeline: (vars?: Record<string, unknown>) => GSAPTimeline;
  to: (target: string | Element | Element[], vars: Record<string, unknown>) => unknown;
  from: (target: string | Element | Element[], vars: Record<string, unknown>) => unknown;
  fromTo: (target: string | Element | Element[], fromVars: Record<string, unknown>, toVars: Record<string, unknown>) => unknown;
  set: (target: string | Element | Element[], vars: Record<string, unknown>) => unknown;
  registerPlugin: (...plugins: unknown[]) => void;
  context: (callback: () => void | (() => void), scope?: Element | null) => { revert: () => void };
  utils: GSAPUtils;
}

interface ScrollTriggerStatic {
  create: (vars: Record<string, unknown>) => unknown;
  refresh: () => void;
  batch: (targets: string | Element | Element[], vars: Record<string, unknown>) => unknown;
}

// Define window interface with GSAP properties
interface WindowWithGSAP extends Window {
  gsap?: GSAPStatic;
  ScrollTrigger?: ScrollTriggerStatic;
}

// Custom hook for GSAP animations
export function useGSAP(
  callback: (gsap: GSAPStatic, ScrollTrigger?: ScrollTriggerStatic) => void | (() => void),
  dependencies: unknown[] = []
) {
  const containerRef = useRef<HTMLElement>(null);
  const contextRef = useRef<{ revert: () => void } | null>(null);

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
          // Call the animation callback with properly typed gsap and ScrollTrigger
          cleanup = callback(gsap as GSAPStatic, ScrollTrigger as ScrollTriggerStatic);
        }, containerRef.current || undefined);

      } catch (error) {
        console.error('Failed to load GSAP:', error);
        
        // Fallback: Try global GSAP if dynamic import fails
        if (typeof window !== 'undefined' && (window as WindowWithGSAP).gsap) {
          const gsap = (window as WindowWithGSAP).gsap!;
          const ScrollTrigger = (window as WindowWithGSAP).ScrollTrigger;
          
          if (ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
          }

          contextRef.current = gsap.context(() => {
            if (ScrollTrigger) {
              cleanup = callback(gsap, ScrollTrigger);
            }
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