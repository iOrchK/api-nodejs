const Identificaciones = require("./identificaciones");
const Clasificaciones = require("./clasificaciones");
const Usuarios = require("./usuarios");

class Clientes {
    id = null;
    numerocliente = "";
    fechacreacion = Date.now();
    nombre = "";
    telefono = "";
    domicilio = "";
    correo = "";
    ididentificacion = new Identificaciones();
    claveidentificacion = "";
    cotitular = "";
    observaciones = "";
    idclasificacion = new Clasificaciones();
    activo = true;
    eliminado = false;
    idcreadopor = new Usuarios();
}

module.exports = Clientes;