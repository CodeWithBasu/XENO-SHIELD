import { motion } from 'framer-motion';
import { Server } from 'lucide-react';

export const StatsPanel = () => {
  const stats = [
    { label: 'CPU LOAD', value: 45, color: 'bg-cyan-400', shadow: 'shadow-[0_0_10px_#22d3ee]' },
    { label: 'RAM USAGE', value: 62, color: 'bg-purple-500', shadow: 'shadow-[0_0_10px_#a855f7]' },
    { label: 'NETWORK', value: 88, color: 'bg-fuchsia-400', shadow: 'shadow-[0_0_10px_#e879f9]' },
    { label: 'STORAGE', value: 22, color: 'bg-emerald-400', shadow: 'shadow-[0_0_10px_#34d399]' },
  ];

  return (
    <div className="p-6 rounded-2xl glass-panel h-full flex flex-col">
      <h2 className="text-slate-400 tracking-[0.2em] text-[10px] font-bold mb-6 flex items-center gap-2">
        <Server size={14} className="text-white" />
        SYSTEM HEALTH
      </h2>
      
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 flex-1 content-center">
        {stats.map((stat, i) => (
          <div key={stat.label} className="space-y-3">
            <div className="flex justify-between text-[10px] tracking-widest text-slate-400 font-medium">
              <span>{stat.label}</span>
              <span className="text-white">{stat.value}%</span>
            </div>
            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stat.value}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                className={`h-full ${stat.color} ${stat.shadow} rounded-full`} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
