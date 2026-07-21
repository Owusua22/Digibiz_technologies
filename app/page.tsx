import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhoWeAre from "@/components/WhoWeAre";
import WhyChooseUs from "@/components/WhyChooseUs";

import Faq from "@/components/Faq";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#faf9f7] min-h-screen">
      {/* Sticky Header Wrapper */}
      <header className="sticky top-0 z-50 shadow-sm flex flex-col w-full">
   
        <Navbar />
      </header>
      
      <Hero />
      <Services/>
      <WhoWeAre/>
      <WhyChooseUs/>
    

      <Faq/>
      <Blog/>
      <Footer/>
    </main>
  );
}