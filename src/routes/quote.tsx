import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { PageHero } from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { buildSeo } from "@/lib/seo";

export const Route = createFileRoute("/quote")({
  head: () => buildSeo({
    title: "Request a Free Quote — LumiView Services",
    description: "Three-step quote request for window cleaning, pressure washing, janitorial and property-care services. 24-hour response.",
    path: "/quote",
  }),
  component: QuotePage,
});

// US phone: accepts 10 digits with optional +1, spaces, dashes, parens, dots
const phoneRegex = /^(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const schema = z.object({
  full_name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(120)
    .regex(/^[A-Za-z\s'.-]+$/, "Full name can only contain letters, spaces, hyphens or apostrophes"),
  company_name: z.string().trim().max(160).optional().or(z.literal("")),
  contact_method: z.enum(["Call", "Text", "Email"]),
  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(254),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Please enter a valid US phone number (e.g. 216-555-1234)")
    .max(40),
  property_type: z.string().min(1, "Property type is required"),
  preferred_timing: z.string().min(1, "Preferred timing is required"),
  hear_about: z.string().optional(),
  street_address: z
    .string()
    .trim()
    .min(3, "Street address is required")
    .max(200)
    .regex(/\d/, "Street address should include a house or building number"),
  city: z
    .string()
    .trim()
    .min(2, "City is required")
    .max(80)
    .regex(/^[A-Za-z\s'.-]+$/, "City can only contain letters, spaces, hyphens or apostrophes"),
  state: z.string().min(2, "State is required").max(2),
  zip: z
    .string()
    .trim()
    .min(1, "ZIP code is required")
    .regex(/^\d{5}(-\d{4})?$/, "Enter a valid 5-digit ZIP (or ZIP+4)"),
  frequency: z.string().min(1, "Frequency is required"),
  square_footage: z.string().max(20).optional(),
  services: z
    .array(z.string())
    .min(1, "Select at least one service you're interested in")
    .max(20),
  project_details: z.string().max(4000).optional(),
  parking: z.string().optional(),
  flexibility: z.string().optional(),
  access: z.string().optional(),
  has_pets: z.string().optional(),
  additional_info: z.string().max(4000).optional(),
});

const SERVICES = ["Window Cleaning", "Pressure Washing & Exterior", "Janitorial & Interior", "Property Care", "Not Sure Yet"];
const PROPERTY_TYPES = ["Residential", "Commercial", "Builder / New Construction", "Property Management", "Daycare / Childcare", "Facility"];
const TIMING = ["As Soon as Possible", "Within 1–2 Weeks", "This Month", "Planning Ahead", "Looking for Recurring Service"];
const HEAR = ["Google Search", "Google Business Profile", "Referral", "Social Media", "Mailer", "Door Hanger", "Yard Sign", "Repeat Customer", "Other"];
const FREQUENCY = ["One-Time", "Weekly", "Bi-Weekly", "Monthly", "Quarterly", "Not Sure Yet"];
const PARKING = ["Driveway", "Street Parking", "Parking Lot", "Designated Visitor Spot", "Garage", "No Specific Spot — Please Advise"];
const FLEXIBILITY = ["Yes — Fully Flexible", "Somewhat Flexible", "Specific Day Only", "Specific Time Only", "Not Flexible"];
const ACCESS = ["I'll Be On Site", "Gate Code / Lockbox (Provided Later)", "Property Manager Will Provide Access", "Open Access — No Code Needed", "Other (Explain in Notes)"];
const PETS = ["No Pets", "Yes — Friendly Dog", "Yes — Cat(s)", "Yes — Multiple Pets", "Pets Will Be Secured Indoors", "Not Applicable"];

const US_STATES: { code: string; name: string }[] = [
  { code: "AL", name: "Alabama" }, { code: "AK", name: "Alaska" }, { code: "AZ", name: "Arizona" },
  { code: "AR", name: "Arkansas" }, { code: "CA", name: "California" }, { code: "CO", name: "Colorado" },
  { code: "CT", name: "Connecticut" }, { code: "DE", name: "Delaware" }, { code: "DC", name: "District of Columbia" },
  { code: "FL", name: "Florida" }, { code: "GA", name: "Georgia" }, { code: "HI", name: "Hawaii" },
  { code: "ID", name: "Idaho" }, { code: "IL", name: "Illinois" }, { code: "IN", name: "Indiana" },
  { code: "IA", name: "Iowa" }, { code: "KS", name: "Kansas" }, { code: "KY", name: "Kentucky" },
  { code: "LA", name: "Louisiana" }, { code: "ME", name: "Maine" }, { code: "MD", name: "Maryland" },
  { code: "MA", name: "Massachusetts" }, { code: "MI", name: "Michigan" }, { code: "MN", name: "Minnesota" },
  { code: "MS", name: "Mississippi" }, { code: "MO", name: "Missouri" }, { code: "MT", name: "Montana" },
  { code: "NE", name: "Nebraska" }, { code: "NV", name: "Nevada" }, { code: "NH", name: "New Hampshire" },
  { code: "NJ", name: "New Jersey" }, { code: "NM", name: "New Mexico" }, { code: "NY", name: "New York" },
  { code: "NC", name: "North Carolina" }, { code: "ND", name: "North Dakota" }, { code: "OH", name: "Ohio" },
  { code: "OK", name: "Oklahoma" }, { code: "OR", name: "Oregon" }, { code: "PA", name: "Pennsylvania" },
  { code: "RI", name: "Rhode Island" }, { code: "SC", name: "South Carolina" }, { code: "SD", name: "South Dakota" },
  { code: "TN", name: "Tennessee" }, { code: "TX", name: "Texas" }, { code: "UT", name: "Utah" },
  { code: "VT", name: "Vermont" }, { code: "VA", name: "Virginia" }, { code: "WA", name: "Washington" },
  { code: "WV", name: "West Virginia" }, { code: "WI", name: "Wisconsin" }, { code: "WY", name: "Wyoming" },
];

function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Record<string, any>>({ services: [], contact_method: "Email", state: "OH" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (k: string, v: any) => {
    setForm((f) => ({ ...f, [k]: v }));
    // Clear an existing error as soon as the user starts correcting it
    setErrors((e) => (e[k] ? { ...e, [k]: "" } : e));
  };
  const toggleService = (s: string) => {
    const has = form.services?.includes(s);
    update("services", has ? form.services.filter((x: string) => x !== s) : [...(form.services || []), s]);
  };

  const FieldError = ({ name }: { name: string }) =>
    errors[name] ? (
      <p className="mt-1.5 text-sm font-medium text-destructive">{errors[name]}</p>
    ) : null;

  const inputErrCls = (name: string) =>
    errors[name] ? "border-destructive focus-visible:ring-destructive" : "";

  const collectErrors = (issues: { path: (string | number)[]; message: string }[]) => {
    const map: Record<string, string> = {};
    for (const i of issues) {
      const key = String(i.path[0] ?? "");
      if (key && !map[key]) map[key] = i.message;
    }
    return map;
  };

  const validateStep1 = () => {
    const result = schema.pick({
      full_name: true,
      email: true,
      phone: true,
      contact_method: true,
      property_type: true,
      preferred_timing: true,
    }).safeParse(form);
    if (!result.success) {
      const map = collectErrors(result.error.issues);
      setErrors((prev) => ({ ...prev, ...map }));
      toast.error("Please fix the highlighted fields", {
        description: Object.values(map)[0],
      });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const result = schema.pick({
      street_address: true,
      city: true,
      state: true,
      zip: true,
      frequency: true,
      services: true,
    }).safeParse(form);
    if (!result.success) {
      const map = collectErrors(result.error.issues);
      setErrors((prev) => ({ ...prev, ...map }));
      toast.error("Please fix the highlighted fields", {
        description: Object.values(map)[0],
      });
      return false;
    }
    return true;
  };

  const step1Keys = ["full_name", "email", "phone", "contact_method", "property_type", "preferred_timing"];
  const step2Keys = ["street_address", "city", "state", "zip", "frequency", "services"];

  const submit = async () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const map = collectErrors(parsed.error.issues);
      setErrors(map);
      const errKeys = Object.keys(map);
      if (errKeys.some((k) => step1Keys.includes(k))) setStep(1);
      else if (errKeys.some((k) => step2Keys.includes(k))) setStep(2);
      toast.error("Please check the highlighted fields", { description: Object.values(map)[0] });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("quote_requests").insert({
      ...parsed.data,
      company_name: parsed.data.company_name || null,
    });
    setLoading(false);
    if (error) {
      toast.error("Could not submit request", { description: error.message });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SiteShell>
        <section className="container-prose py-32 text-center">
          <CheckCircle2 className="mx-auto h-16 w-16 text-accent" />
          <h1 className="mt-6 font-serif text-4xl font-medium">Quote request received.</h1>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Thank you. We'll review your request and follow up within 24 hours with clear next steps.
          </p>
        </section>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <PageHero eyebrow="Free quote · 3 steps · ~2 min" title="Let's talk about your property."
        description="Tell us a few details and we'll follow up within 24 hours with clear guidance."
        breadcrumbs={[{ label: "Home", to: "/" }, { label: "Request a quote" }]} />
      <section className="container-prose py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <ol className="mb-10 flex items-center justify-between">
            {[1, 2, 3].map((n) => (
              <li key={n} className="flex flex-1 items-center">
                <span className={`flex h-9 w-9 items-center justify-center rounded-full border-2 font-semibold ${step >= n ? "border-accent bg-accent text-accent-foreground" : "border-border text-muted-foreground"}`}>{n}</span>
                {n < 3 && <span className={`mx-3 h-px flex-1 ${step > n ? "bg-accent" : "bg-border"}`} />}
              </li>
            ))}
          </ol>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
            {step === 1 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl font-medium">About you</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label>Full name *</Label>
                    <Input
                      value={form.full_name || ""}
                      onChange={(e) => update("full_name", e.target.value)}
                      className={inputErrCls("full_name")}
                      aria-invalid={!!errors.full_name}
                    />
                    <FieldError name="full_name" />
                  </div>
                  <div>
                    <Label>Company name</Label>
                    <Input value={form.company_name || ""} onChange={(e) => update("company_name", e.target.value)} />
                  </div>
                  <div>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      required
                      value={form.email || ""}
                      onChange={(e) => update("email", e.target.value)}
                      className={inputErrCls("email")}
                      aria-invalid={!!errors.email}
                    />
                    <FieldError name="email" />
                  </div>
                  <div>
                    <Label>Phone *</Label>
                    <Input
                      type="tel"
                      required
                      inputMode="tel"
                      value={form.phone || ""}
                      onChange={(e) => update("phone", e.target.value)}
                      className={inputErrCls("phone")}
                      aria-invalid={!!errors.phone}
                    />
                    <FieldError name="phone" />
                  </div>
                  <div>
                    <Label>Best way to reach you *</Label>
                    <Select value={form.contact_method} onValueChange={(v) => update("contact_method", v)}>
                      <SelectTrigger className={inputErrCls("contact_method")}><SelectValue /></SelectTrigger>
                      <SelectContent>{["Call", "Text", "Email"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                    <FieldError name="contact_method" />
                  </div>
                  <div>
                    <Label>Property type *</Label>
                    <Select value={form.property_type} onValueChange={(v) => update("property_type", v)}>
                      <SelectTrigger className={inputErrCls("property_type")}><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{PROPERTY_TYPES.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                    <FieldError name="property_type" />
                  </div>
                  <div>
                    <Label>Preferred timing *</Label>
                    <Select value={form.preferred_timing} onValueChange={(v) => update("preferred_timing", v)}>
                      <SelectTrigger className={inputErrCls("preferred_timing")}><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{TIMING.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                    <FieldError name="preferred_timing" />
                  </div>
                  <div>
                    <Label>How did you hear about us?</Label>
                    <Select value={form.hear_about} onValueChange={(v) => update("hear_about", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{HEAR.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button
                    className="rounded-full"
                    onClick={() => {
                      if (validateStep1()) setStep(2);
                    }}
                  >
                    Continue →
                  </Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl font-medium">About the property</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <Label>Street address *</Label>
                    <Input
                      value={form.street_address || ""}
                      onChange={(e) => update("street_address", e.target.value)}
                      className={inputErrCls("street_address")}
                      aria-invalid={!!errors.street_address}
                    />
                    <FieldError name="street_address" />
                  </div>
                  <div>
                    <Label>City *</Label>
                    <Input
                      value={form.city || ""}
                      onChange={(e) => update("city", e.target.value)}
                      className={inputErrCls("city")}
                      aria-invalid={!!errors.city}
                    />
                    <FieldError name="city" />
                  </div>
                  <div>
                    <Label>State *</Label>
                    <Select value={form.state} onValueChange={(v) => update("state", v)}>
                      <SelectTrigger className={inputErrCls("state")}><SelectValue placeholder="Select state" /></SelectTrigger>
                      <SelectContent className="max-h-72">
                        {US_STATES.map((s) => (
                          <SelectItem key={s.code} value={s.code}>{s.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FieldError name="state" />
                  </div>
                  <div>
                    <Label>ZIP *</Label>
                    <Input
                      inputMode="numeric"
                      value={form.zip || ""}
                      onChange={(e) => update("zip", e.target.value)}
                      className={inputErrCls("zip")}
                      aria-invalid={!!errors.zip}
                    />
                    <FieldError name="zip" />
                  </div>
                  <div>
                    <Label>Frequency *</Label>
                    <Select value={form.frequency} onValueChange={(v) => update("frequency", v)}>
                      <SelectTrigger className={inputErrCls("frequency")}><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{FREQUENCY.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                    <FieldError name="frequency" />
                  </div>
                  <div className="sm:col-span-2"><Label>Square footage (optional)</Label><Input value={form.square_footage || ""} onChange={(e) => update("square_footage", e.target.value)} /></div>
                  <div className="sm:col-span-2">
                    <Label>Which services are you interested in? *</Label>
                    <p className="mt-1 text-xs text-muted-foreground">Select one or more.</p>
                    <div className={`mt-2 grid gap-2 rounded-md sm:grid-cols-2 ${errors.services ? "rounded-md ring-1 ring-destructive p-2" : ""}`}>
                      {SERVICES.map((s) => (
                        <label key={s} className="flex items-center gap-2 rounded-md border border-border p-3 text-sm">
                          <Checkbox checked={form.services?.includes(s)} onCheckedChange={() => toggleService(s)} />
                          {s}
                        </label>
                      ))}
                    </div>
                    <FieldError name="services" />
                  </div>
                  <div className="sm:col-span-2"><Label>Project details</Label><Textarea rows={4} value={form.project_details || ""} onChange={(e) => update("project_details", e.target.value)} /></div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" className="rounded-full" onClick={() => setStep(1)}>← Back</Button>
                  <Button
                    className="rounded-full"
                    onClick={() => {
                      if (validateStep2()) setStep(3);
                    }}
                  >
                    Continue →
                  </Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl font-medium">Final details</h2>
                <div className="grid gap-4">
                  <div>
                    <Label>Where can our team park?</Label>
                    <Select value={form.parking} onValueChange={(v) => update("parking", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{PARKING.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Is your day or time flexible?</Label>
                    <Select value={form.flexibility} onValueChange={(v) => update("flexibility", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{FLEXIBILITY.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>How can we access the property?</Label>
                    <Select value={form.access} onValueChange={(v) => update("access", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{ACCESS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Pets on property? (residential)</Label>
                    <Select value={form.has_pets} onValueChange={(v) => update("has_pets", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{PETS.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div><Label>Additional information</Label><Textarea rows={4} value={form.additional_info || ""} onChange={(e) => update("additional_info", e.target.value)} /></div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" className="rounded-full" onClick={() => setStep(2)}>← Back</Button>
                  <Button className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90" onClick={submit} disabled={loading}>
                    {loading ? "Submitting…" : "Complete quote request"}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
