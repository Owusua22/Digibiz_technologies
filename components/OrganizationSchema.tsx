import Script from "next/script";

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Digibiz Technologies",
    url: "https://digibiztechnologies.com",
    logo: "https://digibiztechnologies.com/logo.png",

image: "https://digibiztechnologies.com/logo.png",

    description:
      "Digibiz Technologies provides web development, mobile apps, SEO, digital marketing, branding, and business automation solutions.",

    areaServed: "Ghana",

    serviceType: [
      "Website Development",
      "Mobile App Development",
      "SEO Services",
      "Digital Marketing",
      "Business Automation",
      "Video Editing",
      "Google Business Profile Optimization",
      "Social Media Management",
      "Email Marketing",
      "Content Marketing",
      "Social Media Marketing",

    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}