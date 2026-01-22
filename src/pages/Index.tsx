import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [calcData, setCalcData] = useState({
    serviceType: '',
    area: '',
    floors: '1',
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const services = [
    {
      title: 'Жилищное строительство',
      description: 'Проектирование и строительство жилых комплексов, коттеджей, таунхаусов',
      icon: 'Home',
    },
    {
      title: 'Коммерческая недвижимость',
      description: 'Офисные здания, торговые центры, складские комплексы',
      icon: 'Building2',
    },
    {
      title: 'Промышленные объекты',
      description: 'Заводы, производственные цеха, логистические центры',
      icon: 'Factory',
    },
    {
      title: 'Реконструкция и ремонт',
      description: 'Капитальный ремонт, модернизация существующих зданий',
      icon: 'Wrench',
    },
  ];

  const projects = [
    {
      title: 'ЖК "Современный"',
      type: 'Жилой комплекс',
      area: '12,000 м²',
      image: 'https://cdn.poehali.dev/projects/13623b61-40b2-4912-ab6c-b1a942c86c50/files/72482b69-ffd7-404a-a452-299fb88ac5e3.jpg',
    },
    {
      title: 'Бизнес-центр "Сити"',
      type: 'Офисное здание',
      area: '8,500 м²',
      image: 'https://cdn.poehali.dev/projects/13623b61-40b2-4912-ab6c-b1a942c86c50/files/8450348d-4c56-4e05-a4ec-72ab4bfecbbe.jpg',
    },
    {
      title: 'Элитный коттедж',
      type: 'Загородная недвижимость',
      area: '450 м²',
      image: 'https://cdn.poehali.dev/projects/13623b61-40b2-4912-ab6c-b1a942c86c50/files/f2b4591f-1ba6-4d75-b6ad-26c0d8429c4d.jpg',
    },
  ];

  const calculatePrice = () => {
    if (!calcData.serviceType || !calcData.area) return;

    const baseRates: Record<string, number> = {
      residential: 45000,
      commercial: 55000,
      industrial: 40000,
      renovation: 25000,
    };

    const basePrice = baseRates[calcData.serviceType] || 45000;
    const area = parseFloat(calcData.area);
    const floors = parseInt(calcData.floors);
    
    const floorMultiplier = floors > 1 ? 1 + (floors - 1) * 0.1 : 1;
    const totalPrice = basePrice * area * floorMultiplier;

    setCalculatedPrice(totalPrice);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-sm shadow-md">
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
              <button onClick={() => scrollToSection('services')} className="text-secondary-foreground hover:text-primary transition-colors font-semibold">
                Услуги
              </button>
              <button onClick={() => scrollToSection('calculator')} className="text-secondary-foreground hover:text-primary transition-colors font-semibold">
                Калькулятор
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-secondary-foreground hover:text-primary transition-colors font-semibold">
                Портфолио
              </button>
              <button onClick={() => scrollToSection('about')} className="text-secondary-foreground hover:text-primary transition-colors font-semibold">
                О компании
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-secondary-foreground hover:text-primary transition-colors font-semibold">
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

      <section className="relative min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/90 to-primary/80 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://cdn.poehali.dev/projects/13623b61-40b2-4912-ab6c-b1a942c86c50/files/72482b69-ffd7-404a-a452-299fb88ac5e3.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Строим будущее<br />с надёжностью
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-95">
            Полный цикл строительства от проектирования до сдачи объекта
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

      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для любых строительных задач
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Калькулятор стоимости</h2>
              <p className="text-xl text-muted-foreground">
                Рассчитайте примерную стоимость строительства за 1 минуту
              </p>
            </div>
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Параметры строительства</CardTitle>
                <CardDescription>Заполните данные для расчёта</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="service-type">Тип услуги</Label>
                  <Select value={calcData.serviceType} onValueChange={(value) => setCalcData({ ...calcData, serviceType: value })}>
                    <SelectTrigger id="service-type">
                      <SelectValue placeholder="Выберите тип услуги" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Жилищное строительство</SelectItem>
                      <SelectItem value="commercial">Коммерческая недвижимость</SelectItem>
                      <SelectItem value="industrial">Промышленные объекты</SelectItem>
                      <SelectItem value="renovation">Реконструкция и ремонт</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="area">Площадь (м²)</Label>
                    <Input
                      id="area"
                      type="number"
                      placeholder="Введите площадь"
                      value={calcData.area}
                      onChange={(e) => setCalcData({ ...calcData, area: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="floors">Количество этажей</Label>
                    <Select value={calcData.floors} onValueChange={(value) => setCalcData({ ...calcData, floors: value })}>
                      <SelectTrigger id="floors">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 этаж</SelectItem>
                        <SelectItem value="2">2 этажа</SelectItem>
                        <SelectItem value="3">3 этажа</SelectItem>
                        <SelectItem value="4">4 этажа</SelectItem>
                        <SelectItem value="5">5+ этажей</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button onClick={calculatePrice} size="lg" className="w-full text-lg">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>

                {calculatedPrice !== null && (
                  <div className="mt-6 p-6 bg-primary/5 border-2 border-primary rounded-lg animate-fade-in">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Примерная стоимость строительства:</p>
                      <p className="text-4xl font-bold text-primary">
                        {calculatedPrice.toLocaleString('ru-RU')} ₽
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        * Окончательная стоимость определяется после выезда специалиста на объект
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши проекты</h2>
            <p className="text-xl text-muted-foreground">
              Реализованные объекты различной сложности
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="space-y-1">
                    <p className="flex items-center gap-2">
                      <Icon name="Building" size={16} />
                      {project.type}
                    </p>
                    <p className="flex items-center gap-2">
                      <Icon name="Maximize" size={16} />
                      {project.area}
                    </p>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="company" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="company">О компании</TabsTrigger>
                <TabsTrigger value="advantages">Преимущества</TabsTrigger>
                <TabsTrigger value="team">Команда</TabsTrigger>
              </TabsList>
              <TabsContent value="company" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">М3 — Инжиниринговая компания</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-lg">
                    <p>
                      Компания М3 специализируется на проектировании, строительстве и реконструкции объектов различного назначения.
                    </p>
                    <p>
                      С 2005 года мы реализовали более 250 проектов общей площадью свыше 1,5 млн м². 
                      Наша команда состоит из высококвалифицированных специалистов с многолетним опытом работы.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t">
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary mb-2">250+</p>
                        <p className="text-muted-foreground">Реализованных проектов</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary mb-2">18</p>
                        <p className="text-muted-foreground">Лет на рынке</p>
                      </div>
                      <div className="text-center">
                        <p className="text-4xl font-bold text-primary mb-2">98%</p>
                        <p className="text-muted-foreground">Довольных клиентов</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="advantages" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Почему выбирают нас</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Shield" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Гарантия качества</h3>
                        <p className="text-muted-foreground">Предоставляем расширенную гарантию на все виды работ и используемые материалы</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Clock" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Соблюдение сроков</h3>
                        <p className="text-muted-foreground">Чёткое планирование и контроль на всех этапах строительства</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Award" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Профессионализм</h3>
                        <p className="text-muted-foreground">Команда сертифицированных специалистов с богатым опытом</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name="Wallet" size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Прозрачное ценообразование</h3>
                        <p className="text-muted-foreground">Детальная смета, никаких скрытых платежей</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="team" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">Наша команда</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-lg">
                      В компании М3 работают более 150 специалистов различных направлений:
                    </p>
                    <ul className="space-y-3 text-lg">
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <span>Архитекторы и проектировщики с опытом работы от 10 лет</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <span>Инженеры-конструкторы и сметчики</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <span>Бригады строителей с профильным образованием</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={24} className="text-primary flex-shrink-0 mt-1" />
                        <span>Специалисты по контролю качества на каждом этапе</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
              <p className="text-xl opacity-90">
                Свяжитесь с нами удобным способом
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Офис компании</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Адрес:</p>
                      <p className="text-muted-foreground">г. Москва, ул. Строительная, д. 15</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Телефон:</p>
                      <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Email:</p>
                      <p className="text-muted-foreground">info@m3-construction.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold mb-1">Режим работы:</p>
                      <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br />Сб-Вс: выходной</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle>Остались вопросы?</CardTitle>
                  <CardDescription>Оставьте заявку, и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Сообщение</Label>
                    <Input id="message" placeholder="Интересует строительство..." />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/80 text-secondary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/projects/13623b61-40b2-4912-ab6c-b1a942c86c50/bucket/10711554-2dac-472c-a9a2-fd42087f5a42.png" 
                alt="М3" 
                className="h-10 w-auto"
              />
              <p className="text-sm opacity-80">© 2024 М3 Инжиниринговая компания. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-secondary-foreground hover:text-primary">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
