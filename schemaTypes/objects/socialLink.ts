import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image'
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: ['LinkedIn', 'Facebook', 'WhatsApp', 'Instagram', 'Twitter/X', 'YouTube'],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
  ],
  preview: {
    select: { title: 'platform', subtitle: 'url' },
  },
});
