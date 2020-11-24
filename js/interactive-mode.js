function resolver(){
    let equacao = document.getElementById("equacao").value
    const grau2 = equacao.replaceAll(" ", "").includes("x^2")
    const result = document.getElementById("solution")
    let funFormatada = ""
    if(!equacao){
        equacao = "x = 0"
        funFormatada = "x"
    } else if(!equacao.includes("=")){
        if(equacao.includes("x")){
            funFormatada = equacao
            equacao = `${equacao} = 0`
        } else {
            equacao = `x = ${equacao}`
        }
    }

    const resp = `x = ${nerdamer.solve(equacao, 'x').toString().replace("[", "").replace("]", "")}`
    const funcao = funFormatada ? funFormatada : formatEq(resp, grau2)
    result.innerHTML = `<b>Resultado:</b><br>${resp}<br><br><b>Função gerada:</b><br>y = ${funcao}`

    functionPlot({
        target: '#grafico',
        data: [{
            fn: funcao, color:'#441111'
        }]
    })
}

function formatEq(equacao, grau2){
    let funcao = equacao.replaceAll(" ", "").split("=")[1]
    if(funcao.includes(",")){
        funcao = funcao.split(",")
        const a = funcao[0]
        const b = funcao[1]
        const s = a+b
        const p = a*b
        funcao = `x^2 - (${s})x + (${p})`
    } else if(grau2){
        funcao = 'x^2'
    } else {
        funcao = `x - (${funcao})`
    }
    return funcao
}
