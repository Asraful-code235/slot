import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

const useSortedSlots = () => {
  const { data: slot } = useQuery({
    queryKey: ["/me/sortedSlots"],
    queryFn: async () => {
      const query = `
        *[_type == "slotSort"]{
            sortedSlots[]->{
                title,
                mainImage {
                    alt,
                    asset {
                      _ref,
                      _type
                    }
                  },
                rating,
                slug,
                "category": categories[0]->{ title},
            }

          
        }
      `
      const response = await client.fetch(query)
      return response[0] // Assuming there's only one "slotSort" document
    },
    keepPreviousData: true,
  })

  return slot
}

export default useSortedSlots
