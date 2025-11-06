"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-950 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex py-3 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/loo.png"
              alt="Synctom"
              width={100}
              height={10}
              className="obejct-contain pointer-events-none w-full"
            />
          </Link>
        </div>

        {/* Nav Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Services
          </Link>
          <Link
            href="/industries"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Industries
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center space-x-2">
          <Button
            asChild
            className="hidden md:flex shadow-[0_4px_0_#000] active:translate-y-[2px] active:shadow-[0_2px_0_#000]"
          >
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
}
