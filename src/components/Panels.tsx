import React from 'react';
import { motion } from 'framer-motion';
import { activites, alertes, clients, factures } from '../data/mockData';

const prioriteStyle: Record<string, string> = {
  haute: 'border-l-[#E53935] bg-[#E53935]/05',
  moyenne: 'border-l-[#FFA726] bg-[#FFA726]/05',
  basse: 'border-l-[#00AEEF] bg-[#00AEEF]/05',
};

const factureStyle: Record<string, string> = {
  Payée: 'bg-[#2E7D32]/15 text-[#2E7D32]',
  'En retard': 'bg-[#E53935]/15 text-[#E53935]',
  Acompte: 'bg-[#FFA726]/20 text-[#E65100]',
  'En attente': 'bg-[#00AEEF]/15 text-[#0077A8]',
};

export const AlertsPanel: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="rounded-2xl bg-white border border-[#002D62]/08 shadow-xl shadow-[#002D62]/05 p-4 sm:p-6 h-full"
  >
    <div className="mb-4">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Temps réel</p>
      <h3 className="text-lg sm:text-xl font-bold text-[#002D62]">Alertes & relances</h3>
    </div>
    <div className="space-y-3">
      {alertes.map((a, i) => (
        <motion.div
          key={a.id}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07 }}
          whileHover={{ scale: 1.01, x: 4 }}
          className={`border-l-4 rounded-xl px-3 py-3 ${prioriteStyle[a.priorite]}`}
        >
          <p className="text-[10px] uppercase tracking-wider font-semibold text-[#002D62]/50 mb-1">{a.type}</p>
          <p className="text-sm text-[#333333] leading-snug">{a.texte}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const ClientsPanel: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="rounded-2xl bg-white border border-[#002D62]/08 shadow-xl shadow-[#002D62]/05 p-4 sm:p-6"
  >
    <div className="mb-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Portefeuille</p>
      <h3 className="text-lg sm:text-xl font-bold text-[#002D62]">Clients & agents</h3>
    </div>
    <div className="space-y-3">
      {clients.map((c, i) => (
        <motion.div
          key={c.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ x: 4 }}
          className="flex items-center gap-3 sm:gap-4 p-3 rounded-2xl bg-[#F7FAFC] border border-[#002D62]/05"
        >
          <img
            src={c.image}
            alt={c.nom}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl object-cover"
            loading="lazy"
          />
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-[#002D62] truncate">{c.nom}</p>
            <p className="text-xs text-[#333333]/65 truncate">Agent : {c.agent}</p>
            <p className="text-[11px] text-[#00AEEF] font-medium mt-0.5">{c.contrat}</p>
          </div>
          <div className="text-right shrink-0">
            <p className="text-lg font-bold text-[#2E7D32]">{c.conformite}%</p>
            <p className="text-[10px] text-[#333333]/50">conformité</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

export const FacturesPanel: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="rounded-2xl bg-white border border-[#002D62]/08 shadow-xl shadow-[#002D62]/05 p-4 sm:p-6 overflow-hidden"
  >
    <div className="mb-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Trésorerie</p>
      <h3 className="text-lg sm:text-xl font-bold text-[#002D62]">Suivi des factures</h3>
    </div>
    <div className="overflow-x-auto -mx-1 px-1">
      <table className="w-full min-w-[520px] text-left">
        <thead>
          <tr className="text-[11px] uppercase tracking-wider text-[#002D62]/45">
            <th className="pb-3 font-semibold">Réf.</th>
            <th className="pb-3 font-semibold">Client</th>
            <th className="pb-3 font-semibold">Montant</th>
            <th className="pb-3 font-semibold">Échéance</th>
            <th className="pb-3 font-semibold">Statut</th>
          </tr>
        </thead>
        <tbody>
          {factures.map((f, i) => (
            <motion.tr
              key={f.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border-t border-[#002D62]/06 text-sm hover:bg-[#F7FAFC] transition-colors"
            >
              <td className="py-3 font-medium text-[#002D62]">{f.id}</td>
              <td className="py-3 text-[#333333]">{f.client}</td>
              <td className="py-3 font-semibold text-[#002D62]">{f.montant}</td>
              <td className="py-3 text-[#333333]/70">{f.echeance}</td>
              <td className="py-3">
                <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${factureStyle[f.statut]}`}>
                  {f.statut}
                </span>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

export const ActivityFeed: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.55 }}
    className="rounded-2xl bg-gradient-to-br from-[#002D62] to-[#001a3a] text-white shadow-xl shadow-[#002D62]/25 p-4 sm:p-6 h-full"
  >
    <div className="mb-5">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Journal</p>
      <h3 className="text-lg sm:text-xl font-bold">Activité du jour</h3>
    </div>
    <div className="relative space-y-4 pl-4">
      <div className="absolute left-[7px] top-1 bottom-1 w-px bg-white/15" />
      {activites.map((a, i) => (
        <motion.div
          key={a.id}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="relative pl-5"
        >
          <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#00AEEF] ring-4 ring-[#00AEEF]/20" />
          <p className="text-[11px] text-[#00AEEF] font-semibold mb-0.5">{a.heure}</p>
          <p className="text-sm text-white/85 leading-snug">{a.texte}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
);
