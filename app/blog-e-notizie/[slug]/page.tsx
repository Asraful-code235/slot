"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { urlForImage } from "@/sanity/lib/image"
import {
  ChevronRightIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline"
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react"
// @ts-ignore
import { Helmet } from "react-helmet"

import { useGetRelatedCasinoByCategory } from "@/components/hooks/useGetCasinoPostWithId"
import {
  useGetNewsPostsWithId,
  useGetRelatedNewseByAuthor,
  useGetRelatedPostsByCategory,
} from "@/components/hooks/useGetNewsPostsWithId"
import { formatDate } from "@/components/utils/utils"

type Props = {}

const BlogAndNewsDetailsPage = () => {
  const router = useParams()

  const slug = router?.slug
  const newsDetails = useGetNewsPostsWithId(slug as string)

  const authorId =
    // @ts-ignore
    newsDetails?.author?._ref

  const relatedPosts = useGetRelatedNewseByAuthor(authorId, slug as string)

  // @ts-ignore
  const centerCards = newsDetails?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "center"
  )

  // Filter the cards with position "bcard"
  // @ts-ignore
  const belloCards = newsDetails?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "bcard"
  )

  // Filter the cards with position "rcard"
  // @ts-ignore
  const rightAlignedCards = newsDetails?.Cards?.filter(
    // @ts-ignore
    // @ts-ignore
    (card) => card.position === "rcard"
  )

  if (!newsDetails) {
    return null
  }

  return (
    <>
      <Helmet>
        <title>Slot | {newsDetails?.title}</title>
        <meta name="description" content={`${newsDetails?.title}`} />
        <link
          rel="canonical"
          href={`https://slot-ndkk.vercel.app/blog-e-notizie/${newsDetails?.title}`}
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
              <Link href="/blog-e-notizie">BLOG E NOTIZiE</Link>
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
                {newsDetails?.title}
              </p>
            </li>
          </ol>
        </nav>
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
        <article className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <section className="col-span-4 flex flex-col gap-4 md:col-span-3 ">
            <article className="space-y-4 text-justify tracking-tight text-gray-600">
              <h1 className="line-clamp-2 whitespace-pre-wrap text-2xl font-bold text-red-500 md:text-3xl">
                {newsDetails?.title}
              </h1>
              <Image
                src={
                  // @ts-ignore
                  urlForImage(newsDetails?.mainImage?.asset).url() ||
                  "/images/image2.jpg"
                }
                width={700}
                height={600}
                className="aspect-video w-full rounded-md object-cover object-center"
                alt={newsDetails?.mainImage?.alt || "blog-and-news-details"}
              />
              <div className="mt-4 flex items-center gap-x-4 text-xs">
                <time
                  dateTime={newsDetails?.publishedAt}
                  className="text-gray-500"
                >
                  {formatDate(
                    // @ts-ignore
                    newsDetails?.publishedAt
                  )}
                </time>
                <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                  {newsDetails?.category?.title}
                </p>
              </div>
            </article>
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
                          <ChevronRightIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <BlockContent
                blocks={newsDetails?.body}
                imageOptions={{ w: 320, h: 240, fit: "max" }}
                projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              />
            </article>
          </section>

          {/* related */}
          <section className="col-span-4 w-full md:col-span-1">
            <h2 className="my-4 text-lg font-semibold text-gray-600 md:mt-2 ">
              Related Posts
            </h2>
            {relatedPosts ? (
              <section className="flex w-full flex-col gap-4 p-0">
                {relatedPosts?.map((relatedPost: any) => (
                  <Link
                    href={`/blog-e-notizie/${relatedPost?.slug?.current}`}
                    key={relatedPost?.slug?.current}
                    className=" flex w-full flex-col  gap-4"
                  >
                    <Image
                      src={
                        // @ts-ignore
                        urlForImage(relatedPost?.mainImage?.asset).url() ||
                        "/images/image2.jpg"
                      }
                      width={400}
                      height={250}
                      className=" w--[280px] h-[200px] rounded-md  object-cover object-center"
                      alt={
                        relatedPost?.mainImage?.alt || "blog-and-news-details"
                      }
                    />

                    <article className=" flex flex-col items-start gap-x-4 text-xs">
                      <div className="flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={relatedPost?.publishedAt}
                          className="text-gray-500"
                        >
                          {formatDate(relatedPost?.publishedAt)}
                        </time>
                        {/* <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {relatedPost?.category?.title}
                        </p> */}
                        <p className="relative z-10 capitalize rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {relatedPost?.author?.name}
                        </p>
                      </div>
                      <p className="line-clamp-2 font-semibold leading-4 text-red-500 group-hover:text-gray-600">
                        {relatedPost?.title}
                      </p>
                    </article>
                  </Link>
                ))}
              </section>
            ) : null}
            <div className=" hidden w-full flex-wrap justify-center gap-4  md:flex mt-8">
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
        </article>
      </section>
    </>
  )
}

export default BlogAndNewsDetailsPage
