import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Sobre from "@/components/Sobre";
import ComoFunciona from "@/components/ComoFunciona";
import Servicos from "@/components/Servicos";
import Depoimentos from "@/components/Depoimentos";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <hr className="divider-line" />
        <Sobre />
        <hr className="divider-line" />
        <ComoFunciona />
        <hr className="divider-line" />
        <Servicos />
        <hr className="divider-line" />
        <Depoimentos />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
