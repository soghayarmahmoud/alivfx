import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Services from "./components/services";
import AboutSection from './components/about';
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectSection";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <Services />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    </> 
     );
}
