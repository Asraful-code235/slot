import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"
import { groq } from "next-sanity"

const useGetSlotDetailsWithSlug = (slug: string) => {
  const { data: slotDetails } = useQuery({
    queryKey: ["/me/blog-and-news", slug],
    queryFn: async () => {
      const query = groq`
        *[_type == "slot" && slug.current == $slug] {
          title,
          slug,
          mainImage {
            alt,
            asset {
              _ref,
              _type
            }
          },
          href,
          excerpt,
          publishedAt,
          "category": categories[0]->{_id,title},
          author->{_ref, name},
          guide->{_ref, name,slug},
          body
        }[0]
      `
      const response = await client.fetch(query, { slug })
      return response
    },
    keepPreviousData: true,
  })

  return slotDetails
}

const useGetRelatedSlotByCategory = (slug: string, category: string) => {
  const { data: relatedSlot } = useQuery({
    queryKey: ["/me/blog-and-news/category", slug, category],
    queryFn: async () => {
      const query = groq`
        *[_type == "slot" && references($category) && slug.current != $slug] {
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
      const response = await client.fetch(query, { slug, category })
      return response
    },
    keepPreviousData: true,
  })

  return relatedSlot
}

export { useGetSlotDetailsWithSlug, useGetRelatedSlotByCategory }
