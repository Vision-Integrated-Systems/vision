export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vision Integrated Systems",
    "image": "https://vision.jeffhogg.com/vision-logo.png",
    "telephone": "832-535-1991",
    "email": "info@vision-texas.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "32311 Tamina Rd, Suite A",
      "addressLocality": "Magnolia",
      "addressRegion": "TX",
      "postalCode": "77354",
      "addressCountry": "US"
    },
    "url": "https://vision-texas.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}