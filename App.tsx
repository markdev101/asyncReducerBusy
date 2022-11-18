import React from 'react';
import { useState } from 'react';
import './App.css';
import { CounterProvider } from './context/CounterContext';
import Counter from './components/Counter';
import BusyContext from './context/BusyContext';

function App() {
  // ----------------------------------------------
  // The BusyContext context has a simple string boolean value
  const [busyState, setBusyState] = useState('false');
  const busy = { busyState, setBusyState };

  return (
    <div className="App">
      <h1>Async Reducer Example</h1>
      <BusyContext.Provider value={busy}>
        <CounterProvider>
          <Counter />
        </CounterProvider>
      </BusyContext.Provider>
    </div>
  );
}

export default App;
