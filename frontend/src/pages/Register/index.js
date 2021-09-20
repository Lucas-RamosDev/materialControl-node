import React from 'react';

import { Link } from 'react-router-dom'

import {
    FiChevronsLeft,
    FiChevronLeft,
    FiChevronsRight,
    FiChevronRight,
    FiTrash2,
    FiEdit
} from 'react-icons/fi'

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import ModalTrash from '../../components/Modal/ModalTrash';
import ModalEdit from '../../components/Modal/ModalEdit';
import ModalRegister from '../../components/Modal/ModalRegister';
import notFoundImg from '../../assets/notFound.png';

import './styles.css'

const DataRegisters = require('../../model/Register')
const ModalController = require('../../controllers/ModalController')

export default function Register() {


return (

    <div className="main-content">

        <Header />

        <SideBar />

        <main id="register">

            <div className="header">
                <h1 className="title">Cadastro de Itens</h1>
                <button onClick={() => ModalController.openRegister()}>Cadastrar</button>
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

                <table className="dataTable">
                    <thead>

                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Tipo</th>
                            <th colSpan="2">Ações</th>
                        </tr>

                    </thead>

                    <tbody>

                        {DataRegisters.get().map((prop, key) => {

                            return (

                                <tr key={key}>

                                    <td>{prop.code}</td>

                                    <td>{prop.description}</td>

                                    <td>{prop.type}</td>

                                    <td>
                                        <button onClick={() => ModalController.openEdit()}>
                                            <FiEdit className="edit"/>
                                        </button>
                                    </td>

                                    <td>
                                        <button onClick={() => ModalController.openTrash()}>
                                            <FiTrash2 className="delete"/>
                                        </button>
                                    </td>

                                </tr>
                            );                            

                        })}

                    </tbody>

                </table>

            </div>

            <div id="pagination" className="pagination">

                <div className="first" onClick={() => { }}>
                    <FiChevronsLeft size="20" />
                </div>

                <div className="prev" onClick={() => { }}>
                    <FiChevronLeft size="20" />
                </div>

                <div className="numbers"> {() => { }}
                    {/* Deveria ter algo aqui? */}
                </div>

                <div className="next" onClick={() => { }}>
                    <FiChevronRight size="20" />
                </div>

                <div className="last" onClick={() => { }}>
                    <FiChevronsRight size="20" />
                </div>
            </div>

            <div id="notFound" className="notFound">
                <h1>Ops! Sua pesquisa não foi encontrada.</h1>
                <img src={notFoundImg} alt="Pesquisa não Encontrada" />
            </div>

        </main>
            
        <ModalRegister />

        <ModalEdit />

        <ModalTrash />

    </div>

    

)
}