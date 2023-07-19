"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
// @ts-ignore
import { Helmet } from "react-helmet"

import useGetAllSlot from "@/components/hooks/useGetAllSlot"
import useMetadata from "@/components/hooks/useGetMetaData"
import { formatDate } from "@/components/utils/utils"

type Props = {}

const SlotPage = (props: Props) => {
  const homePageMetaData = useMetadata()
  const getHomeMeta = homePageMetaData?.find((m: any) => m.page === "/slot")

  const title = getHomeMeta?.title
  const desc = getHomeMeta?.desc

  const { AllSlot, isLoading } = useGetAllSlot()
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [showAllCards, setShowAllCards] = useState(false)

  if (isLoading) return "Loading..."

  const filteredSlots = AllSlot?.filter(
    (slot: any) =>
      slot.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "All" ||
        slot?.category[0].title === selectedCategory)
  )

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value)
  }

  const handleSeeMore = () => {
    setShowAllCards(true)
  }

  const visibleSlots = showAllCards
    ? filteredSlots
    : filteredSlots?.slice(0, 10)

  const categories = Array.from(
    new Set(AllSlot?.map((slot: any) => slot?.category[0].title))
  )

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name={`${desc}`} />
        <link rel="canonical" href={`https://slot-ndkk.vercel.app/slot`} />
      </Helmet>
      <article className="mx-auto max-w-7xl px-4 py-8 md:py-16">
        <section className="space-y-4 text-center tracking-tight text-gray-600">
          <h1 className="text-2xl font-extrabold text-red-500 md:text-3xl">
            Slot Disponibili - Prenota il Tuo Slot di Tempo Desiderato | Slotify
          </h1>

          <p className="text-lg font-medium">
            Esplora una vasta gamma di slot disponibili su Slotify. Trova
            l&apos;orario perfetto per i tuoi appuntamenti, prenotazioni o
            prenotazioni online. Sfoglia la nostra selezione diversificata di
            slot e prenota comodamente il tuo slot di tempo desiderato.
            Organizza il tuo programma in modo efficiente con la pagina degli
            slot intuitiva di Slotify.
          </p>
        </section>
        <section className="pt-24">
          <form className="flex flex-col items-center justify-center gap-4 py-4 sm:flex-row">
            <div className="w-full">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center rounded-md pl-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  value={searchQuery}
                  onChange={handleSearchChange}
                  type="text"
                  placeholder="Cerca uno slot"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
                />
              </div>
            </div>
            <div className="w-full sm:w-fit ">
              <label htmlFor="category-filter" className="sr-only">
                Category
              </label>
              <div className="relative">
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="block w-48 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-gray-500 focus:ring-gray-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-gray-500 dark:focus:ring-gray-500"
                >
                  <option value="All">All Categories</option>
                  {categories?.map((category: any) => (
                    // @ts-ignore
                    <option
                      // @ts-ignore
                      key={category}
                      // @ts-ignore
                      value={category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </form>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {visibleSlots?.map((slot: any) => (
              <Link
                href={`/slot/${slot.slug.current}`}
                key={slot._id}
                className="rounded-md border border-gray-200"
              >
                <Image
                  width={340}
                  height={250}
                  src={urlForImage(slot?.mainImage).url()}
                  alt={slot.title}
                  className="aspect-square  rounded-md object-cover object-center hover:opacity-70 hover:transition-opacity hover:duration-300"
                />
                <div className="px-4 py-2">
                  <div className="mt-4 flex items-center gap-x-4 text-xs">
                    <time dateTime={slot.publishedAt} className="text-gray-500">
                      {formatDate(slot.publishedAt)}
                    </time>
                    <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                      {slot?.category[0].title}
                    </p>
                  </div>
                  <div className="space-y-2  text-base font-medium text-gray-600">
                    <h3 className="mt-3 line-clamp-1 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {slot.title}
                    </h3>
                    <div className="line-clamp-2 text-sm leading-6 text-gray-600 md:line-clamp-3">
                      {slot.excerpt}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {!showAllCards && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleSeeMore}
                className="rounded-md bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
              >
                See More
              </button>
            </div>
          )}
        </section>
      </article>
    </>
  )
}

export default SlotPage
