const { DataTypes, sequelize } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('typePokemon', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
      },
    })
}
