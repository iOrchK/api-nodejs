const Router = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");

module.exports = function({ClasificacionesRoutes, ClientesRoutes, DatosGeneralesRoutes, IdentificacionesRoutes, RefrendosRoutes, UsuariosRoutes}) {
    const router = Router();
    const apiRoute = Router();

    apiRoute
        .use(cors())
        .use(bodyParser.raw())
        .use(bodyParser.json())
        .use(bodyParser.urlencoded({extended: true}))
        .use(compression());

    apiRoute.use("/clasificaciones", ClasificacionesRoutes);
    apiRoute.use("/clientes", ClientesRoutes);
    apiRoute.use("/datosgenerales", DatosGeneralesRoutes);
    apiRoute.use("/identificaciones", IdentificacionesRoutes);
    apiRoute.use("/refrendos", RefrendosRoutes);
    apiRoute.use("/usuarios", UsuariosRoutes);
    router.use("/api", apiRoute);

    return router;
};