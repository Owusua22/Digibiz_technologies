import Link from "next/link";

export default function PortfolioDetails() {
  return (
    <>

    
    <div className="page-title" data-aos="fade">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li className="current">Portfolio Details</li>
          </ol>
        </nav>
      </div>
    </div>

    
    <section id="portfolio-details" className="portfolio-details section">

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="project-hero">
          <div className="hero-content" data-aos="fade-up">
            <div className="project-category">E-Commerce Platform</div>
            <h1 className="project-title">Sustainable Fashion Marketplace</h1>
            <p className="project-subtitle">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
          </div>

          <div className="project-meta-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="meta-column">
              <div className="meta-label">Client</div>
              <div className="meta-value">GreenStyle Collective</div>
            </div>
            <div className="meta-column">
              <div className="meta-label">Timeline</div>
              <div className="meta-value">8 Months</div>
            </div>
            <div className="meta-column">
              <div className="meta-label">Year</div>
              <div className="meta-value">2024</div>
            </div>
            <div className="meta-column">
              <div className="meta-label">Services</div>
              <div className="meta-value">UX/UI Design, Development</div>
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
                  <img src="/assets/img/portfolio/portfolio-5.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/portfolio-7.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
                </div>
                <div className="swiper-slide">
                  <img src="/assets/img/portfolio/portfolio-8.webp" alt="Project showcase" className="img-fluid" loading="lazy" />
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
                <p className="overview-text">Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Consectetur a erat nam at lectus urna duis convallis convallis tellus.</p>

                <div className="challenge-solution">
                  <div className="challenge-block" data-aos="fade-up" data-aos-delay="100">
                    <h3>The Challenge</h3>
                    <p>Mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus. Elementum nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus et.</p>
                  </div>

                  <div className="solution-block" data-aos="fade-up" data-aos-delay="200">
                    <h3>Our Approach</h3>
                    <p>Ultrices eros in cursus turpis massa tincidunt dui ut ornare. Diam vulputate ut pharetra sit amet aliquam id diam. Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.</p>
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
                <p>Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas sed tempus.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="metrics-grid">
                <div className="metric-item" data-aos="fade-up" data-aos-delay="200">
                  <div className="metric-number">250%</div>
                  <div className="metric-label">Increase in conversions</div>
                </div>
                <div className="metric-item" data-aos="fade-up" data-aos-delay="250">
                  <div className="metric-number">45k</div>
                  <div className="metric-label">Monthly active users</div>
                </div>
                <div className="metric-item" data-aos="fade-up" data-aos-delay="300">
                  <div className="metric-number">4.9</div>
                  <div className="metric-label">User satisfaction score</div>
                </div>
                <div className="metric-item" data-aos="fade-up" data-aos-delay="350">
                  <div className="metric-number">68%</div>
                  <div className="metric-label">Reduced bounce rate</div>
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
                    <span className="tech-item">React</span>
                    <span className="tech-item">TypeScript</span>
                    <span className="tech-item">Styled Components</span>
                  </div>
                </div>
                <div className="tech-category" data-aos="fade-up" data-aos-delay="200">
                  <div className="category-title">Backend</div>
                  <div className="tech-list">
                    <span className="tech-item">Node.js</span>
                    <span className="tech-item">PostgreSQL</span>
                    <span className="tech-item">GraphQL</span>
                  </div>
                </div>
                <div className="tech-category" data-aos="fade-up" data-aos-delay="250">
                  <div className="category-title">Infrastructure</div>
                  <div className="tech-list">
                    <span className="tech-item">AWS</span>
                    <span className="tech-item">Docker</span>
                    <span className="tech-item">Kubernetes</span>
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
              <img src="/assets/img/portfolio/portfolio-11.webp" alt="Design process" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">User Research &amp; Personas</div>
            </div>
            <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
              <img src="/assets/img/portfolio/portfolio-12.webp" alt="Design process" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">Wireframes</div>
            </div>
            <div className="gallery-item" data-aos="fade-up" data-aos-delay="250">
              <img src="/assets/img/portfolio/portfolio-3.webp" alt="Design process" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">Prototypes</div>
            </div>
            <div className="gallery-item" data-aos="fade-up" data-aos-delay="300">
              <img src="/assets/img/portfolio/portfolio-4.webp" alt="Design process" className="img-fluid glightbox" loading="lazy" />
              <div className="gallery-caption">Final Design</div>
            </div>
          </div>
        </div>

        <div className="key-features-section" data-aos="fade-up" data-aos-delay="100">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-intro">
                <h3>Key Features</h3>
                <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="features-list">
                <div className="feature-row" data-aos="fade-up" data-aos-delay="150">
                  <div className="feature-icon">
                    <i className="bi bi-search"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Advanced Search Filters</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                  </div>
                </div>
                <div className="feature-row" data-aos="fade-up" data-aos-delay="200">
                  <div className="feature-icon">
                    <i className="bi bi-heart"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Sustainability Scoring</h4>
                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</p>
                  </div>
                </div>
                <div className="feature-row" data-aos="fade-up" data-aos-delay="250">
                  <div className="feature-icon">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Community Reviews</h4>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-footer" data-aos="fade-up" data-aos-delay="200">
          <div className="footer-navigation">
            <a href="#" className="nav-link prev-project">
              <span className="nav-direction">Previous</span>
              <span className="nav-title">Digital Banking App</span>
            </a>
            <a href="#" className="nav-link all-projects">
              <i className="bi bi-grid-3x3-gap"></i>
              <span>All Projects</span>
            </a>
            <a href="#" className="nav-link next-project">
              <span className="nav-direction">Next</span>
              <span className="nav-title">Healthcare Dashboard</span>
            </a>
          </div>
        </div>

      </div>

    </section>

    </>
  );
}
