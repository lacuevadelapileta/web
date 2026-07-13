import { ImageResponse } from "next/og"
import { loadGoogleFont } from "@/lib/og-font"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Cueva de la Pileta — Arte rupestre paleolítico en Benaoján, Málaga"

export default async function OpengraphImage() {
  const [playfair, playfairItalic, jakarta] = await Promise.all([
    loadGoogleFont("Playfair Display", 700, false),
    loadGoogleFont("Playfair Display", 700, true),
    loadGoogleFont("Plus Jakarta Sans", 600, false),
  ])

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 90px",
          background: "linear-gradient(135deg, #1A5F96 0%, #2A7FBC 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -80,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.12)",
            display: "flex",
          }}
        />

        <div
          style={{
            display: "flex",
            fontFamily: "Plus Jakarta Sans",
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#F59E0B",
          }}
        >
          Benaoján · Málaga · Serranía de Ronda
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 88,
            lineHeight: 1.05,
            color: "white",
          }}
        >
          <span style={{ fontFamily: "Playfair Display" }}>Cueva de la&nbsp;</span>
          <span
            style={{
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              color: "#F59E0B",
            }}
          >
            Pileta
          </span>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 26,
            fontFamily: "Plus Jakarta Sans",
            fontSize: 32,
            color: "rgba(255,255,255,0.88)",
            maxWidth: 820,
          }}
        >
          Arte rupestre de 40.000 años en el corazón de Andalucía
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 60,
            fontFamily: "Plus Jakarta Sans",
            fontSize: 24,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          cuevadelapileta.com
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair Display", data: playfair, style: "normal", weight: 700 },
        { name: "Playfair Display", data: playfairItalic, style: "italic", weight: 700 },
        { name: "Plus Jakarta Sans", data: jakarta, style: "normal", weight: 600 },
      ],
    }
  )
}
