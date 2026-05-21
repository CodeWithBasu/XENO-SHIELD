
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-emerald-400 p-6 font-mono selection:bg-emerald-500/30">
      {/* Header */}
      <header className="flex justify-between items-center mb-8 border-b border-emerald-500/50 pb-4 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_#10b981]"></div>
          <h1 className="text-4xl font-bold tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
            XENO-SHIELD
          </h1>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="px-3 py-1 border border-emerald-500/30 rounded bg-emerald-500/10 backdrop-blur-sm">
            STATUS: <span className="text-emerald-300 font-bold animate-pulse">ACTIVE</span>
          </div>
          <div className="text-xs text-emerald-600/70">v1.0.0-ALPHA</div>
        </div>
      </header>

      {/* Main Grid Layout */}
      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Threat Meter Module */}
        <div className="col-span-1 border border-emerald-500/30 p-4 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-lg shadow-emerald-500/5">
          <h2 className="text-emerald-300 text-lg mb-4 border-b border-emerald-500/20 pb-2 flex justify-between">
            THREAT LEVEL
            <span className="text-xs bg-red-500/20 text-red-300 px-2 py-0.5 rounded">HIGH</span>
          </h2>
          <div className="h-40 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent"></div>
            <span className="text-4xl font-bold text-red-500 animate-pulse">CRITICAL</span>
          </div>
        </div>

        {/* Traffic Monitor (Main Visual) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 border border-emerald-500/30 p-4 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-lg shadow-emerald-500/5">
          <h2 className="text-cyan-300 text-lg mb-4 border-b border-cyan-500/20 pb-2">
            NETWORK TRAFFIC ANALYZER
          </h2>
          <div className="h-40 flex items-center justify-center border border-dashed border-emerald-500/20 rounded bg-black/20">
            <span className="text-emerald-500/50">[ Live Waveform Visualization Area ]</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-emerald-400/70">
            <div className="bg-emerald-500/5 p-2 rounded">PKTS: 12,405</div>
            <div className="bg-emerald-500/5 p-2 rounded">BANDWIDTH: 45 MB/s</div>
            <div className="bg-emerald-500/5 p-2 rounded">LATENCY: 12ms</div>
          </div>
        </div>

        {/* Alert Console */}
        <div className="col-span-1 border border-emerald-500/30 p-4 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-lg shadow-emerald-500/5 overflow-hidden">
          <h2 className="text-amber-300 text-lg mb-4 border-b border-amber-500/20 pb-2">
            ALERT CONSOLE
          </h2>
          <div className="h-40 overflow-y-auto text-xs space-y-2 font-mono scrollbar-thin scrollbar-thumb-emerald-500/20">
            <div className="text-red-400 p-1 hover:bg-red-500/10 cursor-pointer border-l-2 border-red-500 pl-2">
              [CRITICAL] DDOS attack detected from 192.168.4.22
            </div>
            <div className="text-amber-400 p-1 hover:bg-amber-500/10 cursor-pointer border-l-2 border-amber-500 pl-2">
              [WARN] Port scan detected on port 8080
            </div>
            <div className="text-emerald-400/60 p-1 border-l-2 border-emerald-500/30 pl-2">
              [INFO] System startup checks complete
            </div>
            <div className="text-emerald-400/60 p-1 border-l-2 border-emerald-500/30 pl-2">
              [INFO] Firewall rules updated
            </div>
          </div>
        </div>

        {/* Attack Radar (Details from Readme) */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 border border-emerald-500/30 p-4 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-lg shadow-emerald-500/5">
             <h2 className="text-purple-300 text-lg mb-4 border-b border-purple-500/20 pb-2">
            ATTACK RADAR
          </h2>
           <div className="h-48 flex items-center justify-center border border-dashed border-purple-500/20 rounded bg-black/20">
            <span className="text-purple-500/50">[ Radar SVG / Canvas Area ]</span>
          </div>
        </div>

         {/* Stats Panel */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 border border-emerald-500/30 p-4 rounded-xl bg-slate-900/50 backdrop-blur-md shadow-lg shadow-emerald-500/5">
             <h2 className="text-blue-300 text-lg mb-4 border-b border-blue-500/20 pb-2">
            SYSTEM HEALTH
          </h2>
          <div className="grid grid-cols-2 gap-4">
             <div className="space-y-1">
                <div className="flex justify-between text-xs text-blue-300"><span>CPU Usage</span><span>45%</span></div>
                <div className="h-1.5 bg-blue-900/40 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[45%]"></div>
                </div>
             </div>
             <div className="space-y-1">
                <div className="flex justify-between text-xs text-blue-300"><span>Memory</span><span>62%</span></div>
                 <div className="h-1.5 bg-blue-900/40 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[62%]"></div>
                </div>
             </div>
             <div className="space-y-1">
                <div className="flex justify-between text-xs text-blue-300"><span>Network Load</span><span>88%</span></div>
                 <div className="h-1.5 bg-blue-900/40 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[88%]"></div>
                </div>
             </div>
             <div className="space-y-1">
                <div className="flex justify-between text-xs text-blue-300"><span>Storage</span><span>22%</span></div>
                 <div className="h-1.5 bg-blue-900/40 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-[22%]"></div>
                </div>
             </div>
          </div>
        </div>

      </main>
    </div>
  )
}

export default App
