import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'features',
  title: 'Features',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'title', media: 'icon' },
  },
});
