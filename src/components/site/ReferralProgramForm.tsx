import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";

const phoneRegex = /^(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const REFERRAL_TYPES = [
  { value: "residential", label: "Residential referral" },
  { value: "commercial", label: "Commercial referral" },
] as const;

const baseSchema = z.object({
  referrer_name: z
    .string()
    .trim()
    .min(2, "Your name is required")
    .max(120)
    .regex(/^[A-Za-z\s'.-]+$/, "Letters, spaces, hyphens or apostrophes only"),
  referrer_email: z
    .string()
    .trim()
    .min(1, "Your email is required")
    .email("Enter a valid email")
    .max(254),
  referrer_phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid US phone number")
    .max(40)
    .optional()
    .or(z.literal("")),
  referral_type: z.enum(["residential", "commercial"], {
    errorMap: () => ({ message: "Please choose a referral type" }),
  }),
  referred_customer_name: z.string().trim().max(120).optional().or(z.literal("")),
  referred_company_name: z.string().trim().max(160).optional().or(z.literal("")),
  referred_contact_name: z.string().trim().max(120).optional().or(z.literal("")),
  referred_email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(254)
    .optional()
    .or(z.literal("")),
  referred_phone: z
    .string()
    .trim()
    .regex(phoneRegex, "Enter a valid US phone number")
    .max(40)
    .optional()
    .or(z.literal("")),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
});

const schema = baseSchema.superRefine((data, ctx) => {
  if (data.referral_type === "residential") {
    if (!data.referred_customer_name || data.referred_customer_name.trim().length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["referred_customer_name"],
        message: "Homeowner / resident name is required",
      });
    }
  }

  if (data.referral_type === "commercial") {
    if (!data.referred_company_name || data.referred_company_name.trim().length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["referred_company_name"],
        message: "Business / property name is required",
      });
    }
  }
});

