const connection = require('../database/connection')

module.exports = {
  async create(request, response) {
    
    
    const code = "1234"
    
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

  }
}

/*
    table.string('code').notNullable();
    table.string('description').notNullable();
    table.string('type').notNullable();
    table.string('uniform').notNullable();
    table.string('certificate').notNullable();

*/