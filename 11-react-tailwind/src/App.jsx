import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
