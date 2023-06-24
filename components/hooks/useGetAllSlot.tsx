import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"
import { groq } from "next-sanity"

const useGetAllSlot = () => {
  const {
    data: AllSlot,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/me/allSlot"],
    queryFn: async () => {
      const query = groq`
        *[_type == "slot"]{
            ...,
            "category": categories[]->{_id,title},
        }
      `
      const response = await client.fetch(query)
      return response
    },
    keepPreviousData: true,
  })

  return { AllSlot, isLoading, isError }
}

export default useGetAllSlot
