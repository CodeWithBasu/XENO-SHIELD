import { motion } from 'framer-motion';
import { TerminalSquare } from 'lucide-react';

const alerts = [
  { id: 1, type: 'CRITICAL', msg: 'DDOS attack detected from 192.168.4.22', time: '14:23:01' },
  { id: 2, type: 'WARN', msg: 'Port scan detected on port 8080', time: '14:22:45' },
  { id: 3, type: 'INFO', msg: 'System startup checks complete', time: '14:20:12' },
  { id: 4, type: 'INFO', msg: 'Firewall rules updated', time: '14:15:00' },
  { id: 5, type: 'WARN', msg: 'High packet loss on ETH0', time: '14:10:33' },
];

export const AlertConsole = () => {
  return (
    <div className="p-6 rounded-2xl glass-panel h-full flex flex-col relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <h2 className="text-slate-400 tracking-[0.2em] text-[10px] font-bold mb-6 flex items-center gap-2">
        <TerminalSquare size={14} className="text-fuchsia-400" />
        ALERT CONSOLE
      </h2>
      
      <div className="flex-1 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030308] pointer-events-none z-10" />
        
        <div className="space-y-3 text-[11px] h-full overflow-y-auto scrollbar-none pr-2">
          {alerts.map((alert, i) => (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, ease: "easeOut" }}
              key={alert.id} 
              className={`p-3 rounded-xl border flex gap-4 backdrop-blur-sm
                ${alert.type === 'CRITICAL' ? 'text-red-300 border-red-500/20 bg-red-500/10' : 
                  alert.type === 'WARN' ? 'text-amber-300 border-amber-500/20 bg-amber-500/5' : 
                  'text-slate-400 border-white/5 bg-white/[0.02]'}
              `}
            >
              <span className="opacity-40 shrink-0 font-mono">[{alert.time}]</span>
              <span className="tracking-wide">{alert.msg}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
