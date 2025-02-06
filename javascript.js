/* "use strict"

const botonDesayuno = document.querySelector(".boton-desayuno")
const botonAlmuerzo = document.querySelector(".boton-almuerzo")
const galeriaGrid = document.querySelector(".galeria-grid")
const desayuno = document.querySelectorAll(".desayuno")
const almuerzo = document.querySelectorAll(".almuerzo")


botonDesayuno.addEventListener("click",()=>{
    botonDesayuno.style.background = "red"
    botonDesayuno.style.color = "white"
    desayuno.forEach((e)=>{
        e.style.visibility = "hidden"
    })
        

})

botonAlmuerzo.addEventListener("click",()=>{
    botonAlmuerzo.style.background = "red"
    botonAlmuerzo.style.color = "white"
    almuerzo.forEach((e)=>{
        e.style.position = "absolute"
    })
        

}) */