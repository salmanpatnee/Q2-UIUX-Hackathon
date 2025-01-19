import { defineField, defineType } from 'sanity'
import {EllipsisVerticalIcon} from '@sanity/icons'

export const categoryType = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    icon: EllipsisVerticalIcon,
    preview: {
        select: {
            title: "title",
        },
        prepare({ title }) {
            const titleFormatted = title || 'Untitled category'

            return {
                title: titleFormatted,
            }
        },
    },
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            description: 'Give the category a clear, descriptive name.',
            validation: (rule) => rule.required().error('Title is required')
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required().error('Required to generate a page on the website'),
            hidden: ({ document }) => !document?.title,
        }),
    ],
})