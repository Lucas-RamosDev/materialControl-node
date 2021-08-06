import React from 'react';

import { Link } from 'react-router-dom';

import { 
    FiAlignLeft,
    FiLogOut,
} from 'react-icons/fi';

import LogoBr from '../../assets/logoBR.png'

import './styles.css' 

export default function Header(){
    return(

        <header>               

            <FiAlignLeft className="bt-menu" size={22}/>

            <img src={LogoBr}/>

            <span>Controle de Materiais  - Departamento pessoal</span>

            <Link to="/"><FiLogOut className="bt-logout" size={20}/></Link> 

        </header>

    )
}