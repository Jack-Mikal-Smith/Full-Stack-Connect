const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class TextPosts extends Model {}

TextPosts.init(
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
    content: {
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
    modelName: 'textPosts',
  }
);

module.exports = TextPosts;