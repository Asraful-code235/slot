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
    queryKey: ["/me/blog-and-news/details", slug],
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
      const response = await client.fetch<NewsPost>(query, { slug })
      return response
    },
    keepPreviousData: true,
  })

  return newsPost
}

const useGetRelatedNewseByAuthor = (authorId: any, slug: any) => {
  const { data: relatedGuides } = useQuery({
    queryKey: ["/me/news/related/author", authorId, slug],
    queryFn: async () => {
      const query = `
        *[_type == "post" && author._ref == $authorId  && slug.current != $slug] {
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
          Cards[]->{
            ...
          },
          excerpt,
          rating,
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

export {
  useGetNewsPostsWithId,
  useGetRelatedPostsByCategory,
  useGetRelatedNewseByAuthor,
}
