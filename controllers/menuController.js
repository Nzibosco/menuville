const db = require("../models");

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
  findById: (req, res) => {
    db.Menu
      .findById(req.params.menuId)
      .then(menu => {
        res.send(menu);
      })
  },

  // Update a menu
  update: (req, res) => {
    const id = req.params.menuId;
    db.Menu
      .update({ name: req.body.name, detail: req.body.detail, price: req.body.price, image: req.body.image},
        { where: { id: req.params.menuId } }
      )
      .then(() => {
        res.status(200).send("updated successfully a menu with id = " + id);
      });
  },

  // Delete a menu by Id
  delete: (req, res) => {
    const id = req.params.menuId;
    db.Menu
      .destroy({
        where: { id: id }
      })
      .then(() => {
        res.status(200).send('deleted successfully a menu with id = ' + id);
      });
  }
};
