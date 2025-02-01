/* eslint-disable */

// Disable lint because GSAP keeps getting errors

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedLayout({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const effect = gsap.context(() => {
      gsap.fromTo(containerRef.current.children, { opacity: 0, y: 20, filter: 'blur(5px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out', stagger: 0.2 });
    });

    return () => effect.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
