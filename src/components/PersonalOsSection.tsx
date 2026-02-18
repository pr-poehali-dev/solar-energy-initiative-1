import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function PersonalOsSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Комплексный подход
            <br />
            к каждому объекту
          </h2>
          <p className="text-muted-foreground mb-8">
            От проектирования до финальной проверки — мы берём на себя все этапы электромонтажа, чтобы вы получили надёжную и безопасную электросистему.
          </p>

          <Card className="bg-card/50 border-border/40 mb-6">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <Icon name="Zap" size={16} className="text-yellow-500" />
                Бесплатный выезд на объект
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">Замер, консультация и составление сметы — бесплатно</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureItem icon="FileText" title="Проект электрики" />
            <FeatureItem icon="Cable" title="Прокладка кабелей" />
            <FeatureItem icon="ToggleRight" title="Установка щитков" />
            <FeatureItem icon="Lightbulb" title="Монтаж освещения" />
          </div>
        </div>

        <div className="space-y-6">
          <Card className="bg-card/50 border-border/40">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div> Как мы работаем
              </CardTitle>
            </CardHeader>
            <CardContent className="text-xs font-mono">
              <div className="text-yellow-500 mb-1">→ Заявка или звонок</div>
              <div className="text-muted-foreground mb-1">→ Бесплатный выезд и замер</div>
              <div className="text-muted-foreground mb-1">→ Согласование сметы</div>
              <div className="text-muted-foreground mb-1">→ Выполнение работ</div>
              <div className="text-green-500">→ Проверка и сдача объекта ✓</div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <FeatureCheck icon="Plug" title="Розетки и выключатели" />
            <FeatureCheck icon="CircuitBoard" title="Тёплые полы" />
            <FeatureCheck icon="Wifi" title="Умный дом" />
            <FeatureCheck icon="ShieldCheck" title="Заземление и молниезащита" />
          </div>
        </div>
      </div>
    </section>
  )
}

interface FeatureItemProps {
  icon: string
  title: string
}

function FeatureItem({ icon, title }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
        <Icon name={icon} size={12} className="text-yellow-500" />
      </div>
      <span className="text-sm">{title}</span>
    </div>
  )
}

interface FeatureCheckProps {
  icon: string
  title: string
}

function FeatureCheck({ icon, title }: FeatureCheckProps) {
  return (
    <div className="flex items-center gap-2 bg-accent/50 rounded-md p-2">
      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center">
        <Icon name={icon} size={12} className="text-yellow-500" />
      </div>
      <span className="text-xs">{title}</span>
    </div>
  )
}
