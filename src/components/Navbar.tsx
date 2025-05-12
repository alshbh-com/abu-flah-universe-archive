
import { useState } from "react";
import { Menu, X, Youtube, Instagram, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <span className="text-abu-primary font-bold text-xl">أبو فَلَّة</span>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 space-x-reverse">
            <Link to="/" className="text-gray-700 hover:text-abu-primary px-3 py-2 rounded-md font-medium">
              الرئيسية
            </Link>
            <Link to="/biography" className="text-gray-700 hover:text-abu-primary px-3 py-2 rounded-md font-medium">
              السيرة الذاتية
            </Link>
            <Link to="/achievements" className="text-gray-700 hover:text-abu-primary px-3 py-2 rounded-md font-medium">
              الإنجازات
            </Link>
            <Link to="/charity" className="text-gray-700 hover:text-abu-primary px-3 py-2 rounded-md font-medium">
              الأعمال الخيرية
            </Link>
            <Link to="/videos" className="text-gray-700 hover:text-abu-primary px-3 py-2 rounded-md font-medium">
              أبرز الفيديوهات
            </Link>
            <div className="flex items-center gap-2 mr-4">
              <a href="https://www.youtube.com/@AboFlah" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="rounded-full text-red-600 hover:text-red-700 hover:bg-red-50">
                  <Youtube className="h-5 w-5" />
                </Button>
              </a>
              <a href="https://www.instagram.com/m_ohamed_1_1" target="_blank" rel="noopener noreferrer">
                <Button size="icon" variant="ghost" className="rounded-full text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                  <Instagram className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-abu-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-abu-primary">
              الرئيسية
            </Link>
            <Link to="/biography" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-abu-primary">
              السيرة الذاتية
            </Link>
            <Link to="/achievements" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-abu-primary">
              الإنجازات
            </Link>
            <Link to="/charity" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-abu-primary">
              الأعمال الخيرية
            </Link>
            <Link to="/videos" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-abu-primary">
              أبرز الفيديوهات
            </Link>
          </div>
          <div className="flex justify-center gap-4 pb-3">
            <a href="https://www.youtube.com/@AboFlah" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="rounded-full text-red-600 hover:text-red-700 hover:bg-red-50">
                <Youtube className="h-5 w-5" />
              </Button>
            </a>
            <a href="https://www.instagram.com/m_ohamed_1_1" target="_blank" rel="noopener noreferrer">
              <Button size="icon" variant="ghost" className="rounded-full text-pink-600 hover:text-pink-700 hover:bg-pink-50">
                <Instagram className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
