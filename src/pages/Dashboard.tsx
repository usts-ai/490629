import React, { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatCard from '../components/StatCard';
import { ConformiteChart, PipelineChart, RevenueChart } from '../components/Charts';
import ProspectsPanel from '../components/ProspectsPanel';
import { ActivityFeed, AlertsPanel, ClientsPanel, FacturesPanel } from '../components/Panels';
import { kpis } from '../data/mockData';

const Dashboard: React.FC = () => {
  const [section, setSection] = useState('vue');
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.35]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const handleNavigate = (id: string) => {
    setSection(id);
    const el = document.getElementById('dashboard-content');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div id="top" className="min-h-screen bg-[#F0F4F8] text-[#333333] overflow-x-hidden">
      <Header active={section} onNavigate={handleNavigate} />

      <section ref={heroRef} className="relative pt-24 md:pt-28 pb-10 md:pb-16 overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=1600&q=80"
            alt="Surveillance et sécurité"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#002D62]/92 via-[#002D62]/78 to-[#001a3a]/88" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,174,239,0.25),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(46,125,50,0.2),transparent_40%)]" />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#00AEEF] font-semibold mb-4"
              >
                <span className="w-2 h-2 rounded-full bg-[#2E7D32] animate-pulse" />
                CRM sécurité privée
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight"
              >
                Pilotez votre activité
                <span className="block bg-gradient-to-r from-[#00AEEF] via-white to-[#92FE9D] bg-clip-text text-transparent">
                  en toute sérénité
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-5 max-w-xl text-sm sm:text-base text-white/75 leading-relaxed"
              >
                Dashboard interactif pour suivre prospects, contrats, facturation et conformité des agents — pensé pour ordinateur et téléphone.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.52 }}
                className="mt-7 flex flex-wrap gap-3"
              >
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavigate('pipeline')}
                  className="rounded-full bg-[#00AEEF] text-white px-5 py-2.5 text-sm font-semibold shadow-lg shadow-[#00AEEF]/30"
                >
                  Voir le pipeline
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleNavigate('facturation')}
                  className="rounded-full border border-white/30 text-white px-5 py-2.5 text-sm font-semibold backdrop-blur-sm hover:bg-white/10"
                >
                  Relances & factures
                </motion.button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-white/10 backdrop-blur-xl p-4 sm:p-5 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1582139329536-e7284fece509?w=900&q=80"
                  alt="Agent de sécurité"
                  className="w-full h-44 sm:h-52 object-cover rounded-2xl"
                />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: 'Contrats', value: '52' },
                    { label: 'Relances', value: '7' },
                    { label: 'Agents OK', value: '94%' },
                  ].map((item) => (
                    <div key={item.label} className="rounded-xl bg-[#002D62]/50 border border-white/10 p-3 text-center">
                      <p className="text-lg sm:text-xl font-bold text-white">{item.value}</p>
                      <p className="text-[10px] text-white/60 uppercase tracking-wider">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <main id="dashboard-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 md:-mt-6 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {kpis.map((kpi, i) => (
            <StatCard
              key={kpi.id}
              label={kpi.label}
              value={kpi.value}
              delta={kpi.delta}
              tone={kpi.tone}
              delay={0.1 + i * 0.08}
            />
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-3 mb-5 scrollbar-thin">
          {[
            { id: 'vue', label: 'Vue globale' },
            { id: 'pipeline', label: 'Pipeline' },
            { id: 'facturation', label: 'Facturation' },
            { id: 'conformite', label: 'Conformité' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSection(tab.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                section === tab.id
                  ? 'bg-[#002D62] text-white shadow-lg shadow-[#002D62]/25'
                  : 'bg-white text-[#002D62]/70 border border-[#002D62]/10 hover:border-[#00AEEF]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {section === 'vue' && (
            <motion.div
              key="vue"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
                <div className="lg:col-span-3">
                  <RevenueChart />
                </div>
                <div className="lg:col-span-2">
                  <PipelineChart />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
                <div className="lg:col-span-3">
                  <ProspectsPanel />
                </div>
                <div className="lg:col-span-2 space-y-5 sm:space-y-6">
                  <AlertsPanel />
                  <ActivityFeed />
                </div>
              </div>
            </motion.div>
          )}

          {section === 'pipeline' && (
            <motion.div
              key="pipeline"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                <PipelineChart />
                <ClientsPanel />
              </div>
              <ProspectsPanel />
            </motion.div>
          )}

          {section === 'facturation' && (
            <motion.div
              key="facturation"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
                <div className="lg:col-span-3">
                  <FacturesPanel />
                </div>
                <div className="lg:col-span-2">
                  <AlertsPanel />
                </div>
              </div>
              <RevenueChart />
            </motion.div>
          )}

          {section === 'conformite' && (
            <motion.div
              key="conformite"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="space-y-5 sm:space-y-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                <ConformiteChart />
                <ClientsPanel />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
                <ActivityFeed />
                <AlertsPanel />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
