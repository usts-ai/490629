import React from 'react';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
  BarChart,
} from 'recharts';
import { agentsConformite, pipelineData, revenueSeries } from '../data/mockData';

const tooltipStyle = {
  background: '#002D62',
  border: 'none',
  borderRadius: 12,
  color: '#fff',
  fontSize: 12,
};

export const RevenueChart: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl bg-white border border-[#002D62]/08 shadow-xl shadow-[#002D62]/05 p-4 sm:p-6 h-full"
  >
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Performance</p>
        <h3 className="text-lg sm:text-xl font-bold text-[#002D62]">Chiffre d&apos;affaires & devis</h3>
      </div>
      <p className="text-xs text-[#333333]/60">8 derniers mois</p>
    </div>
    <div className="h-56 sm:h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={revenueSeries} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
          <defs>
            <linearGradient id="caGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00AEEF" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#00AEEF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="devisGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2E7D32" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#2E7D32" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#002D62" strokeOpacity={0.08} />
          <XAxis dataKey="mois" tick={{ fill: '#333333', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#333333', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Area type="monotone" dataKey="ca" name="CA" stroke="#00AEEF" strokeWidth={2.5} fill="url(#caGrad)" />
          <Area type="monotone" dataKey="devis" name="Devis" stroke="#2E7D32" strokeWidth={2.5} fill="url(#devisGrad)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);

export const PipelineChart: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="rounded-2xl bg-white border border-[#002D62]/08 shadow-xl shadow-[#002D62]/05 p-4 sm:p-6 h-full"
  >
    <div className="mb-4">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Pipeline</p>
      <h3 className="text-lg sm:text-xl font-bold text-[#002D62]">Répartition commerciale</h3>
    </div>
    <div className="h-56 sm:h-64 w-full flex items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pipelineData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={52}
            outerRadius={80}
            paddingAngle={4}
            stroke="none"
          >
            {pipelineData.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-1">
      {pipelineData.map((item) => (
        <div key={item.name} className="flex items-center gap-2 text-xs text-[#333333]/80">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
          {item.name}
          <span className="ml-auto font-semibold text-[#002D62]">{item.value}</span>
        </div>
      ))}
    </div>
  </motion.div>
);

export const ConformiteChart: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="rounded-2xl bg-white border border-[#002D62]/08 shadow-xl shadow-[#002D62]/05 p-4 sm:p-6 h-full"
  >
    <div className="mb-4">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00AEEF] font-semibold">Agents</p>
      <h3 className="text-lg sm:text-xl font-bold text-[#002D62]">Score de conformité</h3>
    </div>
    <div className="h-56 sm:h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={agentsConformite} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#002D62" strokeOpacity={0.08} vertical={false} />
          <XAxis dataKey="nom" tick={{ fill: '#333333', fontSize: 10 }} axisLine={false} tickLine={false} interval={0} angle={-18} textAnchor="end" height={50} />
          <YAxis domain={[0, 100]} tick={{ fill: '#333333', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={tooltipStyle} />
          <Bar dataKey="score" name="Score" radius={[8, 8, 0, 0]}>
            {agentsConformite.map((entry) => (
              <Cell key={entry.nom} fill={entry.score >= 90 ? '#2E7D32' : entry.score >= 85 ? '#00AEEF' : '#FFA726'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  </motion.div>
);
