import { defineField, defineType } from "sanity"

export default defineType({
  name: "sports",
  title: "Sports",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "string",
    }),
    defineField({
      name: "Cards",
      title: "Cards",
      type: "array",
      of: [{ type: "reference", to: { type: "slotCard" } }],
    }),
    defineField({
      name: "badges",
      title: "Featured Post (Select Two)",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Featured", value: "featured" },
              { title: "Default", value: "default" },
              // Add more badge options as needed
            ],
          },
        },
      ],
      validation: (Rule) => Rule.max(2),
      initialValue: ["default"],
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
