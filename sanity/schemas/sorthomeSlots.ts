import { defineField, defineType } from "sanity"

export default defineType({
  name: "slotSort",
  title: "Home Page Slot Sort",
  type: "document",
  fields: [
    defineField({
      name: "sortedSlots",
      title: "Sorted Slot ",
      type: "array",
      of: [{ type: "reference", to: { type: "slot" } }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Sorted Item",
      }
    },
  },
})
