import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gallerySubmission',
  title: 'Gallery Submission',
  type: 'document',
  groups: [
    {name: 'submission', title: 'Submission Details', default: true},
    {name: 'review', title: 'Review Status'},
    {name: 'featured', title: 'Featured Settings'}
  ],
  fields: [
    // Submitter fields (2.2)
    defineField({
      name: 'submitterName',
      title: 'Submitter Name',
      type: 'string',
      group: 'submission',
      description: 'Full name of the person submitting',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'submitterEmail',
      title: 'Submitter Email',
      type: 'string',
      group: 'submission',
      description: 'Contact email for submission updates',
      validation: Rule => Rule.required().email()
    }),
    // Style reference (2.3)
    defineField({
      name: 'styleRef',
      title: 'Design Style',
      type: 'reference',
      to: [{type: 'designStyle'}],
      group: 'submission',
      description: 'Which design style this submission demonstrates',
      validation: Rule => Rule.required()
    }),
    // Demo URL (2.4)
    defineField({
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
      group: 'submission',
      description: 'Live URL where the design can be viewed',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    }),
    // Screenshot image (2.5)
    defineField({
      name: 'screenshot',
      title: 'Screenshot',
      type: 'image',
      options: {hotspot: true},
      group: 'submission',
      description: 'Screenshot of the submitted design',
      validation: Rule => Rule.required(),
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Required for accessibility (FR47)',
          validation: Rule => Rule.required()
        }
      ]
    }),
    // Authenticity explanation (2.6)
    defineField({
      name: 'authenticityExplanation',
      title: 'Authenticity Explanation',
      type: 'text',
      group: 'submission',
      validation: Rule => Rule.required().max(1000),
      description: 'Explanation of how the submission demonstrates the design style (max 1000 chars)'
    }),
    // Consent fields (2.7)
    defineField({
      name: 'hasPublicDisplayConsent',
      title: 'Public Display Consent',
      type: 'boolean',
      group: 'submission',
      initialValue: false,
      validation: Rule => Rule.required(),
      description: 'Consent to display submission in public gallery'
    }),
    defineField({
      name: 'hasMarketingConsent',
      title: 'Marketing Consent',
      type: 'boolean',
      group: 'submission',
      initialValue: false,
      description: 'Consent to use submission in marketing materials'
    }),
    // Status field (2.8)
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      group: 'review',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Approved', value: 'approved'},
          {title: 'Rejected', value: 'rejected'}
        ],
        layout: 'radio'
      },
      initialValue: 'pending',
      validation: Rule => Rule.required()
    }),
    // Feedback and datetime fields (2.10)
    defineField({
      name: 'feedbackNotes',
      title: 'Feedback Notes',
      type: 'text',
      group: 'review',
      description: 'Feedback for rejection or reviewer notes',
      validation: Rule => Rule.max(1000)
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      group: 'review',
      description: 'When the submission was received',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'reviewedAt',
      title: 'Reviewed At',
      type: 'datetime',
      group: 'review',
      description: 'When the submission was approved or rejected'
    }),
    // Featured fields (2.9)
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      group: 'featured',
      initialValue: false,
      description: 'Mark as featured submission'
    }),
    defineField({
      name: 'featuredBlurb',
      title: 'Featured Blurb',
      type: 'text',
      group: 'featured',
      description: 'Highlight text shown on homepage',
      hidden: ({document}) => !document?.isFeatured,
      validation: Rule => Rule.max(300)
    }),
    defineField({
      name: 'featuredOrder',
      title: 'Featured Order',
      type: 'number',
      group: 'featured',
      description: 'Sort priority for featured items (1 = first). Only used when filtering by isFeatured=true.',
      hidden: ({document}) => !document?.isFeatured,
      validation: Rule => Rule.min(1).integer()
    })
  ],
  // Preview config (2.1)
  preview: {
    select: {
      title: 'submitterName',
      subtitle: 'styleRef.title',
      media: 'screenshot'
    },
    prepare({title, subtitle, media}) {
      return {
        title,
        subtitle: subtitle || 'No style selected',
        media
      }
    }
  },
  // Orderings (2.11)
  orderings: [
    {
      title: 'Submission Date, Newest',
      name: 'submittedAtDesc',
      by: [{field: 'submittedAt', direction: 'desc'}]
    },
    {
      title: 'Submission Date, Oldest',
      name: 'submittedAtAsc',
      by: [{field: 'submittedAt', direction: 'asc'}]
    },
    {
      title: 'Featured Order',
      name: 'featuredOrderAsc',
      by: [{field: 'featuredOrder', direction: 'asc'}]
    }
  ]
})
