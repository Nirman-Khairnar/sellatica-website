import { motion } from 'framer-motion';
import { 
  OpenAI, 
  Aws, 
  GoogleCloud, 
  Make, 
  Zapier, 
  N8n, 
  Anthropic 
} from '@lobehub/icons';

const partners = [
  { 
    name: 'OpenAI', 
    component: <OpenAI.Combine size={40} /> 
  },
  { 
    name: 'AWS', 
    component: <Aws.Color size={40} /> 
  },
  { 
    name: 'Google Cloud', 
    component: <GoogleCloud.Color size={40} /> 
  },
  { 
    name: 'Make', 
    component: <Make.Combine size={40} type={'color'} /> 
  },
  { 
    name: 'Oracle', 
    src: '/logos/oracle.svg', 
    mask: true, 
    hoverColor: 'group-hover:bg-[#f80000]' 
  },
  { 
    name: 'Zapier', 
    component: <Zapier.Combine size={40} type={'color'} /> 
  },
  { 
    name: 'n8n', 
    component: <N8n.Color size={40} /> 
  },
  { 
    name: 'Razorpay', 
    src: '/logos/razorpay.svg', 
    mask: true, 
    hoverColor: 'group-hover:bg-[#3395ff]' 
  },
  { 
    name: 'Anthropic', 
    component: <Anthropic.Combine size={40} /> 
  }
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
            {partner.component ? (
              <div className="h-10 md:h-12 flex items-center justify-center">
                {partner.component}
              </div>
            ) : partner.mask ? (
              <div 
                className={`h-8 md:h-10 w-40 bg-foreground/60 transition-colors duration-300 ${partner.hoverColor}`}
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
