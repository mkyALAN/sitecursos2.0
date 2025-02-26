import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../paginas/card';

function Usuario() {
    return (
        <div className="usuario-container" style={{position: "relative", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
        <div className='fundo'style={{width: "100%",minHeight: "100vh", backgroundImage: 'url(/img/Design.svg)', backgroundSize: "cover", backgroundPosition: "center"}}>
            
            <div className="aluno">
                <img src="./img/alunoimg.png" alt="alunoimg" className="alunoimg" style={{width:'60px', borderRadius:'50px'}}/>
                <h4 className="nomealuno">Lenivaldo</h4>
                <h4>Aluno</h4>
            </div>

            <div class="row  my-4 row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center g-4" style={{marginLeft:'200px', marginRight:'200px'}}>
                <div class="col d-flex justify-content-center " >
                    <Card link={'/meus_cursos'} titulo={'Meus Cursos'} icone={<i class="bi bi-collection-play" style={{color:'#6096BA', fontSize: '50px'}}></i>} />
                </div>
                <div class="col d-flex justify-content-center" >
                    <Card link={'/certificados'} titulo={'Certificados'} icone={<i class="bi bi-file-earmark-text" style={{color:'#6096BA', fontSize: '50px'}}></i>} />
                </div>
                <div class="col d-flex justify-content-center" >
                    <Card link={'/assinaturas'} titulo={'Assinaturas'} icone={<i class="bi bi-list-check" style={{color:'#6096BA', fontSize: '50px'}}></i>} />
                </div>
                <div class="col d-flex justify-content-center align-middle" >
                    <Card link={'/formulario_edicao'} titulo={'Editar Perfil'} icone={<i class="bi bi-pen" style={{color:'#6096BA', fontSize: '50px'}}></i>} />
                </div>
                <div class="col d-flex justify-content-center" >
                    <Card link={'/historico-compras'} titulo={'Histórico de Compras'} icone={<i class="bi bi-cart4" style={{color:'#6096BA', fontSize: '50px'}}></i>} />
                </div>
                <div class="col d-flex justify-content-center" >
                    <Card link={'/formas-pagamento'} titulo={'Formas de Pagamento'} icone={<i class="bi bi-credit-card" style={{color:'#6096BA', fontSize: '50px'}}></i>} />
                </div>
                
                </div>
            </div>

        </div>
    );
}

export default Usuario;