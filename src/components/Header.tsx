import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header = ({ scrollToSection }: HeaderProps) => {
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
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-semibold">
              О компании
            </button>
            <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-semibold">
              Контакты
            </button>
          </nav>
          <Button className="hidden md:inline-flex">
            <Icon name="Phone" size={20} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;