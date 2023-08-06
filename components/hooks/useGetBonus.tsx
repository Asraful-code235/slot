import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

const useBonus = () => {
  const { data: slot } = useQuery({
    queryKey: ["/me/bonus"],
    queryFn: async () => {
      const query = `
        *[_type == "bonus"]  | order(publishedAt desc) {
          ...,
          Cards[]->{
            ...
          },
          lists[]->{
            ...
          }
        
        } 
      `
      const response = await client.fetch(query)
      return response[0]
    },
    keepPreviousData: true,
  })

  return slot
}

export default useBonus
