/*
let dataRegisters = [

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
*/

import { useEffect } from 'react';

import api from '../services/api';

module.exports = {

  
  async get() {

    //const dataRegisters = await api.get('items')

    return dataRegisters
    
  }
  

}