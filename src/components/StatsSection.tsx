import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

export function StatsSection() {
  return (
    <section className="container max-w-screen-xl py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard icon="CalendarCheck" value="7+" label="Лет на рынке" />
        <StatCard icon="Home" value="2 500+" label="Выполненных объектов" />
        <StatCard icon="Users" value="50+" label="Специалистов в команде" />
        <StatCard icon="ShieldCheck" value="5 лет" label="Гарантия на работы" />
      </div>
    </section>
  )
}

interface StatCardProps {
  icon: string
  value: string
  label: string
}

function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <Card className="bg-accent/20 border-border/40">
      <CardContent className="pt-6">
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <Icon name={icon} size={28} className="text-primary" />
          </div>
          <div className="text-4xl font-bold mb-2">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </CardContent>
    </Card>
  )
}