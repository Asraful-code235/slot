"use client"

import "@/styles/globals.scss"
import { Metadata } from "next"
import Head from "next/head"
import Link from "next/link"
import { usePathname } from "next/navigation"
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
  const pathname = usePathname()
  console.log("pathname", pathname)
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
          <Head>Slot</Head>
          <body
            className={cn(
              "bg-background relative min-h-screen overflow-x-hidden  font-sans",
              fontSans.variable
            )}
          >
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <main className="flex-1 !overflow-x-hidden">{children}</main>
              <div className="fixed bottom-[72px] right-8 cursor-pointer  rounded-full border border-transparent bg-gray-700 p-2 text-white opacity-60 shadow hover:opacity-100">
                <Link href={`${pathname}`}>
                  <ArrowUpIcon className="h-5 w-5 text-white  " />
                </Link>
              </div>
              <div className="mt-16">
                <FooterPage />
              </div>
            </div>
          </body>
        </QueryClientProvider>
      </html>
    </>
  )
}
