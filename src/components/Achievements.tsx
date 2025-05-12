
import { achievements } from "@/data/abuflah";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Youtube, Award, Clock } from "lucide-react";

const Achievements = () => {
  return (
    <div className="py-16 bg-white rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">الإنجازات والمسيرة المهنية</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            أبرز إنجازات أبو فله خلال مسيرته المهنية كصانع محتوى
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-2 bg-gradient-to-r from-abu-primary to-abu-accent"></div>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="bg-abu-primary/10 p-3 rounded-lg text-abu-primary flex-shrink-0">
                    {achievement.id === 3 || achievement.id === 4 ? (
                      <Youtube className="h-6 w-6" />
                    ) : achievement.id === 5 ? (
                      <Award className="h-6 w-6" />
                    ) : (
                      <Trophy className="h-6 w-6" />
                    )}
                  </div>
                  <div>
                    <Badge className="mb-2 bg-gray-100 text-gray-800 hover:bg-gray-200">
                      <Clock className="h-3 w-3 mr-1" /> {achievement.year}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="gradient-border inline-block">
            <div className="bg-white p-8 rounded-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">تميز المحتوى</h3>
              <p className="text-gray-600">
                يتميز محتوى أبو فله بالتنوع والإبداع، حيث يقدم مقاطع ترفيهية وتحديات مختلفة وألعاب فيديو. كما يشارك جمهوره لحظات من حياته الشخصية وقصص ملهمة وتجارب فريدة، مما ساهم في بناء قاعدة جماهيرية واسعة ومتنوعة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
