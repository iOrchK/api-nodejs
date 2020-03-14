const Router = require("express");
// const UsuariosService = require("../../services/usuarios.service");

module.exports = function({UsuariosController, UsuariosService}) {
    const router = Router();

    router.get("/:id", UsuariosController.get.bind(UsuariosController));
    router.get("/", UsuariosController.getAll.bind(UsuariosController));
    router.post("/", UsuariosController.create.bind(UsuariosController));
    router.put("/:id", UsuariosController.update.bind(UsuariosController));
    router.delete("/:id", UsuariosController.delete.bind(UsuariosController));

    return router;
};