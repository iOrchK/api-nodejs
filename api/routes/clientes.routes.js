const Router = require("express");

module.exports = function({ClientesController}) {
    const router = Router();

    router.get("/:id", ClientesController.get.bind(ClientesController));
    router.get("/", ClientesController.getAll.bind(ClientesController));
    router.post("/", ClientesController.create.bind(ClientesController));
    router.put("/:id", ClientesController.update.bind(ClientesController));
    router.delete("/:id", ClientesController.delete.bind(ClientesController));

    return router;
};