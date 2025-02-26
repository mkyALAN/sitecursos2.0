import React from 'react';
import { Link } from 'react-router-dom';

function Cursos() {
    return (
        <div className="container">
            <div className="search-bar">
                <input type="text" placeholder="Pesquisar" />
            </div>
            <div className="cursos-grid">
                <div className="curso">
                    <img src="/imgs/java.png" alt="Java" />
                    <h3>Java</h3>
                    <Link to="/curso-java">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/python.png" alt="Python" />
                    <h3>Python</h3>
                    <Link to="/curso-python">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/JavaScript-Logo.png" alt="JavaScript" />
                    <h3>JavaScript</h3>
                    <Link to="/curso-javascript">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/Dart_logo.webp" alt="Dart" />
                    <h3>Dart</h3>
                    <Link to="/curso-dart">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/mysql.png" alt="SQL" />
                    <h3>SQL</h3>
                    <Link to="/curso-sql">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/ass.webp" alt="Assembly" />
                    <h3>Assembly</h3>
                    <Link to="/curso-assembly">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/C.png" alt="C" />
                    <h3>C</h3>
                    <Link to="/curso-c">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/csharp.png" alt="C#" />
                    <h3>C#</h3>
                    <Link to="/curso-csharp">
                        <button className="button">Começar</button>
                    </Link>
                </div>
                <div className="curso">
                    <img src="/imgs/ISO_C++_Logo.svg.png" alt="C++" />
                    <h3>C++</h3>
                    <Link to="/curso-cpp">
                        <button className="button">Começar</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cursos;