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

const schema = z.object({
  full_name: z.string().trim().min(1).max(120),
  company_name: z.string().trim().max(160).optional().or(z.literal("")),
  contact_method: z.enum(["Call", "Text", "Email"]),
  email: z.string().trim().email().max(254).optional().or(z.literal("")),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  property_type: z.string().min(1),
  preferred_timing: z.string().optional(),
  hear_about: z.string().optional(),
  street_address: z.string().max(200).optional(),
  city: z.string().max(80).optional(),
  state: z.string().max(40).optional(),
  zip: z.string().max(20).optional(),
  frequency: z.string().optional(),
  square_footage: z.string().max(20).optional(),
  services: z.array(z.string()).max(20),
  project_details: z.string().max(4000).optional(),
  parking: z.string().optional(),
  flexibility: z.string().optional(),
  access: z.string().optional(),
  has_pets: z.string().optional(),
  additional_info: z.string().max(4000).optional(),
});

const SERVICES = ["Window Cleaning", "Pressure Washing & Exterior", "Janitorial & Interior", "Property Care", "Not Sure Yet"];
const PROPERTY_TYPES = ["Residential", "Commercial", "Builder / New Construction", "Property Management", "Daycare / Childcare"];
const TIMING = ["As Soon as Possible", "Within 1–2 Weeks", "This Month", "Planning Ahead", "Looking for Recurring Service"];
const HEAR = ["Google Search", "Google Business Profile", "Referral", "Social Media", "Mailer", "Door Hanger", "Yard Sign", "Repeat Customer", "Other"];
const FREQUENCY = ["One-Time", "Weekly", "Bi-Weekly", "Monthly", "Quarterly", "Not Sure Yet"];

function QuotePage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<Record<string, any>>({ services: [], contact_method: "Email", state: "Ohio" });

  const update = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));
  const toggleService = (s: string) => {
    const has = form.services?.includes(s);
    update("services", has ? form.services.filter((x: string) => x !== s) : [...(form.services || []), s]);
  };

  const submit = async () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error("Please check the highlighted fields", { description: parsed.error.issues[0]?.message });
      return;
    }
    setLoading(true);
    const { error } = await supabase.from("quote_requests").insert({
      ...parsed.data,
      company_name: parsed.data.company_name || null,
      email: parsed.data.email || null,
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
                  <div><Label>Full name *</Label><Input value={form.full_name || ""} onChange={(e) => update("full_name", e.target.value)} /></div>
                  <div><Label>Company name</Label><Input value={form.company_name || ""} onChange={(e) => update("company_name", e.target.value)} /></div>
                  <div><Label>Email</Label><Input type="email" value={form.email || ""} onChange={(e) => update("email", e.target.value)} /></div>
                  <div><Label>Phone</Label><Input value={form.phone || ""} onChange={(e) => update("phone", e.target.value)} /></div>
                  <div>
                    <Label>Best way to reach you *</Label>
                    <Select value={form.contact_method} onValueChange={(v) => update("contact_method", v)}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>{["Call", "Text", "Email"].map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Property type *</Label>
                    <Select value={form.property_type} onValueChange={(v) => update("property_type", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{PROPERTY_TYPES.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Preferred timing</Label>
                    <Select value={form.preferred_timing} onValueChange={(v) => update("preferred_timing", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{TIMING.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
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
                  <Button className="rounded-full" onClick={() => { if (!form.full_name || !form.property_type) { toast.error("Name and property type are required"); return; } setStep(2); }}>Continue →</Button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl font-medium">About the property</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2"><Label>Street address</Label><Input value={form.street_address || ""} onChange={(e) => update("street_address", e.target.value)} /></div>
                  <div><Label>City</Label><Input value={form.city || ""} onChange={(e) => update("city", e.target.value)} /></div>
                  <div><Label>State</Label><Input value={form.state || ""} onChange={(e) => update("state", e.target.value)} /></div>
                  <div><Label>ZIP</Label><Input value={form.zip || ""} onChange={(e) => update("zip", e.target.value)} /></div>
                  <div>
                    <Label>Frequency</Label>
                    <Select value={form.frequency} onValueChange={(v) => update("frequency", v)}>
                      <SelectTrigger><SelectValue placeholder="Select" /></SelectTrigger>
                      <SelectContent>{FREQUENCY.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2"><Label>Square footage (optional)</Label><Input value={form.square_footage || ""} onChange={(e) => update("square_footage", e.target.value)} /></div>
                  <div className="sm:col-span-2">
                    <Label>Which services are you interested in?</Label>
                    <div className="mt-2 grid gap-2 sm:grid-cols-2">
                      {SERVICES.map((s) => (
                        <label key={s} className="flex items-center gap-2 rounded-md border border-border p-3 text-sm">
                          <Checkbox checked={form.services?.includes(s)} onCheckedChange={() => toggleService(s)} />
                          {s}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-2"><Label>Project details</Label><Textarea rows={4} value={form.project_details || ""} onChange={(e) => update("project_details", e.target.value)} /></div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" className="rounded-full" onClick={() => setStep(1)}>← Back</Button>
                  <Button className="rounded-full" onClick={() => setStep(3)}>Continue →</Button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl font-medium">Final details</h2>
                <div className="grid gap-4">
                  <div><Label>Where can our team park?</Label><Input value={form.parking || ""} onChange={(e) => update("parking", e.target.value)} /></div>
                  <div><Label>Is your day or time flexible?</Label><Input value={form.flexibility || ""} onChange={(e) => update("flexibility", e.target.value)} /></div>
                  <div><Label>How can we access the property?</Label><Input value={form.access || ""} onChange={(e) => update("access", e.target.value)} /></div>
                  <div><Label>Pets on property? (residential)</Label><Input value={form.has_pets || ""} onChange={(e) => update("has_pets", e.target.value)} placeholder="e.g. Yes — friendly dog" /></div>
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
