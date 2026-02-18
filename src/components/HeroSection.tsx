import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="container max-w-screen-xl py-20 text-center">
      <div className="flex justify-center mb-6">
        <Badge variant="outline" className="px-4 py-1 text-sm rounded-full border-neutral-700">
          <Icon name="ShieldCheck" size={14} className="mr-1" />
          Лицензированная компания · Гарантия до 5 лет
        </Badge>
      </div>
      <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl mb-6">
        Профессиональный
        <br />
        электромонтаж для вашего
        <br />
        дома и бизнеса
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground mb-8">
        Мы предоставляем полный спектр услуг по монтажу и ремонту электрических систем с гарантией качества.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8">
          <Icon name="FileText" size={18} className="mr-2" />
          Оставить заявку
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          <Icon name="MessageCircle" size={18} className="mr-2" />
          Получить консультацию
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          <Icon name="Phone" size={18} className="mr-2" />
          Позвонить
        </Button>
      </div>
    </section>
  )
}
