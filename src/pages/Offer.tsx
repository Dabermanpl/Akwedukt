import { motion } from 'motion/react';
import { Users, Coffee, Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Offer() {
  return (
    <div className="py-12 md:py-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            Dla Mieszkańców
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600"
          >
            Sprawdź, co przygotowaliśmy dla Ciebie w Kwidzynie. Od przestrzeni do nauki, po spotkania z kulturami świata.
          </motion.p>
        </div>

        {/* Offer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Item 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-all group"
          >
            <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 text-amber-600">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Przestrzeń dla Młodzieży</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Twoje oddolne centrum młodzieżowe. Miejsce, gdzie możesz odrobić lekcje, pograć w planszówki, zorganizować własne wydarzenie lub po prostu spędzić czas ze znajomymi w bezpiecznym otoczeniu.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Otwarte od poniedziałku do piątku (14:00 - 18:00)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Darmowe Wi-Fi i gry planszowe</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Możliwość rezerwacji na własne inicjatywy</li>
            </ul>
            <Link to="/kontakt" className="inline-flex items-center text-amber-600 font-semibold hover:text-amber-700">
              Odwiedź nas <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>

          {/* Item 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-all group"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
              <Coffee className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Kawiarenki Językowe i Wieczory Kulturowe</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Szlifuj języki obce w luźnej atmosferze i poznawaj kultury z całego świata. Otwarte spotkania prowadzone przez naszych zagranicznych wolontariuszy.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> English Cafe (Wtorki, 17:00)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Spanish Cafe (Środy, 17:00)</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Wieczory Kulturowe (Raz w miesiącu)</li>
            </ul>
            <Link to="/aktualnosci" className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700">
              Sprawdź najbliższe spotkania <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>

          {/* Item 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-all group"
          >
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Półkolonie i Warsztaty</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Oferta sezonowa dla dzieci i młodzieży. Organizujemy "English Summer/Winter", "Culture Week" oraz animacje w szkołach podczas ferii i wakacji.
            </p>
            <ul className="space-y-2 mb-8 text-sm text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Nauka przez zabawę</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Kontakt z żywym językiem obcym</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Rozwój kreatywności i umiejętności miękkich</li>
            </ul>
            <Link to="/kontakt" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
              Zapytaj o najbliższe terminy <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>

          {/* Item 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 hover:shadow-md transition-all group"
          >
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 text-purple-600">
              <GraduationCap className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Dla Szkół i Instytucji</h2>
            <p className="text-stone-600 mb-6 leading-relaxed">
              Dedykowana oferta warsztatów kulturowych i językowych dla placówek oświatowych. Nasi wolontariusze mogą odwiedzić Twoją szkołę!
            </p>
            <ul className="space-y-2 mb-8 text-sm text-stone-600">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Prezentacje krajów i kultur</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Warsztaty antydyskryminacyjne</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Lekcje języków obcych (native speakerzy)</li>
            </ul>
            <Link to="/kontakt" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700">
              Zaproś nas do siebie <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
