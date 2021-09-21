
/* Executar o comando: "npx knex migrate:latest" para executar o comando de criação das tabelas */

// - responsável por criar a tabela
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table) {
    //table.string('id').primary();
    table.increments();
    table.string('name').notNullable();
    table.string('user').notNullable();
    table.string('password').notNullable();
    table.string('market').notNullable();
    table.string('permission').notNullable();

  });
};

// - responsável por deletar a tabela caso algo de errado
exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
