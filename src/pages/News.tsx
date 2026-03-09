import { motion } from 'motion/react';
import { Calendar, Image as ImageIcon, Video, ArrowRight } from 'lucide-react';

const newsPosts = [
  {
    id: 1,
    title: "Prezentacja Maroka - Wieczór Kulturowy",
    date: "15 Października 2023",
    category: "Wydarzenie",
    image: "https://picsum.photos/seed/morocco/800/600",
    excerpt: "Zapraszamy na niezwykłą podróż do Maroka! Nasz wolontariusz opowie o kulturze, tradycjach i kuchni swojego kraju. Wstęp wolny."
  },
  {
    id: 2,
    title: "Podsumowanie Culture Week w Kwidzynie",
    date: "2 Października 2023",
    category: "Relacja",
    image: "https://picsum.photos/seed/culture/800/600",
    excerpt: "Tydzień pełen warsztatów, spotkań i międzynarodowej integracji za nami. Zobaczcie, jak bawiliśmy się podczas tegorocznej edycji Culture Week."
  },
  {
    id: 3,
    title: "Szukamy wolontariuszy na wyjazd do Hiszpanii!",
    date: "28 Września 2023",
    category: "Rekrutacja",
    image: "https://picsum.photos/seed/spain/800/600",
    excerpt: "Masz 18-30 lat i chcesz spędzić 6 miesięcy w słonecznej Andaluzji? Zgłoś się do naszego nowego projektu EKS. Pokrywamy koszty podróży i zakwaterowania."
  },
  {
    id: 4,
    title: "Warsztaty z edukacji medialnej zakończone sukcesem",
    date: "15 Września 2023",
    category: "Relacja",
    image: "https://picsum.photos/seed/media/800/600",
    excerpt: "Młodzież z Kwidzyna uczyła się, jak rozpoznawać fake newsy i bezpiecznie poruszać się w sieci. Projekt zrealizowany w ramach programu Równać Szanse."
  }
];

export default function News() {
  return (
    <div className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            Aktualności i Media
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600"
          >
            Bądź na bieżąco z tym, co dzieje się w Akwedukcie. Relacje, zapowiedzi i galerie zdjęć z naszych działań.
          </motion.p>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Blog / News Feed (Takes up 2 columns on large screens) */}
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
              <Calendar className="w-6 h-6 text-emerald-600" />
              <h2 className="text-2xl font-bold text-stone-900">Najnowsze wpisy</h2>
            </div>

            {newsPosts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col sm:flex-row gap-6 bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="sm:w-1/3 h-48 sm:h-auto relative overflow-hidden shrink-0">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-semibold text-stone-900">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 sm:p-6 sm:pl-0 flex flex-col justify-center">
                  <time className="text-sm text-stone-500 mb-2 block">{post.date}</time>
                  <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-stone-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <button className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:text-emerald-700 mt-auto self-start">
                    Czytaj dalej <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </div>
              </motion.article>
            ))}
            
            <div className="text-center pt-8">
              <button className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-stone-50 transition-colors">
                Załaduj starsze wpisy
              </button>
            </div>
          </div>

          {/* Sidebar: Media Gallery */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-8 border-b border-stone-200 pb-4">
              <ImageIcon className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-stone-900">Galeria</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden bg-stone-100 group cursor-pointer relative">
                  <img 
                    src={`https://picsum.photos/seed/gallery${i}/400/400`} 
                    alt={`Galeria ${i}`} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/20 transition-colors flex items-center justify-center">
                    <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-3 mb-6 border-b border-stone-200 pb-4">
                <Video className="w-6 h-6 text-rose-600" />
                <h2 className="text-2xl font-bold text-stone-900">Wideo</h2>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden bg-stone-900 relative group cursor-pointer">
                <img 
                  src="https://picsum.photos/seed/video/800/450" 
                  alt="Miniaturka wideo" 
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
              <p className="text-sm font-medium text-stone-900 mt-3">Podsumowanie roku 2022 w Akwedukcie</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
