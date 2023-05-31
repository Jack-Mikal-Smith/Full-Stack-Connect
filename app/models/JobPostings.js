const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class JobPostings extends Model {}

JobPostings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    organization: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
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
    modelName: 'jobPostings',
  }
);

module.exports = JobPostings;