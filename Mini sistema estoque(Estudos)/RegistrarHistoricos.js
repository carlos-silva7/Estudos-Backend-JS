export default function RegistrarHistorico(historico,nome,quantidade, saldoATT,usuario,TipoMovimentação) {
 
    return historico.push({item: nome,
                    TipoMovimentação: TipoMovimentação,
                    quantidade: quantidade,
                    SaldoAtualizado: saldoATT,
                    data:new Date(),
                    usuario: usuario})

}


