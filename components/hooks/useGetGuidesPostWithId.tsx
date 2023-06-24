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
    queryKey: ["/me/guide", slug],
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
          excerpt,
          publishedAt,
          "category": categories[0]->{_id,title},
          author->{_ref, name},
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

// const useGetRelatedGuideByCategory = (
//   slug: string,
//   category: string
// ): GuidePost[] | undefined => {
//   const { data: relatedPosts } = useQuery<GuidePost[]>({
//     queryKey: ["/me/guide/category", slug, category],
//     queryFn: async () => {
//       const query = groq`
//         *[_type == "guide" && references($category) && slug.current != $slug] {
//           title,
//           slug,
//           mainImage {
//             alt,
//             asset {
//               _ref,
//               _type
//             }
//           },
//           excerpt,
//           "category": categories[0]->{_id,title},
//           publishedAt,
//           author->{_ref, name},
//           body
//         }
//       `
//       const response = await client.fetch<GuidePost[]>(query, {
//         slug,
//         category,
//       })
//       return response
//     },
//     keepPreviousData: true,
//   })

//   return relatedPosts
// }

export { useGetGuideWithPostId }
