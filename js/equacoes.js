function show_ans(num){
    var ans = document.querySelectorAll(".answer")[num]
    var ansDisp = ans.style.display
    if(ansDisp == "block")
        ans.style.display = "none"
    else
        ans.style.display = "block"
}