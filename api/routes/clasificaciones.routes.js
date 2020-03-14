const Router = require("express");

module.exports = function({ClasificacionesController}) {
    const router = Router();

    router.get("/:id", ClasificacionesController.get.bind(ClasificacionesController));
    router.get("/", ClasificacionesController.getAll.bind(ClasificacionesController));
    router.post("/", ClasificacionesController.create.bind(ClasificacionesController));
    router.put("/:id", ClasificacionesController.update.bind(ClasificacionesController));
    router.delete("/:id", ClasificacionesController.delete.bind(ClasificacionesController));

    return router;
};