import Icon from "@/components/ui/icon"

const highlights = [
  { icon: "Lightbulb", text: "От идеи до ввода в эксплуатацию" },
  { icon: "FileCheck", text: "Полный пакет документации" },
  { icon: "Handshake", text: "Удобная форма сотрудничества" },
  { icon: "Building2", text: "Объекты любого назначения" },
  { icon: "ShieldCheck", text: "Гарантия качества и безопасности" },
  { icon: "Clock", text: "Соблюдение сроков" },
]

export function AboutSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-base text-primary font-semibold mb-3 uppercase tracking-wider">О компании</p>
          <h2 className="text-4xl font-bold mb-6">ООО «СК Пересвет»</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Осуществляем работы различного масштаба и объёма на всех этапах процесса — от идеи и разработки проекта до ввода объекта в эксплуатацию. Мы предоставляем партнёрам возможность выбирать наиболее удобную форму сотрудничества.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-5">
            Наши специалисты выполняют работы на объектах любого назначения и сложности, а также разрабатывают полный пакет технической и исполнительной документации.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Проектная документация создаётся с учётом всех потребностей Заказчика и сопровождается на всех этапах реализации. Многолетний опыт позволяет нам браться за объекты любой сложности — от квартир до промышленных предприятий.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-5 rounded-xl bg-card/80 border border-border/40"
            >
              <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                <Icon name={item.icon} size={26} className="text-primary" />
              </div>
              <span className="text-base font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
