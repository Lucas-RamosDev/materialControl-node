import React, { useState, useEffect } from 'react';

import { FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight } from 'react-icons/fi'

import Header from '../../components/Header';
import SideBar from '../../components/SideBar'

import notFoundImg from '../../assets/notFound.png'

import './styles.css'

export default function Stock() { 

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

    
    useEffect(() => {
        
        init()

    }, []);
    

    //--- ### FUNÇÃO DOS CONTROLES E EXIBIÇÃO DA TABELA ### --- //

    let perPage = 10 // qts elementos quero ver por pg
    const state = {
        page: 1, // pagina atual em que estou
        perPage, // qts elementos quero ver por pg
        totalPage: Math.ceil(tableData.length / perPage) // conta quantas paginas terei
                // Math.ceil() realiza o arredondamento para cima
    }

    //console.log(state.perPage)
    
    // Pega os eventos dos clicks -> controls.createListeners
    const html = { 
        get(element) {
            return document.querySelector(element)
        }
    }
    
    // Funções dos controles
    const controls = {
        next() {
            state.page++

            const lastPage = state.page > state.totalPage
            if(lastPage) {
                state.page--
            }
        },

        prev() {
            state.page--

            if(state.page < 1){
                state.page++
            }
        },

        goTo(page) {
            if(page < 1) {
                page = 1
            }

            state.page = page

            if(page > state.totalPage) {
                state.page = state.totalPage
            }
        },

        search() {

            const valueInput = document.querySelector('.inputSearch').value.toUpperCase()
            const searchDescription = tableData.filter(obj => obj.description.toUpperCase().startsWith(valueInput)) //.startsWith() -> localiza strings iniciadas com...                                                 
            const searchCode = tableData.filter(obj => obj.code === valueInput)
            
            const valueSelect = document.querySelector('.selectSearch').value.toUpperCase()
            const searchMarket = tableData.filter(obj => obj.market.toUpperCase().startsWith(valueSelect))
            


            let searchResult
            
            /*
            if(searchDescription.length !== 0 ) {
                searchResult = searchDescription
            } else if (searchCode.length !== 0 ) {
                searchResult = searchCode
            } else if (searchMarket.length !== 0 ){    
                searchResult = searchMarket
            } else {
                searchResult = false //'Resultado não encontrado!'
            }*/

        
            if(searchMarket.length !== 0 ) {
                searchResult = searchMarket
            } else if (searchDescription.length !== 0 ) {
                searchResult = searchDescription
            } else if (searchCode.length !== 0 ){    
                searchResult = searchCode
            } else {
                searchResult = false //'Resultado não encontrado!'
            }


            //console.log(searchResult)
            return searchResult
        },

        searchNotFound(){
            document.getElementById('content').style.display = "none"
            document.getElementById('pagination').style.display = "none"
            document.getElementById('notFound').style.display = "block"
        },

        searchShow(){
            document.getElementById('content').style.display = "flex"
            //document.getElementById('pagination').style.display = "flex"
            document.getElementById('notFound').style.display = "none"
        },


        // Houve os eventos de cliques
        createListeners() {
            html.get('.first').addEventListener('click', () => { // 'first' é a classe atribuida no html
                controls.goTo(1)
                update()
            })

            html.get('.last').addEventListener('click', () => {
                controls.goTo(state.totalPage)
                update()
            })

            html.get('.next').addEventListener('click', () => {
                controls.next()
                update()
                
            })

            html.get('.prev').addEventListener('click', () => {
                controls.prev()
                update()
            })

            //-- pesquisa
            html.get('.btnSearch').addEventListener('click', () => {
                controls.search()
                controls.searchShow()
                update()
            })

        }

    }  
    
    function update() {
        
        let page = state.page - 1           //      --- EXEMPLO PRATICO ---
        let start = page * state.perPage    // page = 0 -> perPage = 5 -> 0 * 5 = 0
        let end = start + state.perPage     // start = 0 -> perPage = 5 -> 0 + 5 = 5    
        
        if (controls.search() === false) {

            controls.searchNotFound()

        } else {

            let tableDataSearch = controls.search()

            //const paginatedItems = tableData.slice(start, end)
            const paginatedItems = tableDataSearch.slice(start, end)

            paginatedItems.forEach(()=>{})
            //console.log(paginatedItems)

            // --- Cria a tabela dinâmica ---

            let tbody = document.getElementById('tableData') // seleciona a class "tableData" HTML
            tbody.innerText = ''

            for( let i=0; i < paginatedItems.length; i++ ) {
                let tr = tbody.insertRow();

                let td_code = tr.insertCell();
                let td_description = tr.insertCell();
                let td_market = tr.insertCell();
                let td_amount = tr.insertCell();

                td_code.innerText = paginatedItems[i].code;
                td_description.innerText = paginatedItems[i].description;
                td_market.innerText = paginatedItems[i].market;
                td_amount.innerText = paginatedItems[i].amount;
                
                //-- adiciona estilo dinamicamente (td_code = class do .css)
                td_code.classList.add('td_code')
                td_description.classList.add('td_description')
                td_market.classList.add('td_market')
                td_amount.classList.add('td_amount')

            }
        
        }

    }


    function init(){
            update()
            controls.createListeners()
        }

            // --- ### FUNÇÕES DO COUNTER VISÍVEL ### ---
    const [counter, setCounter] = useState(1)
    
    function counterNext(){
        let counterPage = counter + 1
        if(counterPage > state.totalPage) {
            setCounter(counter)
        } else {
            setCounter(counter + 1)
        }
    }

    function counterPrev(){
        let counterPage = counter - 1
        if(counterPage < state.page) {
            setCounter(1)
        } else {
            setCounter(counter - 1)
        }
    }

    function counterFirst(){
        setCounter(1)
    }

    function counterLast(){
        setCounter(state.totalPage)
    }


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

                    <table>

                        <thead>
                            <tr>
                                <th className="th-code" >Código</th>
                                <th className="th-description" >Descrição</th>
                                <th className="th-market" >Loja</th>
                                <th className="th-amount" >Quantidade</th>
                            </tr>
                        </thead>

                        <tbody className="tableData" id="tableData"></tbody>

                    </table>

                </div>

                <div className="pagination">

                    <div 
                    className="first" 
                    onClick={counterFirst}
                    > 
                        <FiChevronsLeft size="20"/> 
                    </div>

                    <div 
                    className="prev" 
                    onClick={counterPrev}
                    > 
                        <FiChevronLeft size="20"/> 
                    </div>

                    <div className="numbers"> {counter} </div>

                    <div 
                    className="next" 
                    onClick={counterNext}
                    > 
                        <FiChevronRight size="20"/> 
                    </div>

                    <div 
                    className="last"
                    onClick={counterLast}
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