export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Neju</h3>
            <p className="text-white/80 text-sm">
              Transforming ideas into stunning digital experiences through innovative design and development.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#services" className="hover:text-white transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Graphic Design
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition">
                  Branding
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold">Connect</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#" className="hover:text-white transition">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/80">
            <p>&copy; {currentYear} Neju. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
