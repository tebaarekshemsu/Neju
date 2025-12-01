import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Palette, Smartphone, Zap, Layers, Settings } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Custom websites and applications built with modern technologies for optimal performance and user experience.",
  },
  {
    icon: Palette,
    title: "Graphic Design",
    description:
      "Creative visual designs including logos, branding, and marketing materials that make your brand stand out.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications designed with user experience and performance in mind.",
  },
  {
    icon: Settings,
    title: "Custom Software",
    description: "Tailored software solutions built specifically for your business requirements and workflows.",
  },
  {
    icon: Layers,
    title: "UI/UX Design",
    description:
      "User-centered design approach creating intuitive and visually stunning interfaces for digital products.",
  },
  {
    icon: Zap,
    title: "Performance & SEO",
    description: "Fast-loading, optimized websites with search engine optimization ensuring maximum online visibility.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for all your web and design needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card key={idx} className="hover:shadow-lg transition-shadow border-border">
                <CardHeader>
                  <div className="mb-4 p-3 bg-secondary/10 rounded-lg w-fit">
                    <Icon className="text-secondary" size={28} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
