import React, { useState, useEffect } from 'react';
import { checkHealth } from './services/api';
import './App.css';

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
          message: 'API Offline (Ready on port 5000)'
        });
      }
    };

    verifyApi();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main className="app-viewport">
      <div className="hero-container">
        <div className="ambient-glow" />

        <div className="stack-badge">
          <span className="badge-dot" />
          <span>MERN Stack Initialized</span>
        </div>

        <h1 className="brand-title" id="iceemcs-title">
          ICEEMCS
        </h1>

        <p className="brand-subtitle">
          Clean, production-ready architecture powered by MongoDB, Express, React, and Node.js.
        </p>

        <div className="status-pill" id="system-status-indicator">
          <span className={`status-indicator ${health.status}`} />
          <span>{health.message}</span>
          <span className="status-code">v1.0.0</span>
        </div>
      </div>
    </main>
  );
}

export default App;
