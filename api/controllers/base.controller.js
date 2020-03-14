const mapper = require("automapper-js");

class BaseController {
    constructor(EntityService, entityDtoToMap) {
        this._entityService = EntityService;
        this.entityDtoToMap = entityDtoToMap;
    }

    async get(req, res) {
        const id = req.params.id;

        try {
            let item = await this._entityService.get(id);
            item = mapper(this.entityDtoToMap, item);
            if (!item) {
                return res.status(404).send();
            }
            return res.send({
                source: item
            });
        } catch(e) {
            return res.status(500).send({
                error: e.message,
                detail: e.stack
            });
        }
    }

    async getAll(req, res) {
        let collection = await this._entityService.getAll();
        collection = collection.map(item => mapper(this.entityDtoToMap, item));
        return res.send({
            source: collection
        });
    }

    async create(req, res) {
        let source = req.body.source;
        source = JSON.parse(source);

        const createItem = await this._entityService.create(source);
        const item = mapper(this.entityDtoToMap, createItem);
        return res.status(201).send({
            source: item
        });
    }

    async update(req, res) {
        let source =  req.body.source;
        source = JSON.parse(source);
        const id = req.params.id;
        
        await this._entityService.update(id, source);
        return res.status(204).send({});
    }
    
    async delete(req, res) {
        const id = req.params.id;
        
        await this._entityService.delete(id);
        return res.status(204).send({});
    }
}

module.exports = BaseController;