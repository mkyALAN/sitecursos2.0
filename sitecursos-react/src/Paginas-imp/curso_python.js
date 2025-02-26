import React from 'react';
import { Link } from 'react-router-dom';

function CursoPython() {
    return (
        <div className="curso">
            <div className="container">
                <div className="curso-header">
                    <img src="/imgs/python.png" alt="Python" className="curso-imagem" />
                    <h1>Curso de Python</h1>
                </div>
                <div className="descricao">
                    <p>
                        Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. Neste curso, você aprenderá desde os conceitos básicos até tópicos avançados, como manipulação de dados, automação e desenvolvimento web.
                    </p>
                </div>
                <div className="aulas">
                    <h2>Aulas Disponíveis</h2>
                    <ul>
                        <li><Link to="/aula1">Aula 1: Introdução ao Python</Link></li>
                        <li><Link to="/aula2">Aula 2: Sintaxe Básica</Link></li>
                        <li><Link to="/aula3">Aula 3: Estruturas de Dados</Link></li>
                        <li><Link to="/aula4">Aula 4: Desenvolvimento Web com Flask</Link></li>
                    </ul>
                </div>
                <Link to="/cursos">
                    <button className="button">Voltar aos Cursos</button>
                </Link>
            </div>
        </div>
    );
}

export default CursoPython;