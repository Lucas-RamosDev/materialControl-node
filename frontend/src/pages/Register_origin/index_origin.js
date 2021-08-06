import React, { useEffect } from 'react';
import { FiSearch, FiChevronsLeft, FiChevronLeft, FiChevronsRight, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import EditIcon from '../../assets/edit.svg';
import DeleteIcon from '../../assets/delete.svg';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import Footer from '../../components/Footer';

import './styles.css';

export default function Register() {

    let tableData = [
        { code: '0001', description: 'Avental de PVC', type: 'Uniformes' },
        { code: '0002', description: 'Avental Térmico', type: 'EPI' },
        { code: '0003', description: 'Bota de Borracha PVC', type: 'Material' },
        { code: '0004', description: 'Luvas de Algodão', type: 'EPI' },
        { code: '0005', description: 'teste testando', type: 'EPI' },
        { code: '0006', description: 'qualquer teste', type: 'Uniformes' },
        { code: '0007', description: 'Avental Térmico', type: 'EPI' },
        { code: '0008', description: 'Bota de Borracha PVC', type: 'Material' },
        { code: '0009', description: 'Luvas de Algodão', type: 'EPI' },
        { code: '0010', description: 'teste testando', type: 'EPI' },
        { code: '0011', description: 'Avental de PVC', type: 'Uniformes' },
        { code: '0012', description: 'Avental Térmico', type: 'EPI' },
        { code: '0013', description: 'Bota de Borracha PVC', type: 'Material' },
        { code: '0014', description: 'Luvas de Algodão', type: 'EPI' },
        { code: '0015', description: 'teste testando', type: 'EPI' },
        { code: '0016', description: 'Avental de PVC', type: 'Uniformes' },
        { code: '0017', description: 'Avental Térmico', type: 'EPI' },
        { code: '0018', description: 'Bota de Borracha PVC', type: 'Material' },
        { code: '0019', description: 'Luvas de Algodão', type: 'EPI' },
        { code: '0020', description: 'teste testando', type: 'EPI' },
    ];

    useEffect(() => {

        init()

    }, []);

  
    //--- ### FUNÇÃO DOS CONTROLES E EXIBIÇÃO DA TABELA ### --- //

    let perPage = 6 // qts elementos quero ver por pg
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

        // Houve os eventos de cliks
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
            } )

        }

    }

    function update() {

        let page = state.page - 1           // --- EXEMPLO PRATICO ---
        let start = page * state.perPage    // page = 0 -> perPage = 5 -> 0 * 5 = 0
        let end = start + state.perPage     // start = 0 -> perPage = 5 -> 0 + 5 = 5

        const paginatedItems = tableData.slice(start, end)

        paginatedItems.forEach(()=>{})

        //console.log(paginatedItems)

        // --- Cria a tabela dinâmica ---

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
            
            //-- adiciona estilo dinamicamente (center = class do .css)
            td_code.classList.add('center')
            td_type.classList.add('center')
            td_actionEdit.classList.add('btEdit')  
            td_actionDelete.classList.add('btDelete')       
        }  
    }
    

    function init(){
        update()
        controls.createListeners()
    }

    return (

        <div className="profile-container">

            <SideBar />

            <div className="result-container">
                
                <Header title="Cadastro de itens"/>

                <div className="functions-container">



                    <form>

                        <input placeholder="Código ou Descrição" />

                        <button>
                            <FiSearch size={20} color="#fff"/>
                        </button>

                    </form>

                    <Link to="#">
                        Cadastrar
                    </Link>

                </div>


                <div className="register-container">

                    <table>
                        <thead>
                        <tr height="35">
                            <th width="200">Código</th>
                            <th width="400">Descrição</th>
                            <th width="200">Tipo</th>
                            <th width="100">Ações</th>
                        </tr>
                        </thead>

                        <tbody id="tableData"></tbody>

                    </table>


                    <div className="pagination">

                        <div className="first"> <FiChevronsLeft size="20"/> </div>

                        <div className="prev"> <FiChevronLeft size="20"/> </div>

                        <div className="numbers"> {state.page} </div>

                        <div className="next"> <FiChevronRight size="20"/> </div>

                        <div className="last"> <FiChevronsRight size="20"/> </div>

                    </div>

                </div>

                <Footer />

            </div>

        </div>

    )
}