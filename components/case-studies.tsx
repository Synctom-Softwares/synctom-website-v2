"use client";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedProjects } from "@/lib/constants";

export default function CaseStudies() {
  const projects = getFeaturedProjects();
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm bg-linear-to-r from-[#4F46E5] to-[#3B82F6] bg-clip-text text-transparent mb-2 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
            Case Studies
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
            Our Defining Projects
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-4 sm:px-0">
            Explore our latest work that blends design excellence with
            engineering precision to deliver measurable business results.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {projects.map((project) => (
            <Link 
              key={project.id}
              href={`/project/${project.id}`}
              className={`${project.large ? 'sm:col-span-2 lg:col-span-2' : ''} bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              <div className="relative h-48 sm:h-64 md:h-80 bg-gradient-to-br from-gray-800 to-gray-900">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23374151'/%3E%3Ctext x='300' y='200' text-anchor='middle' dy='.3em' font-family='Arial' font-size='24' fill='%23ffffff'%3EProject Image%3C/text%3E%3C/svg%3E";
                  }}
                />
                <div className="absolute inset-0 bg-black/20"></div>
                <div className={`absolute bottom-0 left-0 ${project.large ? 'w-full sm:w-[30rem]' : 'w-full'} text-white backdrop-blur-sm bg-zinc-900/60 rounded-tr-xl p-3 sm:p-4`}>
                  <h3 className={`${project.large ? 'text-lg sm:text-xl md:text-2xl' : 'text-base sm:text-lg'} font-bold mb-2 sm:mb-3`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className={`px-2 sm:px-3 py-1 ${project.categoryColor} text-black text-xs rounded-xs`}>
                      {project.category}
                    </span>
                    <Button variant="ghost" size="sm" className="text-xs sm:text-sm p-1 sm:p-2">
                      <span className="hidden sm:inline">View Case Study</span>
                      <span className="sm:hidden">View</span>
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* See Portfolio Button */}
        <div className="text-center">
          <Link href="/case-studies">
            <Button variant="default" className="px-6 sm:px-8 py-3 text-sm sm:text-base">
              See Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
