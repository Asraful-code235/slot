import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

const useGetSlotCardsInSlotPage = () => {
  const {
    data: AllSlot,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["/me/allSlot/cards"],
    queryFn: async () => {
      const query = `
        *[_type == "slotPageCards"]{
            ...,
            Cards[]->{
              ...
            }
           
        }
      `
      const response = await client.fetch(query)
      return response[0]
    },
    keepPreviousData: true,
  })

  return { AllSlot, isLoading, isError }
}

export default useGetSlotCardsInSlotPage
