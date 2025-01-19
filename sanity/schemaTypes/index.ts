import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { categoryType } from './CategoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productType, categoryType],
}
