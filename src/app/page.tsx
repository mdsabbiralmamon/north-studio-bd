import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import Hero from "@/components/HomePage/Hero/Hero";
import OurAdvantageSection from "@/components/HomePage/OurAdvantageSection/OurAdvantageSection";
import OurPurpose from "@/components/HomePage/OurPurpose/OurPurpose";
import ServicesSection from "@/components/HomePage/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="about container mx-auto">
        <AboutSection />
      </div>
      <div className="ourPurpose container mx-auto my-24">
        <OurPurpose />
      </div>
      <div className="services container mx-auto my-24">
        <ServicesSection />
      </div>
      <div className="advantages container mx-auto my-24">
        <OurAdvantageSection />
      </div>
    </>
  );
}
