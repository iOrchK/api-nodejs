const Clientes = require("./clientes.dto");

class DatosGenerales {
    id = null;
    fecha = Date.now();
    idcliente = new Clientes();
    cotitular = "";
    capital = 0;
    tasa = "";
    interes = 0;
    descripcion = "";
    caracteristicas = "";
    anclaje = false;
    entregainmediata = false;
    validado = false;
    estado = "";
    observacion = "";
}

module.exports = DatosGenerales;