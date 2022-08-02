

// DESAFIO 1

let welcome = alert("Bienvenidos a Simplo Cocina, a continuación seleccionará el menú para que le enviemos!")
let menu = parseInt(prompt("Que deseas comer hoy?(Ingresa solamente el número de la opción): 1-Pizza, 2-Empanadas"))
while ((menu != 1 && menu != 2)) {
    alert("Producto inexistente, por favor escoja una opción válida")
    menu = parseInt(prompt("Que deseas comer hoy?(Ingresa solamente el número de la opción): 1-Pizza, 2-Empanadas"))
}
        
function pedido() {
    switch (menu){
        case 1:
            let saborPizza = parseInt(prompt("De qué sabor vas a querer tu pizza?(Ingresa solamente el número de la opción): 1-Muzzarella, 2-Napolitana, 3-Calabresa, 4-Jamón y morrones, 5-fuggazzetta."))
            if (saborPizza === 1) { 
                alert("Perfecto, tu pizza de Muzarella estará lista para retirar dentro de 40 minutos. El valor es de $1200")
            }
            else if (saborPizza === 2) {
                alert("Elegiste la especialidad de la casa, con mucho ajo y tomates cosechados en casa. Estará lista para retirar en 40 minutos. El valor es de $1500")
            }
            else if (saborPizza === 3) {
                alert("Excelente opción! La tendrás lista para retirar en 40 minutos. Total a pagar: $1450")
            }
            else if (saborPizza === 4) {
                alert("Siempre es buena una de jamón y morrones. Lista para retirar en 40 minutos. Total a pagar: $1650")
            }
            else if (saborPizza === 5) {
                alert("Perfecto, Fugazzeta! Estará lista para retirar en 40 minutos. Total a pagar: $1300")
            }
        break
        case 2: 
            let saborEmpanadas = parseInt(prompt("De qué sabor vas a querer tus empanadas?(Ingresa solamente el número de la opción): 1-Carne, 2-Jamon y queso, 3-Verdura"))
            if (saborEmpanadas === 1) {
                alert("Las mejores empanadas de carne del condado, con aceitunas, papa, y bien jugosas. Ahora elegí la cantidad.")
            }
            else if (saborEmpanadas === 2) {
                alert("Están terribles, con el mejor jamón y un queso bien ahumado! Ahora elegí la cantidad.")
            }
            else if (saborEmpanadas === 3) {
                alert("Riquisimas, y un poco más light jajaja. Ahora elegí la cantidad")
            }
            let cantidad = parseInt(prompt("Cuantas empanadas te preparamos? El valor por unidad es de $180"))
            let total = cantidad * 180
            alert('Perfecto, estarán listas para retirar en 45 minutos. El total a pagar es de :' + total)
            }
            
    }

pedido()
