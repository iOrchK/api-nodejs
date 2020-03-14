const BaseBusiness = require("./base.business");
const Clasificaciones = require("./models/clasificaciones");

class ClasificacionesBusiness extends BaseBusiness {
    constructor({ClasificacionesRepository}) {
        super(ClasificacionesRepository, Clasificaciones);
    }
}

module.exports = ClasificacionesBusiness;