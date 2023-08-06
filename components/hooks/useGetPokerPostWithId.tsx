import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

interface Casino {
  title: string
  slug: {
    current: string
  }
  excerpt: string
  publishedAt: string
  author: {
    name: string
  }
  mainImage: {
    alt: string
    asset: {
      _ref: string
      _type: string
    }
  }
  category: {
    _id: string
    title: string // Add the title field to the category object
  }
  body: any // Update with the correct type for the body property
}

const useGetPokerPostWithId = (slug: string): Casino | undefined => {
  const { data: guidePost } = useQuery<Casino>({
    queryKey: ["/me/poker/details", slug],
    queryFn: async () => {
      const query = `
        *[_type == "poker" && slug.current == $slug] {
          title,
          slug,
          mainImage {
            alt,
            asset {
              _ref,
              _type
            }
          },
          Cards[]->{
            ...
          },
          excerpt,
          publishedAt,
          "category": categories[0]->{_id,title},
          author->{_ref, name},
          body
        }[0]
      `
      const response = await client.fetch<Casino>(query, { slug })
      return response
    },
    keepPreviousData: true,
  })

  return guidePost
}

const useGetRelatedPokerByCategory = (
  slug: string,
  category: string
): Casino[] | undefined => {
  const { data: relatedPosts } = useQuery<Casino[]>({
    queryKey: ["/me/poker/related", slug, category],
    queryFn: async () => {
      const query = `
        *[_type == "poker" && references($category) && slug.current != $slug] {
          title,
          slug,
          mainImage {
            alt,
            asset {
              _ref,
              _type
            }
          },
          excerpt,
          "category": categories[0]->{_id,title},
          publishedAt,
          author->{_ref, name},
          body
        }
      `
      const response = await client.fetch<Casino[]>(query, {
        slug,
        category,
      })
      return response
    },
    keepPreviousData: true,
  })

  return relatedPosts
}

export { useGetPokerPostWithId, useGetRelatedPokerByCategory }
