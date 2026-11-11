const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let venta;
let totalVentas = 0;
let promedio;
let diasMayores100 = 0;
let mayorVenta = -1;
let diaMayorVenta = "";

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];

let i = 0;

function registrarVentas() {

    if (i < 5) {

        rl.question("Ingrese la venta del día " + dias[i] + ": $", (respuesta) => {

            venta = Number(respuesta);

            totalVentas = totalVentas + venta;

            if (venta >= 100) {
                diasMayores100++;
            }

            if (venta > mayorVenta) {
                mayorVenta = venta;
                diaMayorVenta = dias[i];
            }

            i++;
            registrarVentas();
        });

    } else {

        promedio = totalVentas / 5;

        console.log("\n----- RESULTADOS DE VENTAS -----");
        console.log("Total de ventas: $" + totalVentas);
        console.log("Promedio diario: $" + promedio);
        console.log("Días con ventas de $100 o más: " + diasMayores100);
        console.log("Día con mayores ventas: " + diaMayorVenta);
        console.log("Mayor venta: $" + mayorVenta);

        rl.close();
    }
}

registrarVentas();
