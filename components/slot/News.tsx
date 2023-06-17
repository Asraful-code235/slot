"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
// @ts-ignore
import Carousel from "react-grid-carousel"

// requires a loader

import useNewsPosts from "../hooks/useNewsPosts"
import { formatDate } from "../utils/utils"

const News = () => {
  const newsPosts = useNewsPosts()
  return (
    <div className="flex w-screen flex-col items-center justify-center gap-8 overflow-hidden bg-slate-100 py-16">
      <div className="space-y-2 text-center text-gray-600">
        <h1 className="text-2xl font-bold md:text-3xl">News</h1>
        <p className="text-lg font-medium">Latest News and events</p>
      </div>
      <div className="max-w-5xl text-gray-600">
        <Carousel
          showDots={true}
          responsiveLayout={[
            { breakpoint: 1000, cols: 3, gap: 10, autoplay: 2000, loop: true },
            {
              breakpoint: 675,
              cols: 2,
              rows: 1,
              gap: 10,
              autoplay: 2000,
              loop: true,
            },
            { breakpoint: 499, cols: 1, rows: 1, autoplay: 2000, loop: true },
          ]}
          cols={3}
          rows={1}
          gap={10}
          loop
        >
          {newsPosts?.map((post, key: number) => (
            // Rest of the code
            <Carousel.Item key={key} className="relative p-4 ">
              <Link href={`/blog-and-news/${post.slug.current}`} className="">
                <Image
                  // @ts-ignore
                  src={urlForImage(post?.mainImage).url()}
                  alt={post.title}
                  width={640}
                  height={300}
                  className="aspect-square w-full rounded-md object-cover object-center"
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
                  <h3 className="mt-3 line-clamp-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 ">
                    {post.title}
                  </h3>
                  <div className="line-clamp-2 text-sm leading-6 text-gray-600 md:line-clamp-3">
                    {post.excerpt}
                  </div>
                </div>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default News
