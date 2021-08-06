import React from 'react';

import SideBar from '../../components/SideBar';
import Header from '../../components/Header';

import './styles.css';

export default function Stock(){
    return(

        <div className="main-content">

            < Header />

            < SideBar />

            <main className="stock">

                <section >

                    <h1>Estoque</h1>

                </section>
                
            </main>

        </div>

    )
}