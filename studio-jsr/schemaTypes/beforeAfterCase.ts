import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'beforeAfterCase',
  title: 'Before / After Case',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Case title', type: 'string'}),
    defineField({name: 'treatment', title: 'Treatment', type: 'string'}),
    defineField({
      name: 'before',
      title: 'Before photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'after',
      title: 'After photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'illustrative',
      title: 'Illustrative example (not a real patient)',
      type: 'boolean',
      description:
        'Turn ON only if these are AI-generated or stock example photos rather than a genuine consented patient case. Keep OFF for real patient results.',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'treatment', media: 'after'},
  },
})
