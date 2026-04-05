"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Community Planning",
    description: [
      "Comprehensive Plans, Long Range Plans, Housing Plans, Affordable Housing Plans, Zoning & Land Use Plans, Economic Development Plans, Climate Action & Resilience Plans, Transportation & Mobility Plans.",
    ],
    image: "/images/home/service1.png",
  },
  {
    id: 2,
    title: "Housing & Community Development",
    description: [
      "Affordable housing policy, Development plans, Affordable Housing Trust plans, HUD/FHA compliance, and Housing market analysis.",
    ],
    image: "/images/home/service2.png",
  },
  {
    id: 3,
    title: "Zoning & Permitting",
    description: [
      "Special permits, variances, subdivisions, Zoning/rezoning plans, and development review assistance.",
    ],
    image: "/images/home/service3.png",
  },
  {
    id: 4,
    title: "Grant Writing",
    description: [
      "Strategic grant development and application support for federal, state, municipal, and nonprofit funding programs",
      "Includes needs assessment, narrative, budget, compliance documentation, and full application management",
    ],
    image: "/images/home/service4.png",
  },
  {
    id: 5,
    title: "RFE",
    description: [
      "Professional support for Requests for Expressions of Interest (RFE) and Requests for Eligibility, including:",
      "• Preparing organizational qualifications",
      "• Project concept development",
      "• Compliance documentation",
      "• Submission management for municipal, state, and federal programs",
      "• Support for nonprofit and housing authority",
      "Ideal for municipalities, community development organizations, and developers seeking to respond to early-stage funding or partnership opportunities.",
    ],
    image: "/images/home/service5.png",
  },
  {
    id: 6,
    title: "Technical Assistance",
    description: [
      "We provide targeted analytical and operational support to help communities and organizations make informed, strategic decisions.",
      "• GIS Mapping & Spatial Analysis",
      "• Data Analysis & Forecasting",
      "• Regulatory & Policy Review",
      "• Community Engagement Support",
      "• Grant Technical Support",
      "• RFE/RFQ/RFP Assistance",
      "• Project Management Support",
      "• Dashboards & Visualizations",
    ],
    image: "/images/home/service6.png",
  },
  {
    id: 7,
    title: "International Planning",
    description: [
      "We bring global experience in sustainable development and community resilience, supporting governments and NGOs in addressing complex urban challenges worldwide.",
      "• Climate Resilience & Adaptation",
      "• Informal Settlement Upgrading",
      "• Global Housing Strategies",
      "• Urbanization & Growth Management",
      "• Culturally Responsive Community Engagement",
      "• Sustainable Development & SDG Alignment",
    ],
    image: "/images/home/service7.png",
  },
];

type Service = (typeof services)[number];

export default function ServicesSection() {
  return (
    <section className="bg-white py-6 md:py-16 px-4">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[28px] md:text-[36px] font-semibold text-[#1a1a2e]">
            Our Services
          </h2>
          <p className="text-gray-600 text-sm md:text-base mt-3 max-w-[650px] mx-auto">
            At Baystate Planning & Consulting, we bring over 10 years of
            cross-sector experience in municipal, regional, and international
            planning.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-16 md:space-y-20">
          {services.map((service, index) => (
            <ServiceItem key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
      <div className="text-gray-600 text-sm md:text-base max-w-[700px] mx-auto mt-8 text-center">
        <p>
          We're known for more than our experience, skill set and
          multidisciplinary backgrounds. We're recognized for our creative,
          problem solving skills. We thrive in creating out-of-the- box
          solutions for complex challenges.
        </p>
      </div>
    </section>
  );
}

function ServiceItem({ service, index }: { service: Service; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section>
      <div
        className={`grid md:grid-cols-2 gap-10 items-center ${
          !isEven ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image */}
        <div className="overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            width={1000}
            height={800}
            className="w-full h-auto object-top object-cover transition duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div>
          <h3 className=" text-[20px] md:text-[24px] font-semibold text-[#1a1a2e] mb-4">
            {service.title}
          </h3>

          <ul className="text-gray-600 text-sm md:text-base space-y-2">
            {service.description.map((item, i) => (
              <li key={i} className="flex items-start  gap-2">
                {/* <span className="text-[#AC5D50] mt-[2px]"></span> */}
                <span className="max-w-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
