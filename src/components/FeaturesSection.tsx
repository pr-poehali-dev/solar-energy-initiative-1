import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function FeaturesSection() {
  return (
    <section id="services" className="container max-w-screen-xl py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Наши услуги</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <FeatureCard
          icon="Home"
          title="Электромонтаж в квартирах и домах"
          description="Полная разводка электрики, замена проводки, установка щитков, розеток и выключателей."
        />
        <FeatureCard
          icon="Building2"
          title="Электрика для бизнеса"
          description="Монтаж электросетей в офисах, магазинах и на производстве. Проектирование и сдача под ключ."
        />
        <FeatureCard
          icon="Wrench"
          title="Ремонт и обслуживание"
          description="Диагностика неисправностей, замена автоматов, ремонт проводки и аварийный выезд."
        />
        <FeatureCard
          icon="FlaskConical"
          title="Электролаборатория"
          description="Услуги электролаборатории в Мурманске. Испытания и измерения электроустановок до 1000 вольт."
        />
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: string
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-accent/50 border-dashed border-border/60">
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
            <Icon name={icon} size={20} className="text-primary" />
          </span>
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}