import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const CalculatorSection = () => {
  const [calcData, setCalcData] = useState({
    objectType: '',
    area: '',
    floors: '1',
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    if (!calcData.objectType || !calcData.area) return;

    const baseRates: Record<string, number> = {
      apartment: 35000,
      cottage: 50000,
      office: 45000,
      shop: 40000,
      industrial: 38000,
    };

    const basePrice = baseRates[calcData.objectType] || 40000;
    const area = parseFloat(calcData.area);
    const floors = parseInt(calcData.floors);
    
    const floorMultiplier = floors > 1 ? 1 + (floors - 1) * 0.1 : 1;
    const totalPrice = basePrice * area * floorMultiplier;

    setCalculatedPrice(totalPrice);
  };

  return (
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
                <Label htmlFor="object-type">Тип объекта</Label>
                <Select value={calcData.objectType} onValueChange={(value) => setCalcData({ ...calcData, objectType: value })}>
                  <SelectTrigger id="object-type">
                    <SelectValue placeholder="Выберите тип объекта" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Квартира</SelectItem>
                    <SelectItem value="cottage">Коттедж</SelectItem>
                    <SelectItem value="office">Коммерческий офис</SelectItem>
                    <SelectItem value="shop">Магазин</SelectItem>
                    <SelectItem value="industrial">Промышленный объект</SelectItem>
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
                <div className="mt-6 space-y-4 animate-fade-in">
                  <p className="text-center text-lg font-semibold mb-4">Выберите подходящий вариант:</p>
                  
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Эконом</CardTitle>
                        <span className="text-2xl font-bold text-primary">
                          {(calculatedPrice * 0.7 * 0.925).toLocaleString('ru-RU')} ₽ — {(calculatedPrice * 0.7 * 1.075).toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Простая отделка помещений</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Покраска стен стандартными материалами</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Монтаж базовых конструкций</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Замена напольного покрытия (ламинат)</span>
                        </li>
                      </ul>
                      <Button className="w-full" variant="outline">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Выбрать Эконом
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Комфорт</CardTitle>
                        <span className="text-2xl font-bold text-primary">
                          {(calculatedPrice * 0.925).toLocaleString('ru-RU')} ₽ — {(calculatedPrice * 1.075).toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Качественная отделка с улучшенными материалами</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Декоративная покраска стен, обои премиум-класса</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Монтаж усиленных конструкций</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Паркетная доска или качественный ламинат</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Консультация дизайнера</span>
                        </li>
                      </ul>
                      <Button className="w-full">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Выбрать Комфорт
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">Дизайнерский проект</CardTitle>
                        <span className="text-2xl font-bold text-primary">
                          {(calculatedPrice * 1.5 * 0.925).toLocaleString('ru-RU')} ₽ — {(calculatedPrice * 1.5 * 1.075).toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Эксклюзивная отделка премиум-материалами</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Авторские решения по покраске и декору</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Индивидуальное проектирование конструкций</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Натуральный паркет или эксклюзивное покрытие</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Icon name="CheckCircle2" size={16} className="text-primary flex-shrink-0 mt-0.5" />
                          <span>Полное сопровождение дизайнера и 3D-визуализация</span>
                        </li>
                      </ul>
                      <Button className="w-full">
                        <Icon name="ShoppingCart" size={18} className="mr-2" />
                        Выбрать Дизайнерский
                      </Button>
                    </CardContent>
                  </Card>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    * Окончательная стоимость определяется после выезда специалиста на объект
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;