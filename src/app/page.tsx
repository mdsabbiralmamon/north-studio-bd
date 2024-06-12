import AboutSection from "@/components/HomePage/AboutSection/AboutSection";
import Hero from "@/components/HomePage/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="about container mx-auto">
        <AboutSection />
      </div>
    </>
  );
}
