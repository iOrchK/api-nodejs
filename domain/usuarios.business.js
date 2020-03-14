const BaseBusiness = require("./base.business");
const Usuarios = require("./models/usuarios");

class UsuariosBusiness extends BaseBusiness {
    constructor({UsuariosRepository}) {
        super(UsuariosRepository, Usuarios);
    }
}

module.exports = UsuariosBusiness;