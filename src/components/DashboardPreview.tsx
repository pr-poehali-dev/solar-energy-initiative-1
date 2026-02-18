import Icon from "@/components/ui/icon"

const categories = [
  {
    icon: "Home",
    title: "Квартиры",
    description: "Полная замена проводки, установка розеток, выключателей, щитков. Новостройки и вторичное жильё.",
  },
  {
    icon: "Building2",
    title: "Дома",
    description: "Ввод электричества, разводка по этажам, подключение генераторов, заземление и молниезащита.",
  },
  {
    icon: "Store",
    title: "Коммерция",
    description: "Электроснабжение офисов, магазинов, ресторанов. Проектирование, монтаж и получение допусков.",
  },
  {
    icon: "Factory",
    title: "Производство",
    description: "Монтаж силовых линий, подключение оборудования, автоматизация электроснабжения.",
  },
]

export function DashboardPreview() {
  return (
    <div className="container max-w-screen-xl pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {categories.map((item, i) => (
          <div
            key={i}
            className="group p-6 rounded-xl bg-card/80 border border-border/40 hover:border-primary/50 transition-all duration-300 cursor-default"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Icon name={item.icon} size={28} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
