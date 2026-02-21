import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "7on",
  description: "Welcome to the era of having your own Jarvis",
  generator: "v0.app",
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased`} suppressHydrationWarning>
        <Header />
        {children}
        <footer className="relative z-10 border-t border-white/10 py-6 px-6">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs text-white/30">
            <span>© {new Date().getFullYear()} 7on</span>
            <div className="flex items-center gap-6">
              <a href="mailto:ap@7on.ai" className="hover:text-white/60 transition-colors">
                Contact
              </a>
              <a href="/privacy" className="hover:text-white/60 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-white/60 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
