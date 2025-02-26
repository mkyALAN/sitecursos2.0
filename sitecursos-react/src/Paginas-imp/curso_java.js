import React from 'react';
import { Link } from 'react-router-dom';

function CursoJava() {
    return (
        <div className="curso">
            <div className="container">
                <div className="curso-header">
                    <img src="/imgs/java.png" alt="Java" className="curso-imagem" />
                    <h1>Curso de Java</h1>
                </div>
                <div className="descricao">
                    <p>
                        Java é uma linguagem de programação de alto nível, orientada a objetos e amplamente utilizada para desenvolver aplicações web, mobile e desktop. Neste curso, você aprenderá os conceitos básicos e avançados de Java, incluindo sintaxe, estruturas de dados, POO e muito mais.
                    </p>
                </div>
                <div className="aulas">
                    <h2>Aulas Disponíveis</h2>
                    <ul>
                        <li><Link to="/aula1">Aula 1: Introdução ao Java</Link></li>
                        <li><Link to="/aula2">Aula 2: Sintaxe Básica</Link></li>
                        <li><Link to="/aula3">Aula 3: Estruturas de Controle</Link></li>
                        <li><Link to="/aula4">Aula 4: Programação Orientada a Objetos</Link></li>
                    </ul>
                </div>
                <Link to="/cursos">
                    <button className="button">Voltar aos Cursos</button>
                </Link>
            </div>
        </div>
    );
}

export default CursoJava;