import { client } from "@/sanity/lib/client"

const getSlotDetails = async (slug: string) => {
  const query = `
      *[_type == "slot" && slug.current == $slug] {
        title,
        slug,
       
        excerpt,
      }[0]
    `

  const response = await client.fetch(query, { slug })
  return response
}

export default getSlotDetails
