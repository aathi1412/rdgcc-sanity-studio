import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'navLink',
  title: 'Nav Link',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Label', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'url', title: 'URL', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({
      name: 'hasDropdown',
      title: 'Has dropdown?',
      type: 'boolean',
      initialValue: false,
      description: 'Purely visual flag — matches the chevron shown on some nav items in the reference design.',
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'url' },
  },
});
