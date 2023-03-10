const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Location model
class blogPost extends Model {}


blogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
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
    

  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogpost'
  }
);

module.exports = blogPost;