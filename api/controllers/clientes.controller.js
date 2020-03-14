const BaseController = require("./base.controller");
const ClientesDto = require("../dtos/clientes.dto");

class ClientesController extends BaseController {
    constructor({ClientesService}) {
        super(ClientesService, ClientesDto);
    }
}

module.exports = ClientesController;