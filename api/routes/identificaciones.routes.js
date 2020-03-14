const Router = require("express");

module.exports = function({IdentificacionesController}) {
    const router = Router();

    router.get("/:id", IdentificacionesController.get.bind(IdentificacionesController));
    router.get("/", IdentificacionesController.getAll.bind(IdentificacionesController));
    router.post("/", IdentificacionesController.create.bind(IdentificacionesController));
    router.put("/:id", IdentificacionesController.update.bind(IdentificacionesController));
    router.delete("/:id", IdentificacionesController.delete.bind(IdentificacionesController));

    return router;
};