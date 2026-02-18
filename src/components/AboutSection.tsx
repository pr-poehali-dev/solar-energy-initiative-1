import Icon from "@/components/ui/icon"

const highlights = [
  { icon: "Lightbulb", text: "От идеи до ввода в эксплуатацию" },
  { icon: "FileCheck", text: "Полный пакет документации" },
  { icon: "Handshake", text: "Удобная форма сотрудничества" },
  { icon: "Building2", text: "Объекты любого назначения" },
]

export function AboutSection() {
  return (
    <section className="container max-w-screen-xl py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm text-yellow-500 font-semibold mb-2 uppercase tracking-wider">О компании</p>
          <h2 className="text-3xl font-bold mb-6">ООО «СК Пересвет»</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Осуществляем работы различного масштаба и объёма на всех этапах процесса — от идеи и разработки проекта до ввода объекта в эксплуатацию. Мы предоставляем партнёрам возможность выбирать наиболее удобную форму сотрудничества.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Наши специалисты выполняют работы на объектах любого назначения и сложности, а также разрабатывают полный пакет технической и исполнительной документации. Проектная документация создаётся с учётом всех потребностей Заказчика и сопровождается на всех этапах реализации.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/40"
            >
              <div className="p-2 rounded-lg bg-yellow-500/10">
                <Icon name={item.icon} size={20} className="text-yellow-500" />
              </div>
              <span className="text-sm font-medium mt-1.5">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
