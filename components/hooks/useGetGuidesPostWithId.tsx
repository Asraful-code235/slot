import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

interface GuidePost {
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

const useGetGuideWithPostId = (slug: string): GuidePost | undefined => {
  const { data: guidePost } = useQuery<GuidePost>({
    queryKey: ["/me/guide/details", slug],
    queryFn: async () => {
      const query = `
        *[_type == "guide" && slug.current == $slug] {
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
          author,
          body
        }[0]
      `
      const response = await client.fetch<GuidePost>(query, { slug })
      return response
    },
    keepPreviousData: true,
  })

  return guidePost
}

const useGetRelatedGuideByAuthor = (authorId: any, slug: any) => {
  const { data: relatedGuides } = useQuery({
    queryKey: ["/me/guide/related/author", authorId, slug],
    queryFn: async () => {
      const query = `
        *[_type == "guide" && author._ref == $authorId && references($authorId) && slug.current != $slug] {
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
          author->{_ref,name},
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

  return relatedGuides
}
export { useGetGuideWithPostId, useGetRelatedGuideByAuthor }
