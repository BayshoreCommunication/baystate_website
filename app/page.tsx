import AboutSection from "components/home/AboutSection";
import BlogSection from "components/home/BlogSection";
import ContactSection from "components/home/ContactSection";
import Hero from "components/home/Hero";
import MissionSection from "components/home/MissionSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <MissionSection />
      <ContactSection />
      <BlogSection />
    </div>
  );
}
