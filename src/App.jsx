import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 antialiased selection:bg-indigo-500/20 selection:text-indigo-200">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <Navbar />
      <main className="container mx-auto max-w-5xl px-6">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Certifications />
        <Recommendations />
        <Contact />
      </main>
    </div>
  );
};

export default App;
