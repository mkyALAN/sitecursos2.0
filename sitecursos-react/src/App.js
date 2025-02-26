
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from './paginas/menu';
import Footer from './paginas/footer';
import Home from './Paginas-imp/home'
import Cadastrar from './Paginas-imp/cadastrar';
import Entrar from './Paginas-imp/entrar';
import Suporte from './Paginas-imp/suporte';
import Usuario from './Paginas-imp/usuario';
import CursoPython  from './Paginas-imp/curso_python';
import CursoJava from './Paginas-imp/curso_java';
import EditarPerfil from './Paginas-imp/formulario_edicao';
import Cursos from './Paginas-imp/cursos';
import MeusCursos from './Paginas-imp/meus_cursos';

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
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/cursos_java" element={<CursoJava />} />
          <Route path="/formulario_edicao" element={<EditarPerfil />} />
          <Route path="/meus_cursos" element={<MeusCursos />} />
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;