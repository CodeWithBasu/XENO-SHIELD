import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Activity, Radio, Cpu } from 'lucide-react';

import { ThreatMeter } from './components/ThreatMeter';
import { TrafficGraph } from './components/TrafficGraph';
import { AlertConsole } from './components/AlertConsole';
import { RadarVisualizer } from './components/RadarVisualizer';
import { StatsPanel } from './components/StatsPanel';

function App() {
  return (
    <div className="min-h-screen bg-[#030308] text-slate-300 p-4 lg:p-8 font-['Space_Grotesk'] selection:bg-cyan-500/30 overflow-hidden relative">
      
      {/* Premium Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-red-900/10 blur-[100px]" />
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>
      
      {/* Header */}
      <motion.header 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex justify-between items-center mb-8 z-10 glass-panel rounded-2xl p-4 lg:px-8"
      >
        <div className="flex items-center gap-6">
          <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-white/10 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
            <Shield className="text-cyan-400" size={28} strokeWidth={1.5} />
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/30 blur-[2px]" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400 neon-text-cyan">
              XENO-SHIELD
            </h1>
            <div className="flex items-center gap-3 mt-1 text-xs tracking-[0.2em] text-cyan-400/60 font-medium">
              <span className="flex items-center gap-1"><Radio size={12}/> OMEGA-7</span>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <span>IDS-PROTOCOL_V2</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <div className="hidden lg:flex items-center gap-6 mr-4 border-r border-white/10 pr-8">
             <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 tracking-widest">SERVER LOAD</span>
                <span className="text-sm font-semibold text-white">24.2%</span>
             </div>
             <div className="flex flex-col items-end">
                <span className="text-[10px] text-slate-500 tracking-widest">ACTIVE NODES</span>
                <span className="text-sm font-semibold text-white">1,042</span>
             </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-cyan-950/30 border border-cyan-500/20">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-full w-full bg-cyan-500"></span>
            </div>
            <span className="text-cyan-400 text-xs font-semibold tracking-widest">SYSTEM ONLINE</span>
          </div>
        </div>
      </motion.header>

      {/* Main Grid Layout */}
      <main className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[calc(100vh-160px)]">
        
        {/* Left Column */}
        <motion.div 
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          <ThreatMeter />
          <div className="flex-1 min-h-[300px]">
            <AlertConsole />
          </div>
        </motion.div>

        {/* Center Column */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col gap-6"
        >
          <div className="flex-1 min-h-[400px]">
            <RadarVisualizer />
          </div>
          <div className="h-[280px]">
            <TrafficGraph />
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          <div className="flex-1 min-h-[250px] glass-panel rounded-2xl p-6 relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="flex items-center gap-3 mb-6">
                <Cpu className="text-purple-400" size={18} />
                <h2 className="text-xs font-bold tracking-widest text-slate-400">AI KERNEL STATUS</h2>
             </div>
             <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between">
                   <span className="text-xs text-slate-500">ISOLATION FOREST</span>
                   <span className="text-xs text-emerald-400 font-semibold">ACTIVE</span>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between">
                   <span className="text-xs text-slate-500">K-MEANS CLUSTERING</span>
                   <span className="text-xs text-emerald-400 font-semibold">ACTIVE</span>
                </div>
                <div className="p-4 rounded-xl bg-black/20 border border-white/5 flex items-center justify-between">
                   <span className="text-xs text-slate-500">DEEP NEURAL NET</span>
                   <span className="text-xs text-amber-400 font-semibold animate-pulse">TRAINING</span>
                </div>
             </div>
          </div>
          <div className="h-[280px]">
             <StatsPanel />
          </div>
        </motion.div>

      </main>
    </div>
  );
}

export default App;
