const BaseController = require("./base.controller");
const RefrendosDto = require("../dtos/refrendos.dto");

class RefrendosController extends BaseController {
    constructor({RefrendosService}) {
        super(RefrendosService, RefrendosDto);
    }
}

module.exports = RefrendosController;