export function BuscarMaterial(lista,nome){

const buscarProduto = lista.find((elemento) => elemento.nome === nome);
    if(buscarProduto === undefined) return {sucesso: false, mensagem: "Material não encontrado",dados: nome}

    return{sucesso:true,resultado:buscarProduto}

}

