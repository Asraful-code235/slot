"use client"

import React from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
// @ts-ignore
import { Helmet } from "react-helmet"

import useGuidePosts from "@/components/hooks/useGuidePosts"

type Props = {}

const GuidePage = (props: Props) => {
  const guide = useGuidePosts()
  console.log(guide)
  return (
    <>
      <Helmet>
        <title>Guide</title>
        <meta
          name="description"
          content="Here you can find all the guide for you slot games"
        />
      </Helmet>
      <article className="mx-auto max-w-7xl px-4 py-8 md:py-16">
        <section>
          <nav className=" font-bold text-black" aria-label="Breadcrumb">
            <ol className="inline-flex list-none truncate p-0 text-xs md:text-base ">
              <li className="flex items-center">
                <Link href="/">HOME</Link>
                <svg
                  className="mx-3 h-3 w-3 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
                </svg>
              </li>
              <li className="flex items-center">
                <Link className="text-red-500" href="/guide">
                  Guide
                </Link>
              </li>
            </ol>
          </nav>
        </section>
        <section className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="col-span-1 md:col-span-3">
            {guide?.slice(0, 1).map((guide, key) => (
              // @ts-ignore
              <Link
                href={`/guide/${guide.slug.current}`}
                key={key}
                className="space-y-4"
              >
                <Image
                  width={1000}
                  height={250}
                  // @ts-ignore
                  src={urlForImage(guide?.mainImage).url()}
                  alt={guide.title}
                  className="mb-4 aspect-video rounded-md object-cover object-center hover:opacity-70 hover:transition-opacity hover:duration-300"
                />
                <p className=" text-xl font-bold text-red-500">{guide.title}</p>
                <p className="text-left font-medium text-gray-600">
                  {guide.excerpt}{" "}
                  <p
                    className="font-bold text-sky-500
                "
                  >
                    see more
                  </p>
                </p>
              </Link>
            ))}

            <div className="mt-16 space-y-2">
              {guide?.slice(1).map((guide, key) => (
                <Link
                  href={`/guide/${guide.slug.current}`}
                  // @ts-ignore
                  key={guide.slug + key}
                  className="flex items-start gap-4 space-y-4"
                >
                  <Image
                    width={400}
                    height={250}
                    // @ts-ignore
                    src={urlForImage(guide?.mainImage).url()}
                    alt={guide.title}
                    className="h-[300px] w-[340px] max-w-[350px] flex-1 rounded-md object-cover object-center hover:opacity-70 hover:transition-opacity hover:duration-300"
                  />
                  <div className="flex flex-col gap-4">
                    <p className="text-xl font-bold text-red-500">
                      {guide.title}
                    </p>
                    <p className="line-clamp-3 text-left font-medium text-gray-600">
                      {guide.excerpt}{" "}
                    </p>
                    <p
                      className="-mt-2 font-bold text-sky-500
                "
                    >
                      see more
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 "></div>
        </section>
      </article>
    </>
  )
}

export default GuidePage
