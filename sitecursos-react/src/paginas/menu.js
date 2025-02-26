import React from 'react';
import { Link } from 'react-router-dom';


const Menu =()=>{
    return(
    <div className='menu'>
        <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#01122a'}}>
            <div class="container-fluid">
                <img src="/img/mky.png" alt="logo" class="loho" width={60}/>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent"> 
                <ul class="navbar-nav mb-2 mb-lg-0 ">
                    <li class="nav-item p-1">
                    <Link class="nav-link text-white" aria-current="page" to="/">Início</Link>
                    </li>
                    <li class="nav-item p-1">
                    <Link class="nav-link text-white" aria-current="page" to="/cursos">Cursos</Link>
                    </li>
                    <li class="nav-item p-1">
                    <Link class="nav-link text-white" to="/suporte">Suporte</Link>
                    </li>
                    <li class="nav-item p-1">
                    <Link class="nav-link text-white" to="/entrar">Entrar</Link>
                    </li>
                    <li class="nav-item p-1">
                    <Link class="nav-link text-white" to="/cadastrar">Cadastrar-se</Link>
                    </li>
                    <li class="nav-item p-1">
                    <Link class="nav-link text-white" to="/usuario">Meu Perfil</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
}
export default Menu;