import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',

  fields: [
    defineField({
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
    }),

    defineField({
      name: 'googleIcon',
      title: 'Google Icon',
      type: 'image',
      description: 'Google certification Icon',
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
      name: 'navLinks',
      title: 'Header Nav Links',
      type: 'array',
      of: [{ type: 'navLink' }],
    }),

    defineField({
      name: 'headerCta',
      title: 'Header CTA ("Get Started")',
      type: 'ctaButton',
    }),

    defineField({
      name: 'footerLogo',
      title: 'footer Logo',
      type: 'image'
    }),

    defineField({
      name: 'footerOutro',
      title: 'Footer Outro',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'footerColumns',
      title: 'Footer Columns',
      type: 'array',
      of: [{ type: 'footerColumn' }],
      validation: (Rule) => Rule.max(4),
    }),

    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),

    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),

    defineField({
      name: 'contactAddress',
      title: 'Contact Address',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),

    defineField({
      name: 'copyrightText',
      title: 'Copyright / Bottom Bar Text',
      type: 'string',
    }),

    defineField({
      name: 'legalLinks',
      title: 'Legal Links (bottom bar)',
      type: 'array',
      of: [{ type: 'footerLink' }],
      description: 'e.g. Privacy Policy, Terms & Conditions',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Settings' };
    },
  },
});
