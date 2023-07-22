import { type SchemaTypeDefinition } from "sanity"

import author from "./schemas/author"
import blockContent from "./schemas/blockContent"
import bonusdi from "./schemas/bonusdi"
import casino from "./schemas/casino"
import category from "./schemas/category"
import guide from "./schemas/guide"
import landingPage from "./schemas/landingPage"
import post from "./schemas/post"
import slot from "./schemas/slot"
import slotCard from "./schemas/slotCard"
import slotPageCards from "./schemas/slotPageCards"
import sorthomeSlots from "./schemas/sorthomeSlots"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    slot,
    guide,
    slotCard,
    casino,
    sorthomeSlots,
    landingPage,
    slotPageCards,
    bonusdi,
  ],
}
