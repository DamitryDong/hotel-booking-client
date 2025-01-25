/* eslint-disable */

// disable lint because gsap keep getting error IDK why.

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedLayout({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const effect = gsap.context(() => {
      gsap.fromTo(containerRef.current, { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', duration: 1, ease: 'power3.out' });
    });

    return () => effect.revert();
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
