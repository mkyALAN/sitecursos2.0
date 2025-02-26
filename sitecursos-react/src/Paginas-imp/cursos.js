import React from 'react';
import { Link } from 'react-router-dom';
import Card_curso from '../paginas/card-curso';

function Cursos() {
    return (
        <div className="cursos d-flex justify-content-center align-items-center" style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            <div className="container-fluid d-flex flex-column align-items-center" style={{ width: "100%", minHeight: "100vh", backgroundImage: 'url(/img/Design.svg)', backgroundSize: "cover", backgroundPosition: "center", padding: "5vh" }}>

                {/* Barra de Pesquisa */}
                <div className="mb-4 w-50">
                    <input type="text" className="form-control" placeholder="Pesquisar cursos..." />
                </div>

                {/* Cards dos Cursos */}
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center">
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_java'} titulo={'Java Básico'} img={'/img/java.png'} />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_python'} titulo={'Python para Iniciantes'} img={'/img/python.png'} />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_js'} titulo={'JavaScript Essencial'} img={'/img/js.png'} />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_csharp'} titulo={'C Fundamentos'} img={'/img/c.png'} />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_sql'} titulo={'Banco de Dados SQL'} img={'/img/mysql.png'} />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_html_css'} titulo={'GO Básico'} img={'/img/go.png'} />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_react'} titulo={'React do Zero ao Avançado'} img={'/img/react.png'} />
                    </div>
                    <div className="col d-flex justify-content-center">
                        <Card_curso link={'/cursos_react'} titulo={'C++ Fundamentos'} img={'/img/cmais.png'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cursos;
