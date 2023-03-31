let precio = parseInt(prompt("ingrese un precio de hamburguesa para saber como continuar con tu vida"))
let queso = prompt("Lleva queso extra?? (si o no)")

if (queso == "si") {  
        precio += 50;
}
if (precio<3000){
        alert("Podrias comprar mas de una burger")
}else if ((precio>3000) && (precio<5000)){
        alert("Comprá solo una o te quedas cortina para fin de mes")
}else{
        alert("Tu billetera tiene un mensaje: 'Saca la mano de ahí carajo'")
}
