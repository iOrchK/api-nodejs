'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {
    numerocliente: DataTypes.STRING,
    fechacreacion: DataTypes.DATE,
    nombre: DataTypes.STRING,
    telefono: DataTypes.STRING,
    domicilio: DataTypes.STRING,
    correo: DataTypes.STRING,
    ididentificacion: DataTypes.INTEGER,
    claveidentificacion: DataTypes.STRING,
    cotitular: DataTypes.STRING,
    observaciones: DataTypes.STRING,
    idclasificacion: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
    eliminado: DataTypes.BOOLEAN,
    idcreadopor: DataTypes.INTEGER
  },{});
  Clientes.associate = function(models) {
    Clientes.belongsTo(models.Clasificaciones, {
      foreignKey: 'idclasificacion',
      target_id: 'id'
    });
    Clientes.belongsTo(models.Identificaciones, {
      foreignKey: 'ididentificacion',
      target_id: 'id'
    });
    Clientes.belongsTo(models.Usuarios, {
      foreignKey: 'idcreadopor',
      target_id: 'id'
    });
  };
  return Clientes;
};