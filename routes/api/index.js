const router = require("express").Router();
const menuRoutes = require("./menuRoutes");

// Menu routes
router.use("/menu", menuRoutes);

module.exports = router;
