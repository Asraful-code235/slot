import { type SchemaTypeDefinition } from "sanity"

import author from "./schemas/author"
import blockContent from "./schemas/blockContent"
import bonusdi from "./schemas/bonusdi"
import casino from "./schemas/casino"
import category from "./schemas/category"
import guide from "./schemas/guide"
import landingPage from "./schemas/landingPage"
import poker from "./schemas/poker"
import post from "./schemas/post"
import slot from "./schemas/slot"
import slotCard from "./schemas/slotCard"
import slotPageCards from "./schemas/slotPageCards"
import sorthomeSlots from "./schemas/sorthomeSlots"
import sport from "./schemas/sport"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    post,
    author,
    category,
    blockContent,
    slot,
    sport,
    poker,
    guide,
    slotCard,
    casino,
    sorthomeSlots,
    landingPage,
    slotPageCards,
    bonusdi,
  ],
}
