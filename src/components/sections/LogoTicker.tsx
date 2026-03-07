import { motion } from 'framer-motion';

const enterpriseLogos = [
     "7-PERSON FREIGHT TEAM IN GUJARAT: +24% MARGIN",
     "MIDWEST MANUFACTURING FIRM: -41% DOWNTIME",
     "GLOBAL SUPPLY CHAIN CO-OP: 480% ROI",
     "NATIONAL ENERGY PROVIDER: AUTONOMOUS GRID",
     "EU FREIGHT FORWARDER: +87% CAPACITY",
     "TIER-1 HEAVY INDUSTRIES: ZERO LEAKAGE"
];

// We triple the array to ensure flawless infinite infinite scrolling without visual gaps
const repeatedLogos = [...enterpriseLogos, ...enterpriseLogos, ...enterpriseLogos];

const LogoTicker = () => {
     return (
          <div className="w-full bg-background border-b border-border py-6 overflow-hidden relative">
               <div className="container mx-auto px-6 lg:px-12 pb-4">
                    <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest text-center">
                         &gt; Trusted by tier-one operational infrastructures delivering hard ROI metrics:
                    </p>
               </div>

               {/* Fade Overlays */}
               <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
               <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

               <motion.div
                    animate={{ x: [0, -2000] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
                    className="flex whitespace-nowrap items-center w-fit"
               >
                    {repeatedLogos.map((logo, i) => (
                         <div key={i} className="flex items-center mx-12 opacity-40 hover:opacity-100 transition-opacity cursor-default grayscale">
                              {/* Adding a small dot icon between words for tech aesthetic */}
                              <span className="w-1.5 h-1.5 rounded-full bg-accent/50 mr-3" />
                              <span className="font-display font-bold text-foreground text-xl md:text-2xl tracking-[0.2em] whitespace-nowrap">
                                   {logo}
                              </span>
                         </div>
                    ))}
               </motion.div>
          </div>
     );
};

export default LogoTicker;
