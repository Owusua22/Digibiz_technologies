import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How DigiBiz Technologies collects, uses and protects your personal information when you use our website or contact us.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Privacy Policy</h1>
          <nav className="breadcrumbs">
            <ol>
              <li><Link href="/">Home</Link></li>
              <li className="current">Privacy Policy</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="privacy-2" className="privacy-2 section">
        <div className="container" data-aos="fade-up">
          
          <div className="privacy-header" data-aos="fade-up">
            <div className="header-content">
              <div className="last-updated">Effective Date: February 27, 2025</div>
              <h1>Digibiz Technologies Privacy Policy</h1>
              <p className="intro-text">
                At Digibiz Technologies, we are committed to protecting your privacy. This Privacy Policy describes how we collect, use, process, and disclose your information when you visit our website, interact with our services, or engage with us for web development, mobile app development, digital marketing, graphic design, SEO, and business &amp; IT solutions services.
              </p>
            </div>
          </div>

          <div className="privacy-content" data-aos="fade-up">
            
            <div className="content-section">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Digibiz Technologies (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), located in Accra, Ghana. When you use our website, request a consultation, or hire us for our digital services, you are trusting us with your information. We understand this is a big responsibility and work hard to protect your data and put you in control.
              </p>
              <p>
                This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can update, manage, export, and delete your information. By accessing our website or using our services, you agree to the practices described in this policy.
              </p>
            </div>

            <div className="content-section">
              <h2>2. Information We Collect</h2>
              <p>We collect information to provide better services to our clients and website visitors. The types of information we collect include:</p>

              <h3>2.1 Information You Provide to Us</h3>
              <p>When you fill out our contact form, request a quote, subscribe to updates, or engage our services, you may provide us with:</p>
              <ul>
                <li><strong>Contact Information:</strong> Your full name, email address, phone number, and company/business name.</li>
                <li><strong>Project Details:</strong> Information about your business goals, project requirements, timelines, and budget shared via our contact forms or during discovery calls.</li>
                <li><strong>Communication Data:</strong> Any messages, inquiries, or feedback you send through our website.</li>
              </ul>

              <h3>2.2 Information Collected Automatically</h3>
              <p>When you visit our website, we automatically collect and store certain information, including:</p>
              <ul>
                <li><strong>Device &amp; Browser Information:</strong> IP address, browser type, operating system, and device identifiers.</li>
                <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and referring URLs.</li>
                <li><strong>Cookies &amp; Tracking Technologies:</strong> We use cookies and similar technologies to analyze traffic, improve user experience, and support our SEO and digital marketing efforts.</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>3. How We Use Your Information</h2>
              <p>We use the information we collect to deliver our services effectively and improve your experience. Specifically, we use your information to:</p>
              <ul>
                <li>Respond to your inquiries and communicate with you regarding our web development, AI, automation, and branding services.</li>
                <li>Schedule and conduct free discovery consultations.</li>
                <li>Prepare proposals, contracts, and deliver the digital services you have requested.</li>
                <li>Improve our website functionality, user experience, and service offerings.</li>
                <li>Send you relevant updates, newsletters, or marketing communications (with your consent).</li>
                <li>Analyze website traffic and usage patterns to optimize our SEO and digital marketing strategies.</li>
                <li>Maintain security, prevent fraud, and verify identity.</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>4. Information Sharing and Disclosure</h2>
              <p>We do not sell your personal information. We do not share personal information with companies, organizations, or individuals outside of Digibiz Technologies except in the following cases:</p>

              <h3>4.1 With Your Consent</h3>
              <p>We will share personal information with third parties when we have your explicit consent to do so.</p>

              <h3>4.2 With Service Providers</h3>
              <p>We may share information with trusted third-party vendors who assist us in operating our website, conducting our business, or servicing you (e.g., hosting providers, email delivery services, analytics tools), provided they agree to keep this information confidential and secure.</p>

              <h3>4.3 For Legal Reasons</h3>
              <p>We will share personal information if we have a good-faith belief that access, use, preservation, or disclosure of the information is reasonably necessary to:</p>
              <ul>
                <li>Meet any applicable law, regulation, legal process, or enforceable governmental request under Ghanaian or international law.</li>
                <li>Enforce applicable Terms of Service, including investigation of potential violations.</li>
                <li>Detect, prevent, or otherwise address fraud, security, or technical issues.</li>
                <li>Protect against harm to the rights, property, or safety of Digibiz Technologies, our users, or the public.</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>5. Data Security</h2>
              <p>We work hard to protect our users and clients from unauthorized access to or unauthorized alteration, disclosure, or destruction of the information we hold. Our security measures include:</p>
              <ul>
                <li>Encrypting our website and data transmissions using SSL/TLS technology.</li>
                <li>Regularly reviewing our information collection, storage, and processing practices to guard against unauthorized access.</li>
                <li>Restricting access to personal information strictly to Digibiz Technologies employees, contractors, and agents who need to know that information in order to process it for us, and who are subject to strict confidentiality obligations.</li>
              </ul>
            </div>

            <div className="content-section">
              <h2>6. Data Retention</h2>
              <p>We retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
            </div>

            <div className="content-section">
              <h2>7. International Data Transfers</h2>
              <p>Digibiz Technologies is based in Accra, Ghana, but we proudly serve clients across Africa and internationally. If you are accessing our services from outside Ghana, please be aware that your information may be transferred to, stored, and processed in Ghana or other countries where our service providers operate. By using our services, you consent to this transfer.</p>
            </div>

            <div className="content-section">
              <h2>8. Your Rights and Choices</h2>
              <p>You have certain rights regarding your personal information. Depending on your location, these may include:</p>
              <ul>
                <li><strong>The right to access:</strong> Request copies of the personal information we hold about you.</li>
                <li><strong>The right to rectification:</strong> Request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
                <li><strong>The right to erasure:</strong> Request that we delete your personal information, under certain conditions.</li>
                <li><strong>The right to restrict processing:</strong> Request that we restrict the processing of your personal data.</li>
                <li><strong>The right to object:</strong> Object to our processing of your personal data for direct marketing purposes.</li>
                <li><strong>The right to withdraw consent:</strong> Where we rely on your consent to process your data, you may withdraw it at any time.</li>
              </ul>
              <p>To exercise any of these rights, please contact us using the details provided below.</p>
            </div>

            <div className="content-section">
              <h2>9. Cookies Policy</h2>
              <p>Our website uses cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website effectively.</p>
            </div>

            <div className="content-section">
              <h2>10. Children&apos;s Privacy</h2>
              <p>Our services are intended for businesses and professionals. We do not knowingly collect personal identifiable information from children under the age of 18. If you are a parent or guardian and you are aware that your child has provided us with personal data, please contact us so we can take necessary actions.</p>
            </div>

            <div className="content-section">
              <h2>11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top.</p>
              <p>Your continued use of our website or services after any changes to this Privacy Policy constitutes your acceptance of such changes.</p>
            </div>
          </div>

          <div className="privacy-contact" data-aos="fade-up">
            <h2>Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please reach out to us:</p>
            <div className="contact-details">
              <p><strong>Digibiz Technologies</strong></p>
              <p><strong>Email:</strong> <a href="mailto:digibiztechnologies1@gmail.com">digibiztechnologies1@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+233553191734">+233 553 191 734</a></p>
              <p><strong>Address:</strong> Accra, Ghana</p>
              <p><strong>Business Hours:</strong> Monday - Friday: 9:00 AM - 6:00 PM | Sunday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}