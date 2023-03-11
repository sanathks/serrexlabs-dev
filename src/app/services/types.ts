import {Document} from '@contentful/rich-text-types'

export interface Post {
  title: string,
  slug: string,
  content: Document,
  metaDescription: string,
  createdAt: Date, 
}
