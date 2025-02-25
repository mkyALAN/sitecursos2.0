import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Entrar() {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login:', login);
        console.log('Senha:', senha);
    };

    return (
        <div className='entrar'>
            <div className="container">
                <div className="entrar">
                    <h1>Entrar</h1>
                    <form id="loginForm" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            placeholder="Login"
                            required
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            onFocus={(e) => (e.target.style.borderColor = '#4297e1')}
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            required
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            onFocus={(e) => (e.target.style.borderColor = '#4297e1')}
                        />
                        <button type="submit" id="entrar">
                            Entrar
                        </button>
                    </form>
                    <div className="links">
                        <Link to="/cadastrar">Cadastrar</Link> |{' '}
                        <Link to="/esqueceu-senha">Esqueceu a senha?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Entrar;