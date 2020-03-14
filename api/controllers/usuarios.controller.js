const BaseController = require("./base.controller");
const UsuariosDto = require("../dtos/usuarios.dto");

class UsuariosController extends BaseController {
    constructor({UsuariosService}) {
        super(UsuariosService, UsuariosDto);
    }
}

module.exports = UsuariosController;
