import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PropTypes from 'prop-types'; // Make sure to import from prop-types directly

export default function SlideInRight({ children, trigger, stagDur = 0.4, delayDur = 0.7, repeatTrig }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const effect = gsap.context(() => {
      gsap.fromTo(containerRef.current.children, { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 1.2, ease: 'power3.out', stagger: stagDur, delay: delayDur });
    });

    return () => effect.revert();
  }, [trigger, repeatTrig]);

  return <div ref={containerRef}>{children}</div>;
}

// Corrected propTypes
SlideInRight.propTypes = {
  children: PropTypes.node.isRequired,
  trigger: PropTypes.string,
  stagDur: PropTypes.number,
  delayDur: PropTypes.number,
  repeatTrig: PropTypes.string,
};
