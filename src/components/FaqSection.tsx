import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section id="faq" className="container max-w-screen-xl py-20">
      <h2 className="text-3xl font-bold mb-12">Частые вопросы</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        <div>
          <p className="text-muted-foreground mb-6">
            Не нашли ответ? Позвоните нам — проконсультируем бесплатно.
          </p>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Сколько стоит электромонтаж?"
              answer="Стоимость зависит от объёма работ и типа объекта. Выезд замерщика и составление сметы — бесплатно. Средняя цена электромонтажа в квартире — от 1 500 ₽/м²."
            />
            <FaqItem
              question="Какие гарантии вы даёте?"
              answer="Гарантия на все виды работ — до 5 лет. Используем только сертифицированные материалы от проверенных производителей. При обнаружении дефекта устраняем бесплатно."
            />
            <FaqItem
              question="Сколько времени занимает работа?"
              answer="Электромонтаж в однокомнатной квартире — 2-3 дня, в доме — 5-10 дней. Точные сроки определяем после замера и зависят от объёма работ."
            />
          </Accordion>
        </div>

        <div>
          <Accordion type="single" collapsible className="w-full">
            <FaqItem
              question="Нужно ли покупать материалы самому?"
              answer="Нет, мы закупаем все материалы сами по оптовым ценам — это дешевле, чем в розницу. Но если у вас уже есть материалы, мы работаем и с ними."
            />
            <FaqItem
              question="Работаете ли вы по выходным?"
              answer="Да, работаем без выходных. Аварийный выезд доступен круглосуточно. Для плановых работ подбираем удобное для вас время."
            />
            <FaqItem
              question="Делаете ли вы проект электрики?"
              answer="Да, проектируем электрические схемы для квартир, домов и коммерческих помещений. Проект включает расположение розеток, выключателей, освещения и щитка."
            />
            <FaqItem
              question="Работаете ли вы с юрлицами?"
              answer="Да, работаем с юридическими лицами и ИП. Предоставляем полный пакет документов: договор, акты, счета-фактуры."
            />
          </Accordion>
        </div>
      </div>
    </section>
  )
}

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <AccordionItem value={question}>
      <AccordionTrigger className="text-left">{question}</AccordionTrigger>
      <AccordionContent>{answer}</AccordionContent>
    </AccordionItem>
  )
}
