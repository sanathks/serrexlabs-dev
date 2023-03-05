import * as contentful from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface Post {
  title: string,
  slug: string,
  content: Document
}

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE || "",
  accessToken: process.env.CONTENTFUL_KEY || ""
});

export async function getPosts() {
  const post = await client.getEntries({
    content_type: "post"
  })

  return post.items.map(item => item.fields) as Post[]
}

export async function getPost(slug: string) {
  const post = await client.getEntries({
    content_type: "post",
    'fields.slug': slug
  })

  return post.items.map(item => item.fields)[0] as Post
}
