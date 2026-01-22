import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainSections from '@/components/MainSections';
import CalculatorSection from '@/components/CalculatorSection';
import ContactsFooter from '@/components/ContactsFooter';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header scrollToSection={scrollToSection} />
      <HeroSection />
      <MainSections />
      <CalculatorSection />
      <ContactsFooter />
    </div>
  );
};

export default Index;
