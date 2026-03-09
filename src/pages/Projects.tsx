import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Folder, FolderOpen, ExternalLink } from 'lucide-react';

type ProjectCategory = 'Lokalne' | 'Międzynarodowe' | 'Archiwum';

const projects = [
  { id: 1, title: 'Kompas – Koalicja na rzecz Młodzieży', category: 'Lokalne', description: 'Wsparcie młodzieżowych rad i inicjatyw w powiecie kwidzyńskim.', year: '2023-2024' },
  { id: 2, title: 'Dzień Młodzieży', category: 'Lokalne', description: 'Coroczne święto młodzieży z warsztatami, koncertami i debatami.', year: '2023' },
  { id: 3, title: 'Efekt WOW!', category: 'Lokalne', description: 'Cykl szkoleń dla liderów młodzieżowych z zakresu wystąpień publicznych.', year: '2022' },
  { id: 4, title: 'KFIM', category: 'Lokalne', description: 'Kwidzyńskie Forum Inicjatyw Młodzieżowych.', year: '2021' },
  { id: 5, title: 'Lokalnie? Totalnie!', category: 'Lokalne', description: 'Aktywizacja młodzieży z terenów wiejskich.', year: '2020' },
  { id: 6, title: 'GivEUvoice', category: 'Międzynarodowe', description: 'Projekt promujący aktywność obywatelską młodych Europejczyków przed wyborami do PE.', year: '2023-2024' },
  { id: 7, title: 'Youth for Climate', category: 'Międzynarodowe', description: 'Wymiana młodzieżowa poświęcona zmianom klimatycznym.', year: '2022' },
  { id: 8, title: 'Starszy Projekt 1', category: 'Archiwum', description: 'Zakończona inicjatywa edukacyjna.', year: '2018' },
  { id: 9, title: 'Starszy Projekt 2', category: 'Archiwum', description: 'Wymiana międzynarodowa z Ukrainą.', year: '2017' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Lokalne');

  const filteredProjects = projects.filter(p => p.category === activeCategory);

  return (
    <div className="py-12 md:py-24 bg-stone-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-stone-900 mb-6"
          >
            Baza Projektów
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-stone-600"
          >
            Portfolio naszych działań grantowych. Zobacz, jakie inicjatywy realizujemy dzięki wsparciu partnerów.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['Lokalne', 'Międzynarodowe', 'Archiwum'] as ProjectCategory[]).map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${
                activeCategory === category
                  ? 'bg-stone-900 text-white'
                  : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 bg-stone-100 rounded-xl flex items-center justify-center text-stone-500">
                    {activeCategory === 'Archiwum' ? <Folder className="w-5 h-5" /> : <FolderOpen className="w-5 h-5 text-emerald-600" />}
                  </div>
                  <span className="text-xs font-semibold text-stone-400 bg-stone-100 px-2 py-1 rounded-md">
                    {project.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-stone-900 mb-2">{project.title}</h3>
                <p className="text-sm text-stone-600 mb-6 flex-grow">{project.description}</p>
                <button className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 mt-auto">
                  Szczegóły projektu <ExternalLink className="ml-1 w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
