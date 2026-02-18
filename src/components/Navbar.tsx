import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-black/95 backdrop-blur">
      <div className="container flex h-14 max-w-screen-xl items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Icon name="Zap" size={24} className="text-yellow-500" />
            <span className="font-bold">ЭлектроПро</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a href="#services" className="transition-colors hover:text-foreground/80">
              Услуги
            </a>
            <a href="#advantages" className="transition-colors hover:text-foreground/80">
              Преимущества
            </a>
            <a href="#reviews" className="transition-colors hover:text-foreground/80">
              Отзывы
            </a>
            <a href="#faq" className="transition-colors hover:text-foreground/80">
              FAQ
            </a>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <a href="tel:+78001234567" className="text-sm font-medium transition-colors hover:text-foreground/80 flex items-center gap-1">
            <Icon name="Phone" size={14} />
            8 (800) 123-45-67
          </a>
          <Button className="ml-4">
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  )
}
