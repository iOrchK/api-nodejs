const BaseService = require("./base.service");

class UsuariosService extends BaseService {
    constructor({UsuariosBusiness}) {
        super(UsuariosBusiness);
    }
}

module.exports = UsuariosService;