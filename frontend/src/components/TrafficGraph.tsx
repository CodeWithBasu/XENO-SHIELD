import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { Activity } from 'lucide-react';

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
    <div className="p-6 rounded-2xl glass-panel h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-slate-400 tracking-[0.2em] text-[10px] font-bold flex items-center gap-2">
          <Activity size={14} className="text-cyan-400" />
          TRAFFIC ANALYSIS
        </h2>
        <div className="flex gap-4 text-[9px] tracking-widest text-slate-400">
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span> INCOMING</span>
          <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]"></span> OUTGOING</span>
        </div>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorIn" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorOut" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" opacity={0.05} vertical={false} />
            <XAxis dataKey="time" stroke="#ffffff" opacity={0.3} fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#ffffff" opacity={0.3} fontSize={10} tickLine={false} axisLine={false} />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(3, 3, 8, 0.8)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
              itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 600 }}
              labelStyle={{ color: '#94a3b8', fontSize: '10px', marginBottom: '4px', tracking: 'widest' }}
            />
            <Area type="monotone" dataKey="incoming" stroke="#22d3ee" strokeWidth={2} fillOpacity={1} fill="url(#colorIn)" />
            <Area type="monotone" dataKey="outgoing" stroke="#a855f7" strokeWidth={2} fillOpacity={1} fill="url(#colorOut)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 text-xs text-white font-medium">
        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center flex flex-col gap-1">
           <span className="text-[9px] text-slate-500 tracking-widest">PACKETS</span>
           <span>12.4k</span>
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center flex flex-col gap-1">
           <span className="text-[9px] text-slate-500 tracking-widest">BANDWIDTH</span>
           <span>45 MB/s</span>
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-center flex flex-col gap-1">
           <span className="text-[9px] text-slate-500 tracking-widest">LATENCY</span>
           <span>12ms</span>
        </div>
      </div>
    </div>
  );
};
