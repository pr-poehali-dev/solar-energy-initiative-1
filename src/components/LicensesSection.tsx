import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

const licenses = [
  {
    title: "Лицензия на электромонтажные работы",
    description: "Выдана Ростехнадзором, действует бессрочно",
    image: "https://cdn.poehali.dev/projects/c928aad2-3861-4441-b968-365943f97160/files/8d8c3816-d663-40de-b305-b8696773791b.jpg",
  },
  {
    title: "Сертификат соответствия",
    description: "Подтверждает соответствие работ ГОСТ и ПУЭ",
    image: "https://cdn.poehali.dev/projects/c928aad2-3861-4441-b968-365943f97160/files/b5bdf0e0-0fcc-4394-9c70-57c9e588cd35.jpg",
  },
  {
    title: "Допуск СРО",
    description: "Членство в саморегулируемой организации строителей",
    image: "https://cdn.poehali.dev/projects/c928aad2-3861-4441-b968-365943f97160/files/3314e66f-f0f2-4f84-a217-720ed15f04be.jpg",
  },
]

export function LicensesSection() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-4 text-center">Наши лицензии</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Все работы выполняются на основании действующих лицензий и допусков. Документы предоставляем по запросу.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {licenses.map((license, i) => (
          <Card
            key={i}
            className="bg-card/50 border-border/40 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            onClick={() => setSelected(i)}
          >
            <CardContent className="pt-6">
              <div className="aspect-[3/4] rounded-md overflow-hidden mb-4 bg-accent/20">
                <img
                  src={license.image}
                  alt={license.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-start gap-2">
                <Icon name="ShieldCheck" size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-sm">{license.title}</div>
                  <div className="text-xs text-muted-foreground mt-1">{license.description}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={selected !== null} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-2xl">
          <DialogTitle>
            {selected !== null && licenses[selected].title}
          </DialogTitle>
          {selected !== null && (
            <img
              src={licenses[selected].image}
              alt={licenses[selected].title}
              className="w-full rounded-md"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
