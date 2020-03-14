const BaseService = require("./base.service");

class ClasificacionesService extends BaseService {
    constructor({ ClasificacionesBusiness }) {
        super(ClasificacionesBusiness);
    }
}

module.exports = ClasificacionesService;