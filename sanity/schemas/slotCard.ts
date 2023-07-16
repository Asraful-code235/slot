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
      name: "colors",
      title: "Card Color",
      type: "string",
      options: {
        list: [
          { title: "Red", value: "red" },
          { title: "Green", value: "green" },
          { title: "Blue", value: "blue" },
          { title: "Pink", value: "pink" },
          { title: "Orange", value: "orange" },
          { title: "Purple", value: "purple" },
          { title: "Gray", value: "gray" },
          { title: "Yellow", value: "yellow" },
          { title: "Teal", value: "teal" },
          { title: "Cyan", value: "cyan" },
          { title: "Magenta", value: "magenta" },
          { title: "Lime", value: "lime" },
          { title: "Indigo", value: "indigo" },
          { title: "Amber", value: "amber" },
          { title: "Brown", value: "brown" },
          { title: "Black", value: "black" },
          { title: "White", value: "white" },
        ],
      },
    }),
    defineField({
      name: "position",
      title: "Card position",
      type: "string",
      options: {
        list: [
          { title: "Top of card", value: "center" },
          { title: "Bello Card", value: "bcard" },
          { title: "Right Aligned", value: "rcard" },
        ],
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
