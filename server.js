const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3001, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
})