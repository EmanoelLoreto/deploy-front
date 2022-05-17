import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from 'react-router-dom';
import './index.css';
import { AiOutlineMail, AiOutlineLock, AiOutlineMoneyCollect, AiOutlineUser } from 'react-icons/ai';

export default class Usuarios extends Component {
    state = {
        usuarios: [],
    };

    componentDidMount() {
        this.loadUsuarios();
    }

    loadUsuarios = async () => {
        const response = await api.get(`/users`);

        const usuarios = response.data;
        console.log(usuarios)
        this.setState({ usuarios });
    };

    render() {
        const { usuarios } = this.state;
        return (
            <div className="usuario-list">
                <p>
                    <Link to={`/criarusuario`}> Criar Pessoa Usuária </Link>
                </p>
                {usuarios.map(usuario => (
                    <article key={usuario._id}>
                        <strong> {usuario.name} </strong>
                        <p> <AiOutlineMail /> {usuario.email} </p>
                        <p> <AiOutlineLock /> {usuario.password} </p>
                        <p> <AiOutlineMoneyCollect /> {usuario.salary} </p>
                        <p> <AiOutlineUser /> {usuario.role} </p>
                        <p> <Link to={`/usuarios/${usuario._id}`}> Acessar </Link> </p>
                    </article>
                ))}
            </div>
        )
    }
}