
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './paginas/menu';
import Home from './Paginas-imp/home'
import Cadastrar from './Paginas-imp/cadastrar';
import Entrar from './Paginas-imp/entrar';
import Suporte from './paginas/suporte';
import Usuario from './paginas/usuario';
import CursoPython  from './paginas/curso_python';
import CursoJava from './paginas/curso_java';
import EditarPerfil from './paginas/formulario_edicao';
import Cursos from './paginas/cursos';

function App() {
  return (
    <div className="App">
      <Menu/>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastrar" element= {<Cadastrar/>} />
          <Route path="/entrar" element={<Entrar />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/cursos" element={<CursoPython />} />
          <Route path="/cursos_java" element={<CursoJava />} />
          <Route path="/formulario_edicao" element={<EditarPerfil />} />
          <Route path="/cursos" element={<Cursos />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;