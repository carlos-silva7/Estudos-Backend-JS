import express from "express"
import { BuscarMaterial } from "./BuscasDeMateriais.js"
import { ProdutosAbaixo } from "./filtragens.js"
import { entradaEstoque, saidaEstoque } from "./regradenegocio.js"


export const produtos =[{nome:"Rolamento",quantidade:5,estoqueMinimo: 2}]


export const app = express()
export const mid = express.json()

app.use(mid)

app.post("/",(req,res)=>{

const resultado = req.body

const dados = login(resultado)

if(dados.sucesso == false) res.status(400).json(dados)

    else{res.status(200).json(dados)}


})



app.get("/Buscar-Materiais",(req,res)=>{

const resultado = req.query.nome

const dados = BuscarMaterial(resultado)

if(dados.sucesso == false) res.status(404).json(dados)

    else{res.status(200).json(dados)}

})


app.get("/Produtos-abaixo-do-EstoqueMinimo",(req,res)=>{

const dados = ProdutosAbaixo()

if(dados.sucesso == false) res.status(404).json(dados)

    else{res.status(200).json(dados)}

})

app.put("/produtos/:nome/saida",(req,res)=>{

const resultadoNome = req.params.nome
const resultadoQuantidade = req.body.quantidade

const dados = saidaEstoque(resultadoNome,resultadoQuantidade)

if(dados.sucesso == false) res.status(400).json(dados)

    else{res.status(200).json(dados)}


})

app.put("/produtos/:nome/entrada",(req,res)=>{


const resultadoNome= req.params.nome
const resultadoQuantidade = req.body.quantidade

const dados = entradaEstoque(resultadoNome,resultadoQuantidade)

if(dados.sucesso == false) res.status(400).json(dados)
    else{res.status(200).json(dados)}



})