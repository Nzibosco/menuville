import axios from "axios";

export default {
  // Gets all menu
  getMenu: () => {
    return axios.get("/api/menu");
  },
  // Gets the menu with the given id
  getMenuById: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the menu with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a menu to the database
  saveMenu: function(menuData) {
    return axios.post("/api/menu", menuData);
  }
};
