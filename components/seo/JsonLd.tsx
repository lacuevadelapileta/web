export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Datos generados server-side a partir de content/cueva.ts, sin input de usuario.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  )
}
