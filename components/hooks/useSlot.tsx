import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

const useSlot = () => {
  const { data: slot } = useQuery({
    queryKey: ["/me/slot"],
    queryFn: async () => {
      const query = `
        *[_type == "slot"]  | order(publishedAt desc) {
          ...,
          position,
          rating,
          "category": categories[0]->{_id,title},
        } 
      `
      const response = await client.fetch(query)
      return response
    },
    keepPreviousData: true,
  })

  return slot
}

export default useSlot
