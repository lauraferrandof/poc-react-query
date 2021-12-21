import React from 'react';
import { useQuery } from 'react-query';
import { Link, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Summary from './pages/Summary';
import { fetchToDos } from './services/API/toDosAPI';

import './App.css';

function App() {
  const { data, status } = useQuery('toDos', fetchToDos);
  return (
    <div className="App">
      <header>
        <h1>My to-do app</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Dashboard</Link>
            </li>
            <li>
              <Link to="/summary">Summary</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Dashboard status={status} toDos={data} />}
          />
          <Route
            path="summary"
            element={<Summary status={status} toDos={data} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
