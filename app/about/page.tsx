import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
const mission = {
  title: "Our Mission",
  text: "Build and deliver digital solutions that help businesses grow—through web design, mobile experiences, branding, SEO, and performance-focused execution.",
  bullets: [
    "Design that’s clean, fast, and user-friendly",
    "Strategies that improve visibility and conversions",
    "Reliable delivery with transparent communication",
  ],
};

const vision = {
  title: "Our Vision",
  text: "Become a trusted digital partner for businesses that want modern design, stronger marketing, and measurable growth—powered by technology and great execution.",
  bullets: [
    "A one-stop solution for business growth",
    "Long-term partnerships with continuous improvement",
    "Quality standards across every deliverable",
  ],
};

const coreValues = [
  {
    title: "Customer First",
    description: "We focus on measurable outcomes and build solutions that fit your business goals.",
  },
  {
    title: "Innovation",
    description: "We use modern design + technology to solve problems faster and smarter.",
  },
  {
    title: "Clarity & Honesty",
    description: "Transparent communication, clear plans, and realistic timelines for every project.",
  },
  {
    title: "Quality Delivery",
    description: "We don’t just launch—we improve continuously to deliver long-term value.",
  },
];

const stats = [
  { value: "500+", label: "Projects that we have completed" },
  { value: "1.5K+", label: "The products we have made" },
  { value: "10+", label: "Years of experience" },
];

const team = [
  { name: "Ayesha Khan", role: "Project Lead", img: "/hero1.png" },
  { name: "Ravi Kumar", role: "Developer", img: "/hero1.png" },
  { name: "Priya Sharma", role: "Designer", img: "/hero1.png" },
  { name: "John Mathew", role: "Marketing", img: "/hero1.png" },
];

