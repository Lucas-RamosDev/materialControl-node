import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import './styles.css';


export default function Home() {
    return (
        
        <div className="main-content">

            < Header />

            < SideBar />

            <main className="home">

                <section >

                    <h1>Seja bem Vindo(a) teste feito</h1>

                    <h2>Selecione a opção desejada na barra lateral.</h2>

                </section>
                
            </main>

        </div>

    )
}
