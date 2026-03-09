import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Coffee, Users, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/seed/youth/1920/1080?blur=2"
            alt="Młodzież w akcji"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/60 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wider uppercase mb-6 border border-emerald-500/30">
              Stowarzyszenie Akwedukt
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Działaj lokalnie, <br className="hidden md:block" />
              <span className="text-emerald-400">myśl globalnie.</span>
            </h1>
            <p className="mt-4 text-xl text-stone-300 max-w-2xl mx-auto mb-10">
              Tworzymy przestrzeń dla młodzieży i mieszkańców Kwidzyna. Dołącz do nas, rozwijaj pasje, poznawaj świat i zmieniaj swoje otoczenie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/oferta"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-stone-900 bg-emerald-400 hover:bg-emerald-300 transition-colors shadow-lg shadow-emerald-500/30"
              >
                Dołącz do nas
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/wesprzyj-nas"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors"
              >
                <Heart className="mr-2 w-5 h-5 text-emerald-400" />
                Wesprzyj nas
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Activities / Zajawki kluczowych działań */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 sm:text-4xl">Co robimy?</h2>
            <p className="mt-4 text-lg text-stone-600 max-w-2xl mx-auto">
              Odkryj możliwości, jakie daje Akwedukt. Wybierz coś dla siebie i zacznij działać.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
                <Coffee className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Kawiarenki Językowe</h3>
              <p className="text-stone-600 mb-6">
                Szlifuj języki obce w luźnej atmosferze. Spotkaj wolontariuszy z różnych stron świata i poznaj ich kulturę przy kawie.
              </p>
              <Link to="/oferta" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                Sprawdź harmonogram <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Wolontariat EKS</h3>
              <p className="text-stone-600 mb-6">
                Wyjedź za granicę, zdobądź doświadczenie, poznaj nowych ludzi i zrób coś dobrego. Pomożemy Ci w rekrutacji i przygotowaniach.
              </p>
              <Link to="/wyjazdy" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                Dowiedz się więcej <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-stone-50 rounded-3xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Przestrzeń dla Młodzieży</h3>
              <p className="text-stone-600 mb-6">
                Twoje miejsce w Kwidzynie. Wpadnij odrobić lekcje, pograć w planszówki, zorganizować własne wydarzenie lub po prostu posiedzieć.
              </p>
              <Link to="/oferta" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700">
                Zobacz co się dzieje <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Aktualności</h2>
              <p className="mt-2 text-stone-600">Co nowego w Akwedukcie?</p>
            </div>
            <Link to="/aktualnosci" className="hidden sm:inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
              Wszystkie wpisy <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Prezentacja Maroka - Wieczór Kulturowy",
                date: "15 Października 2023",
                category: "Wydarzenie",
                image: "https://picsum.photos/seed/morocco/600/400"
              },
              {
                title: "Podsumowanie Culture Week w Kwidzynie",
                date: "2 Października 2023",
                category: "Relacja",
                image: "https://picsum.photos/seed/culture/600/400"
              },
              {
                title: "Szukamy wolontariuszy na wyjazd do Hiszpanii!",
                date: "28 Września 2023",
                category: "Rekrutacja",
                image: "https://picsum.photos/seed/spain/600/400"
              }
            ].map((post, i) => (
              <Link key={i} to="/aktualnosci" className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-stone-900">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <time className="text-sm text-stone-500 mb-2">{post.date}</time>
                  <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link to="/aktualnosci" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
              Wszystkie wpisy <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
