import React from 'react';
import { Link } from 'react-router-dom';

function CursoJava() {
    return (
        <div className="curso"
            style={{
                backgroundImage: 'url(/img/2.svg)', // Fundo igual às outras páginas
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            <div className="container">
                <div className="curso-header">
                    <img src="/img/java.png" alt="Java" className="curso-imagem" />
                    <h1>Curso de Java</h1>
                </div>
                <div className="descricao">
                    <p style={{ color: '#fff' }}> {/* Cor da descrição alterada para branco */}
                        Java é uma linguagem de programação de alto nível, orientada a objetos e amplamente utilizada para desenvolver aplicações web, mobile e desktop. Neste curso, você aprenderá os conceitos básicos e avançados de Java, incluindo sintaxe, estruturas de dados, POO e muito mais.
                    </p>
                </div>
                <div className="aulas">
                    <h2>Aulas Disponíveis</h2>
                    <ul>
                        <li>
                            <Link to="/aula1" style={{ color: '#4297e1', textDecoration: 'none', fontWeight: 'bold' }}>
                                Aula 1: Introdução ao Java
                            </Link>
                        </li>
                        <li>
                            <Link to="/aula2" style={{ color: '#4297e1', textDecoration: 'none', fontWeight: 'bold' }}>
                                Aula 2: Sintaxe Básica
                            </Link>
                        </li>
                        <li>
                            <Link to="/aula3" style={{ color: '#4297e1', textDecoration: 'none', fontWeight: 'bold' }}>
                                Aula 3: Estruturas de Controle
                            </Link>
                        </li>
                        <li>
                            <Link to="/aula4" style={{ color: '#4297e1', textDecoration: 'none', fontWeight: 'bold' }}>
                                Aula 4: Programação Orientada a Objetos
                            </Link>
                        </li>
                    </ul>
                </div>
                <Link to="/cursos">
                    <button className="botao-cursos">Voltar aos Cursos</button>
                </Link>
            </div>
        </div>
    );
}

export default CursoJava;