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
        <div style={{ position: "absolute", right: 60, top: 60, width: 220, height: 220, borderRadius: 999, background: "#5cc8ff", opacity: 0.18, filter: "blur(40px)" }} />
        <div style={{ fontSize: 28, color: "#5cc8ff", fontWeight: 700, letterSpacing: 4 }}>VYBS GRAPHICS</div>
        <div style={{ marginTop: 20, fontSize: 84, fontWeight: 800, lineHeight: 1, letterSpacing: -3 }}>
          Erst das Design. Dann die Entscheidung.
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#a4b4cc" }}>
          Social-Media-Design und Branding. Das erste Beispiel ist kostenlos.
        </div>
      </div>
    ),
    size,
  );
}
