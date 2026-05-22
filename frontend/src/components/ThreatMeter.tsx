import { motion } from 'framer-motion';
import { AlertOctagon } from 'lucide-react';

export const ThreatMeter = () => {
  return (
    <div className="relative p-6 rounded-2xl glass-panel overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500/0 via-red-500 to-red-500/0 opacity-60" />
      <div className="absolute inset-0 bg-red-900/5" />
      
      <div className="relative flex justify-between items-center mb-8">
        <h2 className="text-slate-400 tracking-[0.2em] text-[10px] font-bold flex items-center gap-2">
          <AlertOctagon size={14} className="text-red-500" />
          THREAT LEVEL
        </h2>
        <motion.div 
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-2 py-0.5 rounded-sm bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] font-bold tracking-widest"
        >
          CRITICAL
        </motion.div>
      </div>

      <div className="relative flex flex-col items-center justify-center py-6">
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Pulsing rings */}
          <motion.div 
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-red-500"
          />
          <motion.div 
            animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 2.5, delay: 0.3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full border border-red-500"
          />
          
          <div className="w-28 h-28 rounded-full bg-red-950/40 border border-red-500/30 flex items-center justify-center backdrop-blur-md shadow-[inset_0_0_20px_rgba(239,68,68,0.2)]">
            <span className="text-5xl font-light tracking-tighter text-red-500 neon-text-red">
              98<span className="text-2xl text-red-500/50">%</span>
            </span>
          </div>
        </div>
      </div>
      
      <div className="relative mt-6 grid grid-cols-4 gap-1.5 h-1.5">
        <div className="bg-emerald-500/20 rounded-l-full" />
        <div className="bg-amber-500/20" />
        <div className="bg-orange-500/40" />
        <div className="bg-red-500 shadow-[0_0_15px_red] rounded-r-full" />
      </div>
    </div>
  );
};
