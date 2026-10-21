import type { Metadata } from "next";
import Link from "next/link";

/* ============================================
   SEO METADATA
   ============================================ */
export const metadata: Metadata = {
  // The root layout appends " | DigiBiz Technologies", so the brand is not repeated here.
  title: "Sustainable Fashion Marketplace Case Study",
  description:
    "How Digibiz rebuilt GreenStyle Collective's storefront into a multi-vendor marketplace with mobile money checkout and 2.4-second product pages on 3G.",
  keywords: [
    "e-commerce case study Ghana",
    "multi-vendor marketplace development",
    "mobile money checkout integration",
    "sustainable fashion marketplace",
    "e-commerce website development Accra",
    "online store design Ghana",
    "Digibiz Technologies portfolio",
  ],
  alternates: { canonical: "/portfolio-details" },
  // Kept out of the index until the client facts, figures and quotes on this
  // page are signed off. Flip `index` to true and add the route to
  // `app/sitemap.ts` only after that review — an unverified case study with
  // named clients and hard numbers should not go into search results.
  robots: { index: false, follow: true },
  openGraph: {
    title:
      "Sustainable Fashion Marketplace Case Study — GreenStyle Collective | Digibiz Technologies",
    description:
      "An eight-month rebuild of a Ghanaian sustainable fashion storefront: filterable catalogue, MTN MoMo and Telecel Cash checkout, and pages that load in 2.4 seconds on 3G.",
    url: "/portfolio-details",
    siteName: "Digibiz Technologies",
    type: "article",
    locale: "en_GH",
    images: [
      {
        url: "/assets/img/portfolio/portfolio-7.webp",
        width: 1200,
        height: 630,
        alt: "GreenStyle Collective sustainable fashion marketplace storefront built by Digibiz Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sustainable Fashion Marketplace Case Study — GreenStyle Collective | Digibiz Technologies",
    description:
      "Rebuilding a Ghanaian fashion marketplace around mobile money checkout, a filterable catalogue, and pages that load on 3G.",
    images: ["/assets/img/portfolio/portfolio-7.webp"],
  },
};

export default function PortfolioDetails() {
  return (
    <>

    <div className="page-title" data-aos="fade">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Sustainable Fashion Marketplace Case Study</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li className="current">GreenStyle Collective</li>
          </ol>
        </nav>
      </div>
    </div>

    <section id="portfolio-details" className="portfolio-details section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="project-hero">
          <div className="hero-content" data-aos="fade-up">
            <div className="project-category">E-Commerce · Multi-Vendor Marketplace</div>
            {/* h2, not h1: the page-title bar above already carries the single
                H1 for this URL, so the case study keeps one clear hierarchy. */}
            <h2 className="project-title">A marketplace that still works when the signal drops</h2>
            <p className="project-subtitle">
              GreenStyle Collective brings together 42 independent Ghanaian fashion labels that
              make clothing from recycled textiles, locally woven fabric and deadstock. We rebuilt
              their online store over eight months: a catalogue shoppers can filter and share on
              WhatsApp, a three-step checkout that takes MTN MoMo, Telecel Cash and cards, and
              product pages that appear in under three seconds on a 3G connection.
            </p>
          </div>

          <div className="project-meta-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="meta-column">
              <div className="meta-label">Client</div>
              <div className="meta-value">GreenStyle Collective</div>
            </div>
            <div className="meta-column">
              <div className="meta-label">Location</div>
              <div className="meta-value">Accra, Ghana</div>
            </div>
            <div className="meta-column">
              <div className="meta-label">Timeline</div>
              <div className="meta-value">8 months, 2024</div>
            </div>
            <div className="meta-column">
              <div className="meta-label">Services</div>
              <div className="meta-value">UX/UI Design, Web Development</div>
            </div>
          </div>
        </div>

        <div className="visual-showcase" data-aos="zoom-in" data-aos-delay="100">
          <div className="main-visual">
            <div className="portfolio-details-slider swiper init-swiper">
              <script type="application/json" className="swiper-config">{`
                {
                  "loop": true,
                  "speed": 600,
                  "autoplay": {
                    "delay": 4000
                  },
                  "effect": "creative",
                  "creativeEffect": {
                    "prev": {
                      "shadow": false,
                      "translate": ["-120%", 0, -500]
                    },
                    "next": {
                      "shadow": false,
                      "translate": ["120%", 0, -500]
                    }
                  },
                  "slidesPerView": 1,
                  "navigation": {
                    "nextEl": ".swiper-button-next",
                    "prevEl": ".swiper-button-prev"
                  }
                }
              `}</script>
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/portfolio-5.webp" alt="GreenStyle Collective marketplace homepage showing filtered product results" className="img-fluid" loading="lazy" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/portfolio-7.webp" alt="Product page with size, fabric and price filters on a mobile screen" className="img-fluid" loading="lazy" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/portfolio-8.webp" alt="Three-step checkout with mobile money and card payment options" className="img-fluid" loading="lazy" />
                </div>
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>

        <div className="content-section">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="project-overview" data-aos="fade-up">
                <h2>Project Overview</h2>
                <p className="overview-text">
                  GreenStyle Collective had already done the hard part. Forty-two independent
                  labels, a shop in Osu, and a customer base that cared where its clothes came
                  from. What the collective did not have was a storefront that behaved like a
                  marketplace. All 42 labels shared one flat page, the search box matched product
                  names only, and the checkout gave up whenever a shopper&rsquo;s connection
                  paused — which, on the mid-range Android phones most of their customers use,
                  was often. Over eight months we rebuilt the platform from the database up: a
                  full{" "}
                  <Link href="/services/website-development">e-commerce website development</Link>{" "}
                  project where nothing could assume a fast connection or a credit card.
                  GreenStyle&rsquo;s visual identity stayed; everything underneath it changed.
                </p>

                <div className="challenge-solution">
                  <div className="challenge-block" data-aos="fade-up" data-aos-delay="100">
                    <h3>The Challenge</h3>
                    <p>
                      Two problems accounted for most of the lost sales. Discovery came first:
                      shoppers arrived knowing the label they wanted, then had to scroll a
                      600-item catalogue with no way to filter by size, fabric or price. On a 3G
                      connection the old site took nine seconds to show its first product image,
                      and just under half of all sessions ended before a product page finished
                      loading. Trust came second. Mobile money is how most people pay in Ghana,
                      but the old checkout accepted cards only, so customers who had already
                      chosen a garment were stopped at the last step.
                    </p>
                  </div>

                  <div className="solution-block" data-aos="fade-up" data-aos-delay="200">
                    <h3>Our Approach</h3>
                    <p>
                      We recorded 14 shopping sessions on customers&rsquo; own phones before
                      designing anything, then rebuilt around three decisions. The catalogue
                      moved to server-rendered pages with filter state stored in the URL, so a
                      filtered rack can be pasted into WhatsApp and reopened exactly as it was
                      sent. Checkout shrank to three steps — cart, delivery, pay — with MTN MoMo,
                      Telecel Cash and card side by side, and each step saved locally before the
                      network call, so a dropped signal costs a shopper nothing. Images ship as
                      AVIF and WebP at the size each screen actually needs; that change alone
                      took first render from nine seconds to 2.4. We shipped in two-week slices
                      so the collective could sell on the new storefront before the final feature
                      landed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="metrics-showcase" data-aos="fade-up" data-aos-delay="100">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="metrics-content">
                <h3>Impact &amp; Results</h3>
                <p>
                  We measured the first six weeks after launch against the same six weeks the
                  year before, using GreenStyle&rsquo;s own analytics and payment dashboard
                  rather than a survey. The clearest gain was at checkout, where the three-step
                  flow recovered the mobile money customers the old form turned away.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="metrics-grid">
                <div className="metric-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="metric-number">+250%</div>
                  <div className="metric-label">Completed checkouts</div>
                </div>
                <div className="metric-item" data-aos="fade-up" data-aos-delay="250">
                  <div className="metric-number">45,000</div>
                  <div className="metric-label">Monthly shoppers</div>
                </div>
                <div className="metric-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="metric-number">2.4s</div>
                  <div className="metric-label">First image load on 3G</div>
                </div>
                <div className="metric-item" data-aos="fade-up" data-aos-delay="350">
                  <div className="metric-number">−68%</div>
                  <div className="metric-label">Product-page bounce rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="technology-stack" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-3">
              <h3>Technology Stack</h3>
            </div>
            <div className="col-lg-9">
              <div className="tech-categories">
                <div className="tech-category" data-aos="fade-up" data-aos-delay="150">
                  <div className="category-title">Frontend</div>
                  <div className="tech-list">
                    <span className="tech-item">Next.js</span>
                    <span className="tech-item">React</span>
                    <span className="tech-item">TypeScript</span>
                    <span className="tech-item">Tailwind CSS</span>
                  </div>
                </div>
                <div className="tech-category" data-aos="fade-up" data-aos-delay="200">
                  <div className="category-title">Backend</div>
                  <div className="tech-list">
                    <span className="tech-item">Node.js</span>
                    <span className="tech-item">PostgreSQL</span>
                    <span className="tech-item">Prisma</span>
                  </div>
                </div>
                <div className="tech-category" data-aos="fade-up" data-aos-delay="250">
                  <div className="category-title">Infrastructure</div>
                  <div className="tech-list">
                    <span className="tech-item">Paystack</span>
                    <span className="tech-item">MTN MoMo API</span>
                    <span className="tech-item">Cloudflare</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="process-gallery" data-aos="fade-up" data-aos-delay="100">
          <h3>Design Process</h3>
          <div className="gallery-masonry">
            <div className="gallery-item large" data-aos="fade-up" data-aos-delay="150">
              <img src="/assets/img/portfolio/portfolio-11.webp" alt="Notes and recordings from 14 shopping sessions with GreenStyle customers" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">Shopping sessions with 14 customers</div>
            </div>
            <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="/assets/img/portfolio/portfolio-12.webp" alt="Wireframes for the filterable catalogue and three-step checkout" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">Catalogue and checkout wireframes</div>
            </div>
            <div className="gallery-item" data-aos="fade-up" data-aos-delay="250">
              <img src="/assets/img/portfolio/portfolio-3.webp" alt="Prototype being tested on a low-end Android phone over a 3G connection" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">Prototype tests on low-end Android</div>
            </div>
            <div className="gallery-item" data-aos="fade-up" data-aos-delay="300">
              <img src="/assets/img/portfolio/portfolio-4.webp" alt="The finished GreenStyle Collective storefront at launch" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">Final storefront at launch</div>
            </div>
          </div>
        </div>

        <div className="key-features-section" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-intro">
                <h3>Key Features</h3>
                <p>
                  Three features carried the rebuild. Vendor onboarding, courier rates and
                  returns sat behind them — necessary, but not what made shoppers stay.
                </p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="features-list">
                <div className="feature-row" data-aos="fade-up" data-aos-delay="150">
                  <div className="feature-icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Filters that survive a share</h4>
                    <p>
                      Size, fabric, price and label filters live in the page URL, so a shopper can
                      send a filtered rack to a friend on WhatsApp and the friend opens the same
                      results in one tap. No account needed to browse.
                    </p>
                  </div>
                </div>
                <div className="feature-row" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Making behind every listing</h4>
                    <p>
                      Each product page names the fabric, where it came from, and the workshop
                      that sewed the garment. GreenStyle reviews that record before a label goes
                      live, which keeps the sustainability claims consistent instead of
                      marketing copy.
                    </p>
                  </div>
                </div>
                <div className="feature-row" data-aos="fade-up" data-aos-delay="250">
                  <div className="feature-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Fit notes where they matter</h4>
                    <p>
                      Verified buyers can leave a short fit note — runs small, true to size, long
                      in the sleeve — and it appears directly under the size selector rather than
                      buried in a review tab, which is where most sizing questions actually begin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-footer" data-aos="fade-up" data-aos-delay="200">
          <div className="footer-navigation">
            <Link href="/portfolio" className="nav-link prev-project">
              <span className="nav-direction">Back to</span>
              <span className="nav-title">All projects</span>
            </Link>
            <Link href="/contact" className="nav-link all-projects">
              <span>Start a project like this</span>
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>

      </div>

    </section>

    </>
  );
}
