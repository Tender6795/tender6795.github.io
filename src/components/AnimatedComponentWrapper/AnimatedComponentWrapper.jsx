import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

export const AnimatedComponentWrapper = ({ children }) => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.5,
      });
    
      const fadeIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.8)',
        from: { opacity: 0, transform: 'scale(0.8)' },
        config: { duration: 1000 },
      });
    
      return (
        <div ref={ref}>
          <animated.div style={fadeIn}>{children}</animated.div>
        </div>
      );
  };
