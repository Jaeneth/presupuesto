const totalIngresos = (ingresos) => {
    let totalIngreso = 0;
    for (const ingreso of ingresos) {
      totalIngreso += ingreso;
    }
    return totalIngreso;
  };
  
  const totalEgresos = (egresos) => {
    let totalEgreso = 0;
    for (const egreso of egresos) {
      totalEgreso += egreso;
    }
    return totalEgreso;
  };
  

  const cargarCabecero = () => {
    let egresos = {
        Renta: 900,
        Ropa: 400
        };
        let ingresos = {
        Quincena: 9000,
        Venta: 400
        };
  
    const presupuesto = totalIngresos(ingresos) - totalEgresos(egresos);
    const porcentajeEgreso = (totalEgresos(egresos) / totalIngresos(ingresos)) * 100;
  
    // Pruebas
    console.log("Presupuesto:", presupuesto);
    console.log("Porcentaje de egreso:", porcentajeEgreso);

  };
  
  // Prueba de cabecero
  cargarCabecero();

  // Para darle formato al valor que traeremos
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
  };
  
  // Para darle valor de porcentaje
  const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
  };
  
  // Para tomar los valores
  const valorMoneda = presupuesto;
  const valorPorcentaje = porcentajeEgreso;
  
  console.log("Valor formateado como moneda:", formatoMoneda(valorMoneda));
  console.log("Valor formateado como porcentaje:", formatoPorcentaje(valorPorcentaje));
  
  