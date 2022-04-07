const { RestoModel } = require("../models/Resto");

//gets all the Restaurants
const getRestos = async (req, res) => {
  try {
    const resto = await RestoModel.find({});
    if (!resto) {
      res.status(404);
      throw new Error("nothing found");
    }
    res.send(resto);
  } catch (error) {}
};

//Insert or create one restaurant with the name,address and foods avilable as properties
const createResto = async (req, res) => {
  const { name, address, foods } = req.body;
  try {
    const resto = await RestoModel.create({
      name: name,
      address: address,
      foods: foods,
    });
    if (!resto) {
      throw new Error("Error while creating resto");
    }
    res.send(resto);
  } catch (error) {}
};

//get one restaurant using id
const getOneResto = async (req, res) => {
  try {
    const resto = await RestoModel.findOne({ id: req.params.id });
    if (!resto) {
      throw new Error("Error resto doesn't exists");
    }
    res.send(resto);
  } catch (error) {
    res.send(error);
  }
};

//update one restaurant related infos
const updateResto = async (req, res) => {
  try {
    const updatedresto = await RestoModel.findOneAndUpdate(
      { id: req.params.id },
      req.body
    );
    if (!updatedresto) {
      throw new Error("Error");
    }
    res.send(updatedresto);
  } catch (error) {
    res.send(error);
  }
};

//delete one restaurant via it's id
const deleteOneResto = async (req, res) => {
  try {
    const deletedResto = await RestoModel.findOneAndRemove({
      id: req.params.id,
    });
    if (!deletedResto) {
      throw new Error("Error");
    }
    res.send(deletedResto);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getRestos,
  createResto,
  getOneResto,
  updateResto,
  deleteOneResto,
};
