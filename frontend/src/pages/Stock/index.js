import React from 'react';

import { FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight } from 'react-icons/fi'

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import notFoundImg from '../../assets/notFound.png'

import './styles.css'

const DataStocks = require('../../model/Stock')

export default function Stock() {

    return (

        <div className="main-content">

            < Header />

            < SideBar />

            <main id="stock">

                <div className="header">

                    <h1 className="title">Consulta de Estoque</h1>

                </div>

                <div className="search" >

                    <select
                        className="selectSearch" 
                    >
                        <option value= "" > Selecione Loja... </option>
                        <option value= "Loja 01">Loja 01</option>
                        <option value= "Loja 02">Loja 02</option>
                        <option value= "Loja 04">Loja 04</option>
                        <option value= "Loja 05">Loja 05</option>
                        <option value= "Rio Max">Rio Max</option>

                    </select>

                    <input
                        className="inputSearch" 
                        placeholder="Código ou Descrição"
                    />

                    <button className="btnSearch">
                        Consultar
                    </button>

                </div>


                <div id="content" className="content">

                    <table className="dataTable">

                        <thead>
                            <tr>
                                <th className="th-code" >Código</th>
                                <th className="th-description" >Descrição</th>
                                <th className="th-market" >Loja</th>
                                <th className="th-amount" >Quantidade</th>
                            </tr>
                        </thead>

                        <tbody>

                            {DataStocks.get().map((prop, key) => {

                                return (

                                    <tr key={key}>

                                        <td>{prop.code}</td>
                                        <td>{prop.description}</td>
                                        <td>{prop.market}</td>
                                        <td>{prop.amount}</td>

                                    </tr>

                                );

                            })}

                        </tbody>





                    </table>

                </div>

                <div className="pagination">

                    <div 
                    className="first" 
                    onClick={()=>{}}
                    > 
                        <FiChevronsLeft size="20"/> 
                    </div>

                    <div 
                    className="prev" 
                    onClick={()=>{}}
                    > 
                        <FiChevronLeft size="20"/> 
                    </div>

                    <div className="numbers"> {()=>{}} </div>

                    <div 
                    className="next" 
                    onClick={()=>{}}
                    > 
                        <FiChevronRight size="20"/> 
                    </div>

                    <div 
                    className="last"
                    onClick={()=>{}}
                    > 
                        <FiChevronsRight size="20"/> 
                    </div>

                </div>
                
                
                <div id="notFound" className="notFound">

                    <h1>Ops! Sua pesquisa não foi encontrada.</h1>

                    <img src={notFoundImg} alt="Pesquisa não Encontrada" />

                </div>

            </main>

        </div>

    )
}