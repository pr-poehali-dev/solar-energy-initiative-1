import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import Icon from "@/components/ui/icon"

const licenses = [
  {
    title: "Лицензия МЧС",
    description: "Деятельность по монтажу и обслуживанию средств пожарной безопасности. №51-06-2019-001601, действующая",
    images: [
      "https://cdn.poehali.dev/files/7b30309e-8ea3-4a76-9bbd-f9478f49055a.jpg",
    ],
  },
  {
    title: "Свидетельство электролаборатории",
    description: "Регистрация электролаборатории Ростехнадзором. №29-21/ЭЛ-25, до 10.08.2028",
    images: [
      "https://cdn.poehali.dev/files/3ff7851b-1b4a-4bee-aac9-65732c9347e0.jpg",
      "https://cdn.poehali.dev/files/48945250-df7a-42b3-8912-0c1c83ddb0ad.jpg",
    ],
  },
  {
    title: "Выписка СРО (НОСТРОЙ)",
    description: "Членство в СРО «ЖСОМ». Право на строительство, реконструкцию и капремонт",
    images: [
      "https://cdn.poehali.dev/files/20684673-884c-4604-baf2-dc353894e6cb.jpg",
      "https://cdn.poehali.dev/files/df7e507a-c979-4216-bd4b-fa19a41891f6.jpg",
    ],
  },
]

export function LicensesSection() {
  const [selected, setSelected] = useState<number | null>(null)
  const [page, setPage] = useState(0)

  const openLicense = (index: number) => {
    setSelected(index)
    setPage(0)
  }

  const currentLicense = selected !== null ? licenses[selected] : null
  const totalPages = currentLicense ? currentLicense.images.length : 0

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
            onClick={() => openLicense(i)}
          >
            <CardContent className="pt-6">
              <div className="aspect-[3/4] rounded-md overflow-hidden mb-4 bg-accent/20">
                <img
                  src={license.images[0]}
                  alt={license.title}
                  className="w-full h-full object-cover object-top"
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
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogTitle>
            {currentLicense?.title}
          </DialogTitle>
          {currentLicense && (
            <>
              <img
                src={currentLicense.images[page]}
                alt={`${currentLicense.title} — страница ${page + 1}`}
                className="w-full rounded-md"
              />
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-4 mt-2">
                  <button
                    onClick={() => setPage(Math.max(0, page - 1))}
                    disabled={page === 0}
                    className="p-2 rounded-full hover:bg-accent disabled:opacity-30 transition-opacity"
                  >
                    <Icon name="ChevronLeft" size={20} />
                  </button>
                  <span className="text-sm text-muted-foreground">
                    {page + 1} / {totalPages}
                  </span>
                  <button
                    onClick={() => setPage(Math.min(totalPages - 1, page + 1))}
                    disabled={page === totalPages - 1}
                    className="p-2 rounded-full hover:bg-accent disabled:opacity-30 transition-opacity"
                  >
                    <Icon name="ChevronRight" size={20} />
                  </button>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
