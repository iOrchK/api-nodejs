const BaseBusiness = require("./base.business");
const DatosGenerales = require("./models/datosgenerales");

class DatosGeneralesBusiness extends BaseBusiness {
    constructor({DatosGeneralesRepository}) {
        super(DatosGeneralesRepository, DatosGenerales);
    }
}

module.exports = DatosGeneralesBusiness;