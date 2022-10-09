//constantes do calculo
const depreciacao = 36
const dias = 5
const horasd = 12
const consumo = 300
const invest = 2090
//variaveis auxiliares
let Aux_totalmaterial
let Aux_custoenergia
let Aux_salariototal
let Aux_despesas
let Aux_depreciacao
//
let value
function arredondaHora(tempohora) {
    if (tempohora !== NaN) {
        let [h, m] = tempohora.split(':');
        value=parseInt(h)
        if (m > 0) {
            value=parseInt(h) + 1
        }
        return value
    }
}
function Calcular({impressao=0, pla=0, lucro = 30, material = 120, custoenergia = 0.94, salario = 1100.00, despesas = 80.00, primer = 17.00, Tprimers=0,pintura=0,isPrice}) {
    //console.log(impressao, pla, lucro , material , custoenergia , salario , despesas , primer , Tprimers,pintura,isPrice)
    let Timpressao = arredondaHora(impressao)
    let Tmaterial = parseFloat(pla)
    let valor 
    Aux_totalmaterial = material * Tmaterial //calcula valor material gasto
    Aux_custoenergia = Timpressao * (consumo * (custoenergia / 1000)) //calcula valor energia gasta no tempo da impressão//calcula volor salario hora
    Aux_salariototal = (((salario * 2) / (dias * 8 * 4)) / 10) * Timpressao //calcula valor do salario ganho pela 
    Aux_despesas = Timpressao * (despesas / (dias * 8 * 4)) //calcula rasteio das despesas 
    Aux_depreciacao = Timpressao * (invest / (depreciacao * dias * horasd * 4))
    valor = ((Aux_salariototal + Aux_despesas + Aux_totalmaterial + Aux_custoenergia + Aux_depreciacao) * (1 + (lucro * 0.01)) + (Tprimers * primer)+parseFloat(pintura))
    if(isPrice)
    return ((parseFloat(valor)).toFixed(2))
    else
    return ((parseFloat( Aux_salariototal )).toFixed(2))
}
export default Calcular