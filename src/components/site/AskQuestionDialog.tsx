import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const phoneRegex = /^(?:\+?1[\s.-]?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

const schema = z.object({
  full_name: z
    .string()
    .trim()
    .min(1, "Full name is required")
    .max(120)
    .regex(/^[A-Za-z\s'.-]+$/, "Letters, spaces, hyphens or apostrophes only"),
  email: z.string().trim().min(1, "Email is required").email("Enter a valid email").max(254),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(phoneRegex, "Enter a valid US phone number")
    .optional()
    .or(z.literal("")),
  question: z.string().trim().min(10, "Please share a bit more detail").max(2000),
});

export function AskQuestionDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [form, setForm] = useState({ full_name: "", email: "", phone: "", question: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const reset = () => {
    setForm({ full_name: "", email: "", phone: "", question: "" });
    setErrors({});
    setSubmitted(false);
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
    const { error } = await supabase.from("faq_questions").insert({
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      question: parsed.data.question,
    });
    setLoading(false);

    if (error) {
      toast.error("Could not submit your question", { description: error.message });
      return;
    }
    setSubmitted(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        onOpenChange(o);
        if (!o) setTimeout(reset, 200);
      }}
    >
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-xl">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
            <h2 className="mt-5 font-serif text-3xl font-medium">Question received.</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Thanks for reaching out. We'll review your question and get back to you within
              one business day.
            </p>
            <Button className="mt-7 rounded-full" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl font-medium">
                Ask us a question
              </DialogTitle>
              <DialogDescription>
                Didn't find your answer? Send it over and we'll personally reply.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-5 py-2">
              <div className="grid gap-2">
                <Label htmlFor="aq-name">Full name *</Label>
                <Input
                  id="aq-name"
                  value={form.full_name}
                  onChange={(e) => update("full_name", e.target.value)}
                  aria-invalid={!!errors.full_name}
                  autoComplete="name"
                />
                {errors.full_name && (
                  <p className="text-xs text-destructive">{errors.full_name}</p>
                )}
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="aq-email">Email *</Label>
                  <Input
                    id="aq-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="aq-phone">Phone (optional)</Label>
                  <Input
                    id="aq-phone"
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
                <Label htmlFor="aq-question">Your question *</Label>
                <Textarea
                  id="aq-question"
                  value={form.question}
                  onChange={(e) => update("question", e.target.value)}
                  rows={5}
                  maxLength={2000}
                  aria-invalid={!!errors.question}
                  placeholder="What would you like to know about our services, scheduling, pricing, etc.?"
                />
                {errors.question && (
                  <p className="text-xs text-destructive">{errors.question}</p>
                )}
              </div>
            </div>

            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="rounded-full"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button onClick={submit} className="rounded-full" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
                  </>
                ) : (
                  "Send question"
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
