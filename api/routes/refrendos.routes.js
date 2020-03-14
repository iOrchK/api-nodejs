const Router = require("express");

module.exports = function({RefrendosController}) {
    const router = Router();

    router.get("/:id", RefrendosController.get.bind(RefrendosController));
    router.get("/", RefrendosController.getAll.bind(RefrendosController));
    router.post("/", RefrendosController.create.bind(RefrendosController));
    router.put("/:id", RefrendosController.update.bind(RefrendosController));
    router.delete("/:id", RefrendosController.delete.bind(RefrendosController));

    return router;
};