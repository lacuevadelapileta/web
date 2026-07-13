import { readFileSync } from "fs"
import { join } from "path"
import { ImageResponse } from "next/og"
import { loadGoogleFont } from "@/lib/og-font"

export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Cueva de la Pileta — Arte rupestre paleolítico en Benaoján, Málaga"

export default async function OpengraphImage() {
  const playfairItalic = await loadGoogleFont("Playfair Display", 700, true)

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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4F8FD",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={480} height={480} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontFamily: "Playfair Display",
            fontStyle: "italic",
            fontSize: 56,
            color: "#1A5F96",
          }}
        >
          Cueva de la Pileta
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Playfair Display", data: playfairItalic, style: "italic", weight: 700 },
      ],
    }
  )
}
