import * as React from "react"
import Image from "next/image"
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
    <div className="flex w-full justify-between gap-6 text-white md:gap-6">
      <Link href="/" className="flex items-center space-x-2">
        <Image src={"/images/logo1.png"} alt="logo" width={200} height={100} />
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
