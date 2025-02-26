import React from "react";
import { Link } from "react-router-dom";

function Card_curso({ titulo, img, link }) {
   return (
        <div className="card p-1 shadow" style={{ width: "18rem", borderRadius: '1px', backgroundColor: '#E7ECEF' }}>
            <img src={img} className="card-img-top" alt="Imagem do curso" />
            <div className="card-body text-center">
                <h5 className="card-title p-2">{titulo}</h5>
                <Link to={link} className="btn botao-login">Começar</Link>
            </div>
        </div>
    );
}

export default Card_curso;
