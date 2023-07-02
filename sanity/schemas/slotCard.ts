import { defineField, defineType } from "sanity"

// Import the slugify function

export default defineType({
  name: "slotCard",
  title: "Card",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "noDeposit",
      title: "No deposit Information",
      type: "string",
    }),
    defineField({
      name: "withDeposit",
      title: "With deposit Information",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Image",
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
      name: "slug", // Corrected the syntax here
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    }),
    defineField({
      name: "list",
      title: "Description List",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
})
