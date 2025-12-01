"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/send-telegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitStatus("idle"), 3000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">
            Have a project in mind? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center space-y-3 p-6 bg-background rounded-lg border border-border">
            <Mail className="text-secondary mx-auto" size={32} />
            <h3 className="font-bold text-foreground">Email</h3>
            <p className="text-muted-foreground">neju@neju.com</p>
          </div>
          <div className="text-center space-y-3 p-6 bg-background rounded-lg border border-border">
            <Phone className="text-secondary mx-auto" size={32} />
            <h3 className="font-bold text-foreground">Phone</h3>
            <p className="text-muted-foreground">+251 987 275 324</p>
          </div>
          <div className="text-center space-y-3 p-6 bg-background rounded-lg border border-border">
            <MapPin className="text-secondary mx-auto" size={32} />
            <h3 className="font-bold text-foreground">Location</h3>
            <p className="text-muted-foreground">Addis Ababa, Ethiopia</p>
          </div>
        </div>

        <div className="text-center mt-12 pt-12 border-t border-border">
          <h3 className="text-xl font-bold text-foreground mb-6">Follow Us</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="https://t.me/nejudesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0088cc] text-white rounded-full hover:bg-[#0077b5] transition-colors"
              aria-label="Telegram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.02-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.02-.07.04-.32-.12-.46-.16-.14-.39-.09-.56-.05-.24.05-4.12 2.63-5.83 3.53-.55.37-1.05.49-1.51.48-.5-.01-1.46-.28-2.18-.52-.88-.29-1.58-.44-1.52-.93.03-.29.33-.57.88-.86 3.43-1.5 5.72-2.49 6.86-2.97 1.28-.56 1.54-.55 1.71-.55z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/nejudesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#E1306C] text-white rounded-full hover:bg-[#C13584] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://twitter.com/nejudesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-[#1a8cd8] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="https://linkedin.com/company/nejudesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-[#0A66C2] text-white rounded-full hover:bg-[#084896] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-background rounded-lg border border-border p-8 space-y-6 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground disabled:opacity-50"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
              className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground disabled:opacity-50"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground disabled:opacity-50"
          />
          <textarea
            name="message"
            placeholder="Tell us about your project..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
            className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground resize-none disabled:opacity-50"
          />

          {submitStatus === "success" && (
            <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-800">
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          {submitStatus === "error" && (
            <div className="p-4 bg-red-100 border border-red-300 rounded-lg text-red-800">
              Failed to send message. Please try again.
            </div>
          )}

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  )
}
