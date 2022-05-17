import React, { Component } from 'react';
import api from '../../services/services';
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock, AiOutlineMoneyCollect, AiOutlineUser } from 'react-icons/ai';

export default class Usuario extends Component {
    state = {
        usuario: {
            name: "",
            age: 0,
            phone: "",
            email: "",
            username: ""
        },
    };

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);

        this.setState({ usuario: response.data });
    }

    render() {
        const { usuario } = this.state;

        return (
            <div className="usuario-list">
                <article key={usuario.id}>
                    <strong> {usuario.name} </strong>
                    <p> <AiOutlineMail /> {usuario.email} </p>
                    <p> <AiOutlineLock /> {usuario.password} </p>
                    <p> <AiOutlineMoneyCollect /> {usuario.salary} </p>
                    <p> <AiOutlineUser /> {usuario.role} </p>
                    <p> <Link to={`/`}> Voltar </Link> </p>
                    <p> <Link to={`/EditarUsuario/${usuario._id}`}> Editar </Link> </p>
                    <p> <Link to={`/DeletarUsuario/${usuario._id}`}> Deletar </Link> </p>
                </article>
            </div>
        );
    }
}