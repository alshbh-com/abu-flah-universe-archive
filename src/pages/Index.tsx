
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Achievements from "@/components/Achievements";
import Charity from "@/components/Charity";
import Videos from "@/components/Videos";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-5 left-5 z-50">
        <ThemeToggle />
      </div>
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
