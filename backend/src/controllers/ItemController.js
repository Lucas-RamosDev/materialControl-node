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


}

