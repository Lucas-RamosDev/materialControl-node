import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiSliders } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import materialControlImg from '../../assets/materielControl_login.png';

export default function Login(){

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin (e) {
        e.preventDefault();

        try { 

            const response = await api.post('sessions', { user, password })

            //console.log(response.data.name)
            localStorage.setItem('name', response.data.name)
            localStorage.setItem('market', response.data.market)
            localStorage.setItem('permission', response.data.permission)

            history.push('/home') //responsavel por enviar a info do usuario para rota "home"

        } catch (err) {

            alert('Falha no Login tente novamente')
            
        }
    }


    return (
        
        <div className="login-container">

            <section className="form-login">

                <div className="title-login">Controle de Materiais</div>

                <div className="description">Sistema de controle de Materiais, EPI’s e Uniformes das redes Beira Rio Supermercados e Rio Max Atacado.</div>

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>

                    <input
                        placeholder="Digite seu usuário"
                        value={user}
                        onChange={e => setUser(e.target.value)}
                    />

                    <input 
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={ e => setPassword(e.target.value) } 
                    />
                    
                    <button
                        className="button"
                        type="submit"
                    >Entrar
                    </button>

                    <Link to="/home">
                        <FiSliders size={16} color="#284263" />
                        Painel de controle. Acessar.
                    </Link>


                </form>

            </section>

            <img src={materialControlImg} className="img" alt="Material Control" />

        </div>

    )
}