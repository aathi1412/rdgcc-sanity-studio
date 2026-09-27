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

    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Rocket', value: 'rocket' },
          { title: 'Target', value: 'target' },
          { title: 'Handshake', value: 'handshake' }
        ]
      }
    })
  ],
  preview: {
    select: { title: 'title', media: 'icon' },
  },
});
