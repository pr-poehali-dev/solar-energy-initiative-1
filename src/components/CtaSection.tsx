import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { LeadFormButton } from "@/components/LeadForm"

export function CtaSection() {
  return (
    <section className="container max-w-screen-xl py-24 text-center">
      <div className="flex justify-center mb-6">
        <Icon name="Zap" size={48} className="text-primary" />
      </div>
      <h2 className="text-3xl font-bold mb-4">Нужен электромонтаж?</h2>
      <p className="text-muted-foreground max-w-xl mx-auto mb-8">
        Оставьте заявку — мы перезвоним в течение 15 минут, приедем на объект и составим смету бесплатно.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <LeadFormButton size="lg" className="px-8">
          <Icon name="FileText" size={18} className="mr-2" />
          Оставить заявку
        </LeadFormButton>
        <Button size="lg" variant="outline" className="px-8" asChild>
          <a href="tel:+79270466555">
            <Icon name="Phone" size={18} className="mr-2" />
            8 (927) 046-65-55
          </a>
        </Button>
      </div>
    </section>
  )
}