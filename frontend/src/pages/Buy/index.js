import React from 'react';


import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import './styles.css';

export default function Home() {
    return (
    
        <div className="main-content">

            < Header />

            < SideBar />

            <main className="buy">

                <section >

                    <h1>Compras</h1>

                </section>
                
            </main>

        </div>


    )
}