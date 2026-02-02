import { useEffect, useState, useRef, forwardRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

const AnimatedCounter = forwardRef<HTMLSpanElement, AnimatedCounterProps>(({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '',
  className = '' 
}, forwardedRef) => {
  const [count, setCount] = useState(0);
  const internalRef = useRef<HTMLSpanElement>(null);
  const ref = (forwardedRef as React.RefObject<HTMLSpanElement>) || internalRef;
  const isInView = useInView(internalRef, { once: true, margin: "-50px" });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const animate = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.floor(easeProgress * end));

        if (now < endTime) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span
      ref={internalRef}
      className={className}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
});

AnimatedCounter.displayName = 'AnimatedCounter';

export default AnimatedCounter;
