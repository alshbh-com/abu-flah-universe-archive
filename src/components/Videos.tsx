
import { useState } from "react";
import { featuredVideos, allVideos } from "@/data/abuflah";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Youtube } from "lucide-react";

const Videos = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const displayVideos = activeTab === "featured" ? featuredVideos : allVideos;

  return (
    <div className="py-16 bg-background rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">أبرز الفيديوهات</h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            مجموعة منتقاة من أشهر وأكثر فيديوهات أبو فله مشاهدة
          </p>
        </div>

        <Tabs defaultValue="featured" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2 bg-abu-neon/20">
            <TabsTrigger value="featured" className="data-[state=active]:bg-abu-neon data-[state=active]:text-black">الفيديوهات المميزة</TabsTrigger>
            <TabsTrigger value="all" className="data-[state=active]:bg-abu-neon data-[state=active]:text-black">جميع الفيديوهات</TabsTrigger>
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
          <p className="text-muted-foreground">
            لمشاهدة المزيد من الفيديوهات، يرجى زيارة القناة الرسمية لأبو فله على يوتيوب
          </p>
          <a 
            href="https://www.youtube.com/@AboFlah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center mt-2 text-red-600 hover:text-red-800 font-medium"
          >
            <span>القناة الرسمية</span>
            <Youtube className="mr-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

function renderVideoCards(videos) {
  return videos.map((video) => (
    <a 
      href="https://www.youtube.com/@AboFlah" 
      target="_blank" 
      rel="noopener noreferrer" 
      key={video.id}
      className="block transform transition-transform hover:scale-105"
    >
      <Card className="overflow-hidden hover:shadow-lg transition-shadow border-abu-neon/30 hover:border-abu-neon">
        <div className="video-thumbnail relative">
          <img 
            src={video.thumbnail || `https://via.placeholder.com/480x270/39FF14/000000?text=فيديو+${video.id}`} 
            alt={video.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-abu-neon/80 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Youtube fill="black" className="h-8 w-8" />
            </div>
          </div>
          
          {/* Abu Flah's image overlay */}
          <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
            <img 
              src="https://yt3.googleusercontent.com/ytc/AIdro_k54hytUBzcbMcFYRkzpnQpdDrI_zF8J_cG-DXk=s900-c-k-c0x00ffffff-no-rj" 
              alt="أبو فله" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-lg line-clamp-2 mb-2">{video.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{video.description}</p>
          <div className="flex items-center text-muted-foreground text-sm">
            <Eye className="h-4 w-4 ml-1" />
            <span>{video.views}</span>
          </div>
        </CardContent>
      </Card>
    </a>
  ));
}

export default Videos;
