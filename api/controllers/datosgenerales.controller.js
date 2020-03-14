const BaseController = require("./base.controller");
const DatosGeneralesDto = require("../dtos/datosgenerales.dto");

class DatosGeneralesController extends BaseController {
    constructor({DatosGeneralesService}) {
        super(DatosGeneralesService, DatosGeneralesDto);
    }
}

module.exports = DatosGeneralesController;