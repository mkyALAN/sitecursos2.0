import React from "react";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="home">
            <div>
                <h1>PORQUE NÃO APRENDER UMA NOVA <br/> LINGUAGEM DE PROGRAMAÇÃO <br/> EM 2025?</h1>
            </div>

            <div class="img-dev">
            <img src="src/imgs/dev.png" alt="" width="450px"/>
            </div>

            <div class="comece-agora">
        <h2>COMECE AGORA:</h2>
        <a href="entrar.html">
            <button id="botao-comecar" class="botao-comecar">
                COMEÇAR
            </button>
        </a>
    </div>
        </div>
    );
}
export default Home;