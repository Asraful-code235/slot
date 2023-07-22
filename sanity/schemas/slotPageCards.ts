import { defineField, defineType } from "sanity"

export default defineType({
  name: "slotPageCards",
  title: "Cards in slot page",
  type: "document",
  fields: [
    defineField({
      name: "Cards",
      title: "Cards",
      type: "array",
      of: [{ type: "reference", to: { type: "slotCard" } }],
    }),
  ],

  preview: {
    select: {
      title: "Cards",
    },
  },
})
