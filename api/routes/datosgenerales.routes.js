const Router = require("express");

module.exports = function({DatosGeneralesController}) {
    const router = Router();

    router.get("/:id", DatosGeneralesController.get.bind(DatosGeneralesController));
    router.get("/", DatosGeneralesController.getAll.bind(DatosGeneralesController));
    router.post("/", DatosGeneralesController.create.bind(DatosGeneralesController));
    router.put("/:id", DatosGeneralesController.update.bind(DatosGeneralesController));
    router.delete("/:id", DatosGeneralesController.delete.bind(DatosGeneralesController));

    return router;
};