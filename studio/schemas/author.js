import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    // Basic fields (4.2)
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Author display name',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'name', maxLength: 96},
      description: 'URL-friendly identifier (auto-generated from name)',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      description: 'Author biography',
      validation: Rule => Rule.max(500)
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Author profile photo',
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Required for accessibility (FR47)',
          validation: Rule => Rule.required()
        }
      ]
    })
  ],
  // Preview config (4.1)
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
})
