
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './paginas/menu';
import Home from './Paginas-imp/home'
import Cadastrar from './Paginas-imp/cadastrar';

function App() {
  return (
    <div className="App">
      <Menu/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element= {<Cadastrar/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
