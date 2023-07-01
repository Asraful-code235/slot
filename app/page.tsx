"use client"

import { useRef } from "react"
import { Metadata } from "next"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"
import { Carousel } from "@mantine/carousel"
import { rem } from "@mantine/core"
import Autoplay from "embla-carousel-autoplay"
import { Helmet } from "react-helmet"

import Guide from "@/components/slot/Guide"
import NewSlotMachines from "@/components/slot/NewSlotMachines"
import News from "@/components/slot/News"
import Poster from "@/components/slot/Poster"
import RedPoster from "@/components/slot/RedPoster"
import ThemeSection from "@/components/slot/ThemeSection"

const items = [
  {
    img: "/images/image2.jpg",
  },
  {
    img: "/images/image1.jpg",
  },
]

export default function IndexPage() {
  const autoplay = useRef(Autoplay({ delay: 7000 }))

  return (
    <>
      <Helmet>
        <title>Cobra Sito</title>
        <meta
          name="description"
          content="Esplora una vasta selezione di slot online su cobra sito. Goditi l'emozione dei giochi di slot con grafica coinvolgente, funzioni speciali e la possibilità di vincere premi fantastici. Registrati ora per un'esperienza di gioco indimenticabile!"
        />
      </Helmet>
      <section className="-mt-1 ">
        <div className=" ">
          <Carousel
            // maw={320}
            mx="auto"
            loop
            dragFree
            withIndicators
            // height={200}
            speed={5000}
            plugins={[autoplay.current]}

            // onMouseEnter={autoplay.current.stop}
            // onMouseLeave={autoplay.current.reset}
          >
            {items.map((item) => (
              <Carousel.Slide key={item.img}>
                <Image
                  alt="slider__image"
                  src={item.img}
                  className="aspect-video w-full object-cover object-center sm:aspect-[16/5] "
                  width={1000}
                  height={1000}
                  priority
                />
              </Carousel.Slide>
            ))}
          </Carousel>

          {/* <Slider {...settings}>
            <div className="  ">
              <Image
                alt="slider__image"
                src={"/images/image1.jpg"}
                className="w-full aspect-[16/5] object-cover object-center"
                width={600}
                height={500}
                priority
              />
            </div>
            <div className=" ">
              <Image
                alt="slider__image"
                src={"/images/image2.jpg"}
                className="w-full aspect-[16/5] object-cover object-center"
                width={1000}
                height={500}
                priority
              />
            </div>
          </Slider> */}
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
    </>
  )
}
