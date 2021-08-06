import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'


import './styles.css';

export default function Home_old() {
    return (
    
        <div className="profile-container">

            <SideBar />

            <div className="result-container">

                <Header title="" />

                <div className="home-container">
                    <h1>Seja bem Vindo!</h1>

                    <h2>Selecione a opção desejada na barra lateral.</h2>
                </div>

            </div>

            

        </div>


    )
}
