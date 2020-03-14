'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Clientes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numerocliente: {
        type: Sequelize.STRING
      },
      fechacreacion: {
        type: Sequelize.DATE
      },
      nombre: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      domicilio: {
        type: Sequelize.STRING
      },
      correo: {
        type: Sequelize.STRING
      },
      ididentificacion: {
        type: Sequelize.INTEGER,
        onDelete: "NO ACTION",
        references: {
          model: "Identificaciones",
          key: "id"
        }
      },
      claveidentificacion: {
        type: Sequelize.STRING
      },
      cotitular: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      idclasificacion: {
        type: Sequelize.INTEGER,
        onDelete: "NO ACTION",
        references: {
          model: "Clasificaciones",
          key: "id"
        }
      },
      activo: {
        type: Sequelize.BOOLEAN
      },
      eliminado: {
        type: Sequelize.BOOLEAN
      },
      idcreadopor: {
        type: Sequelize.INTEGER,
        onDelete: "NO ACTION",
        references: {
          model: "Usuarios",
          key: "id"
        }
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
    return queryInterface.dropTable('Clientes');
  }
};