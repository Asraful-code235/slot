"use client"

import Slider, { Settings } from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"

import useNewsPosts from "@/components/hooks/useNewsPosts"
import Guide from "@/components/slot/Guide"
import NewSlotMachines from "@/components/slot/NewSlotMachines"
import News from "@/components/slot/News"
import Poster from "@/components/slot/Poster"
import RedPoster from "@/components/slot/RedPoster"
import ThemeSection from "@/components/slot/ThemeSection"

type SlotMachine = {
  mainImage: any
  image: string
  title: string
  slug: string
  desc: string
}

export default function IndexPage() {
  const settings: Settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    cssEase: "linear",
  }

  return (
    <section className="-mt-1 pb-24">
      <div className="w-screen bg-white">
        <Slider {...settings}>
          <div className="h-[80vh] w-screen bg-red-500">
            <Image
              alt="slider__image"
              src={"/images/image1.jpg"}
              className="h-full w-full object-cover object-center"
              width={1000}
              height={500}
            />
          </div>
          <div className="h-[80vh] w-screen bg-red-500">
            <Image
              alt="slider__image"
              src={"/images/image2.jpg"}
              className="h-full w-full object-cover object-center"
              width={1000}
              height={500}
            />
          </div>
        </Slider>
      </div>
      <section className="bg-white py-16">
        <NewSlotMachines />
      </section>
      <News />
      <Poster />
      <ThemeSection />
      <RedPoster />
      <Guide />
    </section>
  )
}
