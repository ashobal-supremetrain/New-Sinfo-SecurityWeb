export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Supreme Information Security LLC",
    url: "https://supremeinfosecurity.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/119744023-removebg-preview-VErrS6zCdfAMqjTIaxfA59tYKwuwN3.png", // Direct link to the logo
    description:
      "Expert cybersecurity services and full-stack development solutions. Specializing in threat protection, secure infrastructure, and custom application development.",
    email: "ashobal@sinfosecurity.com",
    sameAs: ["https://www.linkedin.com/company/supreme-information-security-llc", "https://github.com/sinfosecurity"],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "39.8283",
        longitude: "-98.5795",
      },
      geoRadius: "2000",
    },
    services: [
      {
        "@type": "Service",
        name: "Cybersecurity Solutions",
        description: "Advanced threat protection and secure infrastructure design",
      },
      {
        "@type": "Service",
        name: "Full-Stack Development",
        description: "End-to-end application development with security in mind",
      },
      {
        "@type": "Service",
        name: "IT Staff Augmentation",
        description: "Specialized IT professionals across security, networking, and cloud domains",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

