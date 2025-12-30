export function ProdutosAbaixo(lista) {

const MaterialAbaixo =  lista.filter((elemento)=>elemento.quantidade< elemento.estoqueMinimo)
if(MaterialAbaixo.length === 0) return{mensagem:"Não contém produto com estoque abaixo do minimo!"} 

return{mensagem:"PRODUTOS ABAIXO DO ESTOQUE MINIMO",
        ProdutosAbaixo:MaterialAbaixo
}

}