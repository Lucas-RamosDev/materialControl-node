import React from "react";

import './styles.css'

const ModalController = require('../../controllers/ModalController')

export default function ModalEdit(){

  return(

    <div className="modal-edit">
                
      <div className="modal-edit-box">

        <h1>Editar</h1>

        <p>Edite o item com as informações <br/>
            necessárias.</p>
                        
        <form>

          <label>Código:</label>

          <p>0001</p>

          <label>Descrição do item:</label>
          <input 
              placeholder="Descrição do item"
              value="Avental de PVC"
          />

          <div className="box-button">

            <button
                type="submit"
                onClick={() => ModalController.closeEdit()}
            >Cancelar
            </button>

            <button
                type="submit"
            >Gravar
            </button>

          </div>

        </form>

      </div>

    </div>

  )

}
