import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Benefit from "../components/Benefit";
import Roadmap from "../components/Roadmap";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Teams from "../components/Teams";

export default function Home() {
  return (
    <>
      <Header title="Cyborg Ape" />
      <div className="font-body text-dark">
        <div className="bg-white mb-0 md:mb-9">
          <Navbar />
        </div>
        <div>
          <Hero />
        </div>
        <div className="my-12 md:my-28">
          <Benefit />
        </div>
        <div className="my-12 md:my-28">
          <Roadmap />
        </div>
        <div className="my-12 md:my-28">
          <Teams />
        </div>
        <div className="my-12 md:my-28">
          <Faq />
        </div>
        <div className="my-12 md:my-14">
          <Footer />
        </div>
      </div>
    </>
  );
}
