import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export const ThreatMeter = () => {
  return (
    <div className="relative p-6 rounded-xl bg-slate-900/40 border border-red-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(239,68,68,0.05)] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 opacity-50" />
      
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-red-400 font-mono tracking-widest text-sm flex items-center gap-2">
          <AlertTriangle size={16} className="text-red-500" />
          THREAT LEVEL
        </h2>
        <motion.div 
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="px-2 py-1 rounded bg-red-500/20 border border-red-500/50 text-red-400 text-[10px] font-bold"
        >
          CRITICAL
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Pulsing rings */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-red-500"
          />
          <motion.div 
            animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2, delay: 0.2, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-red-500"
          />
          
          <div className="w-24 h-24 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center backdrop-blur-sm">
            <span className="text-4xl font-bold text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]">
              98%
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4 grid grid-cols-4 gap-1 h-2">
        <div className="bg-emerald-500/20 rounded-l-full" />
        <div className="bg-yellow-500/20" />
        <div className="bg-orange-500/20" />
        <div className="bg-red-500 shadow-[0_0_10px_red] rounded-r-full" />
      </div>
    </div>
  );
};
