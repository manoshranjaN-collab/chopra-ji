import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Clinic Info',
  type: 'document',
  // Only one of these should ever exist — acts like a single settings page.
  fields: [
    defineField({
      name: 'name',
      title: 'Clinic name',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short line shown near the top of the site.',
    }),
    defineField({
      name: 'doctorPhoto',
      title: 'Doctor photo',
      type: 'image',
      options: {hotspot: true},
      description: 'Shown in the "Meet the dentist" section.',
    }),
    defineField({
      name: 'phone',
      title: 'Phone number',
      type: 'string',
      description: 'Displayed format, e.g. 098281 53307',
    }),
    defineField({
      name: 'phoneHref',
      title: 'Phone link',
      type: 'string',
      description: 'e.g. tel:+919828153307 (used for the click-to-call button)',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp link',
      type: 'url',
      description: 'e.g. https://wa.me/919828153307',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Full address',
      type: 'text',
    }),
    defineField({
      name: 'hours',
      title: 'Opening hours',
      type: 'string',
      description: 'e.g. Mon–Sat · Closes 8:30pm',
    }),
    defineField({
      name: 'rating',
      title: 'Google rating',
      type: 'number',
    }),
    defineField({
      name: 'reviewCount',
      title: 'Google review count',
      type: 'number',
    }),
    defineField({
      name: 'googleMapsLink',
      title: 'Google Maps link',
      type: 'url',
    }),
  ],
})
