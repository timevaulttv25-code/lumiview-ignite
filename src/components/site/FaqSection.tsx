import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export interface FaqItem { q: string; a: string }

export function FaqSection({ items, title = "Common questions", eyebrow = "FAQ" }: { items: FaqItem[]; title?: string; eyebrow?: string }) {
  return (
    <section className="container-prose grid gap-12 py-20 lg:grid-cols-12 lg:py-28">
      <div className="lg:col-span-4">
        <div className="eyebrow">{eyebrow}</div>
        <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-muted-foreground">
          Don't see your question? Call us — we're happy to walk through the details.
        </p>
      </div>
      <div className="lg:col-span-8">
        <Accordion type="single" collapsible className="border-t border-border">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-b border-border">
              <AccordionTrigger className="faq-question py-5 text-left font-serif text-xl font-medium hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="faq-answer pb-5 pr-8 text-base leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
