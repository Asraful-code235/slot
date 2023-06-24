import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"


interface NewsPost {
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

const useNewsPosts = (): NewsPost[] | undefined => {
  const { data: BlogPosts } = useQuery<NewsPost[]>({
    queryKey: ["/me/news"],
    queryFn: async () => {
      const query = `
        *[_type == "post"] {
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
   
        }
      `
      const response = await client.fetch<NewsPost[]>(query)
      return response
    },
    keepPreviousData: true,
  })

  return BlogPosts
}

export default useNewsPosts
