import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Props } from "next/script"

type SlotMachine = {
  image: string
  title: string
  slug: string
  desc: string
}

const News = (props: Props) => {
  const slotMachines: SlotMachine[] = [
    {
      image: "/images/image1.jpg",
      title:
        "The customer is very import , the customer will be followed by the customer",
      desc: "But in order that you may see whence all this roor arose: let there be the pleasure of the acuser",
      slug: "slot-machine-1",
    },
    {
      image: "/images/image1.jpg",
      desc: "But in order that you may see whence all this roor arose: let there be the pleasure of the acuser",

      title: "Slot Machine 2",
      slug: "slot-machine-2",
    },
    {
      image: "/images/image2.jpg",
      desc: "But in order that you may see whence all this roor arose: let there be the pleasure of the acuser",

      title: "Slot Machine 3",
      slug: "slot-machine-3",
    },
    {
      image: "/images/image1.jpg",
      desc: "But in order that you may see whence all this roor arose: let there be the pleasure of the acuser",

      title: "Slot Machine 4",
      slug: "slot-machine-4",
    },
    {
      image: "/images/image2.jpg",
      desc: "But in order that you may see whence all this roor arose: let there be the pleasure of the acuser",

      title: "Slot Machine 4",
      slug: "slot-machine-5",
    },
    {
      image: "/images/image1.jpg",
      desc: "But in order that you may see whence all this roor arose: let there be the pleasure of the acuser",

      title: "Slot Machine 4",
      slug: "slot-machine-6",
    },
    {
      image: "/images/image2.jpg",
      desc: "But in order that you may see whence all this roor arose: let there be the pleasure of the acuser",

      title: "Slot Machine 4",
      slug: "slot-machine-7",
    },
    // Add more objects as needed
  ]
  const settings = {
    dots: true,
    className: "center",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    initialSlide: 0,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="flex w-screen overflow-hidden flex-col items-center justify-center gap-8 bg-slate-100 py-16">
      <div className="space-y-2 text-center text-gray-600">
        <h1 className="text-2xl font-bold md:text-3xl">News</h1>
        <p className="text-lg font-medium">Latest News and events</p>
      </div>
      <div className=" max-w-7xl ">
        <Slider {...settings} responsive={settings.responsive}>
          {slotMachines.map((slotMachine) => (
            <div key={slotMachine.slug} className="max-w-sm relative p-4">
              <img
                src={slotMachine.image}
                alt={slotMachine.title}
                className="aspect-[10/7] rounded-md object-cover object-center"
              />
              <div className="p-2 text-lg font-medium text-gray-600 space-y-2">
                <h3 className="line-clamp-1">{slotMachine.title}</h3>
                <p className="text-sm text-gray-500 font-normal line-clamp-3">
                  {slotMachine.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default News
