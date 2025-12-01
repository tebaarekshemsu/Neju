"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const handleStartProject = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleViewWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-primary to-secondary text-white flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
            Transform Your Vision Into Reality
          </h1>
          <p className="text-lg sm:text-xl text-white/90 text-balance max-w-2xl mx-auto leading-relaxed">
            We create stunning web experiences and captivating designs that tell your brand's story and engage your
            audience.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button size="lg" className="bg-white text-primary hover:bg-white/90" onClick={handleStartProject}>
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
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-white/80">Projects Done</p>
          </div>
          <div>
            <p className="text-3xl font-bold">30+</p>
            <p className="text-white/80">Happy Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold">5+</p>
            <p className="text-white/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
