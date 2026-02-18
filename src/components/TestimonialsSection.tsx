import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const SCROLL_SPEED = 30

export function TestimonialsSection() {
  const [isHovered, setIsHovered] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollHeight, setScrollHeight] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setScrollHeight(containerRef.current.scrollHeight / 2)
    }
  }, [])

  const testimonials = [
    {
      name: "Андрей Соколов",
      role: "Владелец квартиры",
      quote: "Полностью заменили проводку в трёхкомнатной квартире за 4 дня. Чисто, аккуратно, всё работает идеально. Рекомендую!",
      rating: 5,
    },
    {
      name: "Елена Макарова",
      role: "Дизайнер интерьеров",
      quote: "Постоянно работаю с этой командой на объектах. Всегда точно по проекту, разбираются в современных системах освещения.",
      rating: 5,
    },
    {
      name: "Игорь Петренко",
      role: "Владелец кафе",
      quote: "Делали электрику в новом кафе. Помогли с проектом, подключили всё оборудование. Сдали объект вовремя.",
      rating: 5,
    },
    {
      name: "Ольга Васильева",
      role: "Хозяйка частного дома",
      quote: "Установили щиток, сделали заземление и подключили генератор. Теперь за электричество в доме спокойна.",
      rating: 5,
    },
    {
      name: "Дмитрий Новиков",
      role: "Управляющий ТСЖ",
      quote: "Обслуживают наш жилой комплекс уже 3 года. Оперативно реагируют на вызовы, качество на высоте.",
      rating: 4,
    },
    {
      name: "Марина Козлова",
      role: "Владелица салона красоты",
      quote: "Переделали всю электрику в салоне — добавили розетки, поставили стабилизатор. Оборудование работает без сбоев.",
      rating: 5,
    },
    {
      name: "Сергей Белов",
      role: "Прораб",
      quote: "Как прораб, ценю пунктуальность и качество. Эти ребята не подводят — рекомендую коллегам на стройках.",
      rating: 5,
    },
    {
      name: "Наталья Орлова",
      role: "Владелица магазина",
      quote: "Быстро подключили торговое оборудование и кассы. Помогли пройти проверку пожарной инспекции.",
      rating: 4,
    },
  ]

  return (
    <section id="reviews" className="container max-w-screen-xl py-20 overflow-hidden">
      <h2 className="text-3xl font-bold mb-12 text-center">Отзывы клиентов</h2>

      <div
        className="relative h-[400px] overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={containerRef}
          className="testimonial-scroll"
          style={{
            animationPlayState: isHovered ? "paused" : "running",
            animationDuration: `${SCROLL_SPEED}s`,
            transform: `translateY(-${scrollHeight}px)`,
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i} {...testimonial} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, i) => (
              <TestimonialCard key={i + testimonials.length} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  rating: number
}

function TestimonialCard({ name, role, quote, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-accent/20 border-border/40 transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <CardContent className="pt-6">
        <div className="flex items-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? "fill-yellow-500 text-yellow-500" : "text-muted-foreground"}`}
            />
          ))}
        </div>
        <p className="text-sm mb-4 text-muted-foreground">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-8 w-8">
            <AvatarImage src={`https://i.pravatar.cc/32?u=${name}`} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{name}</div>
            <div className="text-xs text-muted-foreground">{role}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
