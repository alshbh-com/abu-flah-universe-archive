
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Charity from "@/components/Charity";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CharityPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4 rtl">
            <Link to="/" className="text-gray-600 hover:text-abu-primary flex items-center">
              <ChevronLeft className="h-5 w-5 ml-1" />
              <span>العودة للرئيسية</span>
            </Link>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 text-right">الأعمال الخيرية والمبادرات الإنسانية</h1>
        </div>
      </div>
      <Charity />
      <Footer />
    </div>
  );
};

export default CharityPage;
