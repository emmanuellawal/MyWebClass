export default {
  name: 'designStyle',
  title: 'Design Style',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the design style (e.g., Swiss Destructive Grunge)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Brief overview for gallery cards',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'historicalBackground',
      title: 'Historical Background',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Origins and history of this design style',
    },
    {
      name: 'keyCharacteristics',
      title: 'Key Characteristics',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Defining features and principles',
    },
    {
      name: 'colorPalette',
      title: 'Color Palette',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Color Name'},
            {name: 'hex', type: 'string', title: 'Hex Code'},
          ],
        },
      ],
      description: 'Typical colors used in this style',
    },
    {
      name: 'typographyGuidance',
      title: 'Typography Guidance',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Font families, weights, and type treatment',
    },
    {
      name: 'principles',
      title: 'Design Principles',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Core principles of this style',
    },
    {
      name: 'sampleImages',
      title: 'Sample Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for accessibility',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
      description: 'Visual examples showcasing this style',
    },
    {
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
      description: 'Link to GitHub Pages demo',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }),
    },
    {
      name: 'githubRepo',
      title: 'GitHub Repository',
      type: 'url',
      description: 'Link to source code repository',
    },
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Tech stack used in the demo',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Show on homepage',
      initialValue: false,
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'When this style was published',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'sampleImages.0',
      subtitle: 'description',
    },
  },
}
