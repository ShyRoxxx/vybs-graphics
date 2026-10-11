import { WarningCircleIcon } from "@phosphor-icons/react/dist/ssr/WarningCircle";

export function LegalNote() {
  return (
    <div role="note" className="flex gap-4 rounded-[var(--radius-field)] bg-[#2a1f0c] p-5 text-[#f3d9a4] shadow-[inset_0_0_0_1px_rgba(243,217,164,.25)]">
      <WarningCircleIcon size={24} weight="fill" aria-hidden className="shrink-0" />
      <p className="text-sm leading-relaxed">
        <strong className="font-semibold">Platzhalter.</strong> Dieser Text ist kein geprüfter Rechtstext. Die endgültigen Angaben
        werden vor dem Livegang ergänzt. Angaben in eckigen Klammern sind noch offen.
      </p>
    </div>
  );
}
