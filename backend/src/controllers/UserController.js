const connection = require('../database/connection')

module.exports = {

  // - LISTA OS USUÁRIOS CADASTRADOS
  async index(request, response) {
    const users = await connection('users').select('*');

    return response.json(users);
  },


  // - CADASTRA USUÁRIO NOVO
  async create(request, response) {
    const {name, user, password, market, permission} = request.body

    await connection('users').insert({
      name,
      user,
      password,
      market,
      permission
    })

    return response.json({ name })
  }
};