const express = require("express");
const Router = express.Router();
const {
  getRestos,
  createResto,
  getOneResto,
  updateResto,
  deleteOneResto,
} = require("../controllers/Resto");

Router.get("/", getRestos);
Router.post("/", createResto);
Router.get("/:id", getOneResto);
Router.put("/:id", updateResto);
Router.delete("/:id", deleteOneResto);

module.exports = Router;
