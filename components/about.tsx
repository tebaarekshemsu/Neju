export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">About Neju</h2>
          <p className="text-lg text-muted-foreground">Crafting digital excellence through design and development</p>
        </div>

        <div className="space-y-8 text-foreground">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              We believe that great design and development go hand in hand. Our mission is to help businesses transform
              their ideas into stunning digital experiences that engage users and drive results.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-primary">Why Choose Us?</h3>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="leading-relaxed">Expert team with years of industry experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="leading-relaxed">Customer-centric approach to every project</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="leading-relaxed">Latest technologies and design trends</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary font-bold">✓</span>
                <span className="leading-relaxed">Timely delivery and outstanding support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
