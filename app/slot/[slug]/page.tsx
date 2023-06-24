"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { urlForImage } from "@/sanity/lib/image"
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react"
// @ts-ignore
import { Helmet } from "react-helmet"

import {
  useGetRelatedSlotByCategory,
  useGetSlotDetailsWithSlug,
} from "@/components/hooks/useGetSlotDetails"
import { formatDate } from "@/components/utils/utils"

type Props = {}

const BlogAndNewsDetailsPage = () => {
  const { slug } = useParams()
  const slotDetails = useGetSlotDetailsWithSlug(slug)
  const category = slotDetails?.category?._id
  // @ts-ignore
  const relatedPosts = useGetRelatedSlotByCategory(slug, category)

  if (!slotDetails) {
    return null
  }

  return (
    <>
      <Helmet>
        <title>Slot | {slotDetails?.title}</title>
        <meta name="description" content={`${slotDetails?.title}`} />
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
            <li className="flex items-center">
              <Link href="/slot">SLOT</Link>
              <svg
                className="mx-3 h-3 w-3 fill-current"
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
        <article className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <section className="col-span-4 flex flex-col gap-4 md:col-span-3 ">
            <article className="space-y-4 text-justify tracking-tight text-gray-600">
              <h1 className="line-clamp-2 whitespace-pre-wrap text-2xl font-bold md:text-3xl">
                {slotDetails?.title}
              </h1>

              <div className="w-full aspect-auto col-span-3">
                <iframe
                  className="w-full aspect-video"
                  src={
                    slotDetails.href ||
                    "https://static-live.hacksawgaming.com/1160/1.24.0/index.html?language=it&amp;channel=desktop&amp;gameid=1160&amp;mode=2&amp;token=&amp;lobbyurl=https%3A%2F%2Fwww.hacksawgaming.com&amp;currency=EUR&amp;partner=demo&amp;env=https://rgs-demo.hacksawgaming.com/api"
                  }
                ></iframe>
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
                <Link
                  href={`/guide/${slotDetails?.guide?.slug.current}`}
                  className="relative z-10 rounded-md bg-red-500 px-4 py-1.5 font-medium text-white hover:bg-red-600"
                >
                  Guide
                </Link>
              </div>
            </article>
            <BlockContent
              blocks={slotDetails?.body}
              imageOptions={{ w: 320, h: 240, fit: "max" }}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            />
          </section>

          {/* related */}
          <section className="col-span-4 w-full md:col-span-1">
            <h2 className="my-4 text-2xl font-bold text-gray-600 md:mt-2 ">
              Related Posts
            </h2>
            {relatedPosts && (
              <section className="flex w-full items-center justify-center col-span-4  flex-col gap-4 p-0">
                {relatedPosts.map((relatedPost: any) => (
                  <article
                    key={relatedPost.slug.current}
                    className=" flex flex-col gap-4 w-fit rounded-md"
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
                        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {relatedPost?.category.title}
                        </p>
                      </div>
                      <Link
                        href={`/blog-and-news/${relatedPost.slug.current}`}
                        className="line-clamp-2 font-semibold leading-4 text-gray-900 group-hover:text-gray-600"
                      >
                        {relatedPost.title}
                      </Link>
                    </div>
                  </article>
                ))}
              </section>
            )}
          </section>
        </article>
      </section>
    </>
  )
}

export default BlogAndNewsDetailsPage
