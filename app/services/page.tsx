import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/cta-section";

// Reusable Service Card Component
interface ServiceCardProps {
  number: number;
  title: string;
  description: string;
}

function ServiceCard({ number, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="space-y-3 sm:space-y-4">
        <div className="text-2xl sm:text-3xl font-bold text-[#0383CA]">
          {number}
        </div>
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
          {title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function Service() {
  const services = [
    {
      id: 1,
      number: 1,
      title: "Web Development",
      description:
        "Build responsive, scalable websites and web applications using modern technologies and best practices.",
    },
    {
      id: 2,
      number: 2,
      title: "App Development",
      description:
        "Develop native and cross-platform mobile applications that deliver seamless performance across devices.",
    },
    {
      id: 3,
      number: 3,
      title: "UI/UX Design",
      description:
        "Create intuitive interfaces and engaging user experiences that drive conversions and user satisfaction.",
    },
    {
      id: 4,
      number: 4,
      title: "Software Development (.NET)",
      description:
        "Design compelling visual content that communicates your brand message and captivates your audience.",
    },
    {
      id: 5,
      number: 5,
      title: "Social Media Management & Branding",
      description:
        "Build strong brand identities that resonate with your target audience and differentiate you from competitors.",
    },
    {
      id: 6,
      number: 6,
      title: "AI Solutions",
      description:
        "Implement intelligent automation solutions that streamline processes and enhance business efficiency.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              {/* Badge */}
              <div className="inline-block">
                <span className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border-2 border-gray-200 bg-white">
                  <span className="bg-linear-to-r from-[#0383CA] to-[#EF3A61] bg-clip-text text-transparent font-semibold text-sm sm:text-base">
                    Our Services and Solutions
                  </span>
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                We Build Scalable Products & Digital Experiences
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xs sm:max-w-sm md:max-w-lg">
                At Synctom, we create digital products that blend creativity,
                functionality, and technology, helping businesses grow smarter
                and faster.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
                >
                  <Link href="/contact">Start a Project</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base"
                >
                  <Link href="/portfolio">View our Work</Link>
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <Image
                src="/services-image.png"
                alt="Team collaboration illustration"
                width={600}
                height={400}
                className="w-full max-w-xs sm:max-w-sm pointer-events-none md:max-w-md lg:max-w-lg h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <p className="text-xs sm:text-sm bg-linear-to-r from-[#4F46E5] to-[#3B82F6] bg-clip-text text-transparent mb-2 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
              Our Services
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              We Create What You Can Enjoy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
              We offer a range of specialized services designed to bring your
              digital vision to life, from research and design to full-scale
              development.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                number={service.number}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-14 md:mb-16">
            <p className="text-xs sm:text-sm bg-linear-to-r from-[#4F46E5] to-[#3B82F6] bg-clip-text text-transparent mb-2 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
              Our Partnership
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
              Why Partner With Synctom?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
              Our process is driven by collaboration, transparency, and
              innovation. We don&apos;t just deliver projects — we build
              long-term digital partnerships.
            </p>
          </div>

          {/* Partnership Features Grid - Zigzag Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* First Row - Top */}
            <div className="flex gap-3 sm:gap-4 lg:mt-0">
              <div className="w-1 h-8 sm:h-10 md:h-12 bg-linear-to-b from-[#0383CA] to-[#EF3A61] rounded-full shrink-0"></div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Expert Team
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Skilled professionals with years of experience in UI/UX
                  design, web, and mobile development.
                </p>
              </div>
            </div>

            {/* Second Row - Bottom */}
            <div className="flex gap-3 sm:gap-4 lg:mt-8 xl:mt-16">
              <div className="w-1 h-8 sm:h-10 md:h-12 bg-linear-to-b from-[#0383CA] to-[#EF3A61] rounded-full shrink-0"></div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Data-Driven Design
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Every decision is guided by research, analytics, and user
                  insights to ensure measurable success.
                </p>
              </div>
            </div>

            {/* Third Row - Top */}
            <div className="flex gap-3 sm:gap-4 lg:mt-0">
              <div className="w-1 h-8 sm:h-10 md:h-12 bg-linear-to-b from-[#0383CA] to-[#EF3A61] rounded-full shrink-0"></div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Strategic Innovation
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We combine creative thinking and technology to craft solutions
                  that align with your goals.
                </p>
              </div>
            </div>

            {/* Fourth Row - Bottom */}
            <div className="flex gap-3 sm:gap-4 lg:mt-8 xl:mt-16">
              <div className="w-1 h-8 sm:h-10 md:h-12 bg-linear-to-b from-[#0383CA] to-[#EF3A61] rounded-full shrink-0"></div>
              <div className="space-y-1 sm:space-y-2">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                  Transparent Process
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We maintain open communication and collaboration from start to
                  finish for complete clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Footer Section */}
      <CTASection />
    </div>
  );
}
