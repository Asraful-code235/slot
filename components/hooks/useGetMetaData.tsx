import { client } from "@/sanity/lib/client"
import { useQuery } from "@tanstack/react-query"

const useMetadata = () => {
  const { data: metaData } = useQuery({
    queryKey: ["/me/metadata"],
    queryFn: async () => {
      const query = `
        *[_type == "metadata"] 
      `
      const response = await client.fetch(query)
      return response
    },
    keepPreviousData: true,
  })

  return metaData
}

export default useMetadata
