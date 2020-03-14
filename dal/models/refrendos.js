'use strict';
module.exports = (sequelize, DataTypes) => {
  const Refrendos = sequelize.define('Refrendos', {
    iddatosgenerales: DataTypes.INTEGER,
    fechavencimiento: DataTypes.DATE,
    fechapagado: DataTypes.DATE,
    interes: DataTypes.INTEGER,
    abonocapital: DataTypes.INTEGER,
    recargo: DataTypes.INTEGER,
    estado: DataTypes.STRING,
    observaciones: DataTypes.STRING
  },{});
  Refrendos.associate = function(models) {
    Refrendos.belongsTo(models.DatosGenerales, {
      foreignKey: 'iddatosgenerales',
      target_id: 'id'
    });
  };
  return Refrendos;
};