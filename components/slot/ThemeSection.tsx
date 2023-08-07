"use client"

import { useState } from "react"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { StarIcon } from "@heroicons/react/24/solid"

import useSortedSlots from "../hooks/useGetSortedSlots"
import useSlot from "../hooks/useSlot"

type Props = {}

const ThemeSection = (props: Props) => {
  // @ts-ignore
  const slotMachines = useSortedSlots()

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredSlotMachines =
    selectedCategory && selectedCategory !== "ALL"
      ? slotMachines.sortedSlots.filter((slotMachine: any) =>
          slotMachine.category.title
            .toLowerCase()
            .includes(selectedCategory.toLowerCase())
        )
      : slotMachines?.sortedSlots

  const settings = {
    dots: true,
    infinite: true,

    speed: 500,
    slidesToShow:
      filteredSlotMachines?.length > 6
        ? 6
        : filteredSlotMachines?.length > 4
        ? 4
        : filteredSlotMachines?.length >= 2
        ? 2
        : 1,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 7000,
    initialSlide: 2,
    cssEase: "linear",
    centerMode: true,

    responsive: [
      {
        breakpoint: 946,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: true,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  }

  return (
    <section className="mx-auto max-w-7xl space-y-6 bg-white py-16 pb-24">
      <div className="space-y-2 text-center text-gray-600">
        <h1 className="text-2xl font-bold md:text-3xl">slot divise per tema</h1>
        <p className="text-base font-normal">slot della settimana</p>
      </div>
      <div className="mx-auto w-fit">
        <div className="flex items-center gap-2 divide-x divide-gray-200 rounded-full border border-gray-200 px-4 py-2">
          {["FRUIT", "EGYPT", "ANIMALS", "SLOT", "ALL"].map((category, key) => (
            <p
              key={key}
              className={`px-4 text-sm font-medium text-gray-600 ${
                selectedCategory === category ? "text-blue-500" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </p>
          ))}
        </div>
      </div>
      <div className="max-w-full mx-auto px-6">
        <Slider
          {...settings}
          responsive={settings.responsive}
          className="flex items-center"
        >
          {filteredSlotMachines &&
            filteredSlotMachines.map((slotMachine: any, key: number) => (
              <Link
                href={`/slot/${slotMachine.slug.current}`}
                key={key}
                className=" p-2 "
              >
                <Image
                  width={288}
                  height={358}
                  src={urlForImage(slotMachine?.mainImage).url()}
                  alt={slotMachine?.mainImage?.alt || slotMachine.title}
                  className="aspect-square h-[258px] w-full rounded-md object-center object-cover"
                />
                <div className="py-2 text-left text-lg font-medium text-gray-600 ">
                  <div className="flex items-center gap-1">
                    <div className="w-full flex items-center justify-between gap-1 text-sm ">
                      <p className="bg-gray-100 rounded-full text-gray-600 px-2 py-0.5">
                        #{slotMachine?.category.title}
                      </p>
                      <div className="flex items-center gap-1">
                        {slotMachine?.rating}
                        <StarIcon className="h-5 w-5 text-orange-500" />
                      </div>
                    </div>
                  </div>
                  <h3 className="truncate text-xs font-bold text-left ">
                    {slotMachine.title}
                  </h3>
                </div>
              </Link>
            ))}
        </Slider>
      </div>
    </section>
  )
}

export default ThemeSection
