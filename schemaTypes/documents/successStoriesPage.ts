import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'successStoriesPage',
  title: 'Success Stories Page',
  type: 'document',

  fields: [
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',

      fields: [
        defineField({ name: 'badgeIcon', title: 'Badge Icon', type: 'image' }),
        defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'string' }),
      ],
    }),
    defineField({
      name: 'intro',
      title: 'Intro Section',
      type: 'object',

      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow Label', type: 'string' }),
        defineField({ name: 'heading', title: 'Heading', type: 'string', validation: (Rule) => Rule.required() }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
        defineField({
          name: 'features',
          title: 'Feature Pills',
          type: 'array',
          of: [{ type: 'featurePill' }],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Track Record Stats',
      type: 'object',

      fields: [
        defineField({ name: 'heading', title: 'Heading', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        defineField({
          name: 'items',
          title: 'Stat Items',
          type: 'array',
          of: [{ type: 'statItem' }],
          validation: (Rule) => Rule.max(3),
        }),
      ],
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Study Cards',
      type: 'array',
      of: [{ type: 'caseStudyCard' }],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
});
