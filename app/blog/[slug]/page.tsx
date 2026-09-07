import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { requireAdminSession } from "@/lib/require-admin";

type Params = Promise<{ slug: string }>;

export const dynamic = "force-dynamic";

function formatDateString(dateVal: Date | string) {
  try {
    return new Date(dateVal).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return String(dateVal);
  }
}

function estimateReadTime(text: string) {
  const words = text ? text.trim().split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await prisma.post.findUnique({
    where: { slug },
  });

  if (!post) return {};

  const coverImage = post.coverImg || "/assets/img/portfolio/portfolio-3.webp";

  return {
    title: `${post.title} - Digibiz Technologies Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [coverImage],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const session = await requireAdminSession();

  const post = await prisma.post.findUnique({
    where: { slug },
  });

  // If post does not exist, or is draft and user is not admin, return 404
  if (!post || (!post.published && !session)) {
    notFound();
  }

  const related = await prisma.post.findMany({
    where: {
      published: true,
      slug: { not: post.slug },
    },
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  // Parse paragraphs safely
  const paragraphs = post.content
    ? post.content
        .split(/\r?\n\s*\r?\n/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  const coverImage = post.coverImg || "/assets/img/portfolio/portfolio-3.webp";
  const authorName = post.author || "Admin";

  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Blog Post</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li className="current">{post.title}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="blog-post" className="blog-post section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <Link href="/blog" className="blog-back-link">
            <i className="bi bi-arrow-left"></i>
            <span>Back to Blog</span>
          </Link>

          {!post.published && (
            <div className="mb-4 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
              <strong>Draft Preview:</strong> This post is currently unpublished and only visible to administrators.
            </div>
          )}

          <div className="blog-post-header">
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-meta justify-content-center">
              <span>
                <i className="bi bi-person"></i> {authorName}
              </span>
              <span>
                <i className="bi bi-calendar3"></i> {formatDateString(post.createdAt)}
              </span>
              <span>
                <i className="bi bi-clock"></i> {estimateReadTime(post.content)}
              </span>
            </div>
          </div>

          <div className="blog-post-cover" data-aos="zoom-in" data-aos-delay="150">
            <Image
              src={coverImage}
              alt={post.title}
              className="img-fluid"
              width={1200}
              height={630}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
          </div>

          <div className="blog-post-body" data-aos="fade-up" data-aos-delay="200">
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            ) : (
              <p>{post.content}</p>
            )}

            <div className="blog-author-box">
              <Image
                src="/assets/img/person/person-f-1.webp"
                alt={authorName}
                width={60}
                height={60}
                className="rounded-circle"
              />
              <div>
                <h5>{authorName}</h5>
                <span>Digibiz Technologies</span>
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="blog-related mt-5 pt-5" data-aos="fade-up" data-aos-delay="250">
              <h4>You Might Also Like</h4>
              <div className="row gy-4">
                {related.map((relatedPost) => (
                  <div className="col-lg-4 col-md-6" key={relatedPost.slug}>
                    <article className="blog-card">
                      <div className="blog-card-image">
                        <span className="blog-category">{relatedPost.category}</span>
                        <Image
                          src={relatedPost.coverImg || "/assets/img/portfolio/portfolio-3.webp"}
                          alt={relatedPost.title}
                          width={400}
                          height={250}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="blog-card-body">
                        <div className="blog-meta">
                          <span>
                            <i className="bi bi-calendar3"></i> {formatDateString(relatedPost.createdAt)}
                          </span>
                          <span>
                            <i className="bi bi-clock"></i> {estimateReadTime(relatedPost.content)}
                          </span>
                        </div>
                        <h3>
                          <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                        </h3>
                        <p>{relatedPost.excerpt}</p>
                        <Link href={`/blog/${relatedPost.slug}`} className="read-more">
                          <span>Read Article</span>
                          <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
