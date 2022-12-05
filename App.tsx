import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css';
import { Dashboard, Home, Toge, OppositeWorld, KachouFuugetsu, Memento1, Memento2 } from './Components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Dashboard />
        <Routes>
          <Route path="/Toge" element={<Toge />} />
          <Route path="/OppositeWorld" element={<OppositeWorld />} />
          <Route path="/KachouFuugetsu" element={<KachouFuugetsu />} />
          <Route path="/MementoOfAnAvariciousBeast" element={<Memento1 />} />
          <Route path="/MementoOfAllOrganisms" element={<Memento2 />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
