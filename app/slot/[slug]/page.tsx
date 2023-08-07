"use client"

import React, { useState } from "react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import {
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react"
// @ts-ignore
import { Helmet } from "react-helmet"

import {
  useGetRelatedSlotByAuthor,
  useGetRelatedSlotByCategory,
  useGetSlotDetailsWithSlug,
} from "@/components/hooks/useGetSlotDetails"
import { formatDate } from "@/components/utils/utils"

import getSlotDetails from "../../../lib/getSlotDetails"

interface Props {
  params: {
    slug: string
  }
}

const BlogAndNewsDetailsPage = () => {
  const router = useParams()
  const [iframeLoaded, setIframeLoaded] = useState(false)

  const handleIframeLoad = () => {
    setIframeLoaded(true)
  }
  const slug = router?.slug
  const slotDetails = useGetSlotDetailsWithSlug(slug as string)
  // const category = slotDetails?.category?._id

  const authorId = slotDetails?.author?._ref

  const relatedPosts = useGetRelatedSlotByAuthor(authorId, slug as string)

  // @ts-ignore
  // const relatedPosts = useGetRelatedSlotByCategory(slug as string, category)

  if (!slotDetails) {
    return null
  }

  const BlockRenderer = (props: any) => {
    const { style = "normal", listItem, _type } = props.node

    if (style === "blockquote") {
      return <blockquote>- {props.children}</blockquote>
    }
    if (style === "h1") {
      return (
        <h2 style={{ color: "red", fontWeight: 800, fontSize: "20px" }}>
          {props.children}
        </h2>
      )
    }
    if (style === "h2") {
      return (
        <h2 style={{ color: "red", fontWeight: 700, fontSize: "18px" }}>
          {props.children}
        </h2>
      )
    }

    if (listItem == "bullet") {
      return <p style={{ color: "red", display: "none" }}>{props.children}</p>
    }

    if (_type == "span") {
      return <span style={{ color: "red" }}>{props.children}</span>
    }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
  }

  // Assuming slotDetails.Cards is an array of card objects

  const centerCards = slotDetails?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "center"
  )

  // Filter the cards with position "bcard"
  const belloCards = slotDetails?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "bcard"
  )

  // Filter the cards with position "rcard"
  const rightAlignedCards = slotDetails?.Cards?.filter(
    // @ts-ignore
    (card) => card.position === "rcard"
  )

  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <title>Slot | {slotDetails?.metaTitle}</title>
        <meta
          name="description"
          content={`${slotDetails?.metaDesc || "this is a description"}`}
        />
        <link
          rel="canonical"
          href={`https://slot-ndkk.vercel.app/slot/${slotDetails?.slug.current}`}
        />
      </Helmet>
      <section className=" mx-auto max-w-7xl px-8 pb-24">
        <nav className="my-8 font-bold text-black" aria-label="Breadcrumb">
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
            <li className="flex items-center text-red-500">
              <Link href="/slot">SLOT</Link>
              <svg
                className="mx-3 h-3 w-3 fill-current text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
              </svg>
            </li>
            <li className="line-clamp-1 whitespace-pre-wrap">
              <p className="text-gray-500" aria-current="page">
                {slotDetails?.title}
              </p>
            </li>
          </ol>
        </nav>
        <section className="col-span-4 flex flex-col gap-4 lg:col-span-3 ">
          <article className="space-y-4 text-justify tracking-tight text-gray-600">
            <div>
              <h1 className="line-clamp-2 whitespace-pre-wrap text-2xl font-bold md:text-3xl">
                {slotDetails?.title}
              </h1>
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon
                    key={index}
                    className={`h-5 w-5 ${
                      index < slotDetails?.rating
                        ? "text-orange-500"
                        : "text-gray-500"
                    }`}
                  />
                ))}
              </span>
            </div>

            <div className=" aspect-auto w-full">
              {!iframeLoaded && (
                <div className="overlay-button aspect-video w-full !rounded-md bg-gray-600 bg-opacity-75">
                  <div className="relative  !rounded-md">
                    <Image
                      src={urlForImage(slotDetails?.mainImage?.asset).url()}
                      alt={slotDetails.title}
                      width={300}
                      height={400}
                      className="aspect-video  w-full rounded-md object-cover  object-center"
                    />

                    <div className="overlay-button absolute inset-0 flex aspect-video w-full  items-center justify-center bg-gray-800 bg-opacity-50 backdrop-blur-sm">
                      <button
                        className="animate-pulse rounded-md  bg-red-500 px-8 py-4 text-white"
                        onClick={handleIframeLoad}
                      >
                        Clicca Qui per giocare Gratis
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {iframeLoaded && (
                <iframe
                  className="aspect-video w-full !rounded-md"
                  src={
                    slotDetails.href ||
                    "https://static-live.hacksawgaming.com/1160/1.24.0/index.html?language=it&amp;channel=desktop&amp;gameid=1160&amp;mode=2&amp;token=&amp;lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&amp;currency=EUR&amp;partner=demo&amp;env=https://rgs-demo.hacksawgaming.com/api"
                  }
                  onLoad={handleIframeLoad}
                ></iframe>
              )}
            </div>

            <div className="mt-4 flex items-center gap-x-4 text-xs">
              <time
                dateTime={slotDetails?.publishedAt}
                className="text-gray-500"
              >
                {formatDate(
                  // @ts-ignore
                  slotDetails?.publishedAt
                )}
              </time>
              <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                {slotDetails?.category.title}
              </p>
              {/* <Link
                  href={`/guide/${slotDetails?.guide?.slug.current}`}
                  className="relative z-10 rounded-md bg-red-500 px-4 py-1.5 font-medium text-white hover:bg-red-600"
                >
                  Guide
                </Link> */}
            </div>
          </article>
        </section>
        <article className="grid grid-cols-1 lg:grid-cols-4 lg:gap-4 ">
          {/* related */}
          <article className="grid-cols-1 lg:col-span-3 ">
            <div className="my-4">
              <div className=" mt-4 flex w-full flex-wrap  justify-center gap-4">
                {belloCards?.slice(0, 3).map((card: any, key: number) => (
                  <article
                    key={key}
                    style={{
                      backgroundColor: `${card.colors}`,
                    }}
                    className={`cardHoverEffect space-y-4 rounded-lg border border-gray-200  shadow-sm transition-transform duration-300 hover:scale-105`}
                  >
                    <div className="leading-2 flex items-center justify-center gap-4 p-4 text-sm font-medium text-white">
                      <Image
                        width={64}
                        height={64}
                        src={urlForImage(card?.image?.asset).url()}
                        alt="slot__cards"
                        className="aspect-square w-16 rounded-full border border-transparent object-cover object-center"
                      />
                      <div className="flex items-center justify-center gap-1 text-xs font-normal text-white">
                        <div className="flex flex-col gap-1 text-xs font-normal text-white">
                          <h3>Senza Deposito</h3>
                          <p>{card?.noDeposit}</p>
                          <h3>Con Deposito</h3>
                          <p>{card?.withDeposit}</p>
                        </div>
                        <a href={`${card.link}`}>
                      <ChevronRightIcon className="h-6 w-6 text-white" />
                    </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <BlockContent
              serializers={{ types: { block: BlockRenderer } }}
              blocks={slotDetails?.body}
              imageOptions={{ w: 1000, h: 600 }}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </article>

          <section className="col-span-4 w-full space-y-4 lg:col-span-1">
            <h2 className="my-4 text-2xl font-bold text-gray-600 md:mt-2 ">
              Related Posts
            </h2>
            {relatedPosts && (
              <section className="col-span-4 flex w-full flex-col items-center  justify-center gap-4 p-0">
                {relatedPosts.slice(0, 4).map((relatedPost: any) => (
                  <Link
                    href={`/slot/${relatedPost.slug.current}`}
                    key={relatedPost.slug.current}
                    className=" flex w-fit flex-col gap-4 rounded-md"
                  >
                    <Image
                      src={
                        // @ts-ignore
                        urlForImage(relatedPost?.mainImage?.asset).url() ||
                        "/images/image2.jpg"
                      }
                      width={400}
                      height={250}
                      className=" aspect-video rounded-md object-cover object-center "
                      alt={
                        relatedPost?.mainImage.alt || "blog-and-news-details"
                      }
                    />

                    <div className=" flex flex-col items-start gap-x-4 text-xs">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={relatedPost.publishedAt}
                          className="text-gray-500"
                        >
                          {formatDate(relatedPost.publishedAt)}
                        </time>
                        {/* <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {relatedPost?.category.title}
                        </p> */}
                        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {relatedPost?.author?.name}
                        </p>
                      </div>
                      <p className="line-clamp-2 font-semibold leading-4 text-gray-900 group-hover:text-gray-600">
                        {relatedPost.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </section>
            )}

            <div className=" hidden w-full flex-wrap justify-center gap-4  md:flex">
              {rightAlignedCards?.map((card: any, key: number) => (
                <article
                  key={key}
                  style={{
                    backgroundColor: `${card.colors}`,
                  }}
                  className={`cardHoverEffect space-y-4 rounded-lg border border-gray-200 bg-opacity-80  shadow-sm transition-transform duration-300 hover:scale-105`}
                >
                  <div className="leading-2 flex flex-col items-center justify-center gap-2 p-4 text-sm font-medium text-white">
                    <Image
                      width={64}
                      height={64}
                      src={urlForImage(card?.image?.asset).url()}
                      alt="slot__cards"
                      className="aspect-square w-16 rounded-full border border-transparent object-cover object-center"
                    />
                    <h3>Senza Deposito</h3>
                    <p>{card?.noDeposit}</p>
                    <h3>Con Deposito</h3>
                    <p>{card?.withDeposit}</p>
                  </div>
                  <div className="cardHoverEffectActive bg-white p-6 text-sm text-gray-500  transition-opacity duration-300 ">
                    <ul className="flex flex-col gap-2">
                      {card?.list?.map((list: any, key: number) => (
                        <li key={key} className="flex flex-col gap-3">
                          <div className="flex gap-3">
                            <InformationCircleIcon className="h-5 w-5 shrink-0 text-orange-500" />
                            <span>{list}</span>
                          </div>
                        </li>
                      ))}
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <button className="rounded-lg bg-red-500 px-4 py-1.5 text-white hover:bg-red-700">
                        <a href={`${card.link}`}>VISITA IL SITO</a>
                        </button>
                        <button className="rounded-lg bg-red-500 px-4 py-1.5 text-white hover:bg-red-700">
                          LEGGI LA GUIDA
                        </button>
                      </div>
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </article>
      </section>
    </>
  )
}

export default BlogAndNewsDetailsPage
