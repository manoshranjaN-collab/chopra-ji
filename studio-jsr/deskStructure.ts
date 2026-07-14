import type {StructureResolver} from 'sanity/structure'

// Friendly, labeled navigation for a non-technical client — grouped by
// what they'll actually think of ("Photos", "Services", "Reviews") rather
// than raw document type names.
export const deskStructure: StructureResolver = (S) =>
  S.list()
    .title('Dr Chopra Dental Clinic')
    .items([
      S.listItem()
        .title('Clinic Info')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings'),
        ),
      S.divider(),
      S.listItem()
        .title('Services / Treatments')
        .schemaType('service')
        .child(S.documentTypeList('service').title('Services / Treatments')),
      S.listItem()
        .title('Before / After Photos')
        .schemaType('beforeAfterCase')
        .child(
          S.documentTypeList('beforeAfterCase').title('Before / After Photos'),
        ),
      S.listItem()
        .title('Happy Patient Photos')
        .schemaType('patientPhoto')
        .child(S.documentTypeList('patientPhoto').title('Happy Patient Photos')),
      S.listItem()
        .title('Video Testimonials')
        .schemaType('videoTestimonial')
        .child(
          S.documentTypeList('videoTestimonial').title('Video Testimonials'),
        ),
      S.listItem()
        .title('Reviews')
        .schemaType('review')
        .child(S.documentTypeList('review').title('Reviews')),
      S.listItem()
        .title('FAQs')
        .schemaType('faq')
        .child(S.documentTypeList('faq').title('FAQs')),
    ])
