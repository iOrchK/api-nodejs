const BaseService = require("./base.service");

class IdentificacionesService extends BaseService {
    constructor({ IdentificacionesBusiness }) {
        super(IdentificacionesBusiness);
    }
}

module.exports = IdentificacionesService;