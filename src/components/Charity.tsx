
import { charityWorks } from "@/data/abuflah";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, CircleDollarSign } from "lucide-react";

const Charity = () => {
  return (
    <div className="py-16 bg-gray-50 rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">الأعمال الخيرية والمبادرات الإنسانية</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            لم تقتصر شهرة أبو فله على صناعة المحتوى، بل امتد تأثيره ليشمل الجانب الإنساني والخيري
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {charityWorks.map((work) => (
            <Card key={work.id} className="overflow-hidden">
              <div className="bg-gradient-to-r from-abu-primary to-abu-accent h-2"></div>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/4 flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-inner">
                    <Heart className="h-16 w-16 text-red-500 mb-4" fill="currentColor" />
                    <h3 className="text-xl font-bold text-center">{work.title}</h3>
                    <div className="mt-4 flex items-center text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{work.year}</span>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">وصف المبادرة</h4>
                      <p className="text-gray-700">{work.description}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">التأثير والنتائج</h4>
                      <p className="text-gray-700">{work.impact}</p>
                    </div>
                  </div>
                </div>
                
                {work.id === 1 && (
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                    <div className="flex items-start">
                      <CircleDollarSign className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                      <div>
                        <h4 className="font-semibold text-blue-800">إنجاز قياسي</h4>
                        <p className="text-blue-700">
                          حطم أبو فله رقمين قياسيين عالميين في موسوعة غينيس: أطول بث مباشر متواصل في التاريخ (12 يوماً)، وأكثر عدد مشاهدات مباشرة في لحظة واحدة لحملة إنسانية على يوتيوب، كل ذلك من أجل جمع التبرعات للاجئين.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6">تأثير إيجابي مستدام</h3>
          <p className="text-gray-700 text-center max-w-3xl mx-auto">
            ساهمت مبادرات أبو فله الخيرية المختلفة في إحداث تغيير إيجابي في حياة العديد من الأشخاص، وأظهرت قوة وسائل التواصل الاجتماعي ومنصات المحتوى في حشد الدعم للقضايا الإنسانية وتسليط الضوء على الاحتياجات المختلفة للمجتمعات المحتاجة.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Charity;
