import Image from "next/image";
import Header from "./components/header";
import HeroSection from "./components/heroSection";
import Services from "./components/services";

export default function Home() {
  return (
    <>
    <Header />
    <HeroSection />
    <Services />
    <AboutSection />
    </> 
     );
}
