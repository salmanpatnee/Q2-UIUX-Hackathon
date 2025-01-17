import { defineField, defineType } from 'sanity'
import { CubeIcon } from '@sanity/icons'

export const productType = defineType({
    name: 'product',
    title: 'Product',
    type: 'document',
    icon: CubeIcon,
    preview: {
        select: {
            title: "title",
            media: "image",
        },
        prepare({ title, media }) {
            const titleFormatted = title || 'Untitled product'

            return {
                title: titleFormatted,
                media: media || CubeIcon,
            }
        },
    },
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            description: 'Give the productEnter a clear, descriptive name for your product (e.g., "Wireless Bluetooth Headphones").',
            validation: (rule) => rule.required().error('Title is required')
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: { source: 'title' },
            validation: (rule) => rule.required().error('Required to generate a page on the website'),
            hidden: ({ document }) => !document?.title,
        }),

        defineField({
            name: 'price',
            type: 'number',
            description: 'Set the regular price for your product.',
            validation: (rule) => rule.required().error('Price is required')
        }),
        defineField({
            name: 'salePrice',
            type: 'number',
            description: 'Optional: Enter a discounted price if the product is on sale.',

        }),
        defineField({
            name: 'stock',
            type: 'number',
            description: 'Enter a no of stock available.',

        }),
        defineField({
            name: 'reviewsCount',
            type: 'number',
        }),
        defineField({
            name: 'image',
            type: 'image',
            description: 'Upload a high-quality image that represents your product clearly.'
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Provide a brief and engaging description of your product, highlighting its key features and benefits.'
        }),
    ],
})