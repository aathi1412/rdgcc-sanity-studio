import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'caseStudyCard',
  title: 'Case Study Card',
  type: 'object',
  fields: [
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'e.g. "Fintech | Singapore"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      description: 'Images for case studies',
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt text',
          type: 'string',
          description: 'For accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      description: 'e.g. "Transforming Founder Idea to Investor Magnet"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'link',
      title: '"View Case Study" Link',
      type: 'ctaButton',
    }),
  ],
  preview: {
    select: { title: 'company', subtitle: 'title', media: 'image' },
  },
});
