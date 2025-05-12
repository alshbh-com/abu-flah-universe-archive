
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/80"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 rtl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              أبو فَلَّة
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl">
              صانع محتوى عربي شهير على منصة يوتيوب، تجاوز عدد مشتركي قناته 47 مليون مشترك. معروف بأسلوبه المميز في تقديم محتوى ترفيهي متنوع وتحديات مبتكرة، بالإضافة إلى أعماله الخيرية والإنسانية التي أثرت في حياة الكثيرين.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@AboFlah" target="_blank" rel="noopener noreferrer">
                <Button className="rounded-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 flex items-center gap-2">
                  <Youtube className="h-5 w-5" />
                  القناة الرسمية
                </Button>
              </a>
              <Link to="/biography">
                <Button variant="outline" className="rounded-full bg-transparent border-white text-white hover:bg-white/10 px-6 py-3">
                  تعرف على أبو فله
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-abu-primary to-abu-accent opacity-75 rounded-full blur"></div>
              <img
                src="/lovable-uploads/13fbecfd-b068-4862-aca3-fa068fc60b25.png"
                alt="أبو فله"
                className="relative w-64 h-64 object-cover rounded-full border-4 border-white animate-float"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
