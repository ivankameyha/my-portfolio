import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import DemosSection from './components/DemosSection';
import PricingSection from './components/PlansPricing';
import CustomSolutionsSection from './components/CustomSolutions';
import TestimonialsSection from './components/Testimonials';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <PricingSection />
      <DemosSection />
      <CustomSolutionsSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}