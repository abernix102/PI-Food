const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Diet', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    timestamps: false // Evita la creación automática de las columnas de marca de tiempo
  });
};
