import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'SEO Title',
      type: 'string',
      validation: (Rule) => Rule.max(60).warning('Keep under 60 characters for best display in search results.'),
    }),
    defineField({
      name: 'description',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(160).warning('Keep under 160 characters for best display in search results.'),
    }),
  ],
});
