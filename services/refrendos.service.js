const BaseService = require("./base.service");

class RefrendosService extends BaseService {
    constructor({ RefrendosBusiness }) {
        super(RefrendosBusiness);
    }
}

module.exports = RefrendosService;