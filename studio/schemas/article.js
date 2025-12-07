import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    // Basic fields (3.2)
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Article headline',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      description: 'URL-friendly identifier (auto-generated from title)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Publication date (leave empty for drafts)'
    }),
    // Author reference (3.3)
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{type: 'author'}],
      description: 'Article author'
    }),
    // Body with block content and images (3.4)
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Article content with rich text and images',
      of: [
        {type: 'block'},
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Required for accessibility (FR47)',
              validation: Rule => Rule.required()
            }
          ]
        }
      ]
    }),
    // Related style reference (3.5)
    defineField({
      name: 'relatedStyle',
      title: 'Related Design Style',
      type: 'reference',
      to: [{type: 'designStyle'}],
      description: 'Link to related design style'
    })
  ],
  // Preview config (3.1)
  preview: {
    select: {
      title: 'title',
      subtitle: 'author.name',
      media: 'author.image'
    }
  }
})
