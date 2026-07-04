import About from "../components/About";
import Resources from "../components/Resources";
import FAQ from "../components/FAQ.jsx";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import WhyChoose from "../components/WhyChoose";
import TaxUpdates from "../components/TaxUpdates";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Whatsapp from "../components/Whatsapp";
import BackToTop from "../components/BackToTop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <WhyChoose />
      <TaxUpdates />
      <Resources />
      <FAQ />
      <Contact />
      <Footer />
      <Whatsapp />
      <BackToTop />
    </>
  );
}

export default Home;