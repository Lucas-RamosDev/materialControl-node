const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors()); // em desenvolvimento utilizar esse

app.use(express.json())
app.use(routes)


app.listen(3333);


/*
* --- ### MÉTODOS HTTP ### ---
*
* GET = Buscar/Listar uma informação no back-end
* POST = Criar uma informação no back-end
* PUT = Alterar uma informação no back-end
* DELETE = Deletar uma informação no back-end
*/

/*
* --- ### TIPOS DE PARAMENTROS ### ---
*
* Query Params: Parametros nomeados enviados na rota aopós o simbulo de "?" (Filtros, paginação)
* Route Params: Parametros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/