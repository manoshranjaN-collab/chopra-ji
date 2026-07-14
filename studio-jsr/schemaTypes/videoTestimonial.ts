import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'videoTestimonial',
  title: 'Video Testimonial',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Patient name / label', type: 'string'}),
    defineField({name: 'location', title: 'Location', type: 'string'}),
    defineField({name: 'treatment', title: 'Treatment', type: 'string'}),
    defineField({name: 'quote', title: 'Quote', type: 'text'}),
    defineField({
      name: 'video',
      title: 'Video file',
      type: 'file',
      options: {accept: 'video/*'},
    }),
    defineField({
      name: 'poster',
      title: 'Poster image (shown before play)',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
    }),
  ],
  preview: {
    select: {title: 'name', subtitle: 'treatment', media: 'poster'},
  },
})
