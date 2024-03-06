  // Arreglos de ingresos y egresos
  let ingresos = [new Ingreso('Salario', 20000), new Ingreso('Venta auto', 50000)];
  let egresos = [new Egreso('Renta', 4000), new Egreso('Ropa', 800)];

// Funciones de cálculo
const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = (totalEgresos() / totalIngresos()) * 100;
  
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
  };
  
  const totalIngresos = () => {
    let totalIngreso = 0;
    for (const ingreso of ingresos) {
      totalIngreso += ingreso.valor;
    }
    return totalIngreso;
  };
  
  const totalEgresos = () => {
    let totalEgreso = 0;
    for (const egreso of egresos) {
      totalEgreso += egreso.valor;
    }
    return totalEgreso;
  };

  
  const formatoMoneda = valor => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
  };
  
  const formatoPorcentaje = valor => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
  };
  
  
  // Cargar aplicación
  const cargarApp = () => {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
  };
  
  document.addEventListener('DOMContentLoaded', cargarApp);
  
  // Cargar ingresos
  const cargarIngresos = () => {
    let ingresosHTML = '';
    for (const ingreso of ingresos) {
      ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
  };
  
  const crearIngresoHTML = ingreso => {
    let ingresoHTML = `
      <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
          <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
          <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
              <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    `;
    return ingresoHTML;
  };
  
  // Cargar egresos
  const cargarEgresos = () => {
    let egresosHTML = '';
    for (const egreso of egresos) {
      egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
  };
  
  const crearEgresoHTML = egreso => {
    let egresoHTML = `
      <div class="elemento limpiarEstilos">
        <div class="elemento_descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
          <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
          <div class="elemento_porcentaje">${formatoPorcentaje((egreso.valor / totalEgresos()) * 100)}</div>
          <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn">
              <ion-icon name="close-circle-outline" onclick="eliminarEgreso(${egreso.id})"></ion-icon>
            </button>
          </div>
        </div>
      </div>
    `;
    return egresoHTML;
  };
  
  // Eliminar ingreso
  const eliminarIngreso = id => {
    const indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
  };
  
  // Eliminar egreso
  const eliminarEgreso = id => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
  };
  
  // Agregar datos
  const agregarDato = () => {
    const forma = document.getElementById('forma');
    const tipo = forma['tipo'];
    const descripcion = forma['descripcion'];
    const valor = forma['valor'];
  
    if (descripcion.value !== '' && valor.value !== '') {
      if (tipo.value === 'ingreso') {
        ingresos.push(new Ingreso(descripcion.value, +valor.value));
        cargarCabecero();
        cargarIngresos();
      } else {
        egresos.push(new Egreso(descripcion.value, +valor.value));
        cargarCabecero();
        cargarEgresos();
      }
    }
  };
  
  document.getElementById('forma').addEventListener('submit', function(e) {
    e.preventDefault();
    agregarDato();
  });