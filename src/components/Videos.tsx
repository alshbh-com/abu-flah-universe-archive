
import { useState } from "react";
import { featuredVideos, allVideos } from "@/data/abuflah";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Award, ThumbsUp } from "lucide-react";

const Videos = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const displayVideos = activeTab === "featured" ? featuredVideos : allVideos;

  return (
    <div className="py-16 bg-white rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">أبرز الفيديوهات</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            مجموعة منتقاة من أشهر وأكثر فيديوهات أبو فله مشاهدة
          </p>
        </div>

        <Tabs defaultValue="featured" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2">
            <TabsTrigger value="featured">الفيديوهات المميزة</TabsTrigger>
            <TabsTrigger value="all">جميع الفيديوهات</TabsTrigger>
          </TabsList>

          <TabsContent value="featured" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderVideoCards(featuredVideos)}
            </div>
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {renderVideoCards(allVideos)}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            لمشاهدة المزيد من الفيديوهات، يرجى زيارة القناة الرسمية لأبو فله على يوتيوب
          </p>
          <a 
            href="https://www.youtube.com/@AboFlah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center mt-2 text-red-600 hover:text-red-800 font-medium"
          >
            <span>القناة الرسمية</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="mr-2 h-4 w-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

function renderVideoCards(videos) {
  return videos.map((video) => (
    <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative aspect-video">
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <img 
            src={`https://via.placeholder.com/480x270?text=فيديو+${video.id}`} 
            alt={video.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="h-16 w-16">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg line-clamp-2 mb-2">{video.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>
        <div className="flex items-center text-gray-500 text-sm">
          <Eye className="h-4 w-4 mr-1" />
          <span>{video.views}</span>
        </div>
      </CardContent>
    </Card>
  ));
}

export default Videos;
