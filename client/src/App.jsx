import React, { useState, useEffect } from 'react';
import { checkHealth } from './services/api';

function App() {
  const [health, setHealth] = useState({ status: 'loading', message: 'Connecting to API...' });

  useEffect(() => {
    let isMounted = true;
    const verifyApi = async () => {
      const res = await checkHealth();
      if (!isMounted) return;

      if (res.success) {
        setHealth({
          status: 'online',
          message: `API Connected (Express + Mongo ${res.data?.data?.database || 'ready'})`
        });
      } else {
        setHealth({
          status: 'offline',
          message: 'API Offline (Express ready on port 5000)'
        });
      }
    };

    verifyApi();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 relative text-center select-none">
      {/* Background radial glow */}
      <div className="absolute -z-10 w-96 h-64 bg-gradient-to-tr from-indigo-500/25 via-purple-500/20 to-pink-500/10 blur-3xl rounded-full pointer-events-none animate-pulse" />

      <div className="relative z-10 flex flex-col items-center justify-center max-w-2xl mx-auto">
        {/* Tailwind & MERN Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-widest uppercase text-indigo-300 backdrop-blur-md shadow-lg shadow-black/20 mb-6 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
          <span>Tailwind CSS + MERN Initialized</span>
        </div>

        {/* Main Display Title */}
        <h1
          id="iceemcs-title"
          className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-none bg-gradient-to-br from-white via-slate-100 to-slate-400 bg-clip-text text-transparent drop-shadow-2xl mb-4 hover:scale-[1.02] transition-transform duration-300 cursor-default"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ICEEMCS
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-400 font-normal tracking-wide max-w-md mx-auto mb-10">
          Clean, production-ready architecture powered by MongoDB, Express, React, Node.js & Tailwind CSS.
        </p>

        {/* Status indicator pill */}
        <div
          id="system-status-indicator"
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-slate-900/80 border border-white/10 backdrop-blur-xl shadow-2xl text-sm text-slate-300 hover:border-white/20 transition-all duration-300"
        >
          <span
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              health.status === 'online'
                ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]'
                : health.status === 'offline'
                ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.8)]'
                : 'bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]'
            }`}
          />
          <span>{health.message}</span>
          <span className="font-mono text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
            v1.0.0
          </span>
        </div>
      </div>
    </main>
  );
}

export default App;
