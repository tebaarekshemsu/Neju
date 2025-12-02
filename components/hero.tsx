"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const handleStartProject = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleViewWork = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-secondary text-white flex items-center justify-center px-4 py-20">
      {/* Animated background blobs (pure CSS) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-20 -top-16 w-72 h-72 rounded-full blur-3xl opacity-60 bg-blob-1 animate-blob-slow"></div>
        <div className="absolute right-8 -top-10 w-96 h-96 rounded-full blur-3xl opacity-50 bg-blob-2 animate-blob-medium"></div>
        <div className="absolute left-1/2 bottom-6 -translate-x-1/2 w-80 h-80 rounded-full blur-3xl opacity-40 bg-blob-3 animate-blob-slower"></div>
        <div className="absolute inset-0 bg-gradient-overlay animate-gradient-slow" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div
          className="space-y-4 animate-fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            Transform Your Vision Into Reality
          </h1>
          <p
            className="text-lg sm:text-xl text-white/90 text-balance max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: "200ms" }}
          >
            We create stunning web experiences and captivating designs that tell
            your brand's story and engage your audience.
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up"
          style={{ animationDelay: "300ms" }}
        >
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            onClick={handleStartProject}
          >
            Start Your Project <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            onClick={handleViewWork}
          >
            View Our Work
          </Button>
        </div>

        <div className="pt-12 grid grid-cols-3 gap-4 sm:gap-8 text-sm">
          <div className="animate-pop" style={{ animationDelay: "350ms" }}>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-white/80">Projects Done</p>
          </div>
          <div className="animate-pop" style={{ animationDelay: "450ms" }}>
            <p className="text-3xl font-bold">30+</p>
            <p className="text-white/80">Happy Clients</p>
          </div>
          <div className="animate-pop" style={{ animationDelay: "550ms" }}>
            <p className="text-3xl font-bold">2+</p>
            <p className="text-white/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
