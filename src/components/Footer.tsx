import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <span className="font-bold text-xl text-white">Stowarzyszenie Akwedukt</span>
            </div>
            <p className="text-sm text-stone-400">
              Budujemy społeczeństwo obywatelskie, wspieramy edukację pozaformalną i integrację europejską w Kwidzynie.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Na skróty</h3>
            <ul className="space-y-2">
              <li><Link to="/o-nas" className="text-sm hover:text-white transition-colors">O nas</Link></li>
              <li><Link to="/oferta" className="text-sm hover:text-white transition-colors">Dla Mieszkańców</Link></li>
              <li><Link to="/wyjazdy" className="text-sm hover:text-white transition-colors">Wyjazdy i Wolontariat</Link></li>
              <li><Link to="/wesprzyj-nas" className="text-sm hover:text-white transition-colors">Wesprzyj nas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>ul. Przykładowa 12<br/>82-500 Kwidzyn</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+48 123 456 789</span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>kontakt@akwedukt.org.pl</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Śledź nas</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-stone-400 hover:text-white transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              {/* TikTok icon placeholder */}
              <a href="#" className="text-stone-400 hover:text-white transition-colors flex items-center justify-center w-6 h-6">
                <span className="sr-only">TikTok</span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-800 text-sm text-center text-stone-500">
          &copy; {new Date().getFullYear()} Stowarzyszenie Akwedukt. Wszelkie prawa zastrzeżone.
        </div>
      </div>
    </footer>
  );
}
