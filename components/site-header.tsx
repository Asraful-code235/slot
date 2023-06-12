import Link from "next/link"
import { Menu } from "lucide-react"

import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-black">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="block min-[875px]:hidden">
          <Menu color="white" size={28} />
        </div>
      </div>
    </header>
  )
}
