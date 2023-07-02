"use client"

import "@/styles/globals.scss"
import { Metadata } from "next"
import Head from "next/head"
import Link from "next/link"
import { ArrowUpIcon } from "@heroicons/react/24/outline"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import FooterPage from "@/components/Footer-component"
import { SiteHeader } from "@/components/site-header"

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
              "min-h-screen overflow-x-hidden bg-background font-sans  relative",
              fontSans.variable
            )}
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1 !overflow-x-hidden">{children}</main>
              <div className="border border-transparent shadow bg-gray-700  cursor-pointer text-white p-2 opacity-60 hover:opacity-100 rounded-full fixed right-8 bottom-8">
                <Link href="/">
                  <ArrowUpIcon className="w-5 h-5 text-white  " />
                </Link>
              </div>
              <FooterPage />
            </div>
          </body>
        </QueryClientProvider>
      </html>
    </>
  )
}
