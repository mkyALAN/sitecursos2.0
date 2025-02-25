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
        <div className="container">
            <div className="card">
                <h2>Enviar E-mail</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Seu e-mail"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea
                        placeholder="Sua mensagem"
                        rows="4"
                        required
                        value={mensagem}
                        onChange={(e) => setMensagem(e.target.value)}
                    ></textarea>
                    <button type="submit">Enviar</button>
                </form>
            </div>

            <div className="card">
                <h2>Contato</h2>
                <p>Telefone:</p>
                <p><a href="tel:+5511999999999">+55 (11) 99999-9999</a></p>
                <h2>E-mail</h2>
                <p>Entre em contato conosco via e-mail:</p>
                <p><a href="mailto:suporte@empresa.com">suporte@empresa.com</a></p>
            </div>

            <div className="card">
                <h2>SAC</h2>
                <p>Serviço de Atendimento ao Consumidor:</p>
                <p><a href="tel:+5511888888888">+55 (11) 88888-8888</a></p>
                <p>Horário: Segunda a Sexta, das 9h às 18h</p>
            </div>
        </div>
    );
}

export default Suporte;