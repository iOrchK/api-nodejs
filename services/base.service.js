class BaseService {
    constructor(EntityBusiness) {
        this._entityBusiness = EntityBusiness;
    }

    async get(id) {
        const item = await this._entityBusiness.get(id);
        return item;
    }

    async getAll() {
        const collection = await this._entityBusiness.getAll();
        return collection;
    }
    
    async create(item) {
        const createdItem = await this._entityBusiness.create(item);
        return createdItem;
    }

    async update(id, item) {
        const updatedItem = await this._entityBusiness.update(id, item);
        return updatedItem;
    }

    async delete(id) {
        return await this._entityBusiness.delete(id);
    }
}

module.exports = BaseService;