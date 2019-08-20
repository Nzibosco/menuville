module.exports = function(sequelize, DataTypes) {
  const Menu = sequelize.define("Menu", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    // check AWS for saving images @ Amazon and then use AWS links to store the images in our local db
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

