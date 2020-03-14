'use strict';
module.exports = (sequelize, DataTypes) => {
  const Identificaciones = sequelize.define('Identificaciones', {
    descripcion: DataTypes.STRING
  },{});
  Identificaciones.associate = function(models) {
    // Associations
  };
  return Identificaciones;
};