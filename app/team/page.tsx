import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Team - Digibiz Technologies",
  description:
    "Meet the hardworking team behind Digibiz Technologies' strategy, product, marketing, and engineering work.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "Our Team - Digibiz Technologies",
    description:
      "Meet the hardworking team behind Digibiz Technologies' strategy, product, marketing, and engineering work.",
    url: "/team",
    type: "website",
  },
};

export default function TeamPage() {
  return (
    <>

    <div className="page-title" data-aos="fade">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <h1 className="mb-2 mb-lg-0">Team</h1>
        <nav className="breadcrumbs">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li className="current">Team</li>
          </ol>
        </nav>
      </div>
    </div>

    <section id="team" className="team section">

      
      <div className="container section-title" data-aos="fade-up">
        <h2>Team</h2>
        <p>Our Hardworking Team</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="member-card">
              <div className="member-image-wrapper">
                <img src="/assets/img/person/person-f-1.webp" className="img-fluid" alt="Team Member" />
              </div>
              <div className="member-content">
                <h4 className="member-name">Sarah Chen</h4>
                <span className="member-role">Chief Executive Officer</span>
                <p className="member-bio">Praesentium nihil ut laudantium cumque. Ut et consequatur ab ut totam architecto. Expedita sunt eum</p>
                <div className="member-socials">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="member-card">
              <div className="member-image-wrapper">
                <img src="/assets/img/person/person-m-2.webp" className="img-fluid" alt="Team Member" />
              </div>
              <div className="member-content">
                <h4 className="member-name">David Lee</h4>
                <span className="member-role">Product Manager</span>
                <p className="member-bio">Voluptas qui enim omnis est atque. Enim sunt quo et amet corporis et. Autem eaque optio.</p>
                <div className="member-socials">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-github"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="member-card">
              <div className="member-image-wrapper">
                <img src="/assets/img/person/person-f-3.webp" className="img-fluid" alt="Team Member" />
              </div>
              <div className="member-content">
                <h4 className="member-name">Laura Rodriguez</h4>
                <span className="member-role">Marketing Director</span>
                <p className="member-bio">Qui ut autem quo error molestiae. Voluptatem quia eligendi voluptatibus beatae vitae et quis. Quis voluptatem.</p>
                <div className="member-socials">
                  <a href="#"><i className="bi bi-twitter-x"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="member-card">
              <div className="member-image-wrapper">
                <img src="/assets/img/person/person-m-4.webp" className="img-fluid" alt="Team Member" />
              </div>
              <div className="member-content">
                <h4 className="member-name">Michael Brown</h4>
                <span className="member-role">Lead Engineer</span>
                <p className="member-bio">Rerum et sint voluptatem enim aut. Quisquam et alias ut qui voluptatum. Autem voluptas exercitationem.</p>
                <div className="member-socials">
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                  <a href="#"><i className="bi bi-github"></i></a>
                  <a href="#"><i className="bi bi-stack-overflow"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>

    </>
  );
}
