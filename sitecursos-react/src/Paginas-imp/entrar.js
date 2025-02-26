import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Entrar() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login:', login);
        console.log('Senha:', senha);
        navigate('/cursos');
    };

    return (
        <div className="entrar"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden"
            }}>

            <div
                className="row justify-content-center align-items-center"
                style={{
                    width: "100%",
                    minHeight: "100vh",
                    backgroundImage: 'url(/img/2.svg)',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                <div className="col-8 col-md-4 col-lg-4 cadastro text-center p-4 my-4"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        margin: "0 auto"
                    }}>
                    <h1 style={{ color: '#274C77' }}>LOGIN</h1>
                    <form className="row g-3 p-5" onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="inputName" className="form-label">Nome</label>
                            <input
                                type="text"
                                placeholder="Login"
                                required
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                onFocus={(e) => (e.target.style.borderColor = '#4297e1')}
                                className="form-control"
                            />
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPassword4" className="form-label">Senha</label>
                            <input
                                type="password"
                                placeholder="Senha"
                                required
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                onFocus={(e) => (e.target.style.borderColor = '#4297e1')}
                                className="form-control"
                            />
                        </div>

                        <div className="col-12">
                            <button type="submit" id="entrar" className="btn botao-login w-50">
                                Entrar
                            </button>
                        </div>
                        <Link to="/esqueceu-senha" className="links">Esqueceu a senha?</Link>{' '}
                        <Link to="/cadastrar" className="links">Cadastrar</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Entrar;