const cargarCabecero = () => {
let egresos = [200,500];
let ingresos = [400,900];

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso;
    }
    return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso;
    }
    return totalEgreso;
}

let presupuesto = totalIngresos() - totalEgresos();
let porcentajeEgreso = totalEgresos()/totalIngresos();

console.log(presupuesto);
console.log(porcentajeEgreso);
console.log(totalIngresos());
console.log(totalEgresos());

}

cargarCabecero();