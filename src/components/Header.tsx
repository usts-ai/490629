import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { id: 'vue', label: 'Vue globale' },
  { id: 'pipeline', label: 'Pipeline' },
  { id: 'facturation', label: 'Facturation' },
  { id: 'conformite', label: 'Conformité' },
];

type HeaderProps = {
  active: string;
  onNavigate: (id: string) => void;
};

const Header: React.FC<HeaderProps> = ({ active, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#002D62]/95 backdrop-blur-xl shadow-lg shadow-[#002D62]/20'
          : 'bg-gradient-to-b from-[#002D62]/90 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            type="button"
            onClick={() => onNavigate('vue')}
            className="flex items-center gap-3 group"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#00AEEF] to-[#2E7D32] shadow-lg shadow-[#00AEEF]/30">
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V7l8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
              <span className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <div className="text-left">
              <p className="text-white font-semibold tracking-wide text-sm sm:text-base leading-tight">
                GuardCRM
              </p>
              <p className="text-[#00AEEF] text-[10px] sm:text-xs tracking-[0.2em] uppercase">
                Sécurité privée
              </p>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className="relative px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
                {active === item.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-[#00AEEF] to-[#2E7D32]"
                  />
                )}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-[#002D62] px-4 py-2 text-sm font-semibold shadow-lg shadow-black/10 hover:bg-[#00AEEF] hover:text-white transition-colors"
            >
              Nouveau devis
            </motion.button>
            <button
              type="button"
              aria-label="Menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg bg-white/10"
            >
              <span className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-[#002D62]/98 border-t border-white/10"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    onNavigate(item.id);
                    setMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active === item.id
                      ? 'bg-[#00AEEF]/20 text-white'
                      : 'text-white/80 hover:bg-white/10'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
