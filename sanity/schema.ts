import { type SchemaTypeDefinition } from "sanity"

import author from "./schemas/author"
import blockContent from "./schemas/blockContent"
import casino from "./schemas/casino"
import category from "./schemas/category"
import guide from "./schemas/guide"
import post from "./schemas/post"
import slot from "./schemas/slot"
import slotCard from "./schemas/slotCard"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent, slot, guide, slotCard, casino],
}
