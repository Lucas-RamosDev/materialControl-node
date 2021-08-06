import React from 'react'

import { Link } from 'react-router-dom'

import { 
        FiPlusCircle, 
        FiPackage, 
        FiShoppingCart,
        FiSend, 
        FiBookmark, 
        FiClipboard 
    } from 'react-icons/fi' // importa icone

import './styles.css'

export default function SideBar(){

    return (

        <nav>

            <ul>

                <li>
                    <Link to="/register">
                        < FiPlusCircle size={20} />
                        <span>
                            Cadastros
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="/stock">
                        < FiPackage size={20} />
                        <span>
                            Estoque
                        </span>
                    </Link>
                </li>


                <li>
                    <Link to="/buy">
                        < FiShoppingCart size={20} />
                        <span>
                            Compras
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="/report">
                        < FiSend size={20} />
                        <span>
                            Pedidos
                        </span>
                    </Link>
                </li>

                <li>
                    <Link to="/consumption">
                        < FiBookmark size={20} />
                        <span>
                            Consumo
                        </span>
                    </Link>
                </li>  

                <li>
                    <Link to="/request">
                        < FiClipboard size={20} />
                        <span>
                            Relatórios
                        </span>
                    </Link>
                </li>

            </ul>             

        </nav>

    )
}