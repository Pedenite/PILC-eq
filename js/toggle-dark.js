var classDM = "dark-mode"
var dark = false
var prevDark = localStorage.getItem("pilc-eq-dark")
console.log(prevDark)

if ((prevDark == "true" || !prevDark) && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add(classDM)
    dark = true
}

document.getElementById("dark-mode-btn").addEventListener("click", function () {
    document.body.classList.toggle(classDM)
    dark = !dark
    localStorage.setItem("pilc-eq-dark",dark);
});
