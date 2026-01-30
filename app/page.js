import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ShowreelSection from "./components/ShowreelSection";
import Services from "./components/services";
import AboutSection from './components/about';
import LongFormVideos from "./components/LongFormVideos";
import ShortFormVideos from "./components/ShortFormVideos";
import Courses from "./components/Courses";
import ContactSection from "./components/ContactSection";
import AchievementsSection from "./components/AchievementsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/footer";
import CompaniesSection from "./components/CompaniesSection";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ShowreelSection />
      <Services />
      <AboutSection />
      <LongFormVideos />
      <ShortFormVideos />
      <Courses />
      <AchievementsSection />
      <CompaniesSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </>
  );
}
