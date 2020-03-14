'use strict';
module.exports = (sequelize, DataTypes) => {
  const DatosGenerales = sequelize.define('DatosGenerales', {
    fecha: DataTypes.DATE,
    idcliente: DataTypes.INTEGER,
    cotitular: DataTypes.STRING,
    capital: DataTypes.INTEGER,
    tasa: DataTypes.STRING,
    interes: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    caracteristicas: DataTypes.STRING,
    anclaje: DataTypes.BOOLEAN,
    entregainmediata: DataTypes.BOOLEAN,
    validado: DataTypes.BOOLEAN,
    estado: DataTypes.STRING,
    observacion: DataTypes.STRING
  },{});
  DatosGenerales.associate = function(models) {
    DatosGenerales.belongsTo(models.Clientes, {
      foreignKey: 'idcliente',
      target_id: 'id'
    });
  };
  return DatosGenerales;
};