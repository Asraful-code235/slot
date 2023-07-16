"use client"

import { useState } from "react"
import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

interface GuidePosts {
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
): Promise<{ posts: GuidePosts[]; totalCount: number }> => {
  const skip = (currentPage - 1) * itemsPerPage

  const query = `
    {
      "posts": *[_type == "guide"]
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
          excerpt,
          publishedAt,
          author->{_ref, name},
        },
      "totalCount": count(*[_type == "post"])
    }
  `

  const response = await client.fetch<{
    posts: GuidePosts[]
    totalCount: number
  }>(query)
  return response
}

const useGuidePosts = (
  itemsPerPage: number
): {
  posts: GuidePosts[] | undefined
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
    data: guidePosts,
    isLoading,
    isFetching,
    isPreviousData,
  } = useQuery<{ posts: GuidePosts[]; totalCount: number }>({
    queryKey: ["/me/guide", currentPage, itemsPerPage],
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
    posts: guidePosts?.posts,
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    isLoading,
  }
}
export default useGuidePosts
