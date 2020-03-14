const container = require("./api/container");

const application = container.resolve("app");
const db = container.resolve("db");

console.log("Starting Application ...");

application
    .start()
    .then(async () => {
        await db.sequelize
            .sync()
            .then(() => {
                console.log('Data base is running');
            }).catch(err => {
                console.error(err, "Something went wrong with the Database!");
            });
    })
    .catch(err => {
        console.error(err);
        process.exit();
    });
