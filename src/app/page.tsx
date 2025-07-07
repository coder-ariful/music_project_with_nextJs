import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.5]">
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
    </main>
  );
}
