import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="https://cdn.poehali.dev/projects/13623b61-40b2-4912-ab6c-b1a942c86c50/bucket/10711554-2dac-472c-a9a2-fd42087f5a42.png" 
              alt="М3 Строительная компания" 
              className="h-12 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Услуги
            </button>
            <button onClick={() => scrollToSection('calculator')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Калькулятор
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Портфолио
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-semibold">
              О компании
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Контакты
            </button>
          </nav>
          <div className="flex items-center gap-2">
            <Button className="hidden md:inline-flex">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <nav className="flex flex-col gap-6 mt-8">
                  <button 
                    onClick={() => handleNavClick('services')} 
                    className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 border-b"
                  >
                    Услуги
                  </button>
                  <button 
                    onClick={() => handleNavClick('calculator')} 
                    className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 border-b"
                  >
                    Калькулятор
                  </button>
                  <button 
                    onClick={() => handleNavClick('portfolio')} 
                    className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 border-b"
                  >
                    Портфолио
                  </button>
                  <button 
                    onClick={() => handleNavClick('about')} 
                    className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 border-b"
                  >
                    О компании
                  </button>
                  <button 
                    onClick={() => handleNavClick('contacts')} 
                    className="text-left text-lg font-semibold text-foreground hover:text-primary transition-colors py-2 border-b"
                  >
                    Контакты
                  </button>
                  <Button className="w-full mt-4">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Заказать звонок
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;