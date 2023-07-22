"use client"

import { Props } from "next/script"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { StarIcon } from "@heroicons/react/24/solid"

import useSortedSlots from "../hooks/useGetSortedSlots"
import useSlot from "../hooks/useSlot"

type SlotMachine = {
  image: string
  title: string
  slug: string
}

const NewSlotMachines = (props: Props) => {
  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    initialSlide: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const sortedslots = useSortedSlots()

  return (
    <div className="mx-auto  flex max-w-6xl flex-col items-center justify-center gap-8">
      <div className="space-y-2 text-center text-gray-600">
        <h1 className="text-2xl font-bold md:text-3xl">
          Le Migliori Slot del momento
        </h1>
        <p className="text-lg font-bold">slot della settimana</p>
      </div>
      <div className="w-full">
        <Slider {...settings} responsive={settings.responsive}>
          {sortedslots?.sortedSlots?.map((slot: any) => (
            <Link
              href={`/slot/${slot.slug.current}`}
              key={slot.slug}
              className=" p-2 "
            >
              <Image
                width={288}
                height={358}
                src={urlForImage(slot?.mainImage).url()}
                alt={slot.title}
                className="aspect-square h-[228px] w-full rounded-md object-center object-cover"
              />
              <div className="py-2 text-left text-lg font-medium text-gray-600 ">
                <div className="flex items-center gap-1">
                  <div className="w-full flex items-center justify-between gap-1 text-sm ">
                    <p className="bg-gray-100 rounded-full text-gray-600 px-2 py-0.5">
                      #{slot?.category.title}
                    </p>
                    <div className="flex items-center gap-1">
                      {slot?.rating}
                      <StarIcon className="h-5 w-5 text-orange-500" />
                    </div>
                  </div>
                </div>
                <h3 className="truncate text-xs font-bold text-left ">
                  {slot.title}
                </h3>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default NewSlotMachines
