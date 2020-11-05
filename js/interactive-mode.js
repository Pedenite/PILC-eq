function resolver(){
    var equacao = document.getElementById("equacao").value
    var result = document.getElementById("resul-eq")
    var res = document.createTextNode(eval(equacao))
    result.appendChild(res)
    result.appendChild(document.createElement("br"))
}