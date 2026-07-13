import { readFileSync } from "fs"
import { join } from "path"
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

  const logoData = readFileSync(
    join(process.cwd(), "public/img/logo/yegua-logo.png")
  ).toString("base64")
  const logoSrc = `data:image/png;base64,${logoData}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
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
            alignItems: "center",
            justifyContent: "center",
            width: 220,
            height: 220,
            borderRadius: 32,
            background: "white",
            boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={160} height={160} alt="" />
        </div>

        <div style={{ display: "flex", flexDirection: "column", marginLeft: 56 }}>
          <div
            style={{
              display: "flex",
              fontFamily: "Plus Jakarta Sans",
              fontSize: 22,
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
              marginTop: 20,
              fontSize: 72,
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
              marginTop: 22,
              fontFamily: "Plus Jakarta Sans",
              fontSize: 28,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 700,
            }}
          >
            Arte rupestre de 40.000 años en el corazón de Andalucía
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontFamily: "Plus Jakarta Sans",
              fontSize: 22,
              color: "rgba(255,255,255,0.65)",
            }}
          >
            cuevadelapileta.com
          </div>
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
