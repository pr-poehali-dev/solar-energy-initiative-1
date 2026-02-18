import Icon from "@/components/ui/icon"
import { LeadFormButton } from "@/components/LeadForm"

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 bg-card/30">
      <div className="container max-w-screen-xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="Zap" size={24} className="text-yellow-500" />
              <span className="font-bold text-lg">СК Пересвет</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Профессиональный электромонтаж для дома и бизнеса. Работаем в Мурманске и области.
            </p>
            <LeadFormButton variant="outline" size="sm">
              Оставить заявку
            </LeadFormButton>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <div className="space-y-3 text-sm">
              <a href="tel:+79270466555" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Phone" size={16} className="text-yellow-500 flex-shrink-0" />
                8 (927) 046-65-55
              </a>
              <a href="mailto:murmenergy@mail.ru" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Icon name="Mail" size={16} className="text-yellow-500 flex-shrink-0" />
                murmenergy@mail.ru
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="MapPin" size={16} className="text-yellow-500 flex-shrink-0" />
                г. Мурманск, ул. Воровского, д.13, оф. 14
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" size={16} className="text-yellow-500 flex-shrink-0" />
                Пн–Пт: 9:00 – 18:00
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Clock" size={16} className="text-yellow-500 flex-shrink-0" />
                Сб: 10:00 – 15:00
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="PhoneCall" size={16} className="text-yellow-500 flex-shrink-0" />
                Аварийный выезд — круглосуточно
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/40 mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} СК Пересвет. Все права защищены.
        </div>
      </div>
    </footer>
  )
}