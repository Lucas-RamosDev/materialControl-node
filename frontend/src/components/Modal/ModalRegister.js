
import React from "react";

import './styles.css'

const ModalController = require('../../controllers/ModalController')

export default function ModalRegister(){

  return(

    <div className="modal-register">
                
      <div className="modal-register-box">
   
        <h1>Cadastrar</h1>
   
        <p>Preencha o formulário com as informações <br/>
            correspondentes.
        </p>
                        
        <form>         
   
            <select>
                <option value="">Selecione o tipo...</option>
                <option value="EPI's">EPI's</option>
                <option value="Materiais">Materiais</option>
                <option value="Vestimentas">Vestimentas</option>
            </select>
   
            <div className="input-between">
   
                <input
                    className="input-code" 
                    placeholder="Cód."
                />
   
                <input
                    placeholder="Descrição do item"
                />
   
            </div>
   
            <select>
                <option value="">Selecione o uniforme...</option>
                <option value="EPI's">EPI's</option>
                <option value="Materiais">Materiais</option>
                <option value="Vestimentas">Vestimentas</option>
            </select>
   
            <input
                placeholder="Certif. de aprovação (C/A)"
            />
    
            <div className="box-button">
    
                <button
                    type="submit"
                    onClick={() => ModalController.closeRegister()}
                >Cancelar
                </button>
    
                <button
                    type="submit"
                >Salvar
                </button>
    
            </div>
   
        </form>
   
    </div>
   
   </div>

  )

}



