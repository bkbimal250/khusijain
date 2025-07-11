import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Software from "./components/Software";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Import the resume asset
import resumePDF from "./assets/Khushi Lodha Graphic Designer & Motion graphic artist Resume.pdf";

function App() {
  return (
    <>
      <Header />
      <div className="animated-bg">
        {/* Floating Resume Button */}
        <a
          href={resumePDF}
          className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-b from-[#a259c6] to-[#fbc2eb] text-white font-bold shadow-xl hover:from-[#fbc2eb] hover:to-[#a259c6] hover:text-[#a259c6] hover:bg-white transition-all duration-300 animate-float border-2 border-white/70"
          style={{ writingMode: 'vertical-lr', borderRadius: '2rem 2rem 0 0' }}
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mb-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4m-8 8h8" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">Download Resume</span>
        </a>
        <main className="min-h-screen">
          <section id="about" className="py-12 border-b border-gray-200">
            <Hero />
          </section>
          <section id="skills" className="py-12 border-b border-gray-200">
            <Skills />
          </section>
          <section id="software" className="py-12 border-b border-gray-200">
            <Software />
          </section>
          <section id="experience" className="py-12 border-b border-gray-200">
            <Experience />
          </section>
          <section id="education" className="py-12 border-b border-gray-200">
            <Education />
          </section>
          <section id="contact" className="py-12">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
