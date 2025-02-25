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
        <div>
            <div className="container">
                <h1>Editar Perfil</h1>
                <form id="formEdicao" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nome">Nome Completo</label>
                        <input
                            type="text"
                            id="nome"
                            placeholder="Nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone</label>
                        <input
                            type="text"
                            id="telefone"
                            placeholder="Telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dataNascimento">Data de Nascimento</label>
                        <input
                            type="date"
                            id="dataNascimento"
                            value={dataNascimento}
                            onChange={(e) => setDataNascimento(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endereco">Endereço</label>
                        <input
                            type="text"
                            id="endereco"
                            placeholder="Endereço"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cidade">Cidade</label>
                        <input
                            type="text"
                            id="cidade"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estado">Estado</label>
                        <select
                            id="estado"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                        >
                            <option value="">Selecione...</option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </select>
                    </div>
                    <div className="botoes-formulario">
                        <button type="submit" className="btn-salvar">
                            Salvar Alterações
                        </button>
                        <button type="button" className="btn-limpar" onClick={limparFormulario}>
                            Limpar
                        </button>
                        <button type="button" className="btn-excluir" onClick={excluirItem}>
                            Excluir
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditarPerfil;