import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type StatCardProps = {
  label: string;
  value: number;
  delta: string;
  tone: string;
  delay?: number;
};

const toneStyles: Record<string, string> = {
  info: 'from-[#00AEEF]/20 to-[#002D62]/10 border-[#00AEEF]/30',
  success: 'from-[#2E7D32]/20 to-[#002D62]/10 border-[#2E7D32]/30',
  warning: 'from-[#FFA726]/20 to-[#002D62]/10 border-[#FFA726]/40',
  danger: 'from-[#E53935]/20 to-[#002D62]/10 border-[#E53935]/30',
};

const accent: Record<string, string> = {
  info: 'text-[#00AEEF]',
  success: 'text-[#2E7D32]',
  warning: 'text-[#FFA726]',
  danger: 'text-[#E53935]',
};

const StatCard: React.FC<StatCardProps> = ({ label, value, delta, tone, delay = 0 }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frame = 0;
    const steps = 28;
    const tick = () => {
      frame += 1;
      setDisplay(Math.round((value * frame) / steps));
      if (frame < steps) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br ${toneStyles[tone] || toneStyles.info} backdrop-blur-md p-5 shadow-xl shadow-black/5`}
    >
      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/10 blur-2xl" />
      <p className="text-xs sm:text-sm text-[#333333]/70 font-medium mb-2">{label}</p>
      <div className="flex items-end justify-between gap-3">
        <p className="text-3xl sm:text-4xl font-bold text-[#002D62] tracking-tight">{display}</p>
        <span className={`text-xs sm:text-sm font-semibold ${accent[tone] || accent.info}`}>{delta}</span>
      </div>
      <div className="mt-4 h-1.5 rounded-full bg-[#002D62]/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${Math.min(100, 40 + value / 2)}%` }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className={`h-full rounded-full ${
            tone === 'success'
              ? 'bg-[#2E7D32]'
              : tone === 'warning'
              ? 'bg-[#FFA726]'
              : tone === 'danger'
              ? 'bg-[#E53935]'
              : 'bg-[#00AEEF]'
          }`}
        />
      </div>
    </motion.div>
  );
};

export default StatCard;
