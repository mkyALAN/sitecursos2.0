import React from "react";

function MeusCursos(){
    return(
        <div className="meusCursos" style={{position: "relative", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
            <div className='fundo justify-content-center align-items-center'style={{width: "100%",minHeight: "100vh", backgroundImage: 'url(/img/Design.svg)', backgroundSize: "cover", backgroundPosition: "center", padding:'5vh'}}>
                <h1 className="text-center my-4">Cursos Adquiridos</h1>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Curso</th>
                                <th scope="col">Valor</th>
                                <th scope="col">Data de Aquisição</th>
                                <th scope="col">Data de Conclusão</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">JavaScript Avançado</th>
                                <td>R$ 299,90</td>
                                <td>10/01/2025</td>
                                <td>15/03/2025</td>
                            </tr>
                            <tr>
                                <th scope="row">Python para Data Science</th>
                                <td>R$ 499,90</td>
                                <td>05/02/2025</td>
                                <td>20/05/2025</td>
                            </tr>
                            <tr>
                                <th scope="row">Desenvolvimento Web com React</th>
                                <td>R$ 399,90</td>
                                <td>15/03/2025</td>
                                <td>30/06/2025</td>
                            </tr>
                            <tr>
                                <th scope="row">Machine Learning</th>
                                <td>R$ 599,90</td>
                                <td>01/04/2025</td>
                                <td>15/08/2025</td>
                            </tr>
                            <tr>
                                <th scope="row">Banco de Dados com SQL</th>
                                <td>R$ 349,90</td>
                                <td>20/05/2025</td>
                                <td>30/09/2025</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
            </div>
        </div>
    )}       
export default MeusCursos;