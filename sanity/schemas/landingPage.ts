import { defineField, defineType } from "sanity"

export default defineType({
  name: "metadata",
  title: "Pages Metadata",
  type: "document",
  fields: [
    defineField({
      name: "page",
      title: "Page Name",
      type: "string",
      options: {
        list: [
          { title: "Home Page", value: "/" },
          { title: "Slot", value: "/slot" },
          { title: "Casino", value: "/casino" },
          { title: "Poker", value: "/poker" },
          { title: "Blog and news", value: "/blog-and-news" },
          { title: "About us", value: "/about-us" },
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
