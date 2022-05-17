import React, { Component } from "react";
import './update.css';
import { Redirect, Link } from "react-router-dom";
import api from '../../services/services';

class EditarUsuario extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usuario: {
                _id: 0,
                name: "",
                email: "",
                password: "",
                role: "",
                salary: 0
            },
            redirect: false,
        };

    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/users/${id}`);

        this.setState({ usuario: response.data });
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            usuario: { ...prevState.usuario, [name]: value }
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        const { id } = this.props.match.params;
        const { usuario: { name, email, password, role, salary } } = this.state;

        api.put(`/users/${id}`, {
            name, email, password, role, salary
        })
            .then(response => {
                console.log(response)
                if (response.status === 200) {
                    this.setState({ redirect: true });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to="/" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Atualizar Pessoa Usuária</legend>
                        <div className="usuario-insert">
                            <label htmlFor="name">Nome </label>
                            <br />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Nome"
                                maxLength="100"
                                required
                                value={this.state.usuario.name}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                        <label htmlFor="email">E-mail </label>
                            <br />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="E-mail"
                                maxLength="100"
                                required
                                value={this.state.usuario.email}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="password">Senha </label>
                            <br />
                            <input
                                type="text"
                                id="password"
                                name="password"
                                placeholder="Senha"
                                maxLength="20"
                                required
                                value={this.state.usuario.password}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="role">Papel </label>
                            <br />
                            <input
                                type="text"
                                id="role"
                                name="role"
                                placeholder="Papel"
                                maxLength="50"
                                required
                                value={this.state.usuario.role}
                                onChange={this.handleInputChange}
                            />
                        </div>
                        <div className="usuario-insert">
                            <label htmlFor="salary">Salário </label>
                            <br />
                            <input
                                type="text"
                                id="salary"
                                name="salary"
                                placeholder="Salário"
                                maxLength="100"
                                required
                                value={this.state.usuario.salary}
                                onChange={this.handleInputChange}
                            />
                        </div>

                        <div className="usuario-insert">
                            <button type="submit" className="btn btn-primary">
                                Atualizar
                            </button>
                            <Link to={`/`}> Voltar </Link>
                        </div>
                    </fieldset>
                </form>
            );
        }
    }
}

export default EditarUsuario;
