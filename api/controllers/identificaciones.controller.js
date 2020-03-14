const BaseController = require("./base.controller");
const IdentificacionesDto = require("../dtos/identificaciones.dto");

class IdentificacionesController extends BaseController {
    constructor({IdentificacionesService}) {
        super(IdentificacionesService, IdentificacionesDto);
    }
}

module.exports = IdentificacionesController;