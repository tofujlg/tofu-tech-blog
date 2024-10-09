import { defineConfig, defineCollection, s } from 'velite'

const computedFields = <T extends {slug: string} >(data:T) =>({
    ...data,
    slugAsParams: data.slug.split('/').slice(1).join('/'),
})

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx', // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99),
      slug: s.slug('posts'),
      date: s.isodate(),
      description: s.string().optional(),
      body: s.mdx()
}).transform(computedFields)
});

export default defineConfig({
    root: 'content',
    output: {
        data: "velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: {
        posts,
    },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: [],
    }
})