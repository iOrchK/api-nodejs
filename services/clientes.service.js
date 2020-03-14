const BaseService = require("./base.service");

class ClientesService extends BaseService {
    constructor({ ClientesBusiness }) {
        super(ClientesBusiness);
    }
}

module.exports = ClientesService;