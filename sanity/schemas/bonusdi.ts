import { defineField, defineType } from "sanity"

export default defineType({
  name: "bonus",
  title: "Bonus di benvenuto ",
  type: "document",
  fields: [
    defineField({
      name: "body",
      title: "Title and image Upper Part",
      type: "blockContent",
    }),

    defineField({
      name: "metaTitle",
      title: "Meta Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "metaDesc",
      title: "Meta Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "Cards",
      title: "Cards",
      type: "array",
      of: [{ type: "reference", to: { type: "slotCard" } }],
    }),
    defineField({
      name: "lists",
      title: "I migliori bonus di benvenuto",
      type: "array",
      of: [{ type: "reference", to: { type: "lists" } }],
    }),

    defineField({
      name: "body1",
      title: "Body Lower part",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "metaTitle",
    },
  },
})
