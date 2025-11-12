import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Services from "./components/services";
import AboutSection from './components/about';
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectSection";
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
    <Services />
    <AboutSection />
    <AchievementsSection />
    <ProjectsSection />
    <CompaniesSection />
    <TestimonialsSection />
    <CTASection />
    <ContactSection />
    <Footer />
    </> 
     );
}
