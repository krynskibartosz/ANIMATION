let nav = document.getElementById("navigation");
let test = document.querySelectorAll("a")
const menuAnimationOpen = document.getElementById('open').addEventListener('click', () => {
    nav.style.visibility = "visible"
    nav.style.transform = "translateX(0%)"
    // btnOpen.style.visibility = "hidden"
    test.style.color ="rgba(212, 50, 218)"
    console.log(test);
    
})


const menuAnimationClose = document.getElementById('close').addEventListener("click", () => {
    let btnClose = document.getElementById("close")
    nav.style.transform = "translateX(100%)"
})