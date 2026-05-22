import { motion } from 'framer-motion';

export const RadarVisualizer = () => {
  return (
    <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-hidden bg-slate-900/40 rounded-xl border border-purple-500/30 backdrop-blur-md shadow-[inset_0_0_30px_rgba(168,85,247,0.1)] group">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05)_0%,transparent_70%)]" />

      {/* Crosshairs */}
      <div className="absolute w-full h-[1px] bg-purple-500/20" />
      <div className="absolute h-full w-[1px] bg-purple-500/20" />

      {/* Radar Rings */}
      {[...Array(4)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full border border-purple-500/20"
          style={{
            width: `${(i + 1) * 22}%`,
            height: `${(i + 1) * 22}%`
          }}
        />
      ))}

      {/* Sweeper */}
      <motion.div 
        className="absolute w-1/2 h-1/2 left-0 top-0 origin-bottom-right"
        style={{ 
          background: 'conic-gradient(from 180deg at 100% 100%, transparent 0deg, rgba(168, 85, 247, 0.3) 90deg, transparent 90deg)',
          borderRight: '2px solid rgba(168, 85, 247, 0.8)'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />

      {/* Anomalous Blips */}
      <motion.div 
        className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_12px_#ef4444]"
        style={{ top: '25%', left: '60%' }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.3, 1], delay: 1 }}
      />
      
      <motion.div 
        className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]"
        style={{ top: '65%', left: '30%' }}
        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.7, 1], delay: 0.5 }}
      />

      <div className="absolute top-3 left-4 text-[10px] text-purple-400/60 font-mono tracking-widest">
        SECTOR: OMEGA-7
      </div>
    </div>
  );
};
