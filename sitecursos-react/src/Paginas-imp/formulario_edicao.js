import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function EditarPerfil() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome:', nome);
        console.log('E-mail:', email);
        console.log('Telefone:', telefone);
        console.log('Data de Nascimento:', dataNascimento);
        console.log('Endereço:', endereco);
        console.log('Cidade:', cidade);
        console.log('Estado:', estado);
        alert('Alterações salvas com sucesso!');
    };

    const limparFormulario = () => {
        setNome('');
        setEmail('');
        setTelefone('');
        setDataNascimento('');
        setEndereco('');
        setCidade('');
        setEstado('');
    };

    const excluirItem = () => {
        if (window.confirm('Tem certeza que deseja excluir este item?')) {
            alert('Item excluído com sucesso!');
            window.location.href = '/usuario';
        }
    };

    return (
        <div className="form-container" style={{position: "relative", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", overflow: "hidden"}}>
        <div className='fundo row justify-content-center align-items-center'style={{width: "100%", minHeight: "100vh", backgroundImage: 'url(/img/Design.svg)', backgroundSize: "cover", backgroundPosition: "center" }}>
            {/* Coluna do Formulário */}
            <div className="col-8 col-md-4 col-lg-4 cadastro my-4">
            <h1 className="text-center mb-4" style={{ color: '#274C77' }}>Editar Perfil</h1>
            <form id="formEdicao" onSubmit={handleSubmit} className="p-4 rounded">
                <div className="row">
                <div className="col-md-5 mb-3">
                    <label htmlFor="nome" className="form-label">Nome Completo</label>
                    <input type="text" id="nome" className="form-control" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
                </div>
                <div className="col-md-7 mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input type="email" id="email" className="form-control" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="telefone" className="form-label">Telefone</label>
                    <input type="text" id="telefone" className="form-control" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="dataNascimento" className="form-label">Data de Nascimento</label>
                    <input type="date" id="dataNascimento" className="form-control" value={dataNascimento} onChange={(e) => setDataNascimento(e.target.value)} required />
                </div>
                <div className="col-md-4 mb-3">
                    <label htmlFor="endereco" className="form-label">Endereço</label>
                    <input type="text" id="endereco" className="form-control" placeholder="Endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="cidade" className="form-label">Cidade</label>
                    <input type="text" id="cidade" className="form-control" placeholder="Cidade" value={cidade} onChange={(e) => setCidade(e.target.value)} required />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select id="estado" className="form-select" value={estado} onChange={(e) => setEstado(e.target.value)} required>
                    <option value="">Selecione...</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    </select>
                </div>
                </div>

                <div className="d-flex justify-content-center gap-2 mt-4">
                <button type="submit" className="btn btn-salvar">Salvar Alterações</button>
                <button type="button" className="btn btn-limpar" onClick={limparFormulario}>Limpar</button>
                <button type="button" className="btn btn-excluir" onClick={excluirItem}>Excluir</button>
                </div>
            </form>
            </div>
        </div>
</div>
    
    );
}

export default EditarPerfil;