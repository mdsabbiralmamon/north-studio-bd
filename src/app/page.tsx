import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import Hero from "@/components/HomePage/Hero/Hero";
import OurPurpose from "@/components/HomePage/OurPurpose/OurPurpose";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="about container mx-auto">
        <AboutSection />
      </div>
      <div className="about container mx-auto my-24">
        <OurPurpose />
      </div>
      <div className="about container mx-auto my-24">
        <ServicesSection />
      </div>
    </>
  );
}
