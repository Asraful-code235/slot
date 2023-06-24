import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="flex w-full justify-between gap-6 text-white md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6 max-[875px]:hidden">
          {items?.map((item, index) => {
            const isActive = item.href === pathname
            return (
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={`flex items-center text-sm font-medium ${
                    isActive ? "font-bold text-red-500" : ""
                  }`}
                >
                  {item.title}
                </Link>
              )
            )
          })}
        </nav>
      ) : null}
    </div>
  )
}
