import AboutSection from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import QuoteOfTheDay from "./components/QuoteOfTheDay";
import TedTalk from "./components/TedTalk";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TedTalk />
        <ContactMe />
        <QuoteOfTheDay />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
