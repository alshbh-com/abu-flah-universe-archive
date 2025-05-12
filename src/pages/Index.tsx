
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Achievements from "@/components/Achievements";
import Charity from "@/components/Charity";
import Videos from "@/components/Videos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Achievements />
        <Charity />
        <Videos />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
