"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../components/hero-section";
import Brands from "@/components/brands";
import ServicesSection from "@/components/services";
import CaseStudies from "@/components/case-studies";
import Industries from "@/components/industries";
import Achievements from "@/components/achievements";
import TechnologyStack from "@/components/technology-stack";
import Team from "@/components/team";
import ContactForm from "@/components/contact-form";

export default function HomeClient() {
  useEffect(() => {
    // Reset scroll position on page load
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <HeroSection />
      <Brands />
      <ServicesSection />
      <CaseStudies />
      <Industries />
      <Achievements />
      <TechnologyStack />
      <Team />
      <ContactForm />
    </div>
  );
}