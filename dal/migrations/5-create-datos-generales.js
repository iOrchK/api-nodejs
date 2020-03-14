'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('DatosGenerales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      idcliente: {
        type: Sequelize.INTEGER,
        onDelete: "NO ACTION",
        references: {
          model: "Clientes",
          key: "id"
        }
      },
      cotitular: {
        type: Sequelize.STRING
      },
      capital: {
        type: Sequelize.INTEGER
      },
      tasa: {
        type: Sequelize.STRING
      },
      interes: {
        type: Sequelize.INTEGER
      },
      descripcion: {
        type: Sequelize.STRING
      },
      caracteristicas: {
        type: Sequelize.STRING
      },
      anclaje: {
        type: Sequelize.BOOLEAN
      },
      entregainmediata: {
        type: Sequelize.BOOLEAN
      },
      validado: {
        type: Sequelize.BOOLEAN
      },
      estado: {
        type: Sequelize.STRING
      },
      observacion: {
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
    return queryInterface.dropTable('DatosGenerales');
  }
};