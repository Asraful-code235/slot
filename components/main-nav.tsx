"use client"

import * as React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { useQuery } from "@tanstack/react-query"
import { Search, SearchIcon } from "lucide-react"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"

import useSlot from "./hooks/useSlot"
import { Button } from "./ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "./ui/input"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const slots = useSlot()

  const handleSearch = (value: string) => {
    setSearchInput(value)

    if (value) {
      const results = slots.filter((slot: any) =>
        slot.title.toLowerCase().includes(value.toLowerCase())
      )
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  const handleLinkClick = () => {
    setIsDialogOpen(!isDialogOpen) // Close the dialog when link is clicked
  }
  return (
    <>
      <div className="flex w-full justify-between gap-6 text-white md:gap-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src={"/images/logo1.png"}
            alt="logo"
            width={200}
            height={100}
          />
        </Link>
        {items?.length ? (
          <nav className="flex items-center justify-center gap-6 max-[875px]:hidden">
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
            <form className="relative">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="ghost">
                    <SearchIcon className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Input
                        id="name"
                        type="text"
                        value={searchInput}
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder="Cerca una Slot o un produttore"
                        className="col-span-4"
                      />
                    </div>
                  </div>
                  <div className="">
                    {searchResults.length > 0 ? (
                      <div className="px-4 py-2  flex flex-col gap-4">
                        {searchResults.map((result: any, index: number) => (
                          <a
                            href={`/slot/${result?.slug?.current}`}
                            key={index}
                            onClick={handleLinkClick}
                            className="flex items-center justify-between gap-4"
                          >
                            <div className="flex items-center gap-4">
                              <img
                                src={urlForImage(result.mainImage).url()}
                                alt="slot__image"
                                className="w-10 h-10 object-cover object-center rounded-full"
                              />
                              <p className="text-base font-medium text-gray-600 line-clamp-1">
                                {result.title}
                              </p>
                            </div>
                            <p className="bg-gray-200 text-xs font-medium rounded-full px-2 py-1">
                              {result.category?.title}
                            </p>
                          </a>
                        ))}
                      </div>
                    ) : (
                      <div className="px-4 py-2">No results found</div>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </form>
          </nav>
        ) : null}
      </div>
    </>
  )
}
