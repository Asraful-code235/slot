"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { urlForImage } from "@/sanity/lib/image"
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react"
// @ts-ignore
import { Helmet } from "react-helmet"

import { useGetCasinoPostWithId } from "@/components/hooks/useGetCasinoPostWithId"
import {
  useGetNewsPostsWithId,
  useGetRelatedPostsByCategory,
} from "@/components/hooks/useGetNewsPostsWithId"
import {
  useGetPokerPostWithId,
  useGetRelatedPokerByCategory,
} from "@/components/hooks/useGetPokerPostWithId"
import { formatDate } from "@/components/utils/utils"

type Props = {}

const CasinoDetailsPage = () => {
  const router = useParams()

  const slug = router?.slug
  const newsDetails = useGetPokerPostWithId(slug as string)
  const category = newsDetails?.category?._id
  // @ts-ignore
  const relatedPosts = useGetRelatedPokerByCategory(slug as string, category)

  if (!newsDetails) {
    return null
  }

  console.log(newsDetails)
  return (
    <>
      <Helmet>
        <title>Slot | {newsDetails?.title}</title>
        <meta name="description" content={`${newsDetails?.title}`} />
        <link
          rel="canonical"
          href={`https://slot-ndkk.vercel.app/poker/${newsDetails?.title}`}
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
              <Link href="/poker">Poker</Link>
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
        <article className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <section className="col-span-4 flex flex-col gap-4 md:col-span-4 ">
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
                className="aspect-[16/7] w-full rounded-md object-cover object-center"
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
            <BlockContent
              blocks={newsDetails?.body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </section>

          {/* related */}
          <section className="col-span-4 w-full md:col-span-1">
            <h2 className="my-4 text-lg font-semibold text-gray-600 md:mt-2 ">
              Related Posts
            </h2>
            {relatedPosts ? (
              <section className="flex w-full flex-col gap-4 p-0">
                {relatedPosts?.map((relatedPost) => (
                  <Link
                    href={`/poker/${relatedPost?.slug?.current}`}
                    key={relatedPost?.slug?.current}
                    className=" flex w-full flex-col  gap-4"
                  >
                    <Image
                      src={
                        // @ts-ignore
                        urlForImage(relatedPost?.mainImage?.asset).url() ||
                        "/images/image2.jpg"
                      }
                      width={600}
                      height={400}
                      className=" w-full aspect-video  rounded-md  object-cover object-center"
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
                        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {relatedPost?.category?.title}
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
          </section>
        </article>
      </section>
    </>
  )
}

export default CasinoDetailsPage
