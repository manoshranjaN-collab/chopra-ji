import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'patientPhoto',
  title: 'Happy Patient Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Description (for accessibility)',
      type: 'string',
      description: 'e.g. "Happy patient after treatment"',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'alt', media: 'photo'},
  },
})
