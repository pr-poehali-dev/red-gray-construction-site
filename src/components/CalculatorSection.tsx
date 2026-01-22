import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const CalculatorSection = () => {
  const [calcData, setCalcData] = useState({
    serviceType: '',
    area: '',
    floors: '1',
  });

  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

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
  );
};

export default CalculatorSection;
