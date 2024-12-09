import { posts } from "#site/content";
import { Language } from "@/components/languages";
import { PostItem } from "@/components/post-item";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllLangs, getPostsByLangSlug, sortLangsByCount } from "@/lib/utils";
import { slug } from "github-slugger";
import { Metadata } from "next";

interface LangPageProps {
  params: {
    lang: string;
  };
}

export async function generateMetadata({
  params,
}: LangPageProps): Promise<Metadata> {
  const { lang } = params;
  console.log('lang', lang)

  return {
    title: lang,
    description: `Posts on the topic of ${lang}`,
  };
}

export const generateStaticParams = () => {
  const langs = getAllLangs(posts);
  const paths = Object.keys(langs).map((lang) => ({ lang: slug(lang) }));
  return paths;
};

export default function LangPage({ params }: LangPageProps) {
  const { lang } = params;
  // const title = lang.split("-").join(" ");

  const allPosts = getPostsByLangSlug(posts, lang);
  const displayPosts = allPosts.filter(post => post.published !== false)
  const langs = getAllLangs(posts);
  const sortedLangs = sortLangsByCount(langs);

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      {/* <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl capitalize">
            {title}
          </h1>
        </div>
      </div> */}
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>Nothing to see here yet</p>
          )}
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>Languages</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedLangs?.map((l) => (
              <Language lang={l} key={l} count={langs[l]} current={slug(l) === lang} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}