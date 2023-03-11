import Link from "next/link"
import { Post } from "../services/types"

interface Props {
  post: Post
}

export function PostList({ post }: Props) {

  return <article className="group relative flex flex-col items-start">
    <h2 className="text-base font-semibold tracking-tight text-zinc-800">
      <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl"></div>
      <Link href={`post/${post.slug}`}>

        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl"></span>
        <span className="relative z-10">{post.title}</span>

      </Link>
    </h2>
    <p className="relative z-10 mt-2 text-sm text-zinc-600">{post.metaDescription}</p>
    <div aria-hidden="true" className="relative z-10 mt-4 flex items-center text-sm font-medium text-blue-500">
      Read More<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current"><path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
    </div>
  </article>
}
