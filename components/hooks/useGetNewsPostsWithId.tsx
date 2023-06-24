import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"


interface NewsPost {
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

const useGetNewsPostsWithId = (slug: string): NewsPost | undefined => {
  const { data: newsPost } = useQuery<NewsPost>({
    queryKey: ["/me/blog-and-news", slug],
    queryFn: async () => {
      const query = `
        *[_type == "post" && slug.current == $slug] {
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
      const response = await client.fetch<NewsPost>(query, { slug })
      return response
    },
    keepPreviousData: true,
  })

  return newsPost
}

const useGetRelatedPostsByCategory = (
  slug: string,
  category: string
): NewsPost[] | undefined => {
  const { data: relatedPosts } = useQuery<NewsPost[]>({
    queryKey: ["/me/blog-and-news/category", slug, category],
    queryFn: async () => {
      const query = `
        *[_type == "post" && references($category) && slug.current != $slug] {
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
      const response = await client.fetch<NewsPost[]>(query, { slug, category })
      return response
    },
    keepPreviousData: true,
  })

  return relatedPosts
}

export { useGetNewsPostsWithId, useGetRelatedPostsByCategory }
