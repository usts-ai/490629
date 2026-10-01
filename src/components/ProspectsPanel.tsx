import React from 'react';
import { motion } from 'framer-motion';
import { prospects } from '../data/mockData';

const statutColor: Record<string, string> = {
  Chaud: 'bg-[#E53935]/15 text-[#E53935]',
  Négociation: 'bg-[#FFA726]/20 text-[#E65100]',
  Nouveau: 'bg-[#00AEEF]/15 text-[#0077A8]',
};

const ProspectsPanel: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="rounded-2xl bg-white border border-[#002D62]/08 shadow-xl shadow-[#002D62]/05 p-4 sm:p-6"
    >
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Commercial</p>
          <h3 className="text-lg sm:text-xl font-bold text-[#002D62]">Prospects prioritaires</h3>
        </div>
        <span className="text-xs font-semibold text-[#002D62]/60 bg-[#002D62]/05 px-3 py-1.5 rounded-full">
          {prospects.length} actifs
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {prospects.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-[#002D62]/08 bg-[#F7FAFC]"
          >
            <div className="h-28 overflow-hidden">
              <img
                src={p.image}
                alt={p.nom}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-t from-[#002D62]/70 to-transparent" />
            </div>
            <div className="relative -mt-8 px-4 pb-4">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <p className="text-[10px] text-white/80 font-medium">{p.id}</p>
                  <h4 className="text-sm font-bold text-white drop-shadow">{p.nom}</h4>
                </div>
                <span className={`mt-6 text-[10px] font-semibold px-2 py-1 rounded-full ${statutColor[p.statut] || 'bg-gray-100 text-gray-700'}`}>
                  {p.statut}
                </span>
              </div>
              <div className="mt-3 space-y-1 text-xs text-[#333333]/75">
                <p>Contact : <span className="font-medium text-[#002D62]">{p.contact}</span></p>
                <p>Site : {p.site}</p>
                <p className="pt-1 text-sm font-bold text-[#2E7D32]">{p.montant}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
};

export default ProspectsPanel;
