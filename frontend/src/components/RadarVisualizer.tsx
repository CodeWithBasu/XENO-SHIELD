import { motion } from 'framer-motion';

export const RadarVisualizer = () => {
  return (
    <div className="relative w-full h-full min-h-[250px] flex items-center justify-center overflow-hidden glass-panel rounded-2xl group">
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.05)_0%,transparent_70%)]" />

      {/* Crosshairs */}
      <div className="absolute w-full h-[1px] bg-cyan-500/10" />
      <div className="absolute h-full w-[1px] bg-cyan-500/10" />

      {/* Radar Rings */}
      {[...Array(4)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full border border-cyan-500/10"
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
          background: 'conic-gradient(from 180deg at 100% 100%, transparent 0deg, rgba(34, 211, 238, 0.2) 90deg, transparent 90deg)',
          borderRight: '2px solid rgba(34, 211, 238, 0.6)'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />

      {/* Anomalous Blips */}
      <motion.div 
        className="absolute w-2 h-2 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444]"
        style={{ top: '35%', left: '60%' }}
        animate={{ opacity: [0, 1, 0], scale: [0.8, 2, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.4, 1], delay: 1 }}
      />
      
      <motion.div 
        className="absolute w-1.5 h-1.5 bg-fuchsia-400 rounded-full shadow-[0_0_10px_#e879f9]"
        style={{ top: '65%', left: '30%' }}
        animate={{ opacity: [0, 1, 0], scale: [0.8, 1.5, 0.8] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.8, 1], delay: 0.5 }}
      />

      <div className="absolute top-4 left-6 text-[10px] text-cyan-400/50 tracking-widest font-medium">
        ACTIVE SCANNING...
      </div>
    </div>
  );
};
