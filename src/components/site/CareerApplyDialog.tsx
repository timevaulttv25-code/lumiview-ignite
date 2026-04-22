import { useState } from "react";
import { CheckCircle2, Loader2, Upload } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
    .min(1, "Phone number is required")
    .regex(phoneRegex, "Enter a valid US phone number")
    .max(40),
  role_applied: z.string().min(1, "Role is required").max(120),
  years_experience: z.string().min(1, "Please select an option"),
  availability: z.string().min(1, "Please select an option"),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
});

const ROLES = [
  "Window Cleaning Technician",
  "Pressure Washing Crew Member",
  "Janitorial Team Member",
  "Crew Lead",
  "Other / Open Application",
];

const EXPERIENCE = [
  "No experience (entry-level)",
  "Less than 1 year",
  "1–3 years",
  "3–5 years",
  "5+ years",
];

const AVAILABILITY = [
  "Immediately",
  "Within 2 weeks",
  "Within 1 month",
  "More than 1 month",
];

const MAX_RESUME_BYTES = 8 * 1024 * 1024; // 8 MB
const ACCEPTED_RESUME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export function CareerApplyDialog({
  open,
  onOpenChange,
  defaultRole,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: string;
}) {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    role_applied: defaultRole ?? "",
    years_experience: "",
    availability: "",
    message: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Sync defaultRole when dialog opens for a new role
  if (open && defaultRole && form.role_applied !== defaultRole && !submitted && !loading) {
    // only set once when role mismatches
    if (form.role_applied === "" || ROLES.includes(form.role_applied)) {
      // safe to reset
    }
  }

  const update = <K extends keyof typeof form>(key: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: "" }));
  };

  const handleResume = (file: File | null) => {
    if (!file) {
      setResume(null);
      return;
    }
    if (!ACCEPTED_RESUME_TYPES.includes(file.type)) {
      toast.error("Unsupported file type", { description: "Upload a PDF or Word document." });
      return;
    }
    if (file.size > MAX_RESUME_BYTES) {
      toast.error("File too large", { description: "Resume must be under 8 MB." });
      return;
    }
    setResume(file);
  };

  const reset = () => {
    setForm({
      full_name: "",
      email: "",
      phone: "",
      role_applied: defaultRole ?? "",
      years_experience: "",
      availability: "",
      message: "",
    });
    setResume(null);
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
    let resume_path: string | null = null;

    if (resume) {
      const ext = resume.name.split(".").pop() ?? "pdf";
      const safeName = resume.name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
      const path = `${Date.now()}-${crypto.randomUUID()}-${safeName.endsWith(ext) ? safeName : `${safeName}.${ext}`}`;
      const { error: uploadError } = await supabase.storage
        .from("resumes")
        .upload(path, resume, { contentType: resume.type, upsert: false });
      if (uploadError) {
        setLoading(false);
        toast.error("Could not upload resume", { description: uploadError.message });
        return;
      }
      resume_path = path;
    }

    const { error } = await supabase.from("career_applications").insert({
      full_name: parsed.data.full_name,
      email: parsed.data.email,
      phone: parsed.data.phone,
      role_applied: parsed.data.role_applied,
      years_experience: parsed.data.years_experience,
      availability: parsed.data.availability,
      message: parsed.data.message || null,
      resume_path,
    });
    setLoading(false);

    if (error) {
      toast.error("Could not submit application", { description: error.message });
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
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
        {submitted ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto h-14 w-14 text-accent" />
            <h2 className="mt-5 font-serif text-3xl font-medium">Application received.</h2>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Thanks for applying. We review every application and will be in touch within
              two business days if there's a fit.
            </p>
            <Button className="mt-7 rounded-full" onClick={() => onOpenChange(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-serif text-2xl font-medium">
                Apply for a role
              </DialogTitle>
              <DialogDescription>
                Tell us a little about yourself. Resume upload is optional but recommended.
              </DialogDescription>
            </DialogHeader>

            <div className="grid gap-5 py-2">
              <div className="grid gap-2">
                <Label htmlFor="ca-role">Role applying for *</Label>
                <Select
                  value={form.role_applied}
                  onValueChange={(v) => update("role_applied", v)}
                >
                  <SelectTrigger id="ca-role" aria-invalid={!!errors.role_applied}>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    {ROLES.map((r) => (
                      <SelectItem key={r} value={r}>
                        {r}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.role_applied && (
                  <p className="text-xs text-destructive">{errors.role_applied}</p>
                )}
              </div>

              <div className="grid gap-2">
                <Label htmlFor="ca-name">Full name *</Label>
                <Input
                  id="ca-name"
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
                  <Label htmlFor="ca-email">Email *</Label>
                  <Input
                    id="ca-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    aria-invalid={!!errors.email}
                    autoComplete="email"
                  />
                  {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ca-phone">Phone *</Label>
                  <Input
                    id="ca-phone"
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

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="grid gap-2">
                  <Label htmlFor="ca-exp">Experience *</Label>
                  <Select
                    value={form.years_experience}
                    onValueChange={(v) => update("years_experience", v)}
                  >
                    <SelectTrigger id="ca-exp" aria-invalid={!!errors.years_experience}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {EXPERIENCE.map((e) => (
                        <SelectItem key={e} value={e}>
                          {e}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.years_experience && (
                    <p className="text-xs text-destructive">{errors.years_experience}</p>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="ca-avail">Availability *</Label>
                  <Select
                    value={form.availability}
                    onValueChange={(v) => update("availability", v)}
                  >
                    <SelectTrigger id="ca-avail" aria-invalid={!!errors.availability}>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      {AVAILABILITY.map((a) => (
                        <SelectItem key={a} value={a}>
                          {a}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.availability && (
                    <p className="text-xs text-destructive">{errors.availability}</p>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="ca-resume">Resume (PDF or Word, optional, max 8 MB)</Label>
                <label
                  htmlFor="ca-resume"
                  className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-input bg-background px-3 py-3 text-sm hover:border-accent"
                >
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Upload className="h-4 w-4" />
                    {resume ? resume.name : "Choose a file"}
                  </span>
                  {resume && (
                    <span className="text-xs text-accent">
                      {(resume.size / 1024 / 1024).toFixed(2)} MB
                    </span>
                  )}
                </label>
                <input
                  id="ca-resume"
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  className="hidden"
                  onChange={(e) => handleResume(e.target.files?.[0] ?? null)}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="ca-msg">Anything else we should know?</Label>
                <Textarea
                  id="ca-msg"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={4}
                  maxLength={2000}
                  placeholder="Briefly: what makes you a fit, schedule notes, references…"
                />
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
                  "Submit application"
                )}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
