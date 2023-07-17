"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen)
  }

  return (
    <header id="header" className="  z-40 w-full border-b bg-black">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="block min-[875px]:hidden">
          <Menu color="white" size={28} onClick={toggleMobileNav} />
        </div>
        {isMobileNavOpen && (
          <MobileNav
            items={siteConfig.mainNav}
            toggleMobileNav={toggleMobileNav}
          />
        )}
      </div>
    </header>
  )
}

// @ts-ignore
function MobileNav({ items, toggleMobileNav }) {
  return (
    <div className="max-[875px] ">
      <div className="absolute right-2 mt-10  w-48 rounded-md border border-white bg-black shadow-lg">
        <nav className="flex flex-col space-y-2 p-4">
          {items?.map((item: any, index: any) => (
            <Link key={index} href={item.href}>
              <p className="text-white hover:text-red-500">{item.title}</p>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}
