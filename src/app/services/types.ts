import {Document} from '@contentful/rich-text-types'

export interface Post {
  title: string,
  slug: string,
  content: Document,
  metaDescription: string,
  createdAt: Date, 
}

export interface HomePage {
  name: string, 
  metaDescription: string,
  facebook?: string,
  github: string,
  youtube: string,
  twitter: string,
  about: string
}
