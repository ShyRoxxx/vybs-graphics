import type { LegalSection } from "@/lib/legal";

const placeholder = /^\[.*\]$|(\[[^\]]+\])/;

function Paragraph({ text }: { text: string }) {
  const lines = text.split("\n");
  // Offene Pflichtangaben in eckigen Klammern werden sichtbar hervorgehoben, damit sie nicht untergehen.
  const parts = text.split(/(\[[^\]]+\])/g).filter(Boolean);
  if (!placeholder.test(text)) {
    return (
      <p className="text-text-2">
        {lines.map((l, i) => (
          <span key={i}>
            {l}
            {i < lines.length - 1 && <br />}
          </span>
        ))}
      </p>
    );
  }
  return (
    <p className="text-text-2">
      {parts.map((part, i) =>
        part.startsWith("[") ? (
          <mark key={i} className="rounded bg-[#2a1f0c] px-1.5 py-0.5 text-[#f3d9a4]">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </p>
  );
}

export function LegalText({ sections }: { sections: LegalSection[] }) {
  return (
    <div className="space-y-10">
      {sections.map((s) => (
        <section key={s.heading} aria-labelledby={`legal-${s.heading.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
          <h2 id={`legal-${s.heading.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`} className="text-[1.5rem] text-text md:text-[1.75rem]">
            {s.heading}
          </h2>
          <div className="mt-4 space-y-4">
            {s.paragraphs.map((p, i) => (
              <Paragraph key={i} text={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
