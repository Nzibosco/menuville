const db = require("../models");
const Sequelize = require("sequelize") // this was created but never used.  Redundant
//const Op = Sequelize.Op;

// Defining methods for the menuController
module.exports = {

  // Post a Menu item
  create: (req, res) => {
    // Save to MySQL database
    db.Menu
      .create({
        name: req.body.name,
        detail: req.body.detail,
        image: req.body.image,
        price: req.body.price
      })
      .then(menu => {
        // Send created menu to client
        res.send(menu);
      });
  },

  // FETCH all Menu items

  findAll: (req, res) => {
    db.Menu
      .findAll()
      .then(menus => {
        // Send all menu items to Client
        res.send(menus);
      });
  },

  // Find a menu by Id
  findOne: (req, res) => {
    db.Menu
      .findByPk(req.params.id)
      .then(menu => {
        res.send(menu);
      })
  },

  // Update a menu
  update: (req, res) => {
    const id = req.params.id;
    db.Menu
      .update({ name: req.body.name, detail: req.body.detail, price: req.body.price, image: req.body.image},
        { where: { id: id } }
      )
      .then(() => {
        res.status(200).send("updated successfully a menu with id = " + id);
      });
  },

  // Delete a menu by Id
  delete: (req, res) => {
    const id = req.params.id;
    db.Menu
      .destroy({
        where: { id: id }
      })
      .then(() => {
        res.status(200).send('deleted successfully a menu with id = ' + id);
      });
  }
};
