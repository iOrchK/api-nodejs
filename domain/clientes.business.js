const BaseBusiness = require("./base.business");
const Clientes = require("./models/clientes");

class ClientesBusiness extends BaseBusiness {
    constructor({ClientesRepository}) {
        super(ClientesRepository, Clientes);
    }
}

module.exports = ClientesBusiness;