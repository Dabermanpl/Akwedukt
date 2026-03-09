import { motion } from 'motion/react';
import { Heart, Gift, PiggyBank, ArrowRight } from 'lucide-react';

export default function Support() {
  return (
    <div className="py-12 md:py-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 flex items-center justify-center gap-4"
          >
            <Heart className="w-10 h-10 text-rose-500 fill-rose-500" />
            Wesprzyj Nas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600"
          >
            Twoje wsparcie pozwala nam działać na rzecz młodzieży i społeczności lokalnej. Każda złotówka ma znaczenie.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Current Fundraisers */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 flex flex-col"
          >
            <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 text-rose-600">
              <Gift className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Bieżące Zbiórki</h2>
            <p className="text-stone-600 mb-8 flex-grow">
              Pomóż nam zrealizować konkretne cele. Obecnie zbieramy środki na wyposażenie naszej nowej "Przestrzeni dla Młodzieży".
            </p>
            
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200 mb-8">
              <h3 className="font-bold text-stone-900 mb-2">Nowy namiot eventowy</h3>
              <p className="text-sm text-stone-600 mb-4">Potrzebujemy namiotu na plenerowe wydarzenia dla mieszkańców Kwidzyna.</p>
              
              {/* Progress Bar */}
              <div className="w-full bg-stone-200 rounded-full h-2.5 mb-2">
                <div className="bg-rose-500 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between text-xs font-medium text-stone-500">
                <span>Zebrano: 2 250 zł</span>
                <span>Cel: 5 000 zł</span>
              </div>
            </div>

            <button className="w-full py-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold transition-colors flex items-center justify-center gap-2">
              Wpłać na zbiórkę <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* 1.5% and Donations */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100 flex flex-col"
          >
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 text-emerald-600">
              <PiggyBank className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-stone-900 mb-4">Przekaż 1,5% / Darowizny</h2>
            <p className="text-stone-600 mb-8 flex-grow">
              Wspieraj naszą codzienną, "niewidoczną" pracę biura, organizację spotkań i utrzymanie lokalu. Przekaż 1,5% podatku lub wpłać darowiznę na cele statutowe.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="font-bold text-emerald-900 mb-1">Przekaż 1,5% podatku</h3>
                <p className="text-sm text-emerald-800 mb-3">Wpisz w zeznaniu podatkowym nasz numer KRS:</p>
                <div className="bg-white px-4 py-3 rounded-xl border border-emerald-200 text-center font-mono text-xl font-bold tracking-widest text-emerald-700">
                  0000 123 456
                </div>
              </div>

              <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
                <h3 className="font-bold text-stone-900 mb-1">Dane do przelewu</h3>
                <p className="text-sm text-stone-600 mb-2">Stowarzyszenie Akwedukt<br/>ul. Przykładowa 12, 82-500 Kwidzyn</p>
                <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-1">Numer konta:</p>
                <p className="font-mono text-sm font-medium text-stone-900 break-all">
                  12 3456 7890 1234 5678 9012 3456
                </p>
                <p className="text-xs text-stone-500 mt-2">Tytuł: Darowizna na cele statutowe</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
