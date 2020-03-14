const BaseBusiness = require("./base.business");
const Identificaciones = require("./models/identificaciones");

class IdentificacionesBusiness extends BaseBusiness {
    constructor({IdentificacionesRepository}) {
        super(IdentificacionesRepository, Identificaciones);
    }
}

module.exports = IdentificacionesBusiness;