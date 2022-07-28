import React from 'react';
//constantes do calculo
const depreciacao=36
const dias=5
const horasd=12
const consumo =300
const invest=2090
//
let lucro =30
let material =120
let custoenergia=0.94
let salario=1100.00
let despesas=80
let primer =18
//valores passados dos obj catalogo
let Timpressao=6
let Tmaterial=0.1
let Tprimers=2
//variaveis auxiliares
let Aux_totalmaterial
let Aux_custoenergia
let Aux_salariototal
let Aux_despesas
let Aux_depreciacao
let ValorFinal

function Calcular(){
    Aux_totalmaterial=material*Tmaterial //calcula valor material gasto
    Aux_custoenergia=Timpressao*(consumo*(custoenergia/1000)) //calcula valor energia gasta no tempo da impressão//calcula volor salario hora
    Aux_salariototal=(((salario*2)/(dias*8*4))/10)*Timpressao //calcula valor do salario ganho pela peça
    Aux_despesas=Timpressao*(despesas/(dias*8*4)) //calcula rasteio das despesas 
    Aux_depreciacao=Timpressao*(invest/(depreciacao*dias*horasd*4))
    ValorFinal=((Aux_salariototal+Aux_despesas+Aux_totalmaterial+Aux_custoenergia+Aux_depreciacao)*(1+(lucro*0.01))+(Tprimers*primer))
    console.log((ValorFinal.toFixed(2)))
return(
    <>

    </>
)
}

export default Calcular