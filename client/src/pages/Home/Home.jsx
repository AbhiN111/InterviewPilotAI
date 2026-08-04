import MainLayout from "../../layouts/MainLayout";
import Hero from "../../components/Hero";
import Stats from "../../components/Stats";
import Features from "../../components/Features";
import HowItWorks from "../../components/HowItWorks";
import Testimonials from "../../components/Testimonials";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </MainLayout>
  );
}

export default Home;