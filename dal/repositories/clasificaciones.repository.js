const BaseRepository = require("./base.repository");

class ClasificacionesRepository extends BaseRepository {
    constructor({db}) {
        super(db, "Clasificaciones");
    }
}

module.exports = ClasificacionesRepository;