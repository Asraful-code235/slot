"use client"

import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import { InformationCircleIcon } from "@heroicons/react/24/outline"
import { StarIcon } from "@heroicons/react/24/solid"
import { PortableText } from "@portabletext/react"
// @ts-ignore
import BlockContent from "@sanity/block-content-to-react"
import { Helmet } from "react-helmet"

import useBonus from "@/components/hooks/useGetBonus"
import useMetadata from "@/components/hooks/useGetMetaData"

export default function BonusPage() {
  const homePageMetaData = useMetadata()
  const getHomeMeta = homePageMetaData?.find(
    (m: any) => m.page === "/migliori-bonus-casino"
  )

  const title = getHomeMeta?.title
  const desc = getHomeMeta?.desc

  const bonus = useBonus()

  console.log(bonus)

  const centerCards = bonus?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "center"
  )

  // Filter the cards with position "bcard"
  // @ts-ignore
  const belloCards = bonus?.Cards?.filter(
    // @ts-ignore

    (card) => card.position === "bcard"
  )

  // Filter the cards with position "rcard"
  // @ts-ignore
  const rightAlignedCards = bonus?.Cards?.filter(
    // @ts-ignore
    // @ts-ignore
    (card) => card.position === "rcard"
  )

  const BlockRenderer = (props: any) => {
    const { style, listItem, _type } = props.node

    if (style === "blockquote") {
      return <blockquote>- {props.children}</blockquote>
    }
    if (style === "h1") {
      return (
        <h1 style={{ color: "red", fontWeight: 800, fontSize: "28px" }}>
          {props.children}
        </h1>
      )
    } else if (style === "h2") {
      return (
        <h2 style={{ color: "red", fontWeight: 700, fontSize: "18px" }}>
          {props.children}
        </h2>
      )
    } else if (props.node.listItem == "bullet") {
      console.log("listItem", listItem)
      return (
        <ul style={{ color: "red" }}>
          <li>{props.children}</li>
        </ul>
      )
    } else if (_type == "span") {
      return <span style={{ color: "red" }}>{props.children}</span>
    }

    // Fall back to default handling
    return BlockContent.defaultSerializers.types.block(props)
  }
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={`${desc}`} />
        <link
          rel="canonical"
          href={`https://slot-ndkk.vercel.app/migliori-bonus-casino`}
        />
      </Helmet>

      <section className="mx-auto max-w-7xl space-y-4 py-8">
        <BlockContent
          serializers={{ types: { block: BlockRenderer } }}
          imageOptions={{ w: 1000, h: 600, fit: "max" }}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
          blocks={bonus?.body}
        />

        <section className="text-center">
          <h2 className="text-3xl font-medium text-red-500">
            Migliori Casino Italiani per servizi offerti
          </h2>

          <div className=" mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {bonus?.Cards?.map((card: any, key: number) => (
              <article
                key={key}
                className={`h-auto rounded-lg border border-gray-200 bg-opacity-80  shadow-sm  duration-300 hover:scale-105`}
              >
                <div
                  style={{
                    backgroundColor: `${card.colors}`,
                  }}
                  className="leading-2 flex flex-col items-center justify-center gap-2 p-4 text-sm font-medium text-white"
                >
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
                <div className=" h-auto !bg-white p-6 text-sm text-gray-500   transition-opacity duration-300 ">
                  <ul className="flex h-full flex-col gap-2">
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
          <div className="my-24">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-red-500 text-white">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                  >
                    I migliori bonus di benvenuto
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    {/* Assets */}
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  ></th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  ></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {bonus?.lists?.map((brand: any) => (
                  <tr key={brand.uid}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 flex-shrink-0">
                          {brand.image ? (
                            <Image
                              className="h-16 w-16 rounded-full border-2 border-gray-100"
                              src={urlForImage(brand?.image?.asset).url()}
                              width={56}
                              height={56}
                              alt=""
                            />
                          ) : (
                            <img
                              className="h-16 w-16 rounded-lg border-2 border-gray-100"
                              src="/images/brandPlaceholder.jpg"
                              alt=""
                            />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <h3>{brand?.title}</h3>
                          <p className="text-gray-600 flex items-center gap-2">
                            {brand?.rating}
                            <StarIcon className="w-5 h-5 text-orange-500" />
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900">Senza Deposito</div>
                      <div className="text-gray-500 text-xs">
                        {brand?.noDeposit ? brand?.noDeposit : "---"}
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <div className="text-gray-900"> Con Deposito</div>
                      <div className="text-gray-500 text-xs">
                        {brand?.withDeposit}
                      </div>
                    </td>

                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                      <button className="px-4 py-2 bg-red-500 text-white rounded-md">
                        <a href={brand?.link}>VISITA IL SITO</a>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <BlockContent
            serializers={{ types: { block: BlockRenderer } }}
            imageOptions={{ w: 1000, h: 600, fit: "max" }}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            blocks={bonus?.body1}
          />
        </section>
      </section>
    </>
  )
}
