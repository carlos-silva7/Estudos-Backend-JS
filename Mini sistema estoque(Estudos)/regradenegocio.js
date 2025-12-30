import { ValidarCancelamento,VerificacaoNumero,VerificacaoTexto } from "./verificacao.js";
import RegistrarHistorico from "./RegistrarHistoricos.js";
import { BuscarMaterial } from "./BuscasDeMateriais.js";
import { produtos } from "./estoque.js";



export const Historico = []



export function saidaEstoque (nomeItem,quantidadeSolict,usuario) {


    const item = VerificacaoTexto(nomeItem)
    if(item.sucesso === false) return {mensagem:"Erro na operação"}

    const qtdSolicitada = VerificacaoNumero(quantidadeSolict)
    if(qtdSolicitada.sucesso === false) return{mensagem: "Erro na operação!"}
    
    const user = VerificacaoTexto(usuario)
    if(user.sucesso === false) return{mensagem: "Erro na operação!"}


    const ProdutoEncontrado = BuscarMaterial(produtos,item.resultado)
    if(ProdutoEncontrado.sucesso === false) return{mensagem:"Material não encontrado!"}

    
        if(qtdSolicitada.resultado>ProdutoEncontrado.resultado.quantidade) return {sucesso: false, mensagem:"Quantidade invalida!",dados: qtdSolicitada.resultado}
        else
            if(qtdSolicitada.resultado<=ProdutoEncontrado.resultado.quantidade) 
                {ProdutoEncontrado.resultado.quantidade -= qtdSolicitada.resultado;}

    RegistrarHistorico(Historico,item.resultado,qtdSolicitada.resultado,ProdutoEncontrado.resultado.quantidade,user.resultado,"Saida")
        
        return {sucesso: true,mensagem:"Saida realizada!", Material: item.resultado, SaldoAtualizado: ProdutoEncontrado.resultado.quantidade}


}

export function entradaEstoque(nomeItem,quantidadeEntrada,usuario) {

const item = VerificacaoTexto(nomeItem)
    if(item.sucesso === false) return {mensagem:"Erro na operação"}

    const qtdEntrada = VerificacaoNumero(quantidadeEntrada)
    if(qtdEntrada.sucesso === false) return{mensagem: "Erro na operação!"}
    
    const user = VerificacaoTexto(usuario)
    if(user.sucesso === false) return{mensagem: "Erro na operação!"}


    const ProdutoEncontrado = BuscarMaterial(produtos,item.resultado)
    if(ProdutoEncontrado.sucesso === false) return{mensagem:"Material não encontrado!"}
            if(qtdEntrada.resultado>0) 
                {ProdutoEncontrado.resultado.quantidade += qtdEntrada.resultado;}

    RegistrarHistorico(Historico,item.resultado,qtdEntrada.resultado,ProdutoEncontrado.resultado.quantidade,user.resultado,"Entrada")
        
        return {sucesso: true,mensagem:"Entrada realizada!", Material: item.resultado, SaldoAtualizado: ProdutoEncontrado.resultado.quantidade}

    
}