import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

const useGetSlotDetailsWithSlug = (slug: string) => {
  const { data: slotDetails } = useQuery({
    queryKey: ["/me/slot/details", slug],
    queryFn: async () => {
      const query = `
        *[_type == "slot" && slug.current == $slug] {
          ...,
          title,
          slug,
          mainImage {
            alt,
            asset {
              _ref,
         
              _type
            }
          },
          metaTitle,
          metaDesc,
          rating,
          href,
          Cards[]->{
            ...
          },
          excerpt,
          publishedAt,
          "category": categories[0]->{_id,title},
          author,
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

const useGetRelatedSlotByAuthor = (authorId: any, slug: any) => {
  const { data: relatedSlots } = useQuery({
    queryKey: ["/me/slot/related/author", authorId, slug],
    queryFn: async () => {
      const query = `
        *[_type == "slot" && author._ref == $authorId && references($authorId) && slug.current != $slug] {
          ...,
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
          author,
          "category": categories[0]->{_id,title},
          publishedAt,
          body 
        }
      `
      const response = await client.fetch(query, { authorId, slug })
      return response
    },
    keepPreviousData: true,
  })

  return relatedSlots
}

const useGetRelatedSlotByCategory = (slug: string, category: string) => {
  const { data: relatedSlot } = useQuery({
    queryKey: ["/me/slot/related", slug, category],
    queryFn: async () => {
      const query = `
        *[_type == "slot" && references($category) && slug.current != $slug] {
          ...,
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
          "authors": author[]->{_ref, name},

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

export {
  useGetSlotDetailsWithSlug,
  useGetRelatedSlotByCategory,
  useGetRelatedSlotByAuthor,
}
