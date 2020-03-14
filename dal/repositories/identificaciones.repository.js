const BaseRepository = require("./base.repository");

class IdentificacionesRepository extends BaseRepository {
    constructor({db}) {
        super(db, "Identificaciones");
    }
}

module.exports = IdentificacionesRepository;