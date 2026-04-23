import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { PhoneDisplay } from "@/components/site/PhoneDisplay";

interface CTABandProps {
  eyebrow?: string;
  title: string;
  body?: string;
}

export function CTABand({
  eyebrow = "Ready when you are",
  title,
  body = "Free estimates. 24-hour response. Fully insured. Tell us about your property and we'll follow up with clear next steps.",
}: CTABandProps) {
  return (
    <section className="container-prose py-20 lg:py-28">
      <div className="navy-gradient relative overflow-hidden rounded-3xl px-8 py-16 text-ivory shadow-elegant lg:px-16 lg:py-20">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <div className="eyebrow text-accent">{eyebrow}</div>
            <h2 className="mt-3 font-serif text-4xl font-medium tracking-tight text-balance lg:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-ivory/75">{body}</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-4 lg:items-end">
            <Button asChild size="lg" className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 lg:w-auto">
              <Link to="/quote">
                Request a Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <a
              href={SITE.phoneLink}
              className="phone-btn-dark"
            >
              <Phone className="h-4 w-4" /> <PhoneDisplay />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
