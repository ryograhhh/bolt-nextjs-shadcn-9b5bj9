import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Star, TrendingUp, Clock, Search } from "lucide-react"

const featuredAnime = [
  {
    title: "Demon Slayer",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=800&auto=format&fit=crop&q=60",
    rating: "4.9",
    episodes: "26",
  },
  {
    title: "Attack on Titan",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=800&auto=format&fit=crop&q=60",
    rating: "4.8",
    episodes: "75",
  },
  {
    title: "Jujutsu Kaisen",
    image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=800&auto=format&fit=crop&q=60",
    rating: "4.7",
    episodes: "24",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center px-4">
          <h1 className="text-2xl font-bold tracking-tight">AnimeTagalog</h1>
          <div className="flex items-center space-x-4 ml-auto">
            <div className="relative w-96">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Maghanap ng anime..." className="pl-8" />
            </div>
            <Button>Mag-sign in</Button>
          </div>
        </div>
      </nav>

      <div className="container px-4 py-6">
        <div className="relative h-[500px] overflow-hidden rounded-lg mb-8">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src="https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=800&auto=format&fit=crop&q=60"
            alt="Featured"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
            <h2 className="text-4xl font-bold text-white mb-4">One Piece</h2>
            <p className="text-gray-200 mb-6 max-w-2xl">
              Sumali kay Luffy at sa kanyang crew sa kanilang hindi malilimutang adventure sa paghahanap ng One Piece!
            </p>
            <Button size="lg" className="gap-2">
              <Play className="w-5 h-5" /> Panoorin Ngayon
            </Button>
          </div>
        </div>

        <Tabs defaultValue="trending" className="mb-8">
          <TabsList>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="latest">Pinakabago</TabsTrigger>
            <TabsTrigger value="popular">Sikat</TabsTrigger>
          </TabsList>
          <TabsContent value="trending" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredAnime.map((anime) => (
                <Card key={anime.title} className="overflow-hidden">
                  <div className="aspect-video relative group cursor-pointer">
                    <img
                      src={anime.image}
                      alt={anime.title}
                      className="object-cover w-full h-full transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button variant="secondary" size="icon">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{anime.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4">
                      <span className="flex items-center">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        {anime.rating}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {anime.episodes} Episodes
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Mga Kategorya</h2>
            <Button variant="ghost">Tingnan Lahat</Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Action", "Romance", "Comedy", "Drama", "Fantasy", "Sci-Fi"].map((genre) => (
              <Button
                key={genre}
                variant="outline"
                className="h-24 flex flex-col items-center justify-center gap-2"
              >
                {genre}
              </Button>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}