const express = require('express');
const routes = require('./routes');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

// MÉTODOS HTTP: 
// GET: Buscar/Listar informações do back-end
// POST: Criar uma informação no back-end
// PUT: Alterar uma informação no back-end
// DELETE: Deletar uma informação no back-end

// TIPOS DE PARÂMETROS:
// Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação) (/users?name=Arthur)
//  -> Acessa com request.query
// Route Params: Parâmetros utilizados para identificar recursos (/users/:id)
//  -> Acessa com request.params
// Request Body: Corpo da requisição, utilizado para criar ou alterar recursos (/users)
// -> Acessa com request.body

app.listen(3333);