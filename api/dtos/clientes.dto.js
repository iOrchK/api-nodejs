const Identificaciones = require("./identificaciones.dto");
const Clasificaciones = require("./clasificaciones.dto");
const Usuarios = require("./usuarios.dto");

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