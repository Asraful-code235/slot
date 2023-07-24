"use client"

import { useState } from "react"
import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

interface Casino {
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: any
  author: {
    name: string
  }
  mainImage: {
    alt: string
    asset: {
      url: string
    }
  }
}

const fetchNewsPosts = async (
  currentPage: number,
  itemsPerPage: number
): Promise<{ posts: Casino[]; totalCount: number }> => {
  const skip = (currentPage - 1) * itemsPerPage

  const query = `
    {
      "posts": *[_type == "poker"]
        | order(publishedAt desc)
        [${skip}...${skip + itemsPerPage - 1}] {
          title,
          slug,
          mainImage {
            alt,
            asset->{
              url
            }
          },
          badges,
          excerpt,
          publishedAt,
          author->{_ref, name},
        },
      "totalCount": count(*[_type == "poker"])
    }
  `

  const response = await client.fetch<{
    posts: Casino[]
    totalCount: number
  }>(query)
  return response
}

const usePoker = (
  itemsPerPage: number
): {
  posts: Casino[] | undefined
  currentPage: number
  totalPages: number
  goToPage: (page: number) => void
  nextPage: () => void
  prevPage: () => void
  isLoading: boolean
} => {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  const {
    data: CasinoPosts,
    isLoading,
    isFetching,
    isPreviousData,
  } = useQuery<{ posts: Casino[]; totalCount: number }>({
    queryKey: ["/me/poker", currentPage, itemsPerPage],
    queryFn: () => fetchNewsPosts(currentPage, itemsPerPage),
    keepPreviousData: true,
    onSuccess: (data) => {
      const { posts, totalCount } = data
      setTotalPages(Math.ceil(totalCount / itemsPerPage))
    },
  })

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  return {
    posts: CasinoPosts?.posts,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    isLoading,
  }
}
export default usePoker
