import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/content";
import { slug } from "github-slugger";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("ja-JP", {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).replace(/\//g, '-');
}

export function sortPosts(posts: Array<Post>) {
  return posts.filter(post => post.published !== false).sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function getAllTags(posts: Array<Post>) {
  const tags: Record<string, number> = {}
  posts.filter(post => post.published !== false).forEach(post => {
    if (post.tags) {
      post.tags?.forEach(tag => {
        tags[tag] = (tags[tag] ?? 0) + 1;
      })
    }
  })
  return tags;
}

export function getAllLangs(posts: Array<Post>) {
  const langs: Record<string, number> = {}
  posts.filter(post => post.published !== false).forEach(post => {
    if (post.lang) {
      langs[post.lang] = (langs[post.lang] ?? 0) + 1;
    }
  })
  return langs;
}

export function sortTagsByCount(tags: Record<string, number>) {
  return Object.keys(tags).sort((a, b) => tags[b] - tags[a])
}

export function sortLangsByCount(langs: Record<string, number>) {
  return Object.keys(langs).sort((a, b) => langs[b] - langs[a])
}

export function getPostsByTagSlug(posts: Array<Post>, tag: string) {
  return posts.filter(post => {
    if (!post.tags) return false
    const slugifiedTags = post.tags.map(tag => slug(tag))
    return slugifiedTags.includes(tag)
  })
}

export function getPostsByLangSlug(posts: Array<Post>, lang: string) {
  console.log('lang', lang)
  return posts.filter(post => {
    if (!post.lang) return false
    return slug(post.lang) === lang
  })
}

export function getFeedPosts(posts: Array<Post>) {
  return posts.filter(post => post.published !== false).sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}
