import axios from "axios";

export default {
  // Gets all books
  getMenu: function() {
    return axios.get("/api/menu");
  },
  // Gets the book with the given id
  getMenu: function(id) {
    return axios.get("/api/menu/" + id);
  },
  // Deletes the book with the given id
  deleteMenu: function(id) {
    return axios.delete("/api/menu/" + id);
  },
  // Saves a book to the database
  saveMenu: function(menuData) {
    return axios.post("/api/menu", menuData);
  }
};
