import { ImageResponse } from "next/og"
import { loadGoogleFont } from "@/lib/og-font"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default async function Icon() {
  const font = await loadGoogleFont("Playfair Display", 700, true)
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1A5F96",
          color: "#F59E0B",
          fontFamily: "Playfair Display",
          fontStyle: "italic",
          fontSize: 24,
        }}
      >
        P
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Playfair Display", data: font, style: "italic", weight: 700 }],
    }
  )
}
