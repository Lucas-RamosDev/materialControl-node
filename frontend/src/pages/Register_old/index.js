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

    
    useEffect(() => {
        
        init()

    }, []);
    

    //--- ### FUN????O DOS CONTROLES E EXIBI????O DA TABELA ### --- //

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
    
    // Fun????es dos controles
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
            const searchType = tableData.filter(obj => obj.type.toUpperCase().startsWith(valueInput))

            let searchResult
            
            if(searchDescription.length !== 0 ) {
                searchResult = searchDescription
            } else if (searchCode.length !== 0 ) {
                searchResult = searchCode
            } else if (searchType.length !== 0 ){    
                searchResult = searchType
            } else {
                searchResult = false //'Resultado n??o encontrado!'
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
            document.getElementById('pagination').style.display = "flex"
            document.getElementById('notFound').style.display = "none"
        },


        // Houve os eventos de cliques
        createListeners() {
            html.get('.first').addEventListener('click', () => { // 'first' ?? a classe atribuida no html
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

            //controls.searchShow()

            let tableDataSearch = controls.search()

            //const paginatedItems = tableData.slice(start, end)
            const paginatedItems = tableDataSearch.slice(start, end)

            paginatedItems.forEach(()=>{})
            //console.log(paginatedItems)

            // --- Cria a tabela din??mica ---

            let tbody = document.getElementById('tableData') // seleciona a class "tableData" HTML
            tbody.innerText = ''

            for( let i=0; i < paginatedItems.length; i++ ) {
                let tr = tbody.insertRow();

                let td_code = tr.insertCell();
                let td_description = tr.insertCell();
                let td_type = tr.insertCell();
                let td_actionEdit = tr.insertCell();
                let td_actionDelete = tr.insertCell();

                td_code.innerText = paginatedItems[i].code;
                td_description.innerText = paginatedItems[i].description;
                td_type.innerText = paginatedItems[i].type;
                
                let imgEdit = document.createElement('img')
                imgEdit.src = EditIcon
                td_actionEdit.appendChild(imgEdit)

                let imgDelete = document.createElement('img')
                imgDelete.src = DeleteIcon
                td_actionDelete.appendChild(imgDelete)
                
                //-- adiciona estilo dinamicamente (td_code = class do .css)
                td_code.classList.add('td_code')
                td_description.classList.add('td_description')
                td_type.classList.add('td_type')

                td_actionEdit.classList.add('bt-edit')
                td_actionDelete.classList.add('bt-delete')       
            }
        
        }

    }


    function init(){
            update()
            controls.createListeners()
        }

            // --- ### FUN????ES DO COUNTER VIS??VEL ### ---
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

            <main id="register">

                <div className="header">

                    <h1 className="title">Cadastro de Itens</h1>

                    <Link to="/home" >Cadastrar</Link>

                </div>


                <div className="search" >

                    <input
                        className="inputSearch" 
                        placeholder="C??digo, Descri????o ou Tipo"
                    />

                    <button className="btnSearch">
                        Consultar
                    </button>

                </div>


                <div id="content" className="content">

                    <table>

                        <thead>
                            <tr>
                                <th className="th-code" >C??digo</th>
                                <th className="th-description" >Descri????o</th>
                                <th className="th-type" >Tipo</th>
                                <th colSpan="2" className="th-action" >A????es</th>
                            </tr>
                        </thead>

                        <tbody className="tableData" id="tableData"></tbody>

                    </table>

                </div>

                <div id="pagination" className="pagination">

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

                    <h1>Ops! Sua pesquisa n??o foi encontrada.</h1>

                    <img src={notFoundImg} alt="Pesquisa n??o Encontrada" />

                </div>

            </main>

        </div>

    )
}