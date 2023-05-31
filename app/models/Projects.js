const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Projects extends Model {}

Projects.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(1234),
      allowNull: false,
    },
    user_id : {
      type: DataTypes.UUID,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    date_published: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'projects',
  }
);

module.exports = Projects;