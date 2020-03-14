const BaseService = require("./base.service");

class DatosGeneralesService extends BaseService {
    constructor({ DatosGeneralesBusiness }) {
        super(DatosGeneralesBusiness);
    }
}

module.exports = DatosGeneralesService;