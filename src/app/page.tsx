import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Team";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-center text-2xl">
      <h2>page. tsx</h2>
      <HeroSection/>
      <FeaturedSection/>
     <Testimonial/>
     < Team />
    </main>
  );
}
