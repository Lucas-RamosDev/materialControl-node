import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import { FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight, FiShoppingCart } from 'react-icons/fi'

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import EditIcon from '../../assets/edit.svg'
import DeleteIcon from '../../assets/delete.svg'
import notFoundImg from '../../assets/notFound.png'

import './styles.css'

export default function Register() { 

    let tableData = [
        { code: '0001', description: 'AVENTAL DE PVC', type: 'UNIFORMES' },
        { code: '0002', description: 'AVENTAL TERMINCO', type: 'EPI' },
        { code: '0003', description: 'BOTA DE BORRACHA PVC', type: 'MATERIAL' },
        { code: '0004', description: 'LUVAS DE ALGODAO', type: 'EPI' },
        { code: '0005', description: 'TESTE TESTANDO', type: 'EPI' },
        { code: '0006', description: 'QUALQUER TESTE', type: 'UNIFORMES' },
        { code: '0007', description: 'AVENTAL TERMINCO', type: 'EPI' },
        { code: '0008', description: 'BOTA DE BORRACHA PVC', type: 'MATERIAL' },
        { code: '0009', description: 'LUVAS DE ALGODAO', type: 'EPI' },
        { code: '0010', description: 'TESTE TESTANDO', type: 'EPI' },
        { code: '0011', description: 'AVENTAL DE PVC', type: 'UNIFORMES' },
        { code: '0012', description: 'AVENTAL TERMINCO', type: 'EPI' },
        { code: '0013', description: 'BOTA DE BORRACHA PVC', type: 'MATERIAL' },
        { code: '0014', description: 'LUVAS DE ALGODAO', type: 'EPI' },
        { code: '0015', description: 'TESTE TESTANDO', type: 'EPI' },
        { code: '0016', description: 'AVENTAL DE PVC', type: 'UNIFORMES' },
        { code: '0017', description: 'AVENTAL TERMINCO', type: 'EPI' },
        { code: '0018', description: 'BOTA DE BORRACHA PVC', type: 'MATERIAL' },
        { code: '0019', description: 'LUVAS DE ALGODAO', type: 'EPI' },
        { code: '0020', description: 'TESTE TESTANDO', type: 'EPI' },
    ];



    return (

        <div className="main-content">

            < Header />

            < SideBar />

            <main id="register">

                <div className="header">

                    <h1 className="title">Cadastro de Itens</h1>

                    <Link to="/home" >Cadastrar</Link>

                </div>


                <div className="search" >

                    <input
                        className="inputSearch" 
                        placeholder="Código, Descrição ou Tipo"
                    />

                    <button className="btnSearch">
                        Consultar
                    </button>

                </div>


                <div id="content" className="content">

                    <table>

                        <thead>
                            <tr>
                                <th className="th-code" >Código</th>
                                <th className="th-description" >Descrição</th>
                                <th className="th-type" >Tipo</th>
                                <th colSpan="2" className="th-action" >Ações</th>
                            </tr>
                        </thead>

                        <tbody className="tableData" id="tableData"></tbody>

                    </table>

                </div>

                <div id="pagination" className="pagination">

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