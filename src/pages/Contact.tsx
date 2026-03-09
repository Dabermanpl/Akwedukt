import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';

export default function Contact() {
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
            Kontakt
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600"
          >
            Masz pytania? Chcesz dołączyć do projektu? Napisz, zadzwoń lub odwiedź nas w biurze.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Dane teleadresowe</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 text-emerald-600">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Adres biura</p>
                    <p className="text-stone-600">ul. Przykładowa 12<br/>82-500 Kwidzyn</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 text-emerald-600">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Godziny otwarcia</p>
                    <p className="text-stone-600">Poniedziałek - Piątek: 10:00 - 18:00<br/>(Przestrzeń dla Młodzieży: 14:00 - 18:00)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 text-emerald-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">Telefon</p>
                    <p className="text-stone-600">+48 123 456 789</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 text-emerald-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-stone-900">E-mail</p>
                    <p className="text-stone-600">kontakt@akwedukt.org.pl</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-6">Znajdź nas w sieci</h2>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-stone-600 transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-stone-600 transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-stone-600 transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-stone-100 hover:bg-stone-200 rounded-full flex items-center justify-center text-stone-600 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100"
          >
            <h2 className="text-2xl font-bold text-stone-900 mb-6">Napisz do nas</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Imię i nazwisko</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 bg-stone-50 px-4 py-3 border"
                  placeholder="Jan Kowalski"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Adres e-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 bg-stone-50 px-4 py-3 border"
                  placeholder="jan@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">Temat</label>
                <select 
                  id="subject" 
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 bg-stone-50 px-4 py-3 border"
                >
                  <option>Wolontariat EKS</option>
                  <option>Przestrzeń dla Młodzieży</option>
                  <option>Współpraca</option>
                  <option>Inne</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Wiadomość</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full rounded-xl border-stone-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500 bg-stone-50 px-4 py-3 border resize-none"
                  placeholder="W czym możemy pomóc?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
              >
                Wyślij wiadomość
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
