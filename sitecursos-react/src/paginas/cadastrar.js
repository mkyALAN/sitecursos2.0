import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cadastrar() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Senha:', senha);
        
    };
    
    return (
        <div className="container">
            <div className="cadastro">
                <h1>Cadastrar</h1>
                <form id="cadastroForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nome"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        onFocus={(e) => (e.target.style.borderColor = '#4297e1')}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                    <button type="submit" id="cadastrar">
                        Cadastrar
                    </button>
                </form>
                <div className="links">
                    <Link to="/entrar">JÁ TEM UMA CONTA? Entrar</Link>
                </div>
            </div>
        </div>
    );
}

export default Cadastrar;