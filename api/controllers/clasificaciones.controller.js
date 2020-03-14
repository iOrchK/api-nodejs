const BaseController = require("./base.controller");
const ClasificacionesDto = require("../dtos/clasificaciones.dto");

class ClasificacionesController extends BaseController {
    constructor({ClasificacionesService}) {
        super(ClasificacionesService, ClasificacionesDto);
    }
}

module.exports = ClasificacionesController;