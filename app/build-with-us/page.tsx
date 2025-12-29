import Image from "next/image";

export default function BuildWithUs() {
  return (
    <div className="min-h-screen py-8 sm:py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-2">
            <span className="text-white">Build with us</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto px-4 font-light leading-relaxed">
            We partner with entrepreneurs to create the great AI companies of tomorrow. Building a startup is hard. From startup veterans and seasoned investors, to machine learning experts and talent leaders, our team is ready to fill in the gaps around your expertise. We are here to support you so your company succeeds.
          </p>
        </div>

        {/* Hero Image */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-black border border-white/15 rounded-none overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
              alt="Team collaboration and partnership"
              fill
              className="object-cover opacity-70 brightness-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <a
            href="#process"
            className="inline-block text-white/60 hover:text-white text-base sm:text-lg font-normal transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40"
          >
            Let's Build Together
          </a>
        </div>

        {/* A Proven Process for Building Companies */}
        <section id="process" className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-black border border-white/15 rounded-none p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">
              A Proven Process for Building Companies
            </h2>

            {/* Process Image */}
            <div className="mb-8 sm:mb-12">
              <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] bg-black border border-white/15 rounded-none overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Business process and workflow"
                  fill
                  className="object-cover opacity-60 brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
              </div>
            </div>

            {/* Process Steps */}
            <div className="space-y-6 sm:space-y-8">
              {/* Step 1 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/25 rounded-none flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white/60 text-sm sm:text-base font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Business Idea Validation</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                      Our team of startup builders performs market and technical validation on the idea.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/25 rounded-none flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white/60 text-sm sm:text-base font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Recruit Future CEO (Founder in Residence) and Board Member (Venture Advisor)</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                      Next, we bring on a seasoned entrepreneur with domain expertise as a Founder in Residence (they will be the CEO upon launch) and pair them with an AI Fund Builder and Venture Advisor (who will be a future board member after launch).
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/25 rounded-none flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white/60 text-sm sm:text-base font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Build with Founder in Residence</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                      Founders in Residence spend three months with us developing the idea and iterating rapidly to de-risk the new business through in-depth business analysis and customer research. Technical validation includes AI model selection and product prototyping. The Founder in Residence collaborates very closely on this with our in-house builders, the Venture Advisor, and our ML engineering team to structure a go-to-market strategy and product proof of concept.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/25 rounded-none flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white/60 text-sm sm:text-base font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Pre-Seed Launch</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                      If the Build stage is successful, we stand the company up with a pre-seed investment of up to $1 million. Our recruiting team will help assemble your core team (including co-founder matchmaking if needed) and the building team will support you in getting early customer traction, building the product, and preparing for seed financing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6 md:p-8">
                <div className="flex items-start mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/5 border border-white/25 rounded-none flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white/60 text-sm sm:text-base font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3 sm:mb-4">Seed, Growth, and Scale</h3>
                    <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                      As a good co-founder, we will be working alongside you. We support you as you grow with ongoing business strategy and the leverage that comes from a deep and vibrant ecosystem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner with AI Fund? */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-black border border-white/15 rounded-none p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">
              Why Partner with AI Fund?
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              <p className="text-white/60 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                We've been there. We've founded and scaled successful companies ourselves, and we know that creating meaningful startups is really hard. Instead of spending years plodding away on an idea, validate it quickly in our Founder in Residence program.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                We shorten a process that can take years down to months. We make sure you are going after the right market, are fully validated, and are surrounded by great teammates. Lastly, we make sure you see the world through the lens of a data scientist and machine learning expert, which is the perspective any meaningful AI company in the future must have. But, we also know that the process is not about us. It's about great founders and empowering them to do impactful things.
              </p>
              <p className="text-white/60 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                Partnering with a venture studio to launch your company is a force multiplier. Founders in our studio program leverage lower barriers to entry, financial support, and higher levels of operational involvement to springboard great companies.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12 sm:mb-16 md:mb-20">
          <div className="bg-black border border-white/15 rounded-none p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">FAQ</h2>
            <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
              {/* FAQ 1 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">What is a venture studio?</h3>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                  A venture studio differs from a typical venture capital firm, in that it focuses on building companies from the ground up, rather than investing in already growing companies.
                </p>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light mt-3">
                  At AI Fund, we source ideas from within our organization, our network of industry and academic partners, and entrepreneurs like yourself. We will validate your idea together through our Founder in Residence program and support you in turning your idea into a venture-backable business—including recruiting your team, developing the product proof of concept, and acquiring first customers.
                </p>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light mt-3">
                  We are more than simply investors. As a venture studio, we are co-founders with you.
                </p>
              </div>

              {/* FAQ 2 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">Is there a deadline for applications?</h3>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                  We want to partner with entrepreneurs who want to make a difference in the world using AI. If you have an idea, but haven't built the product yet, then it's the perfect time to reach out to us. If you want to build something but don't have a company idea yet, check our careers page for open Founder-in-Residence roles.
                </p>
              </div>

              {/* FAQ 3 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">How much capital does AI Fund invest in pre-seed companies?</h3>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                  We prefer to be the first institutional money in a company and we invest up to $1 million in a convertible note to found the company.
                </p>
              </div>

              {/* FAQ 4 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">What is the difference between a Founder in Residence and a Venture Advisor?</h3>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                  A Founder in Residence is a full time, paid role that transitions into CEO of the new company when it launches as a pre-seed funded company. A Venture Advisor is typically a successful entrepreneur whom AI Fund has engaged to counsel the Founder in Residence. When the company launches, the Venture Advisor holds AI Fund's board seat.
                </p>
              </div>

              {/* FAQ 5 */}
              <div className="bg-black border border-white/15 rounded-none p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">What kind of support does AI Fund offer Founders in Residence?</h3>
                <p className="text-white/60 leading-relaxed text-sm sm:text-base font-light">
                  We surround each new startup with a team of specialists with expertise around ML engineering and data science, talent and recruiting, fundraising, product development, corporate partnerships, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Let's Work Together */}
        <section className="bg-black border border-white/15 rounded-none p-6 sm:p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Let's Work Together</h2>
            <p className="text-lg sm:text-xl text-white/60 mb-8 sm:mb-10 font-light">Ready to build something great?</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <a
                href="/contact"
                className="inline-block text-white/60 hover:text-white text-base sm:text-lg font-normal transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40 px-6 py-3"
              >
                For Founders
              </a>
              <a
                href="/contact"
                className="inline-block text-white/60 hover:text-white text-base sm:text-lg font-normal transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-white/40 px-6 py-3"
              >
                For Partners
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
