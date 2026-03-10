import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Coffee, Users, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Personalized Youth Section (Replaces Hero) */}
      <section className="relative bg-emerald-600 text-white overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col justify-center">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-emerald-700 rounded-full blur-3xl opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-emerald-50 text-sm font-bold tracking-wide uppercase mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse"></span>
                Dla Młodzieży
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Hej! Szukasz pomysłu <br className="hidden md:block" />
                <span className="text-emerald-200">na siebie?</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-emerald-50 mb-10 leading-relaxed font-medium">
                Akwedukt to Twoja przestrzeń w Kwidzynie. Wpadnij po szkole, poznaj ludzi z całego świata, zorganizuj własne wydarzenie lub wyjedź z nami na wolontariat za granicę!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/oferta"
                  className="group inline-flex items-center justify-center px-8 py-5 text-lg font-bold rounded-2xl text-emerald-900 bg-white hover:bg-emerald-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <Users className="mr-3 w-6 h-6 text-emerald-600 group-hover:scale-110 transition-transform" />
                  Odkryj ofertę dla młodzieży
                </Link>
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center px-8 py-5 text-lg font-bold rounded-2xl text-white bg-emerald-700 hover:bg-emerald-800 transition-colors border border-emerald-500"
                >
                  Napisz do nas
                </Link>
              </div>
            </motion.div>

            {/* Visual Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl border-4 border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://picsum.photos/seed/youth-active/800/1000"
                  alt="Młodzież spędzająca czas w Akwedukcie"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Floating badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                      <Coffee className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-stone-900 font-bold text-lg">Przestrzeń dla Ciebie</p>
                      <p className="text-stone-600 text-sm font-medium">Otwarte codziennie 14:00-18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
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
