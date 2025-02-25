import React from 'react';
import { Link } from 'react-router-dom';

function Usuario() {
    return (
        <div className="usuario-container">
            <div className="aluno">
                <img src="/imgs/usuario/alunoimg.png" alt="alunoimg" className="alunoimg" />
                <p className="nomealuno">Lenivaldo</p>
                <p>Aluno</p>
            </div>

            <div className="container">
                <div className="meuscursos">
                    <Link to="/meus-cursos">
                        <button>
                            <img src="/imgs/usuario/play.png" alt="play" /> <br />
                            Meus Cursos
                        </button>
                    </Link>
                </div>

                <div className="certificados">
                    <Link to="/certificados">
                        <button>
                            <img src="/imgs/usuario/document.png" alt="document" /> <br />
                            Certificados
                        </button>
                    </Link>
                </div>

                <div className="assinaturas">
                    <Link to="/assinaturas">
                        <button>
                            <img src="/imgs/usuario/list-check.png" alt="list-check" /> <br />
                            Assinaturas
                        </button>
                    </Link>
                </div>

                <div className="editarperfil">
                    <Link to="/editar-perfil">
                        <button>
                            <img src="/imgs/usuario/pencil.png" alt="pencil" /> <br />
                            Editar Perfil
                        </button>
                    </Link>
                </div>

                <div className="historicodecompras">
                    <Link to="/historico-compras">
                        <button>
                            <img src="/imgs/usuario/shopping-cart.png" alt="shopping-cart" /> <br />
                            Histórico de Compras
                        </button>
                    </Link>
                </div>

                <div className="formasdepagamento">
                    <Link to="/formas-pagamento">
                        <button>
                            <img src="/imgs/usuario/credit-card.png" alt="credit-card" /> <br />
                            Formas de Pagamento
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Usuario;