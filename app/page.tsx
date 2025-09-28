import AboutSection from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import ScrollToTop from "./components/ScrollToTop";
import TedTalk from "./components/TedTalk";
import React from "react";
import Testimonials from "./components/Testimonials";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-4 sm:px-6 md:px-8 py-4">
        <HeroSection />
        <ProjectsSection />
        <Testimonials />
        <TedTalk />
        <AboutSection />
        <ContactMe />
        <QuoteOfTheDay />
        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
};

export default Home;
