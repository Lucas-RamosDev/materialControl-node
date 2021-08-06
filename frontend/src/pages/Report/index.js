import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import './styles.css';

export default function Home() {
    return (
    
        <div className="main-content">

            < Header />

            < SideBar />

            <main className="request">

                <section >

                    <h1>Pedidos</h1>

                </section>
                
            </main>

        </div>


    )
}