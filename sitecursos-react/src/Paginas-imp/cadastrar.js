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
        <div className="cadastrar"
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
                backgroundImage: 'url(/img/3.svg)', 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
            
            }}>

            <div className="col-10 col-md-8 col-lg-6 cadastro text-center p-4 m-5" 
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.9)",
                    margin: "0 auto"
                }}>
                <h1 style={{ color: '#274C77' }}>CADASTRE-SE</h1>
                <form className="row g-3 p-5">
                    <div className="col-md-6">
                        <label htmlFor="inputName" className="form-label">Nome</label>
                        <input className="form-control" type="text" placeholder="Nome" required value={nome} onChange={(e) => setNome(e.target.value)} onFocus={(e) => (e.target.style.borderColor = '#4297e1')} />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputPassword4" className="form-label">Senha</label>
                        <input type="password" placeholder="Senha" required value={senha} onChange={(e) => setSenha(e.target.value)} onFocus={(e) => (e.target.style.borderColor = '#4297e1')} className="form-control"/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputEmail" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="E-mail" required value={email} onChange={(e) => setEmail(e.target.value)} onFocus={(e) => (e.target.style.borderColor = '#4297e1')} />
                    </div>
                    <div className="col-12">
                        <button type="submit" id="cadastrar" className="btn botao-login w-50">Cadastrar</button>
                    </div>
                    <Link to="/entrar" class="links pt-3">JÁ TEM UMA CONTA? Entrar</Link>
                </form>
            </div>
        </div>
    </div>
    );
}

export default Cadastrar;