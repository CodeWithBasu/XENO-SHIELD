import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export const StatsPanel = () => {
  const stats = [
    { label: 'CPU Usage', value: 45, color: 'bg-blue-500' },
    { label: 'Memory', value: 62, color: 'bg-indigo-500' },
    { label: 'Network Load', value: 88, color: 'bg-cyan-500' },
    { label: 'Storage', value: 22, color: 'bg-sky-500' },
  ];

  return (
    <div className="p-6 rounded-xl bg-slate-900/40 border border-blue-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.05)] h-full">
      <h2 className="text-blue-400 font-mono tracking-widest text-sm mb-6 flex items-center gap-2">
        <Activity size={16} />
        SYSTEM HEALTH
      </h2>
      
      <div className="grid grid-cols-2 gap-x-6 gap-y-8">
        {stats.map((stat, i) => (
          <div key={stat.label} className="space-y-2">
            <div className="flex justify-between text-xs font-mono text-blue-200/80">
              <span>{stat.label}</span>
              <span className="text-blue-400">{stat.value}%</span>
            </div>
            <div className="h-1.5 bg-blue-950/50 rounded-full overflow-hidden border border-blue-900/50">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${stat.value}%` }}
                transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                className={`h-full ${stat.color} shadow-[0_0_10px_rgba(59,130,246,0.8)]`} 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
