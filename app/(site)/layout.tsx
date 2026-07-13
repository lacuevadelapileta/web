import { Navbar } from "@/components/layout/Navbar"
import { NavSpacer } from "@/components/layout/NavSpacer"
import { Footer } from "@/components/layout/Footer"
import { ChatWidget } from "@/components/chat/ChatWidget"

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <NavSpacer />
      <main className="flex-1">{children}</main>
      <Footer />
      <ChatWidget />
    </div>
  )
}
