import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navLink',
  title: 'Nav Link',
  type: 'object',

  fields: [
    defineField({ 
      name: 'label', 
      title: 'Label', 
      type: 'string', 
      validation: (Rule) => Rule.required() 
    }),

    defineField({ 
      name: 'url', 
      title: 'URL', 
      type: 'string', 
      validation: (Rule) => Rule.required() 
    }),

    defineField({
      name: "children",
      title: "Sub Links",
      type: "array",
      of: [{ type: "navLink" }],
      description: "Links inside the dropdown menu.",
    }),
  ],

  preview: {
    select: { title: 'label', subtitle: 'url' },
  },
});
