class BaseRepository {
    constructor(db, entity) {
        this._db = db;
        this.entity = entity;
        delete this.entity.createdAt;
        delete this.entity.updatedAt;
    }

    get(id) {
        return this._db[this.entity].findOne({ where: { id } });
    }

    getAll() {
        return this._db[this.entity].findAll();
    }

    create(user) {
        return this._db[this.entity].create(user);
    }

    update(id, user) {
        return this._db[this.entity].update(user, { where: { id } });
    }

    delete(id) {
        return this._db[this.entity].destroy({ where: { id } });
    }
}

module.exports = BaseRepository;