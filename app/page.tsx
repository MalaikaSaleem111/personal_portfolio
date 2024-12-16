import Image from "next/image";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

export default function Home() {
  return (
  <main>
    <Hero />
    <Projects />
    <Skills />
    <About />
    <Contact />
   
  </main>
  );
}
