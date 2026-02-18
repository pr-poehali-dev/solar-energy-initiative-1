import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import Icon from "@/components/ui/icon"

export function NextGenSection() {
  return (
    <section id="advantages" className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-4">Почему выбирают нас</h2>
      <p className="text-muted-foreground max-w-2xl mb-12">
        Комплексный подход к электромонтажу: от проектирования до сдачи объекта. Работаем по ГОСТам и СНиПам с полным соблюдением норм безопасности.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Card className="bg-card/80 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="ClipboardList" size={18} className="text-primary" /> Этапы работы
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <StageItem label="Выезд и замер" value={100} />
            <StageItem label="Проектирование" value={100} />
            <StageItem label="Монтаж" value={75} />
            <StageItem label="Проверка и сдача" value={40} />
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Shield" size={18} className="text-primary" /> Безопасность
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <SafetyItem text="Сертифицированные материалы" />
              <SafetyItem text="Лицензированные специалисты" />
              <SafetyItem text="Соответствие ПУЭ и ГОСТ" />
              <SafetyItem text="Страхование объектов" />
              <SafetyItem text="Гарантия до 5 лет" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="BarChart3" size={18} className="text-primary" /> Наш опыт
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <ExperienceItem label="Квартиры" count="1 200+" />
              <ExperienceItem label="Частные дома" count="580+" />
              <ExperienceItem label="Офисы и магазины" count="350+" />
              <ExperienceItem label="Промышленные объекты" count="120+" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Lightbulb" size={18} className="text-primary" /> Освещение
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <SafetyItem text="Дизайнерское освещение" />
              <SafetyItem text="LED и умный свет" />
              <SafetyItem text="Ландшафтная подсветка" />
              <SafetyItem text="Аварийное освещение" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/80 border-border/40">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Icon name="Plug" size={18} className="text-primary" /> Электроснабжение
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <SafetyItem text="Ввод электричества в дом" />
              <SafetyItem text="Установка щитов и автоматов" />
              <SafetyItem text="Подключение генераторов" />
              <SafetyItem text="Стабилизаторы напряжения" />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

interface StageItemProps {
  label: string
  value: number
}

function StageItem({ label, value }: StageItemProps) {
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-sm">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <Progress value={value} className="h-2 bg-muted/30" />
    </div>
  )
}

function SafetyItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
      <span>{text}</span>
    </div>
  )
}

function ExperienceItem({ label, count }: { label: string; count: string }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold">{count}</span>
    </div>
  )
}