export function ReferralProgramForm() {
  const [form, setForm] = useState({
    referrer_name: "",
    referrer_email: "",
    referrer_phone: "",
    referral_type: "residential" as "residential" | "commercial",
    referred_customer_name: "",
    referred_company_name: "",
    referred_contact_name: "",
    referred_email: "",
    referred_phone: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const submit = async () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const map: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString();
        if (key && !map[key]) map[key] = issue.message;
      }
      setErrors(map);
      toast.error("Please fix the highlighted fields", { description: Object.values(map)[0] });
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("referral_submissions").insert({
      referrer_name: parsed.data.referrer_name,
      referrer_email: parsed.data.referrer_email,
      referrer_phone: parsed.data.referrer_phone || null,
      referral_type: parsed.data.referral_type,
      referred_customer_name:
        parsed.data.referral_type === "residential"
          ? parsed.data.referred_customer_name || null
          : null,
      referred_company_name:
        parsed.data.referral_type === "commercial"
          ? parsed.data.referred_company_name || null
          : null,
      referred_contact_name: parsed.data.referred_contact_name || null,
      referred_email: parsed.data.referred_email || null,
      referred_phone: parsed.data.referred_phone || null,
      notes: parsed.data.notes || null,
    });
    setLoading(false);

    if (error) {
      toast.error("Could not submit referral", { description: error.message });
      return;
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-soft">
        <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
        <h2 className="mt-5 font-serif text-3xl font-medium">Referral received.</h2>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          Thanks for sending someone our way. We’ll follow up with them and process your
          referral reward once they book and complete their first service.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-10">
      <div className="grid gap-5">
        <div className="grid gap-2 sm:max-w-xs">
          <Label htmlFor="ref-type">Referral type *</Label>
          <Select value={form.referral_type} onValueChange={(v) => update("referral_type", v as "residential" | "commercial")}>
            <SelectTrigger id="ref-type" aria-invalid={!!errors.referral_type}>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              {REFERRAL_TYPES.map((type) => (
                <SelectItem key={type.value} value={type.value}>
                  {type.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.referral_type && <p className="text-xs text-destructive">{errors.referral_type}</p>}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="ref-your-name">Your name *</Label>
            <Input
              id="ref-your-name"
              value={form.referrer_name}
              onChange={(e) => update("referrer_name", e.target.value)}
              aria-invalid={!!errors.referrer_name}
              autoComplete="name"
            />
            {errors.referrer_name && <p className="text-xs text-destructive">{errors.referrer_name}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ref-your-email">Your email *</Label>
            <Input
              id="ref-your-email"
              type="email"
              value={form.referrer_email}
              onChange={(e) => update("referrer_email", e.target.value)}
              aria-invalid={!!errors.referrer_email}
              autoComplete="email"
            />
            {errors.referrer_email && <p className="text-xs text-destructive">{errors.referrer_email}</p>}
          </div>
        </div>

        <div className="grid gap-2 sm:max-w-sm">
          <Label htmlFor="ref-your-phone">Your phone</Label>
          <Input
            id="ref-your-phone"
            type="tel"
            value={form.referrer_phone}
            onChange={(e) => update("referrer_phone", e.target.value)}
            aria-invalid={!!errors.referrer_phone}
            autoComplete="tel"
            placeholder="216-555-1234"
          />
          {errors.referrer_phone && <p className="text-xs text-destructive">{errors.referrer_phone}</p>}
        </div>

        {form.referral_type === "residential" ? (
          <div className="grid gap-2">
            <Label htmlFor="ref-homeowner">Homeowner / resident name *</Label>
            <Input
              id="ref-homeowner"
              value={form.referred_customer_name}
              onChange={(e) => update("referred_customer_name", e.target.value)}
              aria-invalid={!!errors.referred_customer_name}
              placeholder="Who are you referring?"
            />
            {errors.referred_customer_name && (
              <p className="text-xs text-destructive">{errors.referred_customer_name}</p>
            )}
          </div>
        ) : (
          <>
            <div className="grid gap-2">
              <Label htmlFor="ref-company">Business / property name *</Label>
              <Input
                id="ref-company"
                value={form.referred_company_name}
                onChange={(e) => update("referred_company_name", e.target.value)}
                aria-invalid={!!errors.referred_company_name}
                placeholder="Office, plaza, HOA, management company…"
              />
              {errors.referred_company_name && (
                <p className="text-xs text-destructive">{errors.referred_company_name}</p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="ref-contact">Contact name</Label>
              <Input
                id="ref-contact"
                value={form.referred_contact_name}
                onChange={(e) => update("referred_contact_name", e.target.value)}
                aria-invalid={!!errors.referred_contact_name}
                placeholder="Property manager, owner, office admin…"
              />
              {errors.referred_contact_name && (
                <p className="text-xs text-destructive">{errors.referred_contact_name}</p>
              )}
            </div>
          </>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="ref-email">Referred person's email</Label>
            <Input
              id="ref-email"
              type="email"
              value={form.referred_email}
              onChange={(e) => update("referred_email", e.target.value)}
              aria-invalid={!!errors.referred_email}
              autoComplete="off"
            />
            {errors.referred_email && <p className="text-xs text-destructive">{errors.referred_email}</p>}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="ref-phone">Referred person's phone</Label>
            <Input
              id="ref-phone"
              type="tel"
              value={form.referred_phone}
              onChange={(e) => update("referred_phone", e.target.value)}
              aria-invalid={!!errors.referred_phone}
              autoComplete="off"
              placeholder="216-555-1234"
            />
            {errors.referred_phone && <p className="text-xs text-destructive">{errors.referred_phone}</p>}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="ref-notes">Anything helpful to know?</Label>
          <Textarea
            id="ref-notes"
            value={form.notes}
            onChange={(e) => update("notes", e.target.value)}
            rows={5}
            maxLength={2000}
            placeholder="Address, best time to reach them, what service they need, how you know them…"
          />
          {errors.notes && <p className="text-xs text-destructive">{errors.notes}</p>}
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
            "Submit referral"
          )}
        </Button>
      </div>
    </div>
  );
}
