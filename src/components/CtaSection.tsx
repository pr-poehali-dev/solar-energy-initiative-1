import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <div className="flex justify-center mb-6">
        <Icon name="Zap" size={48} className="text-yellow-500" />
      </div>
      <h2 className="text-3xl font-bold mb-4">Нужен электромонтаж?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Оставьте заявку — мы перезвоним в течение 15 минут, приедем на объект и составим смету бесплатно.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button size="lg" className="px-8">
          <Icon name="FileText" size={18} className="mr-2" />
          Оставить заявку
        </Button>
        <Button size="lg" variant="outline" className="px-8">
          <Icon name="Phone" size={18} className="mr-2" />
          8 (800) 123-45-67
        </Button>
      </div>
    </section>
  )
}
