import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function DashboardPreview() {
  return (
    <div className="container max-w-screen-xl pb-16">
      <Tabs defaultValue="tab1" className="w-full">
        <div className="border-b border-border/40 pb-2">
          <TabsList className="bg-transparent border-b-0">
            <TabsTrigger
              value="tab1"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              <Icon name="Home" size={14} className="mr-1" /> Квартиры
            </TabsTrigger>
            <TabsTrigger
              value="tab2"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              <Icon name="Building2" size={14} className="mr-1" /> Дома
            </TabsTrigger>
            <TabsTrigger
              value="tab3"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              <Icon name="Store" size={14} className="mr-1" /> Коммерция
            </TabsTrigger>
            <TabsTrigger
              value="tab4"
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-none border-b-2 border-transparent data-[state=active]:border-primary"
            >
              <Icon name="Factory" size={14} className="mr-1" /> Производство
            </TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="tab1" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
              <Icon name="Lightbulb" size={48} className="text-primary/40" />
              <div>
                <div className="font-semibold mb-1">Электромонтаж в квартирах</div>
                <p className="text-sm text-muted-foreground max-w-md">Полная замена проводки, установка розеток, выключателей, щитков. Работаем в новостройках и вторичном жилье.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tab2" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
              <Icon name="Home" size={48} className="text-primary/40" />
              <div>
                <div className="font-semibold mb-1">Электрика в частных домах</div>
                <p className="text-sm text-muted-foreground max-w-md">Ввод электричества, разводка по этажам, подключение генераторов, монтаж заземления и молниезащиты.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tab3" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
              <Icon name="Store" size={48} className="text-primary/40" />
              <div>
                <div className="font-semibold mb-1">Коммерческие помещения</div>
                <p className="text-sm text-muted-foreground max-w-md">Электроснабжение офисов, магазинов, ресторанов. Проектирование, монтаж и получение допусков.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="tab4" className="mt-0 pt-6 border border-border/40 rounded-md bg-card/20">
          <Card className="border-0 bg-transparent shadow-none">
            <CardContent className="flex flex-col items-center justify-center min-h-[300px] text-center gap-4">
              <Icon name="Factory" size={48} className="text-primary/40" />
              <div>
                <div className="font-semibold mb-1">Промышленные объекты</div>
                <p className="text-sm text-muted-foreground max-w-md">Монтаж силовых линий, подключение оборудования, автоматизация электроснабжения на производстве.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}