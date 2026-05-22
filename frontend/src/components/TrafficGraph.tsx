import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { time: '00:00', incoming: 4000, outgoing: 2400 },
  { time: '00:05', incoming: 3000, outgoing: 1398 },
  { time: '00:10', incoming: 2000, outgoing: 9800 },
  { time: '00:15', incoming: 2780, outgoing: 3908 },
  { time: '00:20', incoming: 1890, outgoing: 4800 },
  { time: '00:25', incoming: 2390, outgoing: 3800 },
  { time: '00:30', incoming: 3490, outgoing: 4300 },
];

export const TrafficGraph = () => {
  return (
    <div className="p-6 rounded-xl bg-slate-900/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.05)] h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-cyan-400 font-mono tracking-widest text-sm">
          NETWORK TRAFFIC ANALYZER
        </h2>
        <div className="flex gap-4 text-[10px] font-mono text-cyan-400/60">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_5px_#22d3ee]"></span> INCOMING</span>
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_5px_#a855f7]"></span> OUTGOING</span>
        </div>
      </div>

      <div className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#22d3ee" opacity={0.1} vertical={false} />
            <XAxis dataKey="time" stroke="#22d3ee" opacity={0.5} fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#22d3ee" opacity={0.5} fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(34, 211, 238, 0.3)', borderRadius: '8px' }}
              itemStyle={{ color: '#22d3ee', fontSize: '12px' }}
              labelStyle={{ color: '#94a3b8', fontSize: '10px', marginBottom: '4px' }}
            />
            <Area type="monotone" dataKey="incoming" stroke="#22d3ee" strokeWidth={2} fillOpacity={1} fill="url(#colorIn)" />
            <Area type="monotone" dataKey="outgoing" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorOut)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3 text-xs font-mono text-cyan-400/80">
        <div className="bg-cyan-950/40 p-2 rounded border border-cyan-500/20 text-center">PKTS: 12.4k</div>
        <div className="bg-cyan-950/40 p-2 rounded border border-cyan-500/20 text-center">BW: 45 MB/s</div>
        <div className="bg-cyan-950/40 p-2 rounded border border-cyan-500/20 text-center">LAT: 12ms</div>
      </div>
    </div>
  );
};
