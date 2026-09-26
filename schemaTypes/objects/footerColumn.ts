import { defineField, defineType } from 'sanity';

export const footerLink = defineType({
  name: 'footerLink',
  title: 'Footer Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required() }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'url' },
  },
});

export const footerColumn = defineType({
  name: 'footerColumn',
  title: 'Footer Column',
  type: 'object',
  fields: [
    defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [{ type: 'footerLink' }],
    }),
  ],
  preview: {
    select: { title: 'heading' },
  },
});
