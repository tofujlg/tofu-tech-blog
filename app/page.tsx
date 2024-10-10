import { buttonVariants } from "@/components/ui/button";
// import { siteConfig } from "@/config/site";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import Link from "next/link";
import { PostItem } from "@/components/post-item";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="pt-6 md:pb-12 md:mt-10 ">
        <div className="container flex flex-col gap-4 text-center">
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            Hi. Welcome to tofujlg&apos;s blog.
          </p>
        </div>
      </section>
      <section className="container max-w-4xl flex flex-col">
        {/* <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Latest Posts
        </h2> */}
        <ul className="flex flex-col">
          {latestPosts.map((post) => (
              <li key={post.slug} className="first:border-t first:border-border">
                <PostItem
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  tags={post.tags}
                />
              </li>
          ))}
        </ul>
          <div className="flex flex-col gap-4 justify-center sm:flex-row pt-6 pb-6">
            <Link
              href="/blog"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Read more
            </Link>
          </div>
      </section>
    </>
  );
}