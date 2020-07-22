module.exports = function(sequelize, DataTypes) {
    var paintings = sequelize.define("paintings", {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      medium: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      year: {
        type: DataTypes.JSON,
        allowNull: false
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true
      },
      uploadedBy: {
        type: DataTypes.STRING,
        allowNull: false,
        default: "Unknown"
      }
    });
    return paintings;  
  };