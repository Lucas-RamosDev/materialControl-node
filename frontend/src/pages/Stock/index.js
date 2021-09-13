import React from 'react';

import { FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight } from 'react-icons/fi'

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import notFoundImg from '../../assets/notFound.png'

import './styles.css'

export default function Stock() { 

    /*
    let tableData = [
        { code: '0001', description: 'AVENTAL DE PVC', market: 'LOJA 01', amount: '05' },
        { code: '0002', description: 'AVENTAL TERMINCO', market: 'LOJA 04', amount: '10' },
        { code: '0003', description: 'BOTA DE BORRACHA PVC', market: 'LOJA 01', amount: '30' },
        { code: '0004', description: 'LUVAS DE ALGODAO', market: 'RIO MAX', amount: '63' },
        { code: '0005', description: 'TESTE TESTANDO', market: 'LOJA 01', amount: '14' },
        { code: '0006', description: 'QUALQUER TESTE', market: 'LOJA 01', amount: '09' },
        { code: '0007', description: 'AVENTAL TERMINCO', market: 'LOJA 02', amount: '17' },
        { code: '0008', description: 'BOTA DE BORRACHA PVC', market: 'LOJA 01', amount: '27' },
        { code: '0009', description: 'LUVAS DE ALGODAO', market: 'RIO MAX', amount: '41' },
        { code: '0010', description: 'TESTE TESTANDO', market: 'LOJA 01', amount: '01' },
        { code: '0011', description: 'AVENTAL DE PVC', market: 'LOJA 05', amount: '00' },
        { code: '0012', description: 'AVENTAL TERMINCO', market: 'LOJA 02', amount: '14' },
        { code: '0013', description: 'BOTA DE BORRACHA PVC', market: 'LOJA 01', amount: '12' },
        { code: '0014', description: 'LUVAS DE ALGODAO', market: 'LOJA 04', amount: '36' },
        { code: '0015', description: 'TESTE TESTANDO', market: 'LOJA 01', amount: '16' },
        { code: '0016', description: 'AVENTAL DE PVC', market: 'LOJA 02', amount: '34' },
        { code: '0017', description: 'AVENTAL TERMINCO', market: 'LOJA 01', amount: '60' },
        { code: '0018', description: 'BOTA DE BORRACHA PVC', market: 'LOJA 01', amount: '12' },
        { code: '0019', description: 'LUVAS DE ALGODAO', market: 'LOJA 04', amount: '22' },
        { code: '0020', description: 'TESTE TESTANDO', market: 'LOJA 01', amount: '15' },
    ];
    */


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

                            <tr>
                                <td className="code">2456</td>
                                <td className="item">Avental termico</td>
                                <td className="market">Loja01</td>
                                <td className="amount">05</td>
                            </tr>

                            <tr>
                                <td className="code">2456</td>
                                <td className="item">Avental termico</td>
                                <td className="market">Loja01</td>
                                <td className="amount">05</td>
                            </tr>

                            <tr>
                                <td className="code">2456</td>
                                <td className="item">Avental termico</td>
                                <td className="market">Loja01</td>
                                <td className="amount">05</td>
                            </tr>

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