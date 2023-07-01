"use client"

import "@/styles/globals.css"
import { Metadata } from "next"
import Head from "next/head"
import { MantineProvider } from "@mantine/core"
import { createGetInitialProps } from "@mantine/next"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import FooterPage from "@/components/Footer-component"
import { SiteHeader } from "@/components/site-header"

interface RootLayoutProps {
  children: React.ReactNode
}

const getInitialProps = createGetInitialProps()
const queryClient = new QueryClient()
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
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
          </MantineProvider>
        </QueryClientProvider>
      </html>
    </>
  )
}
