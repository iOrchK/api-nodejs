'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuarios = sequelize.define('Usuarios', {
    nombre: DataTypes.STRING,
    usuario: DataTypes.STRING,
    claveacceso: DataTypes.STRING,
    foto: DataTypes.STRING,
    token: DataTypes.STRING,
    activo: DataTypes.BOOLEAN,
    eliminado: DataTypes.BOOLEAN
  }, {});
  Usuarios.associate = function(models) {
    // Associations
  };
  return Usuarios;
};