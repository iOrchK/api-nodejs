const BaseRepository = require("./base.repository");

class UsuariosRepository extends BaseRepository {
    constructor({db}) {
        super(db, "Usuarios");
    }
}

module.exports = UsuariosRepository;