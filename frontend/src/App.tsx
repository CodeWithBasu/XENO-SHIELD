import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

import { ThreatMeter } from './components/ThreatMeter';
import { TrafficGraph } from './components/TrafficGraph';
import { AlertConsole } from './components/AlertConsole';
import { RadarVisualizer } from './components/RadarVisualizer';
import { StatsPanel } from './components/StatsPanel';

function App() {
  return (
    <div className="min-h-screen bg-[#050510] text-emerald-400 p-6 font-mono selection:bg-emerald-500/30 overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-[#050510] to-[#050510]" />
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative flex justify-between items-center mb-8 border-b border-emerald-500/20 pb-6 z-10"
      >
        <div className="flex items-center gap-4">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-950/50 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Shield className="text-emerald-400" size={24} />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]">
              XENO-SHIELD
            </h1>
            <p className="text-emerald-500/60 text-xs tracking-widest mt-1">ALIEN INTRUSION DETECTION SYSTEM</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 text-sm tracking-widest border border-emerald-500/30 px-3 py-1 rounded bg-emerald-950/50">SYSTEM ACTIVE</span>
          </div>
          <div className="text-xs text-emerald-600/70 font-bold tracking-widest">v1.0.0-PROD</div>
        </div>
      </motion.header>

      {/* Main Grid Layout */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)]">
        
        {/* Left Column */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-3 flex flex-col gap-6 h-full"
        >
          <ThreatMeter />
          <div className="flex-1">
            <AlertConsole />
          </div>
        </motion.div>

        {/* Center Column */}
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-6 flex flex-col gap-6 h-full"
        >
          <div className="flex-1">
            <RadarVisualizer />
          </div>
          <div className="h-[300px]">
            <TrafficGraph />
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="lg:col-span-3 flex flex-col gap-6 h-full"
        >
          <div className="flex-1">
             {/* Future module space */}
             <div className="h-full rounded-xl bg-slate-900/40 border border-slate-700/50 flex items-center justify-center opacity-50 border-dashed">
                <span className="text-slate-500 text-xs tracking-widest font-mono">CONNECTION ESTABLISHING...</span>
             </div>
          </div>
          <div className="h-[250px]">
             <StatsPanel />
          </div>
        </motion.div>

      </main>
    </div>
  );
}

export default App;
