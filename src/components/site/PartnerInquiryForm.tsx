import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

const phoneRegex = /^(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const PARTNER_TYPES = [
  "Property Management Company",
  "Realtor / Brokerage",
  "Builder / General Contractor",
  "Interior Designer / Stager",
  "Airbnb / STR Co-host",
  "Facility / Office Manager",
  "Other",
];

const PORTFOLIO_SIZES = [
  "1–5 properties",
  "6–25 properties",
  "26–100 properties",
  "100+ properties",
];

const SERVICES = [
  "Window cleaning",
  "Pressure washing",
  "Janitorial / interior",
  "Property care",
  "Airbnb / turnover",
  "Property management cleaning",
];

const schema = z.object({
  full_name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(120)
    .regex(/^[A-Za-z\s'.-]+$/, "Letters, spaces, hyphens or apostrophes only"),
  company_name: z.string().trim().min(1, "Company name is required").max(160),
  job_title: z.string().trim().max(120).optional().or(z.literal("")),
  partner_type: z.string().min(1, "Please choose a partner type"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email").max(254),
  phone: z
    .string()
    .trim()
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Enter a valid US phone number")
    .max(40),
  portfolio_size: z.string().min(1, "Please choose a size"),
  service_interests: z.array(z.string()).min(1, "Select at least one service").max(20),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

export function PartnerInquiryForm() {
  const [form, setForm] = useState({
    full_name: "",
    company_name: "",
    job_title: "",
    partner_type: "",
    email: "",
    phone: "",
    portfolio_size: "",
    service_interests: [] as string[],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const toggleService = (service: string) => {
    setForm((prev) => ({
      ...prev,
      service_interests: prev.service_interests.includes(service)
        ? prev.service_interests.filter((s) => s !== service)
        : [...prev.service_interests, service],
    }));
    setErrors((prev) => ({ ...prev, service_interests: "" }));
  };

  const submit = async () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0]?.toString();
        if (k && !map[k]) map[k] = issue.message;
      }
      setErrors(map);
      toast.error("Please fix the highlighted fields", { description: Object.values(map)[0] });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("partner_inquiries").insert({
      full_name: parsed.data.full_name,
      company_name: parsed.data.company_name,
      job_title: parsed.data.job_title || null,
      partner_type: parsed.data.partner_type,
      email: parsed.data.email,
      phone: parsed.data.phone,
      portfolio_size: parsed.data.portfolio_size,
      service_interests: parsed.data.service_interests,
      message: parsed.data.message || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Could not submit inquiry", { description: error.message });
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
        <h2 className="mt-5 font-serif text-3xl font-medium">Inquiry received.</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thanks for reaching out. A LumiView account manager will be in touch within
          24 business hours to set up an intro call.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-10">
      <div className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="pi-name">Full name *</Label>
            <Input
              id="pi-name"
              value={form.full_name}
              onChange={(e) => update("full_name", e.target.value)}
              aria-invalid={!!errors.full_name}
              autoComplete="name"
            />
            {errors.full_name && <p className="text-xs text-destructive">{errors.full_name}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pi-title">Job title</Label>
            <Input
              id="pi-title"
              value={form.job_title}
              onChange={(e) => update("job_title", e.target.value)}
              autoComplete="organization-title"
              placeholder="Property Manager, Owner, etc."
            />
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="pi-company">Company name *</Label>
          <Input
            id="pi-company"
            value={form.company_name}
            onChange={(e) => update("company_name", e.target.value)}
            aria-invalid={!!errors.company_name}
            autoComplete="organization"
          />
          {errors.company_name && (
            <p className="text-xs text-destructive">{errors.company_name}</p>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="pi-type">Partner type *</Label>
            <Select
              value={form.partner_type}
              onValueChange={(v) => update("partner_type", v)}
            >
              <SelectTrigger id="pi-type" aria-invalid={!!errors.partner_type}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {PARTNER_TYPES.map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.partner_type && (
              <p className="text-xs text-destructive">{errors.partner_type}</p>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pi-size">Portfolio size *</Label>
            <Select
              value={form.portfolio_size}
              onValueChange={(v) => update("portfolio_size", v)}
            >
              <SelectTrigger id="pi-size" aria-invalid={!!errors.portfolio_size}>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                {PORTFOLIO_SIZES.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.portfolio_size && (
              <p className="text-xs text-destructive">{errors.portfolio_size}</p>
            )}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="pi-email">Email *</Label>
            <Input
              id="pi-email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              autoComplete="email"
            />
            {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pi-phone">Phone *</Label>
            <Input
              id="pi-phone"
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              aria-invalid={!!errors.phone}
              autoComplete="tel"
              placeholder="216-555-1234"
            />
            {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid gap-2">
          <Label>Services you're interested in *</Label>
          <div className="grid gap-2 sm:grid-cols-2">
            {SERVICES.map((s) => {
              const checked = form.service_interests.includes(s);
              return (
                <label
                  key={s}
                  className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-background p-3 text-sm font-medium hover:border-accent"
                >
                  <Checkbox checked={checked} onCheckedChange={() => toggleService(s)} />
                  <span>{s}</span>
                </label>
              );
            })}
          </div>
          {errors.service_interests && (
            <p className="text-xs text-destructive">{errors.service_interests}</p>
          )}
        </div>

        <div className="grid gap-2">
          <Label htmlFor="pi-message">Tell us about your portfolio & needs</Label>
          <Textarea
            id="pi-message"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            rows={5}
            maxLength={2000}
            placeholder="Property types, locations, current pain points, ideal start date…"
          />
        </div>

        <Button
          onClick={submit}
          size="lg"
          className="mt-2 w-full rounded-full sm:w-auto sm:self-start"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
            </>
          ) : (
            "Submit partner inquiry"
          )}
        </Button>
      </div>
    </div>
  );
}
