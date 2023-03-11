import { client } from "./client"
import { HomePage } from "./types"

export async function getHopmepage() {
  const post = await client.getEntries<HomePage>({
    content_type: "homePage"
  })

  return post.items.map(item => item.fields)[0]
}
