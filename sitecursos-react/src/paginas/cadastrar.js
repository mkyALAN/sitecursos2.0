import React from 'react';
import { Link } from 'react-router-dom';

function cadastrar (){
    return(
        <div className='cadastrar'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cadastrar'>Cadastrar</Link>
                <Link to='/login'>Login</Link>
            </nav>
            <h1>Cadastrar</h1>
            <form>
                <input type='text' placeholder='Nome'/>
                <input type='text' placeholder='Email'/>
                <input type='password' placeholder='Senha'/>
                <button>Cadastrar</button>
            </form>
        </div>
    );
}
export default Menu;