const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    
    
    const code = Math.round(Math.random() * (9999 - 1000) + 1000) //-cria um numero aleatorio entre 1000 a 9999 e arredonda o mesmo

    const { description, type, uniform, certificate } = request.body;

    const user_id = request.headers.authorization;

    await connection('items').insert({
      code,
      description,
      type,
      uniform,
      certificate,
      user_id
    })

    return response.json({ code, description })

  },

  async index(request, response) {
    const items = await connection('items').select('*');
  
    return response.json(items);
  },

  async delete(request, response) {
    const { id } = request.params; //pega o id do item que desejo deletar
    const user_id = request.headers.authorization; // pega o id do usuario que esta tentando deletar

    const items = await connection('items')
      .where('id', id) // seleciona do banco o item o o id seja igual ao passado pelo "request.params"
      .select('user_id') // seleciona apenas a coluna onde esta o "user_id"
      .first(); // faz retornar apenas 1 resultado

    if (items.user_id !== user_id) {
      return response.status(401).json({error: 'Operation not permited.'});
    }

    await connection('items').where('id', id).delete();

    return response.status(204).send();

  }


}

