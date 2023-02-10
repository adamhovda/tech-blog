const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class comment extends Model {}


comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },

    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "user",
            key: "id"
        }
    },

    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "blogpost",
            key: "id"
        }
    },
    

  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = comment;