function openNav() {
    sidenav = "250px"
    if(document.getElementById("submenu").style.width == sidenav){
        closeNav()
    } else {
        document.getElementById("submenu").style.width = sidenav
        document.querySelector("main").style.marginRight = sidenav
        document.querySelector("main").style.paddingRight = "10%"
        document.querySelector("nav").style.marginRight = sidenav
        console.log(document.querySelector("main").style.margin)
    }
}

function closeNav() {
    document.getElementById("submenu").style.width = "0"
    document.querySelector("main").style.marginRight = "10%"
    document.querySelector("main").style.paddingRight = "0"
    document.querySelector("nav").style.marginRight = "0"
}

document.getElementById("rick").addEventListener("click", function(){
    window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");    
})
