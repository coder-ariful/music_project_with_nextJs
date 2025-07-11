import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MeetOurInstructors from "@/components/MeetOurInstructors";
import MusicTestimonialCarts from "@/components/MusicTestimonialCarts";
import UpComingWebINARS from "@/components/UpComingWebINARS";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className=" min-h-screen bg-black/[.96] antialiased bg-grid-white/[0.5]">
      <HeroSection></HeroSection>
      <FeaturedCourses></FeaturedCourses>
      <WhyChooseUs></WhyChooseUs>
      <MusicTestimonialCarts></MusicTestimonialCarts>
      <UpComingWebINARS></UpComingWebINARS>
      <MeetOurInstructors></MeetOurInstructors>
      <Footer></Footer>
    </main>
  );
}
