

export function VerificacaoTexto (texto) {

    if(texto.trim() === "") return{sucesso: false,mensagem: `${texto},está vazio!`}
    else{texto = texto.trim().toLowerCase()}    

    return {sucesso:true,resultado: texto}

}

export function VerificacaoNumero (numero) {
    if(numero.trim() === "") return{sucesso: false,mensagem: `${numero},está vazio!`}
   
    
    const TransformarEmTipoNumber = Number(numero)
    
    if(isNaN(TransformarEmTipoNumber)) return{sucesso:false,mensagem:`${TransformarEmTipoNumber},é necessario valor valido!`}
    if(TransformarEmTipoNumber <= 0) return{sucesso:false, mensagem: `${TransformarEmTipoNumber}, é necessario ser quantidade valida!`}
    

    return {sucesso: true,
            resultado: TransformarEmTipoNumber
    }
}

export function ValidarCancelamento (operacao) {

    if(operacao === null) return {sucesso: false, mensagem: "Cancelando operação..."}
    
}





