/* Executar o comando: "npx knex migrate:latest" para executar o comando de criação das tabelas */

// - responsável por criar a tabela
exports.up = function(knex) {
  return knex.schema.createTable('items', function(table) {
    table.increments();
    table.string('code').notNullable();
    table.string('description').notNullable();
    table.string('type').notNullable();
    table.string('uniform').notNullable();
    table.string('certificate').notNullable();

    // - serve para deixar registrado qual "user" criou este item
    table.string('user_id').notNullable()
  });
};

// - responsável por deletar a tabela caso algo de errado
exports.down = function(knex) {
  return knex.schema.dropTable('items')
};
