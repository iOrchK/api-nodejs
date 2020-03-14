const BaseRepository = require("./base.repository");

class ClientesRepository extends BaseRepository {
    constructor({db}) {
        super(db, "Clientes");
    }
}

module.exports = ClientesRepository;