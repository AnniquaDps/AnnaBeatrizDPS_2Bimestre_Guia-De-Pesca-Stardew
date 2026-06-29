const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const {Pool} = require('pg');

let porta = process.env.PORTA;

const app = express();
app.use(express.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

const pool = new Pool({
    host: process.env.DB_HOST ,
    port: process.env.DB_PORT ,
    database: process.env.DB_NAME ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASSWORD
})

// Buscar todos os peixes

app.get('/buscaPeixe', async (req, res) => {
    const resposta = await pool.query('SELECT * FROM PEIXE;');
    const peixe = await resposta.rows;

    console.log(peixe);
    res.send({peixes: peixe, status:"Sucesso"})
})

// Buscar todos os locais 

app.get('/buscaLocal', async (req, res) => {
    const resposta = await pool.query('SELECT * FROM LOCALIZACAO;');
    const local = await resposta.rows;

    console.log(local);
    res.send({locais: local, status:"Sucesso"})
})

// Buscar tudo

app.get('/buscaPeixeLocal', async (req, res) => {
    const resposta = await pool.query('SELECT * FROM PEIXE P, LOCALIZACAO L WHERE L.nome_peixe = P.nome_peixe;');
    const PeixeLocal = await resposta.rows;

    console.log(PeixeLocal);
    res.send({ambos:PeixeLocal, status:"Sucesso"})
});

//Busca por nome 

app.post('/BuscaNomePeixe', async (req, res) => {
    try {
    const NomePeixe = req.body.peixe;

    const resposta = await pool.query(`SELECT * FROM PEIXE P, LOCALIZACAO L WHERE L.nome_peixe = P.nome_peixe AND LOWER(P.nome_peixe) LIKE LOWER('%${NomePeixe}%');`);
    const buscaEspecial = await resposta.rows;

    console.log(buscaEspecial);
    res.send({RespostaEspecial: buscaEspecial, status: "Sucesso"});
    } catch (erro) {
        return res.status(500).json({
        status: "erro",
        })
    }
    });

app.listen(porta, ()=>{
    console.log("Peixes esperando para serem chamados")
});



