import { motion } from 'motion/react';
import { Target, Users, Heart, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <div className="py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            O nas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600"
          >
            Poznaj serce naszej organizacji. Dowiedz się, dlaczego robimy to, co robimy i kto za tym stoi.
          </motion.p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Nasza Misja</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                Wierzymy w siłę społeczeństwa obywatelskiego. Naszym celem jest aktywizacja młodzieży i mieszkańców Kwidzyna poprzez edukację pozaformalną, wolontariat i integrację europejską.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-2xl">
                <Target className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="font-bold text-stone-900 mb-2">Edukacja Pozaformalna</h3>
                <p className="text-sm text-stone-600">Uczymy przez doświadczenie, działanie i współpracę, poza szkolnymi ławkami.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-2xl">
                <Globe2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-stone-900 mb-2">Integracja Europejska</h3>
                <p className="text-sm text-stone-600">Budujemy mosty między kulturami, promując otwartość i tolerancję.</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/mission/800/800" 
                alt="Nasza misja w akcji" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-2">
                <Heart className="w-6 h-6 text-rose-500 fill-rose-500" />
                <span className="font-bold text-2xl text-stone-900">15+</span>
              </div>
              <p className="text-sm font-medium text-stone-600">Lat doświadczenia w pracy z młodzieżą w Kwidzynie</p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Nasz Zespół</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Poznaj ludzi, którzy na co dzień tworzą Akwedukt – naszych koordynatorów oraz wolontariuszy z różnych stron świata.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Anna Kowalska", role: "Prezeska Zarządu", image: "https://picsum.photos/seed/anna/400/400" },
              { name: "Piotr Nowak", role: "Koordynator Projektów", image: "https://picsum.photos/seed/piotr/400/400" },
              { name: "Maria Garcia", role: "Wolontariuszka EKS (Hiszpania)", image: "https://picsum.photos/seed/maria/400/400" },
              { name: "Lukas Weber", role: "Wolontariusz EKS (Niemcy)", image: "https://picsum.photos/seed/lukas/400/400" },
            ].map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-1">{person.name}</h3>
                <p className="text-sm font-medium text-emerald-600">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
