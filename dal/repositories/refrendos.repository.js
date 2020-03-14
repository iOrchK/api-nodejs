const BaseRepository = require("./base.repository");

class RefrendosRepository extends BaseRepository {
    constructor({db}) {
        super(db, "Refrendos");
    }
}

module.exports = RefrendosRepository;