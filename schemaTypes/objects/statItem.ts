import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'statItem',
  title: 'Stat Item',
  type: 'object',
  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'e.g. "70+"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "Clients"',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: 'number', subtitle: 'label' },
  },
});
