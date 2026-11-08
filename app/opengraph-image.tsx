import { ImageResponse } from "next/og";

export const alt = "Vybs Graphics – Grafikdesign aus Langenhagen für Social Media, Print und Logos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 48,
          background:
            "radial-gradient(640px 480px at 8% 12%, rgba(92,200,255,0.45), rgba(92,200,255,0) 70%), radial-gradient(560px 440px at 95% 5%, rgba(139,92,246,0.38), rgba(139,92,246,0) 70%), radial-gradient(640px 480px at 80% 100%, rgba(91,194,118,0.38), rgba(91,194,118,0) 70%), #e8edf7",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            padding: 56,
            borderRadius: 40,
            background: "rgba(255,255,255,0.62)",
            border: "2px solid rgba(255,255,255,0.85)",
            boxShadow: "0 30px 80px -30px rgba(30,41,82,0.35)",
            color: "#0f1424",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, fontWeight: 700, color: "#1667d9" }}>
            <div style={{ width: 12, height: 12, borderRadius: 99, background: "#1667d9" }} />
            Grafikdesign aus Langenhagen bei Hannover
          </div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 78, fontWeight: 800, lineHeight: 1.02, letterSpacing: -2.5 }}>
            <div>Professionelles Grafikdesign</div>
            <div style={{ color: "#1667d9" }}>für dein Unternehmen.</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontSize: 26, color: "#3c4459" }}>
            <div>Feste Preise ab 15 € · Erstes Beispiel kostenlos</div>
            <div style={{ fontWeight: 700, color: "#0f1424" }}>vybs-graphics.de</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
