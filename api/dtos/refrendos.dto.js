const DatosGenerales = require("./datosgenerales.dto");

class Refrendos {
    id = null;
    iddatosgenerales = new DatosGenerales();
    fechavencimiento = Date.now();
    fechapagado = Date.now();
    interes = 0;
    abonocapital = 0;
    recargo = 0;
    estado = "";
    observaciones = "";
}

module.exports = Refrendos;