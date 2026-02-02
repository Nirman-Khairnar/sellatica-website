import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Services from '@/components/sections/Services';
import Results from '@/components/sections/Results';
import Process from '@/components/sections/Process';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/sections/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Results />
      <Process />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
