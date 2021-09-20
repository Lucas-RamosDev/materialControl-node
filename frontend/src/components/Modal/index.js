import React from "react";

import { FiTrash2 } from 'react-icons/fi'
import './styles.css'

const ModalController = require('../../controllers/ModalController')

export default function ModalTrash(){

  return(

    <div className="modal-trash">

      <div className="modal">
          <FiTrash2 className="modalImgDelete" />

          <h3>Excluir Registro</h3>

          <p>Quer mesmo excluir esse item "Avental de PVC" ? <br/>
          Ele será apagado para sempre.
          </p>

          <footer>

              <button onClick={() => ModalController.close()}>
                  Cancelar
              </button>

              <button>
                  Excluir job
              </button>

          </footer>

      </div>

    </div>

  )

}
