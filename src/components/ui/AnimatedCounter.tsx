import { useEffect, useState, useRef, forwardRef } from 'react';
import { useInView } from 'framer-motion';

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
  // Initialise to `end` so prerendered/static HTML always shows the real value.
  // The animation counts from 0→end once the element enters the viewport; the
  // first requestAnimationFrame fires before the next paint so there is no
  // visible flash of the end value before the counter starts.
  const [count, setCount] = useState(end);
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
        
        // On the first frame progress ≈ 0, so this naturally starts from ~0
        // without a separate setCount(0) call that would cause a flash.
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
