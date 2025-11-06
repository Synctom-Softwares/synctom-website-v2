"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      className="w-full flex flex-col-reverse lg:flex-row justify-center py-12 sm:py-14 md:py-16 px-4 sm:px-6 lg:px-10 relative overflow-hidden min-h-screen sm:min-h-0 bg-center bg-no-repeat bg-cover sm:bg-contain"
      style={{
        backgroundImage: `url('/background.svg')`,
      }}
    >
      {/* LEFT: Form */}
      <div className="p-4 sm:p-6 md:p-8 w-full max-w-md sm:max-w-lg md:max-w-lg bg-white ml-0 lg:ml-30 shadow-2xl rounded-lg border space-y-3 sm:space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <div>
            <label className="text-xs sm:text-sm font-medium">
              First Name<span className="text-red-500">*</span>
            </label>
            <Input placeholder="First Name" className="text-sm" />
          </div>
          <div>
            <label className="text-xs sm:text-sm font-medium">
              Last Name<span className="text-red-500">*</span>
            </label>
            <Input placeholder="Last Name" className="text-sm" />
          </div>
        </div>

        <div>
          <label className="text-xs sm:text-sm font-medium">
            Email<span className="text-red-500">*</span>
          </label>
          <Input type="email" placeholder="example@email.com" className="text-sm" />
        </div>

        <div>
          <label className="text-xs sm:text-sm font-medium">
            Phone Number<span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2">
            <div className="flex items-center border rounded-md px-2 sm:px-3 text-xs sm:text-sm bg-gray-50 shrink-0">
              🇵🇰 +92
            </div>
            <Input placeholder="3001234567" className="text-sm" />
          </div>
        </div>

        <div>
          <label className="text-xs sm:text-sm font-medium">
            Budget<span className="text-red-500">*</span>
          </label>
          <Input placeholder="e.g. $5000" className="text-sm" />
        </div>

        <div>
          <label className="text-xs sm:text-sm font-medium">
            Company Name<span className="text-red-500">*</span>
          </label>
          <Input placeholder="Company Name" className="text-sm" />
        </div>

        <div>
          <label className="text-xs sm:text-sm font-medium">
            Project Type<span className="text-red-500">*</span>
          </label>
          <Input placeholder="Web App, Mobile App..." className="text-sm" />
        </div>

        <div>
          <label className="text-xs sm:text-sm font-medium">
            Message<span className="text-red-500">*</span>
          </label>
          <Textarea placeholder="Write your message..." className="text-sm" />
        </div>

        <Button className="w-full text-sm sm:text-base py-2 sm:py-3">Submit</Button>
      </div>
      
      {/* RIGHT: Content */}
      <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 text-white relative mb-6 lg:mb-0">
        <p className="uppercase tracking-widest text-xs sm:text-sm text-indigo-300 mb-2">
          Contact Form
        </p>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug mb-3 sm:mb-4">
          Ready to Build Your Digital Future?
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-gray-300 mb-4 sm:mb-6 max-w-xs sm:max-w-sm">
          Let's discuss your project and turn your ambitious ideas into
          scalable, beautiful software.
        </p>
        <Button variant="default" className="w-fit mb-6 sm:mb-8 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3">
          Start a Project
        </Button>

        <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
          <div className="flex items-center gap-2 sm:gap-3">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <span>info@syntom.com</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <span>+92 300 1234567</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <span>info@syntom.com</span>
          </div>
        </div>
      </div>
    </section>
  );
}
