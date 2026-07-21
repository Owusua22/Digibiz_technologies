import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-6 md:py-2 py-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-10">

          {/* Left Text Content */}
          <div className="text-center lg:text-left relative z-20">
            <p className="uppercase tracking-widest text-orange-500 font-semibold mb-4 text-xs md:text-sm">
              Digital Business Solutions
            </p>

            <h1 className="text-xl md:text-3xl lg:text-5xl xl:text-6xl font-black leading-tight text-black">
              We Provide
              <br className="hidden sm:block" /> Smart Business
              <br className="hidden sm:block" /> Solutions
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
              Helping businesses grow with innovative digital
              strategies, software solutions, branding and
              technology that deliver measurable results.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8 md:mt-10">
              <button className="w-full sm:w-auto bg-orange-500 text-white px-8 py-3.5 md:py-4 rounded-full font-semibold hover:bg-orange-600 transition flex justify-center items-center">
                Get Consulting →
              </button>

              <button className="w-full sm:w-auto border-2 border-black px-8 py-3.5 md:py-4 rounded-full font-semibold hover:bg-black hover:text-white transition flex justify-center items-center">
                Learn More →
              </button>
            </div>
          </div>

          {/* Right Image Content */}
          <div className="relative flex justify-center items-end mt-4 lg:mt-0 min-h-[320px] sm:min-h-[400px] md:min-h-[520px] lg:min-h-[600px]">

            {/* Background Blob */}
            <div className="absolute h-[280px] w-[220px] sm:h-[340px] sm:w-[270px] md:h-[430px] md:w-[330px] lg:h-[520px] lg:w-[400px] bg-orange-100 rounded-t-full bottom-0 left-1/2 -translate-x-1/2" />

            {/* Hero Image */}
            <div className="relative z-10 w-[65%] sm:w-[55%] md:w-[70%] lg:w-[85%] max-w-[260px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[500px] aspect-[3/4]">
              <Image
                src="/hero1.png"
                alt="Business Woman"
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 768px) 320px, (max-width: 1024px) 420px, 500px"
                className="object-contain object-bottom"
              />
            </div>

            {/* Decorative Star */}
            <div className="hidden md:block absolute right-4 lg:right-10 top-10 lg:top-16 text-4xl lg:text-5xl font-bold text-black z-20">
              ✶
            </div>

            {/* Decorative Circle */}
            <div className="hidden md:block absolute left-0 lg:left-8 top-32 lg:top-40 text-3xl lg:text-4xl text-gray-400 z-20">
              ◌
            </div>

            {/* Decorative SVG Chart */}
            <div className="hidden md:block absolute right-0 bottom-24 lg:bottom-32 z-20">
              <svg
                width="120"
                height="60"
                viewBox="0 0 140 70"
                fill="none"
                className="lg:w-[140px] lg:h-[70px]"
              >
                <path
                  d="M0 35L20 10L40 60L60 20L80 45L100 15L120 55L140 25"
                  stroke="black"
                  strokeWidth="3"
                />
              </svg>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full z-20 pointer-events-none"
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
        style={{ height: "auto", minHeight: "40px" }}
      >
        <path
          fill="white"
          d="M0,64L60,80C120,96,240,128,360,122.7C480,117,600,75,720,64C840,53,960,75,1080,90.7C1200,107,1320,117,1380,122.7L1440,128V150H0Z"
        />
      </svg>
    </section>
  );
}