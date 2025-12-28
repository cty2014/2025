import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Zetta VP Style */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            First Believers in<br />
            AI Native Founders
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/60 mb-8 sm:mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Zero to one capital and hands-on support for builders of AI Native applications, infrastructure, and developer tools.
          </p>
          <div className="mb-8 sm:mb-12">
            <p className="text-base sm:text-lg md:text-xl text-white/50 mb-4 font-normal">
              50% Investment Fund<span className="text-white/40 text-sm sm:text-base ml-2">Bitfinex Lending</span> + 50% Tech Advisory
            </p>
          </div>
          <Link
            href="/about"
            className="inline-block text-white/60 hover:text-white text-base sm:text-lg font-normal transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* Mission Statement - Zetta VP Style */}
      <section className="py-20 sm:py-24 md:py-32 bg-black border-t border-white/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight">
            Our aim is to be the most important partner to the most impactful AI and infrastructure companies
          </h2>
          <div className="mt-12 sm:mt-16">
            <Link
              href="/projects"
              className="text-white/70 hover:text-white text-base sm:text-lg font-medium transition-colors underline underline-offset-4 decoration-white/30 hover:decoration-white/60"
            >
              Our portfolio companies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

