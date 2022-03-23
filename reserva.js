let contenedor=document.getElementById("contenedor")
let bandera=true
contenedor.addEventListener("click", function(event){
    if(bandera==true){
        if(event.target.classList.contains("w-100")){
            event.target.src="img/silla roja.png"
            bandera=false
        }
    }else{
        if(event.target.classList.contains("w-100")){
            event.target.src="img/silla.png"
        bandera=true
        }
    }   
})
let etiquetaBoton=document.getElementById("boton")
etiquetaBoton.addEventListener("click" , escuchar)
function escuchar(){
    event.preventDefault()
    console.log("hizo click")
    let pelicula=document.getElementById("pelicula").value
    console.log (pelicula)
    let asiento=document.getElementById("asiento").value
    console.log (asiento)
    let cantidad=document.getElementById("cantidad").value
    console.log(cantidad)
    alert("su pelicula es " + pelicula)
    alert("el precio total es " + (asiento*cantidad))
}
