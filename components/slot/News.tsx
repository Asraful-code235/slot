"use client"

import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Props } from "next/script"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { groq } from "next-sanity"

type SlotMachine = {
  mainImage: any
  image: string
  title: string
  slug: string
  desc: string
}

const News = ({ posts }: { posts: SlotMachine[] }) => {
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
  console.log(posts)

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-slate-100 py-16">
      <div className="space-y-2 text-center text-gray-600">
        <h1 className="text-2xl font-bold md:text-3xl">News</h1>
        <p className="text-lg font-medium">Latest News and events</p>
      </div>
      <div className="max-w-7xl">
        <Slider {...settings} responsive={settings.responsive}>
          {posts?.map((post: any, key: number) => (
            <div key={post.title} className="relative max-w-xs p-4">
              <Image
                src={urlForImage(post?.mainImage).url()}
                alt={post.title}
                width={420}
                height={300}
                className="h-60 w-96 rounded-md object-cover object-center"
              />
              <div className="space-y-2 p-2 text-lg font-medium text-gray-600">
                <h3 className="line-clamp-1">{post?.title}</h3>
                <p className="line-clamp-3 text-sm font-normal text-gray-500">
                  {/* {post.desc} */}
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
