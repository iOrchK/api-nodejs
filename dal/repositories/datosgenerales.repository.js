const BaseRepository = require("./base.repository");

class DatosGeneralesRepository extends BaseRepository {
    constructor({db}) {
        super(db, "DatosGenerales");
    }
}

module.exports = DatosGeneralesRepository;