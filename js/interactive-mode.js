let ultimoValue = ''
let equacaoField = document.getElementById("equacao")
let equacaoDica = document.getElementById("dica-eq")

equacaoDica.addEventListener("click", function(){
    equacaoDica.style.display = "none"
})

function updateEquacao() {
    equacaoField.value = equacaoField.value.replace("X", "x")
    if (new RegExp('^[0-9 x = + * ) ^ ( / -]{0,}$').test(equacaoField.value)) {
        ultimoValue = equacaoField.value
    } else {
        equacaoField.value = String(ultimoValue)
    }
}

function resolver() {
    let equacao = equacaoField.value
    const grau2 = equacao.replace(" ", "").includes("x^2")
    const result = document.getElementById("solution")
    let funFormatada = ""
    if (!equacao) {
        equacao = "x = 0"
        funFormatada = "x"
    } else if (!equacao.includes("=")) {
        if (equacao.includes("x")) {
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
        xAxis: {
            label: 'x'
        },
        yAxis: {
            label: 'y, f(x)'
        },
        grid: true,
        data: [{
            fn: funcao, color: '#441111'
        }]
    })
}

function formatEq(equacao, grau2) {
    let funcao = equacao.replace(" ", "").split("=")[1]

    if(grau2 && !funcao.includes(",")){
        funcao = `${funcao},${funcao}`
    }

    if (funcao.includes(",")) {
        funcao = funcao.split(",")
        let a = eval(funcao[0])
        let b = eval(funcao[1])
        const s = a + b
        const p = a * b
        funcao = `x^2 - (${s})x + (${p})`
    } else if (grau2) {
        funcao = 'x^2'
    } else {
        funcao = `x - (${funcao})`
    }
    return funcao
}