export default function AboutPage() {
  return (
    <main className="bg-[#faf9f7] w-full">
        <Navbar/>
      {/* Page Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-0 bg-white/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-xs sm:text-sm font-semibold tracking-wide">
                About
              </span>

              <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.05]">
                We’re DigiBiz—building digital solutions that grow businesses.
              </h1>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                From strategy to design to development, we help you launch confidently and
                scale sustainably with clean, user-friendly experiences.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="bg-orange-500 text-white border-2 border-black rounded-full px-6 py-3 font-bold hover:bg-orange-600 transition text-center"
                >
                  Contact Us →
                </Link>

                <Link
                  href="/services"
                  className="bg-white text-black border-2 border-black rounded-full px-6 py-3 font-bold hover:bg-black hover:text-white transition text-center"
                >
                  Explore Services →
                </Link>
              </div>
            </div>

            <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
              {/* Background accents */}
              <div className="absolute -left-4 -top-4 w-28 h-28 rounded-tl-full rounded-br-full bg-orange-100 border border-orange-200" />
              <div className="absolute -right-6 bottom-0 w-24 h-24 rounded-full bg-orange-50 border border-orange-100" />

              <Image
                src="/hero1.png"
                alt="Team collaborating"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-black">Our approach</h2>
              <p className="mt-3 text-gray-600 max-w-2xl">
                Every decision we make supports the same outcomes: trust, clarity, and results.
              </p>
            </div>
            <div className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              <span className="text-gray-500 text-sm sm:text-base font-semibold">
                Orange-led. Black-and-white clarity.
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Mission Card */}
            <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(249,115,22,0.35)] p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-orange-400 flex items-center justify-center border-2 border-black">
                  <span className="text-black font-black text-lg">M</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black">{mission.title}</h3>
              </div>

              <p className="mt-5 text-gray-600 leading-relaxed">{mission.text}</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {mission.bullets.map((t) => (
                  <li key={t} className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(249,115,22,0.35)] p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-orange-400 flex items-center justify-center border-2 border-black">
                  <span className="text-black font-black text-lg">V</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-black">{vision.title}</h3>
              </div>

              <p className="mt-5 text-gray-600 leading-relaxed">{vision.text}</p>

              <ul className="mt-6 space-y-3 text-gray-700">
                {vision.bullets.map((t) => (
                  <li key={t} className="flex gap-3 items-start">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500 flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="relative py-10 sm:py-14 lg:py-20">
        <div
          className="absolute inset-0 -z-0 bg-[#f3f3f3]"
          style={{
            clipPath: "polygon(0 8vw, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.value} className="bg-transparent">
                <div className="text-4xl sm:text-5xl font-black text-black leading-none">
                  {s.value}
                </div>
                <p className="mt-3 text-gray-600 text-sm sm:text-base font-serif italic">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="bg-orange-400 text-black font-bold py-3 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap">
              More About Us
            </button>
          </div>
        </div>
      </section>

      {/* Team / Experience */}
      <section className="py-10 sm:py-14 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-8">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-semibold border border-orange-200">
                Experience
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-black">
                Team Members
              </h2>
            </div>

            <Link
              href="/contact"
              className="bg-white text-black border-2 border-black rounded-full px-6 py-3 font-bold hover:bg-black hover:text-white transition text-center text-sm sm:text-base"
            >
              Meet the Team →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="group text-center">
                <div className="relative w-full aspect-square overflow-hidden border-2 border-black bg-white">
                  <Image
                    src={m.img}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <h3 className="mt-4 text-base sm:text-lg font-black text-black">
                  {m.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-10 sm:pb-14 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 text-orange-700 text-xs sm:text-sm font-semibold tracking-wide border border-orange-200">
                Core Values
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-black">How we work</h2>
            </div>
            <p className="text-gray-600 max-w-xl">
              Our values guide every project—so you always get consistent results.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="bg-white border-2 border-black p-6 hover:-translate-y-1 transition-transform duration-300 shadow-[0_0_0_rgba(0,0,0,0)]"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-orange-500 border-2 border-black flex items-center justify-center">
                    <span className="text-white font-black text-sm">✓</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-black">{v.title}</h3>
                </div>
                <p className="mt-4 text-gray-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us (Collage-style like your screenshot) */}
      <section className="bg-white py-14 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Text */}
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500 text-white text-xs sm:text-sm font-semibold tracking-wide">
                Why We Are Best
              </span>

              <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-black text-black leading-[1.02]">
                We can show <br className="hidden sm:block" />
                you a better way...
              </h2>

              <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                Compellingly reinvent bricks-and-clicks imperatives through covalent initiatives.
                Interactively communicate standardized initiatives via diverse sources.
              </p>

              <div className="mt-10">
                <button className="bg-orange-400 text-black font-bold py-3 px-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all whitespace-nowrap">
                  Get Started Now
                </button>
              </div>
            </div>

            {/* Right Collage */}
            <div className="relative w-full h-[420px] sm:h-[520px]">
              {/* Large image */}
              <div className="absolute left-0 top-6 w-[70%] h-[70%] border-2 border-black bg-gray-100 overflow-hidden">
                <Image src="/hero1.png" alt="Team working" fill className="object-cover" />
              </div>

              {/* Top-right image */}
              <div className="absolute right-0 top-0 w-[42%] h-[34%] border-2 border-black bg-gray-100 overflow-hidden">
                <Image src="/hero1.png" alt="Collaboration" fill className="object-cover" />
              </div>

              {/* Bottom-right stats box */}
              <div className="absolute right-0 bottom-0 w-[52%] h-[28%] bg-[#FFE7D1] border-2 border-black p-5 flex flex-col justify-center">
                <div className="text-4xl font-black text-black leading-none">10M+</div>
                <div className="text-gray-700 font-serif italic mt-1 text-sm">
                  Customer Trust Us
                </div>
              </div>

              {/* Decorative circle outline */}
              <div className="hidden sm:block absolute -right-6 bottom-10 w-20 h-20 rounded-full border-2 border-black/40" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}