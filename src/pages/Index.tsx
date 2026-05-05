import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import LogoTicker from '@/components/sections/LogoTicker';
import WhoWeWorkWith from '@/components/sections/WhoWeWorkWith';
import WhatWeSolve from '@/components/sections/WhatWeSolve';
import HowWeWork from '@/components/sections/HowWeWork';
import ClientResults from '@/components/sections/ClientResults';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';
import SEO from '@/components/SEO';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO />
      <Header />
      <Hero />
      <LogoTicker />
      <WhoWeWorkWith />
      <WhatWeSolve />
      <HowWeWork />
      <ClientResults />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
