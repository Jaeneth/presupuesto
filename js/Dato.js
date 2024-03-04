class Dato {
    constructor(descripcion, valor) {
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get descripcion() {
        return this._descripcion;
    }

    set descripcion(descripcion) {
        this._descripcion = descripcion;
    }

    get valor() {
        return this._valor;
    }

    set valor(valor) {
        this._valor = valor;
    }
}

// Prueba
const miDato = new Dato("Ejemplo de dato", 42);
console.log(`Descripción: ${miDato.descripcion}, Valor: ${miDato.valor}`);

// Importa la clase padre Dato desde el archivo Dato.js (asegúrate de que ambos archivos estén en la misma carpeta)
// const Dato = require('./Dato'); // Descomenta esta línea si estás utilizando módulos CommonJS

class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        // Invoca al constructor de la clase padre "Dato"
        super(descripcion, valor);

        // Asigna un valor al atributo _id utilizando la variable estática contadorIngresos
        this._id = ++Ingreso.contadorIngresos;
    }

    // Método getter para obtener el valor del atributo _id
    get id() {
        return this._id;
    }
}

// Prueba
const miIngreso = new Ingreso("Salario", 3000);
console.log(`Descripción: ${miIngreso.descripcion}, Valor: ${miIngreso.valor}, ID: ${miIngreso.id}`);
