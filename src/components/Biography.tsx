
import { biography } from "@/data/abuflah";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cake, Home, Flag, MapPin, Heart } from "lucide-react";

const Biography = () => {
  return (
    <div className="py-16 bg-gray-50 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">السيرة الذاتية والنشأة</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            نبذة عن حياة أبو فله، نشأته، ومسيرته منذ البداية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">المعلومات الشخصية</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <span className="bg-abu-primary/10 p-2 rounded-full text-abu-primary mr-3">
                      <span className="block w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-700">الاسم الكامل:</span>
                      <span className="text-gray-600 mr-2">{biography.fullName}</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-abu-primary/10 p-2 rounded-full text-abu-primary mr-3">
                      <span className="block w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-700">الاسم المعروف:</span>
                      <span className="text-gray-600 mr-2">{biography.knownAs}</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-abu-primary/10 p-2 rounded-full text-abu-primary mr-3">
                      <Cake className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-700">تاريخ الميلاد:</span>
                      <span className="text-gray-600 mr-2">{biography.birthDate}</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-abu-primary/10 p-2 rounded-full text-abu-primary mr-3">
                      <Home className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-700">مكان الميلاد:</span>
                      <span className="text-gray-600 mr-2">{biography.birthPlace}</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-abu-primary/10 p-2 rounded-full text-abu-primary mr-3">
                      <Flag className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-700">الجنسية الأصلية:</span>
                      <span className="text-gray-600 mr-2">{biography.nationality}</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-abu-primary/10 p-2 rounded-full text-abu-primary mr-3">
                      <MapPin className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-700">مكان الإقامة الحالي:</span>
                      <span className="text-gray-600 mr-2">{biography.currentResidence}</span>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-abu-primary/10 p-2 rounded-full text-abu-primary mr-3">
                      <Heart className="w-5 h-5" />
                    </span>
                    <div>
                      <span className="font-bold text-gray-700">الديانة:</span>
                      <span className="text-gray-600 mr-2">{biography.religion}</span>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="h-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">النشأة والتعليم</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-7 text-justify">
                  {biography.bio}
                </p>
                <div className="mt-6">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">بداية المسيرة على يوتيوب</h3>
                  <div className="bg-gray-100 p-4 rounded-lg border-r-4 border-abu-primary">
                    <p className="text-gray-700">
                      أول فيديو نشره أبو فله على قناته كان بعنوان "كلاش اوف كلانس تصميم خرافي «فيديو»"، ولكن هذا الفيديو لم يعد متاحًا على القناة حاليًا. منذ ذلك الحين، نما محتواه ليشمل مجموعة واسعة من الفيديوهات الترفيهية، التحديات، ومقاطع الألعاب المختلفة.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biography;
