import RSS from "rss";
import { siteConfig } from "@/config/site";
import { getFeedPosts } from "@/lib/utils";
import { posts } from "#site/content";

const feedPosts = getFeedPosts(posts);

export async function GET() {
  const feedOptions = {
    title: siteConfig.name,
    site_url: siteConfig.url,
    feed_url: `${siteConfig.url}/feed`,
    pubDate: new Date(),
  };
  const feed = new RSS(feedOptions);

  feedPosts.forEach((post) => {
    feed.item({
      title: post.title,
      url: `${siteConfig.url}/${post.slug}`,
      date: post.date,
      description: post.description || "",
      custom_elements: [
        {
          "content:encoded": post.body || "",
        },
      ],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}