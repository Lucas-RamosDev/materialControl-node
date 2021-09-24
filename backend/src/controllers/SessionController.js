
const connection = require('../database/connection')


module.exports = {
  async create(request, response) {
    
    const { user } = request.body;
    const { password } = request.body;

    const login = await connection('users')
      .where('user', user) // seleciona o login correspondente
      .where('password', password) // seleciona o password correspondente

      .select('name', 'market', 'permission' ) // seleciona apenas o nome

      .first();

      if (!login) { // se o usuario não exitir
        return response.status(400).json({error: 'User or Password invalid!'});
      }

      return response.json(login)
  }

}
