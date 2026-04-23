import { SITE } from "@/lib/site";

/**
 * Renders the site phone number with the trailing "(5864)" digits
 * in a smaller, lighter font so the vanity "LUMI" stays primary.
 */
export function PhoneDisplay({ className }: { className?: string }) {
  // Split "(216) 939-LUMI (5864)" into vanity + numeric tail.
  const match = SITE.phoneDisplay.match(/^(.*?)(\s*\(\d+\))\s*$/);
  if (!match) return <>{SITE.phoneDisplay}</>;
  const [, main, tail] = match;
  return (
    <span className={className}>
      {main}
      <span className="ml-1 text-[0.75em] font-normal opacity-70">{tail.trim()}</span>
    </span>
  );
}
