"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { Linkedin } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  email: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Solid Snake",
    position: "Co-Founder & CEO",
    email: "solid@syncton.com",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Ezio Auditore",
    position: "Co-Founder & COO",
    email: "ezio@syncton.com",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=600&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Edward Nigma",
    position: "Head of People",
    email: "edward@syncton.com",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=600&fit=crop&crop=face",
  },

];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group">
      <div className="relative h-64 sm:h-72 md:h-80">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

        {/* LinkedIn Icon */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
          </div>
        </div>

        {/* Member Info */}
        <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white">
          <h3 className="text-lg sm:text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-white/90 text-xs sm:text-sm mb-1 sm:mb-2">{member.position}</p>
          <p className="text-white/70 text-xs">{member.email}</p>
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm bg-linear-to-r from-[#4F46E5] to-[#EF3A61] bg-clip-text text-transparent mb-2 tracking-[0.3em] sm:tracking-[0.5em] uppercase">
            Our Team
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4 sm:px-0">
            The Creative Minds Behind Synctom
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto px-4 sm:px-0">
            Our multidisciplinary team blends creativity, strategy, and
            technology to craft digital products that make a difference. Each
            member brings a unique skill set and shared passion for innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
