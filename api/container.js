const { asClass, createContainer, asFunction, asValue } = require("awilix");

// App Start
const StartUp = require("./startup");
const Server = require("./server");
const config = require("../config/environments");

// Routes
const Routes = require("./routes");
const ClasificacionesRoutes = require("./routes/clasificaciones.routes");
const ClientesRoutes = require("./routes/clientes.routes");
const DatosGeneralesRoutes = require("./routes/datosgenerales.routes");
const IdentificacionesRoutes = require("./routes/identificaciones.routes");
const RefrendosRoutes = require("./routes/refrendos.routes");
const UsuariosRoutes = require("./routes/usuarios.routes");

// Controllers
const ClasificacionesController = require("./controllers/clasificaciones.controller");
const ClientesController = require("./controllers/clientes.controller");
const DatosGeneralesController = require("./controllers/datosgenerales.controller");
const IdentificacionesController = require("./controllers/identificaciones.controller");
const RefrendosController = require("./controllers/refrendos.controller");
const UsuariosController = require("./controllers/usuarios.controller");

// Business
const ClasificacionesBusiness = require("../domain/clasificaciones.business");
const ClientesBusiness = require("../domain/clientes.business");
const DatosGeneralesBusiness = require("../domain/datosgenerales.business");
const IdentificacionesBusiness = require("../domain/identificaciones.business");
const RefrendosBusiness = require("../domain/refrendos.business");
const UsuariosBusiness = require("../domain/usuarios.business");

// Services
const ClasificacionesService = require("../services/clasificaciones.service");
const ClientesService = require("../services/clientes.service");
const DatosGeneralesService = require("../services/datosgenerales.service");
const IdentificacionesService = require("../services/identificaciones.service");
const RefrendosService = require("../services/refrendos.service");
const UsuariosService = require("../services/usuarios.service");

// Repositories
const ClasificacionesRepository = require("../dal/repositories/clasificaciones.repository");
const ClientesRepository = require("../dal/repositories/clientes.repository");
const DatosGeneralesRepository = require("../dal/repositories/datosgenerales.repository");
const IdentificacionesRepository = require("../dal/repositories/identificaciones.repository");
const RefrendosRepository = require("../dal/repositories/refrendos.repository");
const UsuariosRepository = require("../dal/repositories/usuarios.repository");

// Data Base
const db = require("../dal/models");

const container = createContainer();

container.register({
    // App Start
    app: asClass(StartUp).singleton(),
    router: asFunction(Routes).singleton(),
    server: asClass(Server).singleton(),
})
.register({
    // API Layer
    ClasificacionesController: asClass(ClasificacionesController).singleton(),
    ClasificacionesRoutes: asFunction(ClasificacionesRoutes).singleton(),
    ClientesController: asClass(ClientesController).singleton(),
    ClientesRoutes: asFunction(ClientesRoutes).singleton(),
    DatosGeneralesController: asClass(DatosGeneralesController).singleton(),
    DatosGeneralesRoutes: asFunction(DatosGeneralesRoutes).singleton(),
    IdentificacionesController: asClass(IdentificacionesController).singleton(),
    IdentificacionesRoutes: asFunction(IdentificacionesRoutes).singleton(),
    RefrendosController: asClass(RefrendosController).singleton(),
    RefrendosRoutes: asFunction(RefrendosRoutes).singleton(),
    UsuariosController: asClass(UsuariosController).singleton(),
    UsuariosRoutes: asFunction(UsuariosRoutes).singleton()
})
.register({
    // Config Layer
    config: asValue(config)
})
.register({
    // Services Layer
    ClasificacionesService: asClass(ClasificacionesService).singleton(),
    ClientesService: asClass(ClientesService).singleton(),
    DatosGeneralesService: asClass(DatosGeneralesService).singleton(),
    IdentificacionesService: asClass(IdentificacionesService).singleton(),
    RefrendosService: asClass(RefrendosService).singleton(),
    UsuariosService: asClass(UsuariosService).singleton()
})
.register({
    // Domain Layer
    ClasificacionesBusiness: asClass(ClasificacionesBusiness).singleton(),
    ClientesBusiness: asClass(ClientesBusiness).singleton(),
    DatosGeneralesBusiness: asClass(DatosGeneralesBusiness).singleton(),
    IdentificacionesBusiness: asClass(IdentificacionesBusiness).singleton(),
    RefrendosBusiness: asClass(RefrendosBusiness).singleton(),
    UsuariosBusiness: asClass(UsuariosBusiness).singleton()
})
.register({
    // Repositories Layer
    ClasificacionesRepository: asClass(ClasificacionesRepository).singleton(),
    ClientesRepository: asClass(ClientesRepository).singleton(),
    DatosGeneralesRepository: asClass(DatosGeneralesRepository).singleton(),
    IdentificacionesRepository: asClass(IdentificacionesRepository).singleton(),
    RefrendosRepository: asClass(RefrendosRepository).singleton(),
    UsuariosRepository: asClass(UsuariosRepository).singleton()
})
.register({
    // Data Access Layer
    db: asValue(db)
});

module.exports = container;
