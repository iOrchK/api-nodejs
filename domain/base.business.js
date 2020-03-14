const mapper = require("automapper-js");

class BaseBusiness {
    constructor(EntityRepository, modelToMap) {
        this._entityRepository = EntityRepository;
        this.modelToMap = modelToMap;
    }

    async get(id) {
        const item = await this._entityRepository.get(id);
        if (!item) return null;
        return mapper(this.modelToMap, item.toJSON());
    }

    async getAll() {
        let collection = await this._entityRepository.getAll();
        return collection.map(item => mapper(this.modelToMap, item.toJSON()));
    }

    async create(item) {
        item = mapper(this.modelToMap, item);
        const createdItem = await this._entityRepository.create(item);
        return mapper(this.modelToMap, createdItem.toJSON());
    }

    async update(id, item) {
        item.id = id;
        item = mapper(this.modelToMap, item);
        const updatedItem = await this._entityRepository.update(id, item);
        return mapper(this.modelToMap, updatedItem);
    }

    async delete(id) {
        return await this._entityRepository.delete(id);
    }
}

module.exports = BaseBusiness;