import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
     const [isHovering, setIsHovering] = useState(false);
     const [isVisible, setIsVisible] = useState(false);

     useEffect(() => {
          const updateMousePosition = (e: MouseEvent) => {
               setMousePosition({ x: e.clientX, y: e.clientY });
               if (!isVisible) setIsVisible(true);
          };

          const handleMouseLeave = () => setIsVisible(false);
          const handleMouseEnter = () => setIsVisible(true);

          const handleElementHover = () => setIsHovering(true);
          const handleElementLeave = () => setIsHovering(false);

          window.addEventListener("mousemove", updateMousePosition);
          document.addEventListener("mouseleave", handleMouseLeave);
          document.addEventListener("mouseenter", handleMouseEnter);

          // Add listeners to all interactive elements
          const setupInteractiveElements = () => {
               const interactiveElements = document.querySelectorAll(
                    'a, button, input, textarea, select, [role="button"], .cursor-pointer, .cursor-crosshair'
               );

               interactiveElements.forEach((el) => {
                    el.addEventListener("mouseenter", handleElementHover);
                    el.addEventListener("mouseleave", handleElementLeave);
               });
          };

          // Initial setup
          setupInteractiveElements();

          // Setup MutationObserver to handle dynamically added elements (like routes changing)
          const observer = new MutationObserver((mutations) => {
               mutations.forEach((mutation) => {
                    if (mutation.addedNodes.length > 0) {
                         setupInteractiveElements();
                    }
               });
          });

          observer.observe(document.body, {
               childList: true,
               subtree: true,
          });

          return () => {
               window.removeEventListener("mousemove", updateMousePosition);
               document.removeEventListener("mouseleave", handleMouseLeave);
               document.removeEventListener("mouseenter", handleMouseEnter);

               const interactiveElements = document.querySelectorAll(
                    'a, button, input, textarea, select, [role="button"], .cursor-pointer, .cursor-crosshair'
               );
               interactiveElements.forEach((el) => {
                    el.removeEventListener("mouseenter", handleElementHover);
                    el.removeEventListener("mouseleave", handleElementLeave);
               });
               observer.disconnect();
          };
     }, [isVisible]);

     if (!isVisible) return null;

     return (
          <>
               {/* Inner Dot */}
               <motion.div
                    className="fixed top-0 left-0 w-2 h-2 bg-accent rounded-full pointer-events-none z-[9999] mix-blend-exclusion hidden md:block"
                    animate={{
                         x: mousePosition.x - 4,
                         y: mousePosition.y - 4,
                         scale: isHovering ? 0 : 1,
                    }}
                    transition={{
                         type: "tween",
                         ease: "backOut",
                         duration: 0.1,
                    }}
               />

               {/* Outer Reactive Ring */}
               <motion.div
                    className="fixed top-0 left-0 w-8 h-8 border border-accent/50 rounded-full pointer-events-none z-[9998] hidden md:flex items-center justify-center mix-blend-exclusion"
                    animate={{
                         x: mousePosition.x - 16,
                         y: mousePosition.y - 16,
                         scale: isHovering ? 1.5 : 1,
                         backgroundColor: isHovering ? "hsl(var(--accent) / 0.1)" : "transparent",
                         borderColor: isHovering ? "hsl(var(--accent) / 0.8)" : "hsl(var(--accent) / 0.4)",
                    }}
                    transition={{
                         type: "spring",
                         stiffness: 150,
                         damping: 15,
                         mass: 0.5,
                    }}
               />
          </>
     );
};
