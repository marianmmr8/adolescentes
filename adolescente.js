const casilla = document.getElementById("container");
const pregunta =document.getElementById("respuesta");

const imgAdolescente = document.getElementById("imagen")
const fraseInput = document.getElementById("frase")
const btnDecir = document.getElementById("decir")

const contestar =() =>{
    
const frase = fraseInput.value.trim()
const esPregunta = frase.endsWith("?")
const esGrito = frase === frase.toUpperCase() && frase !== frase.toLocaleLowerCase()

if(frase === "" ) {
    pregunta.textContent = " Dejame pesada"
    imgAdolescente.src ="adolescentequemedejes.jpg"
}else if (esPregunta && esGrito) {

    pregunta.textContent = "¡Tengo todo el dia!" 

    imgAdolescente.src = "adolescentepasota.jpg"
    
}else if(esGrito){
    pregunta.textContent = "¡Que ya voy"

    imgAdolescente.src ="adolescenteenfadada.jpg"
}else if (esPregunta){
    pregunta.textContent = "Ni idea"

    imgAdolescente.src ="adolescentequierealgo.jpg"

}else{
    pregunta.textContent = "vale sí, que quiero que me lleves al voley"
    imgAdolescente.src ="adolescentequierealgo.jpg"
}

}

btnDecir.addEventListener("click", contestar)

fraseInput.addEventListener("keydown", (event )=>{
    
    if(event.key === "Enter"){
        contestar()
    }
})