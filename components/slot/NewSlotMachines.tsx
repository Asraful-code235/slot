"use client"

import { Props } from "next/script"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

type SlotMachine = {
  image: string
  title: string
  slug: string
}

const NewSlotMachines = (props: Props) => {
  const slotMachines: SlotMachine[] = [
    {
      image: "/images/image1.jpg",
      title: "Slot Machine 1",
      slug: "slot-machine-1",
    },
    {
      image: "/images/image2.jpg",
      title: "Slot Machine 2",
      slug: "slot-machine-2",
    },
    {
      image: "/images/image3.jpg",
      title: "Slot Machine 3",
      slug: "slot-machine-3",
    },
    {
      image: "/images/image3.jpg",
      title: "Slot Machine 4",
      slug: "slot-machine-4",
    },
    {
      image: "/images/image3.jpg",
      title: "Slot Machine 4",
      slug: "slot-machine-5",
    },
    {
      image: "/images/image3.jpg",
      title: "Slot Machine 4",
      slug: "slot-machine-6",
    },
    {
      image: "/images/image3.jpg",
      title: "Slot Machine 4",
      slug: "slot-machine-7",
    },
    // Add more objects as needed
  ]

  const settings = {
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
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
  return (
    <div className="mx-auto  flex max-w-7xl flex-col items-center justify-center gap-8">
      <div className="space-y-2 text-gray-600 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">New Slot Machines</h1>
        <p className="text-lg font-medium">
          Last update: March 08, 2023,Click on the game preview to play
        </p>
      </div>
      <div className="w-full">
        <Slider {...settings} responsive={settings.responsive}>
          {slotMachines.map((slotMachine) => (
            <div key={slotMachine.slug} className=" p-4">
              <img
                src={"/images/image1.jpg"}
                alt={slotMachine.title}
                className="aspect-square w-full rounded-md object-cover object-center"
              />
              <div className="p-2 text-lg font-medium text-gray-600">
                <h3>{slotMachine.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default NewSlotMachines
