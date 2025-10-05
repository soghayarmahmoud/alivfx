import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Services from "./components/services";
import AboutSection from './components/about';
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <Services />
    <AboutSection />
    <ContactSection />
    </> 
     );
}
