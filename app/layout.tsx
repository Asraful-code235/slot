"use client"

import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import FooterPage from "@/components/Footer-component"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "CobraSito - Sito di Casino",
  description:
    "Benvenuti al sito di casino CobraSito, dove puoi trovare una vasta selezione di slot machine e tanto divertimento. Scopri le nostre nuove slot, le ultime notizie del settore e tanto altro.",
}

interface RootLayoutProps {
  children: React.ReactNode
}

const queryClient = new QueryClient()
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <Head>Slot</Head>
          <body
            className={cn(
              "min-h-screen overflow-x-hidden bg-background font-sans antialiased",
              fontSans.variable
            )}
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1">{children}</main>
              <FooterPage />
            </div>
          </body>
        </QueryClientProvider>
      </html>
    </>
  )
}
