let ingreso = parseFloat(prompt("A cuanto dinero equivale su salario?"))
let gastoDiario = ingreso / 30
for (let i = 0; i < 31; i++){
    let gastoTotal = gastoDiario * i
    console.log("En el día", i, "te quedan", ingreso - gastoTotal, "para gastar en el mes")
}
