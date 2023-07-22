import { defineField, defineType } from "sanity"

export default defineType({
  name: "metadata",
  title: "All Pages Metadata",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page Name",
      type: "string",
      options: {
        list: [
          { title: "Home ", value: "/" },
          { title: "Slot", value: "/slot" },
          { title: "Casino", value: "/casino" },
          { title: "Bonus Di Benvenuto", value: "/migliori-bonus-casino" },
          { title: "Poker", value: "/poker" },
          { title: "Blog E Notizie", value: "/blog-e-notize" },
          { title: "Chi-Siamio", value: "/chi-ciamo" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Meta Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "desc",
      title: "Meta Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
    },
  },
})
