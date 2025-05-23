import { useEffect, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options?: IntersectionObserverOptions
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          currentRef.classList.add('visible');
          if (options?.triggerOnce !== false) { // Default to triggerOnce = true
            observer.unobserve(currentRef);
          }
        } else {
          if (options?.triggerOnce === false) {
            currentRef.classList.remove('visible');
          }
        }
      },
      {
        threshold: options?.threshold || 0.1, // Trigger when 10% of the element is visible
        root: options?.root || null,
        rootMargin: options?.rootMargin || '0px 0px -50px 0px', // Trigger a bit before it's fully in view from bottom
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
} 