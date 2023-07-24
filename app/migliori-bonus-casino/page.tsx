"use client"

import Image from "next/image"
import { Helmet } from "react-helmet"
 
import useMetadata from "@/components/hooks/useGetMetaData"

export default function BonusPage() {
  const homePageMetaData = useMetadata()
  const getHomeMeta = homePageMetaData?.find(
    (m: any) => m.page === "/migliori-bonus-casino"
  )

  const title = getHomeMeta?.title
  const desc = getHomeMeta?.desc
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

      <section className="max-w-7xl mx-auto py-8 space-y-4">
        <h1 className="text-2xl font-extrabold text-red-500 md:text-3xl">
          Migliori Bonus Senza Deposito Casino Online Italiani
        </h1>
        <picture>
          <Image
            src={""}
            alt=""
            width={1000}
            height={600}
            className="aspect-video w-full object-cover object-center rounded-md"
          />
        </picture>
      </section>
    </>
  )
}
