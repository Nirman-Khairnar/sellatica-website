import { motion } from 'framer-motion';

const partners = [
  { name: 'OpenAI', src: '/logos/openai.svg' },
  { name: 'AWS', src: '/logos/aws.svg' },
  { name: 'Google Cloud', src: '/logos/gcp.svg' },
  { name: 'Make', src: '/logos/make.svg' },
  { name: 'Oracle', src: '/logos/oracle.svg' },
  { name: 'Zapier', src: '/logos/zapier.svg' },
  { name: 'n8n', src: '/logos/n8n.svg' },
  { name: 'Razorpay', src: '/logos/razorpay.svg' },
  { name: 'Anthropic', src: '/logos/anthropic.svg', mask: true, hoverColor: 'group-hover:bg-[#D97757]' }
];

// Double the array to ensure perfect "-50%" sliding math for infinite loop
const repeatedPartners = [...partners, ...partners];

const LogoTicker = () => {
  return (
    <div className="w-full bg-background border-b border-border py-8 overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 pb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest text-center">
          &gt; Trusted ecosystem partners and integrations:
        </p>
      </div>

      {/* Fade Overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* The Ticker Track */}
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
        className="flex items-center w-max"
      >
        {repeatedPartners.map((partner, i) => (
          <div 
            key={i} 
            className="flex items-center justify-center mx-10 md:mx-16 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group cursor-default"
          >
            {partner.mask ? (
              <div 
                className={`h-8 md:h-10 w-48 bg-foreground/60 transition-colors duration-300 ${partner.hoverColor}`}
                style={{ 
                  WebkitMaskImage: `url('${partner.src}')`, 
                  WebkitMaskSize: 'contain', 
                  WebkitMaskRepeat: 'no-repeat', 
                  WebkitMaskPosition: 'center', 
                  maskImage: `url('${partner.src}')`, 
                  maskSize: 'contain', 
                  maskRepeat: 'no-repeat', 
                  maskPosition: 'center' 
                }}
              />
            ) : (
              <img 
                src={partner.src} 
                alt={`${partner.name} logo`} 
                className="h-10 md:h-12 object-contain"
              />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoTicker;
