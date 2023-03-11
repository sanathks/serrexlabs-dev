import { Metadata } from "next";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { getHopmepage } from "./services/pages";
import { getPosts } from "./services/posts";

export async function generateMetadata(): Promise<Metadata> {
  const homePage = await getHopmepage();

  return {
    title: homePage.name,
    description: homePage.metaDescription
  }
}

export default async function Home() {
  const posts = await getPosts();
  const homePage = await getHopmepage();

  return (
  <main>
      <Header homePage={homePage}/> 
      <div className="mt-24 sm:px-8 md:mt-28">
        <div className="mx-auto max-w-6xl lg:px-8">
          <div className="relative px-4 sm:px-8 lg:px-12">
            <div className="mx-auto max-w-2xl lg:max-w-5xl">
              <div className="mx-auto lg:px-28 max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col gap-16">
                  {posts.map(post =>(<PostList key={post.slug} post={post} />))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
