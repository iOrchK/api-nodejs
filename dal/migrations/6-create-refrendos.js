'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Refrendos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      iddatosgenerales: {
        type: Sequelize.INTEGER,
        onDelete: "NO ACTION",
        references: {
          model: "DatosGenerales",
          key: "id"
        }
      },
      fechavencimiento: {
        type: Sequelize.DATE
      },
      fechapagado: {
        type: Sequelize.DATE
      },
      interes: {
        type: Sequelize.INTEGER
      },
      abonocapital: {
        type: Sequelize.INTEGER
      },
      recargo: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Refrendos');
  }
};