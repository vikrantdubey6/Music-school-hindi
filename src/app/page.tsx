import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-center text-2xl">
      <HeroSection/>
      <FeaturedSection/>
     <Testimonial/>
     < Team />
     <Footer />
    </main>
  );
}
