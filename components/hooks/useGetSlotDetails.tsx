import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

const useGetSlotDetailsWithSlug = (slug: string) => {
  const { data: slotDetails } = useQuery({
    queryKey: ["/me/slot/details", slug],
    queryFn: async () => {
      const query = `
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
          rating,
          href,
          Cards[]->{
            _id,
            title,
            noDeposit,
            colors,
            withDeposit,
            image,
            slug,
            list[]
          },
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
    queryKey: ["/me/slot/related", slug, category],
    queryFn: async () => {
      const query = `
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
          rating,
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
