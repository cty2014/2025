export default function Projects() {
  const projects = [
    {
      name: "Minerva Electronics",
      description: "Smart retail solutions provider leveraging AI technology to optimize customer experience and operational efficiency in retail.",
      tech: "AI-driven smart retail systems, data analytics platform, customer behavior prediction",
      aiApplication: "Through machine learning algorithms analyzing customer purchase behavior, providing personalized recommendations and inventory optimization suggestions to enhance retail operational efficiency and customer satisfaction.",
      link: "https://www.minervaelectronics.com/",
      category: "Smart Retail AI",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/20",
      glow: "glow-blue",
    },
    {
      name: "WooTogether",
      description: "Innovative social platform using AI technology to enhance user interaction and community connections.",
      tech: "AI content recommendation system, natural language processing, community analysis",
      aiApplication: "Utilizing AI algorithms for content matching and recommendations, optimizing user communication experience through natural language processing technology to build stronger community connections.",
      link: "https://wootogether.com",
      category: "Social Platform AI",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/20",
      glow: "glow-purple",
    },
    {
      name: "FuturePay",
      description: "One-stop fintech platform providing AI-driven payment solutions and cross-border financial services.",
      tech: "AI risk control system, intelligent payment routing, blockchain technology",
      aiApplication: "Using AI for real-time risk assessment and fraud detection, optimizing payment routing through intelligent algorithms to provide secure and efficient cross-border payment and currency exchange services.",
      link: "https://www.futurepay.global/zh",
      category: "Fintech AI",
      gradient: "from-cyan-500 to-blue-500",
      borderColor: "border-cyan-500/20",
      glow: "glow-cyan",
    },
    {
      name: "AI Application Incubation",
      description: "Early-stage AI application projects we are incubating, focused on solving real business problems.",
      tech: "Machine learning, deep learning, natural language processing",
      aiApplication: "Assisting startup teams in applying AI technology to real business scenarios, from proof of concept to product-market fit, providing comprehensive technical and business support.",
      link: "#",
      category: "AI Incubation",
      gradient: "from-indigo-500 to-purple-500",
      borderColor: "border-indigo-500/20",
      glow: "glow-purple",
    },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">OUR PORTFOLIO</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
            <span className="text-white">Projects</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-4 font-light">
            Explore our innovative tech investments and advisory projects, witnessing how AI technology transforms the business world
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-black border border-white/15 rounded-none transition-all duration-300 overflow-hidden hover:border-white/25`}
            >
              <div className="p-5 sm:p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-none text-xs font-normal uppercase tracking-wider ${
                    ["AI Incubation", "Fintech AI", "Smart Retail AI", "Social Platform AI"].includes(project.category)
                      ? "bg-gray-300 text-black border border-gray-400"
                      : "bg-black border border-white/25 text-white/60"
                  }`}>
                    {project.category}
                  </span>
                </div>
                <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${
                  ["Minerva Electronics", "WooTogether", "FuturePay"].includes(project.name)
                    ? "text-yellow-200"
                    : "text-white"
                }`}>{project.name}</h2>
                <p className="text-white/60 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base font-light">{project.description}</p>
                
                <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-white/40 mr-2"></span>
                      Technology Stack
                    </h3>
                    <p className="text-white/50 text-xs sm:text-sm font-light">{project.tech}</p>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center">
                      <span className="w-2 h-2 rounded-full bg-white/40 mr-2"></span>
                      AI Application Highlights
                    </h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">{project.aiApplication}</p>
                  </div>
                </div>

                <a
                  href={project.link}
                  target={project.link !== "#" ? "_blank" : undefined}
                  rel={project.link !== "#" ? "noopener noreferrer" : undefined}
                  className={`inline-flex items-center text-sm sm:text-base font-normal transition-all underline underline-offset-4 decoration-white/20 hover:decoration-white/40 ${
                    project.link !== "#"
                      ? "text-white/60 hover:text-white"
                      : "text-white/30 cursor-not-allowed"
                  }`}
                >
                  Learn More
                  {project.link !== "#" && (
                    <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 sm:mt-16 md:mt-20 bg-black border border-white/15 rounded-none p-6 sm:p-8 md:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">Investment Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-6 bg-black border border-white/15 rounded-none">
              <div className="text-4xl font-bold text-yellow-200 mb-2">4+</div>
              <div className="text-yellow-200/80 font-light">Investment Projects</div>
            </div>
            <div className="text-center p-6 bg-black border border-white/15 rounded-none">
              <div className="text-4xl font-bold text-yellow-200 mb-2">2020</div>
              <div className="text-yellow-200/80 font-light">Founded</div>
            </div>
            <div className="text-center p-6 bg-black border border-white/15 rounded-none">
              <div className="text-4xl font-bold text-yellow-200 mb-2">100%</div>
              <div className="text-yellow-200/80 font-light">AI Technology</div>
            </div>
            <div className="text-center p-6 bg-black border border-white/15 rounded-none">
              <div className="text-4xl font-bold text-yellow-200 mb-2">∞</div>
              <div className="text-yellow-200/80 font-light">Continuous Growth</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
