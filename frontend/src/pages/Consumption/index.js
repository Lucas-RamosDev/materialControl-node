import React from 'react';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import './styles.css';

export default function Home() {
    return (
    
        <div className="main-content">

            < Header />

            < SideBar />

            <main className="consumption">

                <section >

                    <h1>Consumo</h1>

                </section>
                
            </main>

        </div>

    )
}