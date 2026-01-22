import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

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

const MainSections = () => {
  return (
    <>
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
    </>
  );
};

export default MainSections;
