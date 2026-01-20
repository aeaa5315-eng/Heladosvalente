//1. mensaje de contacto
function mostrarmensaje(){
    alert("gracias por contactar con helados vg pronto responderemos su mensaje")
}
//2. resaltar pagina activa del menu
const enlance = document.querySelectorAll("nav a");
enlance.forEach(enlace=>{
    if (enlace.href=== window.location.href){
        enlance.href.backgroundcolor= "#ff5d8f";
        enlace.style.color="white";
        enlace.style.padding="5px 10px";
        enlace.style.borderRadius="5px"

    }
});
//3.mostrar informacion del producto seleccionado
function mostrarProduct(sabor){
    alert("has seleccionado helado de "+ SABOR+". elaborado  con ingredientes naturales.");

    
}
//4. saludo dinamico segun la hora
const hora= new Date().getHours();
let saludo=""
if (hora<12){
    saludo ="Buenos dias";

}else if (hora<18){
    saludo="buenas tardes";

}else {
    saludo="Buenas noches";
}
console.log(saludo+",bienvenido a helados vf");
    