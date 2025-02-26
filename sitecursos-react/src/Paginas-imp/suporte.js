import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Suporte() {
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('E-mail:', email);
        console.log('Mensagem:', mensagem);
        alert('Mensagem enviada com sucesso!');
    };

    return (
    <div className="suporte" style={{position: "relative", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
        <div className="row gx-2 justify-content-center align-items-center" style={{width: "100%",minHeight: "100vh", backgroundImage: 'url(/img/Design.svg)', backgroundSize: "cover", backgroundPosition: "center"}}>
        <div className="col-8 col-md-3 col-lg-3 text-center my-4">
          <div className="mosaico-box cadastro">
          <h2>SAC</h2>
                <p>Serviço de Atendimento ao Consumidor:</p>
                <p><a href="tel:+5511888888888" className='links'>+55 (11) 88888-8888</a></p>
                <p>Horário: Segunda a Sexta, das 9h às 18h</p>
          
          </div>
          <div className="mosaico-box  cadastro mt-2">
          <h2>Contato</h2>
                <p>Telefone:</p>
                <p><a href="tel:+5511999999999" className='links'>+55 (11) 99999-9999</a></p>
                <h2>E-mail</h2>
                <p>Entre em contato conosco via e-mail:</p>
                <p><a href="mailto:suporte@empresa.com" className='links'>suporte@empresa.com</a></p>
          </div>
        </div>
        <div className="col-8 col-md-4 col-lg-4 mt-2 text-center my-4">
          <div className="mosaico-box h-100 w-100 cadastro">
          <h2>Enviar E-mail</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">E-mail</label>
              <input type="email" className="form-control" id="email" placeholder="Seu e-mail" required value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea
                className="form-control" id="mensagem" rows="4" placeholder="Sua mensagem" required value={mensagem} onChange={(e) => setMensagem(e.target.value)}></textarea>
            </div>

            <button type="submit" className="btn botao-login w-50">Enviar</button>
          </form>
        </div>
        </div>
        </div>
        </div>
        
    );
}

export default Suporte;