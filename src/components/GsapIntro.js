/* eslint-disable */

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function IntroduceTeam() {
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the letters with a staggered typing effect Found this stagger effect from GSAP template
    gsap.fromTo(
      textRef.current.children,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
      },
    );
  }, []);

  return (
    <div
      ref={textRef}
      style={{
        fontSize: '1rem',
        gap: '2px',
      }}
    >
      {/* Render each letter as a separate span for each line, couldn't find another way to line split*/}
      {'Frontender: Damitry Dong, Tyler Davenport'.split('').map((letter, index) => (
        <span key={`line1-${index}`} style={{ display: 'inline-block' }}>
          {letter}
        </span>
      ))}
      <br /> {/* So I added the line break here with returns and this will load seperately */}
      {'Backender: Brooks West, Melissa Carter, Trevor Mustoe'.split('').map((letter, index) => (
        <span key={`line2-${index}`} style={{ display: 'inline-block' }}>
          {letter}
        </span>
      ))}
    </div>
  );
}
