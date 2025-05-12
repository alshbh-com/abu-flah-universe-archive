
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Videos from "@/components/Videos";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";

const VideosPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-5 left-5 z-50">
        <ThemeToggle />
      </div>
      <Navbar />
      <div className="py-8 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4 rtl">
            <Link to="/" className="text-foreground hover:text-abu-neon flex items-center">
              <ChevronLeft className="h-5 w-5 ml-1" />
              <span>العودة للرئيسية</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-foreground text-right">أبرز الفيديوهات</h1>
        </div>
      </div>
      <Videos />
      <Footer />
    </div>
  );
};

export default VideosPage;
