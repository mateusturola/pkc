import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import StickyCTA from "@/components/StickyCTA";
import ScrollShapes from "@/components/ui/ScrollShapes";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Audience from "@/components/sections/Audience";
import Speakers from "@/components/sections/Speakers";
import EventDetails from "@/components/sections/EventDetails";
import Faq from "@/components/sections/Faq";
import Follow from "@/components/sections/Follow";
import Caravans from "@/components/sections/Caravans";
import Register from "@/components/sections/Register";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <ScrollShapes />
      <main>
        <Hero />
        <About />
        <Audience />
        <Speakers />
        <EventDetails />
        <Caravans />
        <Register />
        <Faq />
        <Follow />
      </main>
      <Footer />
      <StickyCTA />
    </SmoothScroll>
  );
}
