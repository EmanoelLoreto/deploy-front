import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import api from '../../services/services';
import './delete.css';

class DeletarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {},
            redirect: false
        };
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);

        this.setState({ usuario: response.data });
    }

    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`http://localhost:3000/users/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    console.log(data)
                    this.setState({ redirect: true });
                }
            })

        event.preventDefault();
    };

    render() {
        const { redirect, usuario } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <fieldset>
                    <legend>Deletar Usuário</legend>
                    <div className="usuario-delete">
                        <article key={usuario._id}>
                            <strong> {usuario.name} </strong>
                            <p>Tem certeza que deseja deletar este registro?</p>
                            <button
                                onClick={this.handleClick}
                            >
                                Remover
                            </button>
                            <Link to={`/`}>Voltar</Link>
                        </article>
                    </div>
                </fieldset>
            );
        }
    }
}

export default DeletarUsuario;
