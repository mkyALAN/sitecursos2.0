import React from 'react';
import { Link } from 'react-router-dom';

const Footer =()=>{
    return(
    <div className='footer' style={{backgroundColor:'#01122a'}}>
       <footer class="footer p-4 text-center">
        <div class="footer-conten">
            <div class="row row-cols-2 row-cols-lg-4 row-cols-md-2 g-2 g-lg-3">
                <div class="col footer-section">
                    <h3>Certificação</h3>
                    <p>Certificação Cisco</p>
                    <p>Certificação Microsoft</p>
                    <p>Certificação AWS</p>
                    <p>Ver todas as certificações</p>
                </div>

                <div class="col footer-section text-center">
                    <h3>Desenvolvimento Web</h3>
                    <p>JavaScript</p>
                    <p>React JS</p>
                    <p>Angular</p>
                    <p>Java</p>
                </div>

                <div class="col footer-section text-center">
                    <h3>Data Science</h3>
                    <p>Python</p>
                    <p>Machine Learning</p>
                    <p>ChatGPT</p>
                </div>

                <div class="col footer-section text-center">
                    <h3>Sobre</h3>
                    <p>Quem somos</p>
                    <p>Carreiras</p>
                    <p>Fale conosco</p>
                </div>
            </div>
            <div class="footer-bottom">
            <p>&copy; 2025 Plataforma de Cursos. Todos os direitos reservados.</p>
            </div>

            </div>
        </footer> 
    </div>
    );
}
export default Footer;