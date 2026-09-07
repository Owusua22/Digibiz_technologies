export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  authorImage: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
};

/**
 * Original demo content. This is only used to seed `data/blog-posts.json`
 * the first time the app runs — after that, `lib/blog-store.ts` is the
 * source of truth and posts are managed through the admin dashboard.
 */

/** Pure helper — finds a post within an already-loaded list. */
export function findPostBySlug(posts: BlogPost[], slug: string) {
  return posts.find((post) => post.slug === slug);
}

/** Pure helper — picks other posts from an already-loaded list. */
export function pickRelatedPosts(posts: BlogPost[], slug: string, count = 3) {
  return posts.filter((post) => post.slug !== slug).slice(0, count);
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
