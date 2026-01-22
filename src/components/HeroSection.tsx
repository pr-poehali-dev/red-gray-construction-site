import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/13623b61-40b2-4912-ab6c-b1a942c86c50/files/72482b69-ffd7-404a-a452-299fb88ac5e3.jpg')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-secondary/60 to-primary/60 z-10"></div>
      <div className="container mx-auto px-4 z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Строим будущее<br />с надёжностью
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
          Полный цикл строительства от проектирования до сдачи объекта в эксплуатацию
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
            Наши проекты
          </Button>
          <Button size="lg" variant="outline" className="bg-white text-secondary hover:bg-white/90 border-white text-lg px-8 py-6">
            Рассчитать стоимость
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;