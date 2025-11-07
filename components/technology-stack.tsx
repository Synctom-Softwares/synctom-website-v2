"use client";
import { IconCloudDemo } from "./iconscloud";
import { Button } from "./ui/button";
import Link from "next/link";

export default function TechnologyStack() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-xs sm:text-sm bg-linear-to-r from-[#4F46E5] to-[#EF3A61] bg-clip-text text-transparent mb-2 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
              Our Technology Stack
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Powering Innovation with Modern Tools
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We combine the latest technologies with proven practices to build scalable, secure, and future-ready digital solutions.
            </p>
            <Button asChild variant="default" className="px-6 sm:px-8 py-3 text-sm sm:text-base">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Right Content - Technology Icons */}
          <div className="relative order-1 lg:order-2">
            {/* Placeholder for technology icons */}
            <div className="w-full h-64 sm:h-72 md:h-80 rounded-2xl flex items-center justify-center">
             <IconCloudDemo/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}