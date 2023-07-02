"use client"

import Image from "next/image"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Helmet } from "react-helmet"
// requires a loader
import { Carousel } from "react-responsive-carousel"

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
    img: "/images/image1.png",
  },
]

export default function IndexPage() {
  return (
    <>
      <Helmet>
        <title>Cobra Sito</title>
        <meta
          name="description"
          content="Esplora una vasta selezione di slot online su cobra sito. Goditi l'emozione dei giochi di slot con grafica coinvolgente, funzioni speciali e la possibilità di vincere premi fantastici. Registrati ora per un'esperienza di gioco indimenticabile!"
        />
      </Helmet>
      <section className="w-screen mx-auto">
        <div className=" w-[100vw] mx-auto   ">
          <Carousel autoPlay infiniteLoop interval={5000} className=" w-full ">
            {items.map((item) => (
              <div key={item.img}>
                <Image
                  alt="slider__image"
                  src={item.img}
                  className=" w-full  object-cover h-full aspect-video md:aspect-[16/6]"
                  width={1000}
                  height={800}
                  priority
                />
              </div>
            ))}
          </Carousel>
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
