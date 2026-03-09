import { motion } from 'motion/react';
import { Plane, Globe, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Volunteering() {
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
            Wyjazdy i Wolontariat
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600"
          >
            Odkrywaj świat, zdobywaj doświadczenie i zmieniaj siebie. Działalność międzynarodowa to nasza specjalność.
          </motion.p>
        </div>

        {/* EKS Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/eks/800/600" 
                alt="Wolontariusze EKS" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-3xl shadow-xl max-w-[200px] hidden md:block">
              <p className="text-white font-bold text-lg leading-tight">Zdobądź doświadczenie na całe życie!</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              <Plane className="w-4 h-4" />
              Dla Polaków
            </div>
            <h2 className="text-3xl font-bold text-stone-900">Wyjedź z nami (Wolontariat EKS)</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Europejski Korpus Solidarności (EKS) to program Unii Europejskiej, który umożliwia młodym ludziom (18-30 lat) wyjazd na wolontariat za granicę. Koszty podróży, zakwaterowania, wyżywienia oraz kieszonkowe są pokrywane z grantu!
            </p>
            <ul className="space-y-3 text-stone-600">
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span><strong>Dla kogo:</strong> Osoby w wieku 18-30 lat.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span><strong>Czas trwania:</strong> Od 2 tygodni do 12 miesięcy.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                <span><strong>Gdzie:</strong> Cała Europa i kraje partnerskie.</span>
              </li>
            </ul>
            <div className="pt-4">
              <Link to="/kontakt" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors">
                Zapytaj o aktualne oferty
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Youth Exchanges Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm font-semibold">
              <Globe className="w-4 h-4" />
              Krótkoterminowe
            </div>
            <h2 className="text-3xl font-bold text-stone-900">Wymiany Młodzieżowe</h2>
            <p className="text-lg text-stone-600 leading-relaxed">
              Krótkie wyjazdy grupowe (zazwyczaj 5-14 dni), podczas których spotykasz się z rówieśnikami z innych krajów. Wspólnie uczycie się, dyskutujecie i pracujecie nad wybranym tematem (np. ekologia, sztuka, prawa człowieka).
            </p>
            <p className="text-stone-600">
              To świetna okazja na przełamanie bariery językowej, poznanie nowych kultur i nawiązanie międzynarodowych przyjaźni. Koszty zakwaterowania i wyżywienia są w pełni pokrywane, a koszty podróży zwracane do określonego limitu.
            </p>
            <div className="pt-4">
              <Link to="/aktualnosci" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
                Śledź rekrutacje na blogu <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img 
                src="https://picsum.photos/seed/exchange/800/600" 
                alt="Wymiana młodzieżowa" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Volunteering in Kwidzyn Section */}
        <div className="bg-stone-900 rounded-3xl p-8 md:p-16 text-white text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <MapPin className="w-12 h-12 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold">Wolontariat w Kwidzynie</h2>
            <p className="text-lg text-stone-300 leading-relaxed">
              Jesteś obcokrajowcem i chcesz przyjechać do Polski na wolontariat? Akwedukt regularnie gości wolontariuszy z różnych krajów. Pomagamy w szkołach, przedszkolach, prowadzimy zajęcia językowe i animujemy lokalną społeczność.
            </p>
            <div className="pt-6">
              <Link to="/kontakt" className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-stone-900 bg-emerald-400 hover:bg-emerald-300 transition-colors">
                Contact us for details (EN)
              </Link>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
