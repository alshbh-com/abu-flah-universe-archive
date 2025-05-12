
import { Instagram, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rtl">
          <div>
            <h3 className="text-xl font-bold mb-4">عن أبو فَلَّة</h3>
            <p className="text-gray-300">
              صانع محتوى عربي شهير على منصة يوتيوب، معروف بمحتواه الترفيهي والألعاب والتحديات المختلفة، بالإضافة إلى أعماله الخيرية والإنسانية المتعددة.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-300 hover:text-white">الرئيسية</a>
              </li>
              <li>
                <a href="/biography" className="text-gray-300 hover:text-white">السيرة الذاتية</a>
              </li>
              <li>
                <a href="/achievements" className="text-gray-300 hover:text-white">الإنجازات</a>
              </li>
              <li>
                <a href="/charity" className="text-gray-300 hover:text-white">الأعمال الخيرية</a>
              </li>
              <li>
                <a href="/videos" className="text-gray-300 hover:text-white">أبرز الفيديوهات</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">تواصل مع أبو فله</h3>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://www.youtube.com/@AboFlah" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/m_ohamed_1_1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center rtl">
          <p className="text-gray-300">© 2025 الملف التعريفي الشامل لأبو فَلَّة. جميع الحقوق محفوظة.</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-300">
              صُنع بـ
            </span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
            <span className="text-gray-300">
              بواسطة
            </span>
            <a href="https://www.instagram.com/m_ohamed_1_1" target="_blank" rel="noopener noreferrer" className="text-abu-primary hover:underline mx-1">
              @m_ohamed_1_1
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
