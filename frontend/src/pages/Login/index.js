import React from 'react';
import { Link } from 'react-router-dom';
import { FiSliders } from 'react-icons/fi';

import './styles.css';

import materialControlImg from '../../assets/materielControl_login.png';

export default function Login(){
    return (
        
        <div className="login-container">

            <section className="form-login">

                <div className="title-login">Controle de Materiais</div>

                <div className="description">Sistema de controle de Materiais, EPI’s e Uniformes das redes Beira Rio Supermercados e Rio Max Atacado.</div>

                <form>
                    <h1>Faça seu Login</h1>

                    <input
                        placeholder="Digite seu usuário"
                    />

                    <input 
                        type="password"
                        placeholder="Digite sua senha" 
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