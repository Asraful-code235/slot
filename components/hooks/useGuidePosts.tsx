import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"
import { groq } from "next-sanity"

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

const useGuidePosts = (): GuidePosts[] | undefined => {
  const { data: GuidePosts } = useQuery<GuidePosts[]>({
    queryKey: ["/me/guide"],
    queryFn: async () => {
      const query = groq`
        *[_type == "guide"]| order(publishedAt desc)  {
          ...,
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
      const response = await client.fetch<GuidePosts[]>(query)
      return response
    },
    keepPreviousData: true,
  })

  return GuidePosts
}

export default useGuidePosts
