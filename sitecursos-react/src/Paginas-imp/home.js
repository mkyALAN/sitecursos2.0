import React from "react";
import { Link } from 'react-router-dom';

function Home(){
    return(
        <div className="home" style={{position: "relative", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
            <div className='fundo text-center justify-content-center align-items-center'style={{width: "100%",minHeight: "100vh", backgroundImage: 'url(/img/1.svg)', backgroundSize: "cover", backgroundPosition: "center", padding:'25vh'}}>
            <h1 style={{ fontFamily: 'Koulen', fontSize: '3rem', color: '#fff' }}></h1>
                <h1>PORQUE NÃO APRENDER UMA NOVA <br/> LINGUAGEM DE PROGRAMAÇÃO <br/> EM 2025?</h1>
                <h2 class="comece">Comece agora:</h2>
                <Link class="btn botao" to="/entrar">Entrar</Link>    
            </div>
        </div>
    );
}
export default Home;