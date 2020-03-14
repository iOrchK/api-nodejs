const BaseBusiness = require("./base.business");
const Refrendos = require("./models/refrendos");

class RefrendosBusiness extends BaseBusiness {
    constructor({RefrendosRepository}) {
        super(RefrendosRepository, Refrendos);
    }
}

module.exports = RefrendosBusiness;