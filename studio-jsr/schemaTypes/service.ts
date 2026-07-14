import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service / Treatment',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Treatment name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'URL slug',
      type: 'slug',
      options: {source: 'name'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short',
      title: 'Short tagline',
      type: 'string',
      description: 'e.g. "Damon, metal, ceramic & aligners"',
    }),
    defineField({
      name: 'description',
      title: 'Short description',
      type: 'text',
      description: 'Shown on the treatment card.',
    }),
    defineField({
      name: 'longDescription',
      title: 'Full description',
      type: 'text',
      description: 'Shown on the treatment detail page.',
    }),
    defineField({
      name: 'image',
      title: 'Treatment photo',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'duration',
      title: 'Typical duration',
      type: 'string',
      description: 'e.g. "45–60 min"',
    }),
    defineField({
      name: 'startingPrice',
      title: 'Starting price',
      type: 'string',
      description: 'e.g. "₹3,500"',
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faq',
          fields: [
            {name: 'q', title: 'Question', type: 'string'},
            {name: 'a', title: 'Answer', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      description: 'Lower numbers show first.',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'short'},
  },
})
