import { motion } from 'framer-motion';
import { Terminal } from 'lucide-react';

const alerts = [
  { id: 1, type: 'CRITICAL', msg: 'DDOS attack detected from 192.168.4.22', time: '14:23:01' },
  { id: 2, type: 'WARN', msg: 'Port scan detected on port 8080', time: '14:22:45' },
  { id: 3, type: 'INFO', msg: 'System startup checks complete', time: '14:20:12' },
  { id: 4, type: 'INFO', msg: 'Firewall rules updated', time: '14:15:00' },
  { id: 5, type: 'WARN', msg: 'High packet loss on ETH0', time: '14:10:33' },
];

export const AlertConsole = () => {
  return (
    <div className="p-6 rounded-xl bg-slate-900/40 border border-amber-500/30 backdrop-blur-md shadow-[0_0_30px_rgba(245,158,11,0.05)] h-full flex flex-col">
      <h2 className="text-amber-400 font-mono tracking-widest text-sm mb-4 flex items-center gap-2">
        <Terminal size={16} />
        ALERT CONSOLE
      </h2>
      
      <div className="flex-1 overflow-hidden relative rounded bg-black/40 border border-amber-500/10 p-3">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80 pointer-events-none" />
        
        <div className="space-y-2 font-mono text-[11px] h-full overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500/20 pr-2">
          {alerts.map((alert, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              key={alert.id} 
              className={`p-2 rounded border-l-2 flex gap-3 
                ${alert.type === 'CRITICAL' ? 'text-red-400 border-red-500 bg-red-500/10' : 
                  alert.type === 'WARN' ? 'text-amber-400 border-amber-500 bg-amber-500/5' : 
                  'text-emerald-400/70 border-emerald-500/30 bg-emerald-500/5'}
              `}
            >
              <span className="opacity-50 shrink-0">[{alert.time}]</span>
              <span>{alert.msg}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
