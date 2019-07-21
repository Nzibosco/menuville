module.exports = function(sequelize, DataTypes) {
  const Menu = sequelize.define("Menu", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 200]
      }
    },
    detail: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
      // validate: {
      //   len: [1, 10]
      // }
    }
  });

  return Menu;
};

