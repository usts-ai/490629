import React from 'react';
import { motion } from 'framer-motion';

const socials = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'YouTube', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 overflow-hidden bg-[#001a3a] text-white">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#00AEEF] blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#2E7D32] blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#2E7D32]">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
                </svg>
              </span>
              <div>
                <p className="font-semibold tracking-wide">GuardCRM</p>
                <p className="text-xs text-[#00AEEF]">CRM sécurité privée</p>
              </div>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              Centralisez prospects, contrats, facturation et conformité agents dans une interface moderne pensée pour le terrain.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-[#00AEEF] mb-4">Navigation</p>
            <ul className="space-y-2">
              {['Vue globale', 'Pipeline commercial', 'Facturation', 'Conformité agents', 'Documents'].map((link) => (
                <li key={link}>
                  <motion.a
                    href="#top"
                    whileHover={{ x: 6, color: '#00AEEF' }}
                    className="inline-block text-sm text-white/75 hover:text-[#00AEEF] transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-wider uppercase text-[#00AEEF] mb-4">Réseaux & légal</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="px-4 py-2 rounded-full border border-white/15 text-xs font-medium text-white/80 hover:border-[#00AEEF] hover:text-white hover:bg-[#00AEEF]/10 transition-colors"
                >
                  {s.label}
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 text-xs text-white/55">
              <a href="#top" className="block hover:text-white transition-colors">Mentions légales</a>
              <a href="#top" className="block hover:text-white transition-colors">Politique RGPD</a>
              <a href="#top" className="block hover:text-white transition-colors">Conditions d&apos;utilisation</a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-white/50">
          <p>© 2026 GuardCRM — Prototype démonstration visuelle</p>
          <p className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
            Système opérationnel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
