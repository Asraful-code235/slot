"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import {
  ChatBubbleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline"
import { Helmet } from "react-helmet"

import useCasino from "@/components/hooks/useCasino"
import useMetadata from "@/components/hooks/useGetMetaData"
import useGetSlotCardsInSlotPage from "@/components/hooks/useGetSlotCardsInSlotPage"

type Props = {}

const CasinoPage = (props: Props) => {
  const homePageMetaData = useMetadata()
  const getHomeMeta = homePageMetaData?.find((m: any) => m.page === "/casino")

  const title = getHomeMeta?.title
  const desc = getHomeMeta?.desc

  const itemsPerPage = 10
  const {
    posts,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    isLoading,
  } = useCasino(itemsPerPage)

  const renderPageNumbers = () => {
    const pageNumbers = []
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => goToPage(i)}
          className={` p-2 px-4 rounded-md hover:bg-gray-100 ${
            currentPage === i ? "bg-gray-200 " : ""
          }`}
        >
          {i}
        </button>
      )
    }
    return pageNumbers
  }

  const { AllSlot: ShowCards } = useGetSlotCardsInSlotPage()

  // @ts-ignore
  const centerCards = ShowCards?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "center"
  )

  // Filter the cards with position "bcard"
  // @ts-ignore
  const belloCards = ShowCards?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "bcard"
  )

  // Filter the cards with position "rcard"
  // @ts-ignore
  const rightAlignedCards = ShowCards?.Cards?.filter(
    // @ts-ignore
    // @ts-ignore
    (card) => card.position === "rcard"
  )

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${desc}`} />
        <link rel="canonical" href={`https://slot-ndkk.vercel.app/casino`} />
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
                <Link className="text-red-500" href="/casino">
                  Casino
                </Link>
              </li>
            </ol>
          </nav>
        </section>
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
                  <ChevronRightIcon className="h-6 w-6 text-white" />
                </div>
              </div>
            </article>
          ))}
        </div>
        <section className=" grid grid-cols-1 gap-4 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:col-span-3 ">
            {posts?.slice(0, 1).map((guide, key) => (
              // @ts-ignore

              <Link
                href={`/casino/${guide.slug.current}`}
                key={key}
                className="space-y-4 p-4 "
              >
                <Image
                  width={1000}
                  height={250}
                  // @ts-ignore
                  src={urlForImage(guide?.mainImage).url()}
                  alt={guide.title}
                  className="mb-4 w-full aspect-[16/7] border border-transparent rounded-md object-cover object-center hover:opacity-70 hover:transition-opacity hover:duration-300"
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

            <div className="mt-16 space-y-6 md:space-y-2">
              {posts?.slice(1).map((guide, key) => (
                <Link
                  href={`/casino/${guide.slug.current}`}
                  // @ts-ignore
                  key={guide.slug + key}
                  className="flex  border border-gray-200 rounded-md flex-col md:flex-row items-start gap-4 space-y-4"
                >
                  <Image
                    width={400}
                    height={250}
                    // @ts-ignore
                    src={urlForImage(guide?.mainImage).url()}
                    alt={guide.title}
                    className="w-full aspect-video md:h-[300px] md:w-[340px] md:max-w-[350px] flex-1 rounded-md object-cover object-center hover:opacity-70 hover:transition-opacity hover:duration-300"
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
          <section className="col-span-1 mt-6 space-y-4">
            <h3 className="text-3xl font-extrabold text-red-500 ">
              Comparazione offerte di siti legali:
            </h3>
            <div className=" hidden w-full flex-wrap flex-col justify-center gap-4  md:flex">
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
                            <span className="text-sm text-gray-600">
                              {list}
                            </span>
                          </div>
                        </li>
                      ))}
                      <div className="mt-3 grid grid-cols-2 gap-3">
                        <button className="rounded-lg bg-red-500 px-4 py-1.5 text-white hover:bg-red-700">
                          VISITA IL SITO
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
        </section>
      </article>
      {totalPages > 0 ? (
        <div className="flex justify-center my-4 items-center gap-4">
          <button
            onClick={() => prevPage()}
            disabled={currentPage === 1}
            className={` p-2 rounded-full  ${
              currentPage === 1 ? "bg-gray-50" : "bg-gray-200"
            }`}
          >
            <ChevronLeftIcon
              className={`w-5 h-5 ${
                currentPage === 1 ? "text-gray-50" : "text-gray-600"
              }`}
            />
          </button>
          <div className="flex items-center gap-2">{renderPageNumbers()}</div>
          <button
            onClick={() => nextPage()}
            disabled={currentPage === totalPages}
            className={` p-2 rounded-full  ${
              currentPage === totalPages ? "bg-gray-50" : "bg-gray-200"
            }`}
          >
            <ChevronRightIcon
              className={`w-5 h-5 ${
                currentPage === totalPages ? "text-gray-50" : "text-gray-600"
              }`}
            />
          </button>
        </div>
      ) : null}
    </>
  )
}

export default CasinoPage
