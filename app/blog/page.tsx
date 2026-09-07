import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog - Digibiz Technologies",
  description: "Insights on strategy, digital transformation, branding and consulting from the Digibiz team.",
  alternates: { canonical: "/blog" },
};

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

export default async function BlogPage() {
  const blogPosts = await prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });

  const [featured, ...rest] = blogPosts;
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Blog</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li className="current">Blog</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="blog" className="blog section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="blog-intro">
            <p>
              Perspectives on strategy, digital transformation, branding and business
              growth from the people behind Digibiz Technologies.
            </p>
          </div>

          {blogPosts.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-gray-500">No posts have been published yet. Check back soon.</p>
            </div>
          ) : (
            <>
              <div className="blog-filters" data-aos="fade-up" data-aos-delay="150">
                <a href="#" className="active">
                  All Posts
                </a>
                {categories.map((category) => (
                  <a href={`#${category}`} key={category}>
                    {category}
                  </a>
                ))}
              </div>

              {/* Featured post */}
              {featured && (
                <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
                  <article className="blog-featured">
                    <div className="blog-featured-image">
                      <Image
                        src={featured.coverImg || "/assets/img/about/about-8.webp"}
                        alt={featured.title}
                        className="img-fluid"
                        width={800}
                        height={450}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </div>
                    <div className="blog-featured-body">
                      <div className="blog-meta">
                        <span>
                          <i className="bi bi-folder2"></i> {featured.category}
                        </span>
                        <span>
                          <i className="bi bi-calendar3"></i> {formatDateString(featured.createdAt)}
                        </span>
                        <span>
                          <i className="bi bi-clock"></i> {estimateReadTime(featured.content)}
                        </span>
                      </div>
                      <h2>
                        <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                      </h2>
                      <p>{featured.excerpt}</p>
                      <Link href={`/blog/${featured.slug}`} className="read-more">
                        <span>Read Article</span>
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                </div>
              )}
            </>
          )}

          {/* Post grid */}
          {rest.length > 0 && (
            <div className="row gy-4">
              {rest.map((post, index) => (
                <div
                  className="col-lg-4 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 50}
                  key={post.slug}
                >
                    <article className="blog-card">
                      <div className="blog-card-image">
                        <span className="blog-category">{post.category}</span>
                        <Image
                          src={post.coverImg || "/assets/img/portfolio/portfolio-3.webp"}
                          alt={post.title}
                          width={400}
                          height={250}
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                      <div className="blog-card-body">
                        <div className="blog-meta">
                          <span>
                            <i className="bi bi-calendar3"></i> {formatDateString(post.createdAt)}
                          </span>
                          <span>
                            <i className="bi bi-clock"></i> {estimateReadTime(post.content)}
                          </span>
                        </div>
                        <h3>
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`} className="read-more">
                          <span>Read Article</span>
                          <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </article>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
