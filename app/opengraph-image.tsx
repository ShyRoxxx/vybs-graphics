import { ImageResponse } from "next/og";

export const alt = "Vybs Graphics – Social-Media-Design und Branding";
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
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 72,
          background: "radial-gradient(circle at 15% 10%, #1b6b8f 0%, #0d1420 45%, #070b12 100%)",
          color: "#f2f6fc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", right: -40, top: -40, width: 420, height: 420, borderRadius: 999, background: "radial-gradient(circle, rgba(92,200,255,0.35) 0%, rgba(92,200,255,0) 70%)" }} />
        <div style={{ fontSize: 28, color: "#5cc8ff", fontWeight: 700, letterSpacing: 4 }}>VYBS GRAPHICS</div>
        <div style={{ marginTop: 20, fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
          Professionelles Grafikdesign für dein Unternehmen.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#a4b4cc" }}>
          Feste Preise pro Design. Das erste Beispiel ist kostenlos.
        </div>
      </div>
    ),
    size,
  );
}
