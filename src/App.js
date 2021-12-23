import React from 'react';
import { useQuery } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Summary from './pages/Summary';
import { fetchToDos } from './services/API/toDosAPI';

const Main = styled.main`
  margin: 0 auto;
  max-width: 720px;
  padding-bottom: 30px;
`;

function App() {
  const { data, status } = useQuery('toDos', fetchToDos);

  return (
    <>
      <Header />
      <Main>
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
      </Main>
    </>
  );
}

export default App;
