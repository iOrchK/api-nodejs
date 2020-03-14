'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clasificaciones = sequelize.define('Clasificaciones', {
    descripcion: DataTypes.STRING
  });
  Clasificaciones.associate = function(models) {
    // Associations
  };
  return Clasificaciones;
};