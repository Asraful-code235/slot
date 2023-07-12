"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import useNewsPosts from "../hooks/useNewsPosts"
import { formatDate } from "../utils/utils"

const News = () => {
  const newsPosts = useNewsPosts()

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

  return (
    <div className="flex w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-slate-100 py-16">
      <div className="space-y-2 text-center text-gray-600">
        <h1 className="text-2xl font-bold md:text-3xl">Le Nuove uscite</h1>
        <p className="text-lg font-medium">Ultime notizie ed eventi</p>
      </div>
      <div
        className="max-w-5xl text-gray-600 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4
      "
      >
        {newsPosts?.map((post, key: number) => (
          // Rest of the code
          <div key={key} className="relative p-4 bg-white">
            <Link
              href={`/blog-and-news/${post.slug.current}`}
              className="hover:scale-[1.02] transition-all duration-300"
            >
              <Image
                // @ts-ignore
                src={urlForImage(post?.mainImage).url()}
                alt={post.title}
                width={640}
                height={300}
                className="aspect-video w-full rounded-md object-cover object-center hover:opacity-75 hover:transition-opacity hover:duration-300"
              />
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time dateTime={post.publishedAt} className="text-gray-500">
                  {formatDate(post.publishedAt)}
                </time>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {post?.author?.name}
                </p>
              </div>
              <div className="space-y-2  text-base font-medium text-gray-600">
                <h3 className="mt-3 line-clamp-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600  ">
                  {post.title}
                </h3>
                <div className="line-clamp-2 text-sm leading-6 text-gray-600 md:line-clamp-3 ">
                  {post.excerpt}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
