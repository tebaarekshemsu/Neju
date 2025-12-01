"use client"

import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

const projectsByCategory = {
  "Graphic Design": [
    {
      title: "Brand Identity",
      description: "Complete brand identity including logo, color palette, and marketing materials.",
    },
    {
      title: "Marketing Campaign",
      description: "Cohesive visual campaign assets for social media and digital marketing.",
    },
    {
      title: "Packaging Design",
      description: "Innovative product packaging design that stands out on shelves.",
    },
  ],
  "Web Development": [
    {
      title: "E-Commerce Platform",
      description: "Modern online store with advanced features and seamless checkout experience.",
    },
    {
      title: "SaaS Dashboard",
      description: "Intuitive dashboard with real-time analytics and user management system.",
    },
    {
      title: "Business Portal",
      description: "Enterprise-level web application with complex data visualization and reporting.",
    },
  ],
  "Mobile App Development": [
    {
      title: "Fitness Tracker App",
      description: "Cross-platform fitness application with real-time tracking and social features.",
    },
    {
      title: "Food Delivery App",
      description: "User-friendly mobile app for restaurant ordering and delivery management.",
    },
    {
      title: "Social Networking App",
      description: "Feature-rich social platform with messaging, notifications, and user profiles.",
    },
  ],
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All")

  const categories = Object.keys(projectsByCategory).filter(
    (cat) => projectsByCategory[cat as keyof typeof projectsByCategory].length > 0,
  )

  const getProjects = () => {
    if (activeTab === "All") {
      return Object.values(projectsByCategory).flat()
    }
    return projectsByCategory[activeTab as keyof typeof projectsByCategory] || []
  }

  const projects = getProjects()

  return (
    <section id="portfolio" className="py-20 px-4 bg-muted">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our best work across different service categories
          </p>
        </div>

        <div className="space-y-12">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 border-b border-border pb-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab("All")}
              className={`px-4 py-2 rounded-t-lg font-semibold transition-all whitespace-nowrap ${
                activeTab === "All"
                  ? "bg-primary text-white border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-t-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === category
                    ? "bg-primary text-white border-b-2 border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-primary to-secondary"></div>
                <CardContent className="p-6 space-y-3">
                  <p className="text-sm font-semibold text-secondary">{activeTab === "All" ? "Project" : activeTab}</p>
                  <h4 className="text-xl font-bold text-foreground">{project.title}</h4>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
