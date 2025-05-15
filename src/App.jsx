import LoadingScreeenAnimation from "./UI/LoadingScreeenAnimation";
import MobileMenu from "./UI/MobileMenu";
import Navbar from "./UI/Navbar";
import { useState } from "react";
import Home from "./sections/Home";
import AnimationWaves from "./UI/AnimationWaves";
import About from "./sections/About";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";
import RevealOnScroll from "./UI/RevealOnScroll";
import Footer from "./sections/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreeenAnimation onComplete={() => setIsLoading(true)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
        <Home />
        <AnimationWaves />
      </RevealOnScroll>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
